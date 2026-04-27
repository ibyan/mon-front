import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { Assignment, MATIERES } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog';

@Component({
    selector: 'app-assignments',
    standalone: true,
    imports: [
        CommonModule, FormsModule, RouterLink,
        MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule,
        MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule,
        MatTooltipModule, MatProgressSpinnerModule, MatDialogModule,
        MatSnackBarModule, MatBadgeModule, MatCardModule
    ],
    templateUrl: './assignments.html',
    styleUrl: './assignments.css'
})
export class Assignments implements OnInit {
    private assignmentsService = inject(AssignmentsService);
    private authService = inject(AuthService);
    private router = inject(Router);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);

    assignments = signal<Assignment[]>([]);
    loading = signal(false);

    page = 1;
    limit = 10;
    totalDocs = 0;
    totalPages = 0;

    search = '';
    filtreRendu = '';
    filtreMatiere = '';

    matieres = MATIERES;

    displayedColumns = ['matiere', 'nom', 'auteur', 'dateDeRendu', 'note', 'rendu', 'actions'];

    isAdmin = computed(() => this.authService.isAdmin());
    isLoggedIn = this.authService.isAuthenticated;

    ngOnInit() {
        this.getAssignments();
    }

    getAssignments() {
        this.loading.set(true);
        this.assignmentsService.getAssignmentsPagine(this.page, this.limit, this.search, this.filtreRendu, this.filtreMatiere)
            .subscribe({
                next: (data) => {
                    this.totalDocs = data.totalDocs;
                    this.totalPages = data.totalPages;
                    this.assignments.set(data.docs);
                    this.loading.set(false);
                },
                error: () => {
                    this.loading.set(false);
                    this.snackBar.open('Erreur lors du chargement des assignments.', 'Fermer', { duration: 4000 });
                }
            });
    }

    pageChange(event: PageEvent) {
        this.limit = event.pageSize;
        this.page = event.pageIndex + 1;
        this.getAssignments();
    }

    onSearch() {
        this.page = 1;
        this.getAssignments();
    }

    resetFiltres() {
        this.search = '';
        this.filtreRendu = '';
        this.filtreMatiere = '';
        this.page = 1;
        this.getAssignments();
    }

    onRowClick(row: Assignment) {
        this.router.navigate(['/assignments', row._id]);
    }

    onEdit(event: Event, row: Assignment) {
        event.stopPropagation();
        this.router.navigate(['/assignments', row._id, 'edit']);
    }

    onDelete(event: Event, row: Assignment) {
        event.stopPropagation();
        const ref = this.dialog.open(ConfirmDialogComponent, {
            data: { message: `Supprimer l'assignment "${row.nom}" ?` }
        });
        ref.afterClosed().subscribe(confirmed => {
            if (confirmed) {
                this.assignmentsService.deleteAssignment(row).subscribe({
                    next: () => {
                        this.snackBar.open(`"${row.nom}" supprimé !`, 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                        this.getAssignments();
                    },
                    error: (err) => {
                        this.snackBar.open(err.error?.message || 'Erreur lors de la suppression.', 'Fermer', { duration: 4000, panelClass: 'snack-error' });
                    }
                });
            }
        });
    }

    getNoteColor(note: number | null): string {
        if (note === null) return '#999';
        if (note >= 16) return '#4caf50';
        if (note >= 12) return '#2196f3';
        if (note >= 10) return '#ff9800';
        return '#f44336';
    }
}
