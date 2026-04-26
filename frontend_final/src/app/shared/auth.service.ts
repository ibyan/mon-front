import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    nom: string;
    prenom: string;
}

export interface AuthResponse {
    message: string;
    token: string;
    user: User;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly TOKEN_KEY = 'jwt_token';
    private readonly USER_KEY = 'current_user';

    currentUser = signal<User | null>(null);
    isAuthenticated = signal<boolean>(false);

    constructor(private http: HttpClient, private router: Router) {
        this.loadFromStorage();
    }

    private loadFromStorage() {
        const token = localStorage.getItem(this.TOKEN_KEY);
        const userStr = localStorage.getItem(this.USER_KEY);
        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                this.currentUser.set(user);
                this.isAuthenticated.set(true);
            } catch {
                this.clearStorage();
            }
        }
    }

    private clearStorage() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        this.currentUser.set(null);
        this.isAuthenticated.set(false);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    login(username: string, password: string, backendUrl: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${backendUrl}/api/auth/login`, { username, password })
            .pipe(
                tap(response => {
                    localStorage.setItem(this.TOKEN_KEY, response.token);
                    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
                    this.currentUser.set(response.user);
                    this.isAuthenticated.set(true);
                })
            );
    }

    register(data: any, backendUrl: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${backendUrl}/api/auth/register`, data)
            .pipe(
                tap(response => {
                    localStorage.setItem(this.TOKEN_KEY, response.token);
                    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
                    this.currentUser.set(response.user);
                    this.isAuthenticated.set(true);
                })
            );
    }

    logOut() {
        this.clearStorage();
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated();
    }

    isAdmin(): boolean {
        const user = this.currentUser();
        return user !== null && user.role === 'admin';
    }

    // Pour compatibilité avec l'ancien guard
    isAdminPromise(): Promise<boolean> {
        return Promise.resolve(this.isAdmin());
    }
}
