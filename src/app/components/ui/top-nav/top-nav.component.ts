import { Component, OnInit } from '@angular/core';
import { SessionStorageService, StorageChangeAction } from 'src/app/services/session-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  selectedGolfCourse!: string;
  storageChanges$: Observable<StorageChangeAction> = this.storageService.storageChanges$;

  constructor(private storageService: SessionStorageService) { }

  ngOnInit(): void {
    this.resetSelectedCourse()
  }
  
  resetSelectedCourse():void {
    this.storageService.set({selectedGolfCourse: 'none'})
  }
}
