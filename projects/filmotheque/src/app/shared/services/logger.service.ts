import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

const apiLogService: LoggerService = {
  log(obj: any, ...params: any[]): void {
    console.error(obj);
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => !environment.production ? apiLogService :
    new LoggerService()
})
export class LoggerService {

  constructor() { }

  log(obj: any, ...params: any[]): void {
    console.info(obj, params);
  }
}
