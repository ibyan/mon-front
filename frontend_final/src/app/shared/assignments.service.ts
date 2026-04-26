import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { APP_ENV } from './app-env';

@Injectable({
    providedIn: 'root',
})
export class AssignmentsService {
    URI_BACKEND = APP_ENV.assignmentsApiUrl;

    constructor(private http: HttpClient, private authService: AuthService) {}

    private getAuthHeaders(): HttpHeaders {
        const token = this.authService.getToken();
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : ''
        });
    }

    getAssignmentsPagine(page: number, limit: number, search = '', rendu = '', matiere = ''): Observable<any> {
        let url = `${this.URI_BACKEND}?page=${page}&limit=${limit}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;
        if (rendu !== '') url += `&rendu=${rendu}`;
        if (matiere) url += `&matiere=${encodeURIComponent(matiere)}`;
        return this.http.get<any>(url);
    }

    getAssignment(id: string): Observable<Assignment> {
        return this.http.get<Assignment>(`${this.URI_BACKEND}/${id}`);
    }

    addAssignment(assignment: Assignment): Observable<any> {
        return this.http.post<any>(this.URI_BACKEND, assignment, { headers: this.getAuthHeaders() });
    }

    updateAssignment(assignment: Assignment): Observable<any> {
        return this.http.put<any>(this.URI_BACKEND, assignment, { headers: this.getAuthHeaders() });
    }

    deleteAssignment(assignment: Assignment): Observable<any> {
        return this.http.delete<any>(`${this.URI_BACKEND}/${assignment._id}`, { headers: this.getAuthHeaders() });
    }
}
