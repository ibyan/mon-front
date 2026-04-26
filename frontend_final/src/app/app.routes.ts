import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './shared/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register').then(m => m.Register)
    },
    {
        path: 'home',
        loadComponent: () => import('./assignments/assignments').then(m => m.Assignments)
    },
    {
        path: 'add',
        loadComponent: () => import('./assignments/add-assignment/add-assignment').then(m => m.AddAssignment),
        canActivate: [authGuard]
    },
    {
        path: 'assignments/:id',
        loadComponent: () => import('./assignments/assignment-detail/assignment-detail').then(m => m.AssignmentDetail)
    },
    {
        path: 'assignments/:id/edit',
        loadComponent: () => import('./assignments/edit-assignment/edit-assignment').then(m => m.EditAssignment),
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: '/home' }
];
