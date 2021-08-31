import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface StorageChangeAction {
  type: string,
  key: string,
  value: any
}

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  key = 'NG_GOLF_APP_SESSION_STORE';

  storageChanges$ = new Subject<StorageChangeAction>();

  constructor() { }

  set(value: any) {
    const key = this.key
    sessionStorage.setItem(key, JSON.stringify(value));
    this.storageChanges$.next({
      type: 'set',
      key,
      value
    });
  }

  read(): any {
    const data: string | null = sessionStorage.getItem(this.key);
    if (data){
      return JSON.parse(data);
    }
  }

  remove(): void {
    const key = this.key
    const value = null
    sessionStorage.removeItem(this.key);
    this.storageChanges$.next({
      type: 'remove',
      key,
      value
    });
  }

}
