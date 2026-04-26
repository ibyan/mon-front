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
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule, FormsModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule
    ],
    template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <div class="logo-area">
            <mat-icon class="logo-icon">school</mat-icon>
            <mat-card-title>Connexion</mat-card-title>
            <mat-card-subtitle>Gestion des Assignments — ESATIC 2025/2026</mat-card-subtitle>
          </div>
        </mat-card-header>

        <mat-card-content>
          <form (ngSubmit)="onLogin()" #loginForm="ngForm">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Nom d'utilisateur</mat-label>
              <input matInput name="username" [(ngModel)]="username" required placeholder="ex: admin"/>
              <mat-icon matPrefix>person</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Mot de passe</mat-label>
              <input matInput [type]="hidePassword() ? 'password' : 'text'"
                     name="password" [(ngModel)]="password" required/>
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button" (click)="hidePassword.set(!hidePassword())">
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </mat-form-field>

            @if (errorMsg()) {
              <div class="error-msg">
                <mat-icon>error</mat-icon> {{ errorMsg() }}
              </div>
            }

            <button mat-raised-button color="primary" type="submit"
                    class="full-width login-btn"
                    [disabled]="loading() || !loginForm.valid">
              @if (loading()) {
                <mat-spinner diameter="20"></mat-spinner>
              } @else {
                Se connecter
              }
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions>
          <p class="register-link">Pas encore de compte ? <a routerLink="/register">S'inscrire</a></p>
          <p class="hint">Admin par défaut : <strong>admin</strong> / <strong>Admin1234!</strong></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
    styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 16px;
    }
    .login-card {
      width: 100%;
      max-width: 420px;
      border-radius: 16px !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3) !important;
    }
    .logo-area {
      width: 100%;
      text-align: center;
      padding: 16px 0;
    }
    .logo-icon {
      font-size: 56px;
      width: 56px;
      height: 56px;
      color: #764ba2;
    }
    mat-card-title { font-size: 24px !important; margin-top: 8px; }
    mat-card-subtitle { margin-top: 4px; }
    mat-card-content { padding: 16px 24px; }
    .full-width { width: 100%; margin-bottom: 12px; }
    .login-btn { margin-top: 8px; padding: 12px; font-size: 16px; }
    .error-msg {
      color: #f44336;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 12px;
      font-size: 14px;
    }
    mat-card-actions {
      text-align: center;
      padding: 8px 16px 16px;
    }
    .register-link { margin: 0; }
    .register-link a { color: #764ba2; font-weight: 600; }
    .hint { font-size: 12px; color: #888; margin: 4px 0 0; }
  `]
})
export class Login {
    username = '';
    password = '';
    hidePassword = signal(true);
    loading = signal(false);
    errorMsg = signal('');

    constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

    onLogin() {
        if (!this.username || !this.password) return;
        this.loading.set(true);
        this.errorMsg.set('');

        this.authService.login(this.username, this.password, APP_ENV.backendBaseUrl)
            .subscribe({
                next: () => {
                    this.loading.set(false);
                    this.snackBar.open('Connexion réussie ! Bienvenue 👋', 'Fermer', { duration: 3000, panelClass: 'snack-success' });
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    this.loading.set(false);
                    this.errorMsg.set(err.error?.message || 'Identifiants incorrects.');
                }
            });
    }
}
