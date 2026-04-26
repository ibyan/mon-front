import { Component, signal, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './shared/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet, RouterLink, CommonModule,
        MatButtonModule, MatIconModule, MatDividerModule,
        MatToolbarModule, MatSidenavModule, MatMenuModule,
        MatBadgeModule, MatTooltipModule, MatSnackBarModule
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    private authService = inject(AuthService);
    private router = inject(Router);
    private snackBar = inject(MatSnackBar);

    titre = 'Assignments ESATIC';
    sidenavOpened = signal(true);

    isLoggedIn = this.authService.isAuthenticated;
    isAdmin = computed(() => this.authService.isAdmin());
    currentUser = this.authService.currentUser;

    logout() {
        this.authService.logOut();
        this.snackBar.open('Déconnexion réussie. À bientôt !', 'Fermer', { duration: 3000 });
    }

    toggleSidenav() {
        this.sidenavOpened.update(v => !v);
    }
}
