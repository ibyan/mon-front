import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-confirm-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatIconModule],
    template: `
    <div class="dialog-container">
      <div class="dialog-icon">
        <mat-icon color="warn">warning</mat-icon>
      </div>
      <h2 mat-dialog-title>Confirmation</h2>
      <mat-dialog-content>
        <p>{{ data.message }}</p>
        <p class="warning-text">Cette action est irréversible.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-stroked-button (click)="dialogRef.close(false)">Annuler</button>
        <button mat-raised-button color="warn" (click)="dialogRef.close(true)">
          <mat-icon>delete</mat-icon> Supprimer
        </button>
      </mat-dialog-actions>
    </div>
  `,
    styles: [`
    .dialog-container { padding: 8px; min-width: 300px; }
    .dialog-icon { text-align: center; }
    .dialog-icon mat-icon { font-size: 48px; width: 48px; height: 48px; }
    h2 { text-align: center; margin: 8px 0; }
    p { margin: 4px 0; }
    .warning-text { color: #f44336; font-size: 13px; font-style: italic; }
    mat-dialog-actions { padding: 16px 0 0; gap: 8px; }
  `]
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { message: string }
    ) {}
}
