import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../shared/auth.service';
import { APP_ENV } from '../../shared/app-env';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule, FormsModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule
    ],
    template: `
    <div class="register-container">
      <mat-card class="register-card">
        <mat-card-header>
          <div class="logo-area">
            <mat-icon class="logo-icon">person_add</mat-icon>
            <mat-card-title>Inscription</mat-card-title>
            <mat-card-subtitle>Créer un compte ESATIC</mat-card-subtitle>
          </div>
        </mat-card-header>

        <mat-card-content>
          <form (ngSubmit)="onRegister()" #regForm="ngForm">
            <div class="row-2">
              <mat-form-field appearance="outline">
                <mat-label>Prénom</mat-label>
                <input matInput name="prenom" [(ngModel)]="prenom" required/>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Nom</mat-label>
                <input matInput name="nom" [(ngModel)]="nom" required/>
              </mat-form-field>
            </div>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Nom d'utilisateur</mat-label>
              <input matInput name="username" [(ngModel)]="username" required/>
              <mat-icon matPrefix>person</mat-icon>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" name="email" [(ngModel)]="email" required/>
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Mot de passe</mat-label>
              <input matInput [type]="hidePassword() ? 'password' : 'text'"
                     name="password" [(ngModel)]="password" required minlength="6"/>
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button" (click)="hidePassword.set(!hidePassword())">
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </mat-form-field>

            @if (errorMsg()) {
              <div class="error-msg"><mat-icon>error</mat-icon> {{ errorMsg() }}</div>
            }

            <button mat-raised-button color="primary" type="submit"
                    class="full-width reg-btn" [disabled]="loading() || !regForm.valid">
              @if (loading()) { <mat-spinner diameter="20"></mat-spinner> }
              @else { Créer mon compte }
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions>
          <p class="login-link">Déjà un compte ? <a routerLink="/login">Se connecter</a></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
    styles: [`
    .register-container {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 16px;
    }
    .register-card { width: 100%; max-width: 460px; border-radius: 16px !important; box-shadow: 0 20px 60px rgba(0,0,0,0.3) !important; }
    .logo-area { width: 100%; text-align: center; padding: 16px 0; }
    .logo-icon { font-size: 56px; width: 56px; height: 56px; color: #11998e; }
    mat-card-title { font-size: 24px !important; margin-top: 8px; }
    mat-card-content { padding: 16px 24px; }
    .full-width { width: 100%; margin-bottom: 8px; }
    .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px; }
    .row-2 mat-form-field { width: 100%; }
    .reg-btn { margin-top: 8px; padding: 12px; font-size: 16px; }
    .error-msg { color: #f44336; display: flex; align-items: center; gap: 6px; margin-bottom: 12px; font-size: 14px; }
    mat-card-actions { text-align: center; padding: 8px 16px 16px; }
    .login-link a { color: #11998e; font-weight: 600; }
  `]
})
export class Register {
    prenom = ''; nom = ''; username = ''; email = ''; password = '';
    hidePassword = signal(true);
    loading = signal(false);
    errorMsg = signal('');

    constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

    onRegister() {
        this.loading.set(true);
        this.errorMsg.set('');
        this.authService.register({ username: this.username, password: this.password, email: this.email, nom: this.nom, prenom: this.prenom }, APP_ENV.backendBaseUrl)
            .subscribe({
                next: () => {
                    this.loading.set(false);
                    this.snackBar.open('Compte créé avec succès !', 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    this.loading.set(false);
                    this.errorMsg.set(err.error?.message || 'Erreur lors de l\'inscription.');
                }
            });
    }
}
