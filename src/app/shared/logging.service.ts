import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
    log(nom: string, action: string) {
        console.log(`[LOG] ${new Date().toISOString()} | ${nom} | ${action}`);
    }
}
