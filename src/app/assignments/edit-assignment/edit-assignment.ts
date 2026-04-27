import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { Assignment, MATIERES } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
    selector: 'app-edit-assignment',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [
        CommonModule, FormsModule, RouterLink,
        MatFormFieldModule, MatInputModule, MatButtonModule,
        MatIconModule, MatSelectModule, MatDatepickerModule,
        MatSlideToggleModule, MatSnackBarModule, MatProgressSpinnerModule, MatCardModule
    ],
    templateUrl: './edit-assignment.html',
    styleUrl: './edit-assignment.css'
})
export class EditAssignment implements OnInit {
    assignment = signal<Assignment | null>(null);
    loading = signal(true);
    saving = signal(false);
    matieres = MATIERES;

    nom = signal('');
    dateDeRendu = signal(new Date());
    auteur = signal('');
    photoAuteur = signal('');
    matiere = signal('');
    note = signal<number | null>(null);
    remarques = signal('');
    rendu = signal(false);

    get selectedMatiere() {
        return this.matieres.find(m => m.nom === this.matiere()) || null;
    }

    constructor(
        private assignmentsService: AssignmentsService,
        public router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.assignmentsService.getAssignment(id).subscribe({
            next: (a) => {
                this.assignment.set(a);
                this.nom.set(a.nom);
                this.dateDeRendu.set(new Date(a.dateDeRendu));
                this.auteur.set(a.auteur || '');
                this.photoAuteur.set(a.photoAuteur || '');
                this.matiere.set(a.matiere || '');
                this.note.set(a.note ?? null);
                this.remarques.set(a.remarques || '');
                this.rendu.set(a.rendu || false);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.snackBar.open('Impossible de charger l\'assignment.', 'Fermer', { duration: 3000 });
                this.router.navigate(['/home']);
            }
        });
    }

    onMatiereChange(nomMatiere: string) {
        this.matiere.set(nomMatiere);
    }

    onSave() {
        if (this.rendu() && (this.note() === null || this.note() === undefined)) {
            this.snackBar.open('Impossible de marquer "rendu" sans note !', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
            return;
        }

        const a = this.assignment();
        if (!a) return;

        const sm = this.selectedMatiere;
        const updated: Assignment = {
            ...a,
            nom: this.nom(),
            dateDeRendu: this.dateDeRendu(),
            auteur: this.auteur(),
            photoAuteur: this.photoAuteur(),
            matiere: this.matiere(),
            imageMatiere: sm ? sm.image : a.imageMatiere,
            professorName: sm ? sm.prof : a.professorName,
            photoProf: sm ? sm.photoProf : a.photoProf,
            note: this.note(),
            remarques: this.remarques(),
            rendu: this.rendu()
        };

        this.saving.set(true);
        this.assignmentsService.updateAssignment(updated).subscribe({
            next: () => {
                this.saving.set(false);
                this.snackBar.open('Assignment mis à jour ! ✅', 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                this.router.navigate(['/assignments', a._id]);
            },
            error: (err) => {
                this.saving.set(false);
                this.snackBar.open(err.error?.message || 'Erreur lors de la mise à jour.', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
            }
        });
    }
}
