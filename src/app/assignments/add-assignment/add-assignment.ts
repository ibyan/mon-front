import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { Assignment, MATIERES } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
    selector: 'app-add-assignment',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [
        CommonModule, FormsModule, RouterLink,
        MatStepperModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatSelectModule,
        MatDatepickerModule, MatSlideToggleModule, MatSnackBarModule, MatCardModule
    ],
    templateUrl: './add-assignment.html',
    styleUrl: './add-assignment.css'
})
export class AddAssignment {
    matieres = MATIERES;

    // Step 1 : Infos devoir
    nom = signal('');
    dateDeRendu = signal(new Date());
    matiereSelectionnee = signal('');

    // Step 2 : Infos auteur
    auteur = signal('');
    photoAuteur = signal('');

    // Step 3 : Note et remarques
    note = signal<number | null>(null);
    remarques = signal('');
    rendu = signal(false);

    loading = signal(false);

    get selectedMatiere() {
        return this.matieres.find(m => m.nom === this.matiereSelectionnee()) || null;
    }

    constructor(private assignmentsService: AssignmentsService, private router: Router, private snackBar: MatSnackBar) {}

    onMatiereChange(nomMatiere: string) {
        this.matiereSelectionnee.set(nomMatiere);
    }

    onSubmit() {
        if (this.rendu() && (this.note() === null || this.note() === undefined)) {
            this.snackBar.open('Impossible de marquer "rendu" sans note !', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
            return;
        }

        const sm = this.selectedMatiere;
        const a = new Assignment();
        a.nom = this.nom();
        a.dateDeRendu = this.dateDeRendu();
        a.auteur = this.auteur();
        a.photoAuteur = this.photoAuteur() || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`;
        a.matiere = this.matiereSelectionnee();
        a.imageMatiere = sm ? sm.image : '';
        a.professorName = sm ? sm.prof : '';
        a.photoProf = sm ? sm.photoProf : '';
        a.note = this.note();
        a.remarques = this.remarques();
        a.rendu = this.rendu();

        this.loading.set(true);
        this.assignmentsService.addAssignment(a).subscribe({
            next: () => {
                this.loading.set(false);
                this.snackBar.open('Assignment ajouté avec succès ! 🎉', 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                this.router.navigate(['/home']);
            },
            error: (err) => {
                this.loading.set(false);
                this.snackBar.open(err.error?.message || 'Erreur lors de l\'ajout.', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
            }
        });
    }
}
