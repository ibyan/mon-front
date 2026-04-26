import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from '../../shared/auth.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog';

@Component({
    selector: 'app-assignment-detail',
    standalone: true,
    imports: [
        CommonModule, RouterLink, MatCardModule, MatButtonModule,
        MatIconModule, MatChipsModule, MatDividerModule,
        MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatTooltipModule
    ],
    templateUrl: './assignment-detail.html',
    styleUrl: './assignment-detail.css'
})
export class AssignmentDetail implements OnInit {
    private assignmentsService = inject(AssignmentsService);
    private authService = inject(AuthService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);

    assignment = signal<Assignment | null>(null);
    loading = signal(true);

    isLoggedIn = this.authService.isAuthenticated;
    isAdmin = computed(() => this.authService.isAdmin());

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.assignmentsService.getAssignment(id).subscribe({
            next: a => { this.assignment.set(a); this.loading.set(false); },
            error: () => {
                this.loading.set(false);
                this.snackBar.open('Assignment introuvable.', 'Fermer', { duration: 3000 });
                this.router.navigate(['/home']);
            }
        });
    }

    toggleRendu() {
        const a = this.assignment();
        if (!a) return;
        if (!a.rendu && (a.note === null || a.note === undefined)) {
            this.snackBar.open('Impossible de marquer "rendu" sans note !', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
            return;
        }
        a.rendu = !a.rendu;
        this.assignmentsService.updateAssignment(a).subscribe({
            next: () => {
                this.snackBar.open(`Statut mis à jour : ${a.rendu ? 'Rendu ✅' : 'Non rendu ⏳'}`, 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                this.assignment.set({ ...a });
            },
            error: (err) => this.snackBar.open(err.error?.message || 'Erreur.', 'Fermer', { duration: 4000 })
        });
    }

    onDelete() {
        const a = this.assignment();
        if (!a) return;
        const ref = this.dialog.open(ConfirmDialogComponent, {
            data: { message: `Supprimer l'assignment "${a.nom}" ?` }
        });
        ref.afterClosed().subscribe(confirmed => {
            if (confirmed) {
                this.assignmentsService.deleteAssignment(a).subscribe({
                    next: () => {
                        this.snackBar.open('Assignment supprimé !', 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                        this.router.navigate(['/home']);
                    },
                    error: (err) => this.snackBar.open(err.error?.message || 'Erreur suppression.', 'Fermer', { duration: 4000 })
                });
            }
        });
    }

    getNoteColor(note: number | null): string {
        if (note === null || note === undefined) return '#999';
        if (note >= 16) return '#4caf50';
        if (note >= 12) return '#2196f3';
        if (note >= 10) return '#ff9800';
        return '#f44336';
    }

    getNoteLabel(note: number | null): string {
        if (note === null || note === undefined) return 'Non noté';
        if (note >= 16) return 'Excellent';
        if (note >= 14) return 'Très bien';
        if (note >= 12) return 'Bien';
        if (note >= 10) return 'Passable';
        return 'Insuffisant';
    }
}
