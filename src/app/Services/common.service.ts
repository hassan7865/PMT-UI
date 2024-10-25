import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnDestroy {

  constructor() { }

  private toggleDrawerSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  toggleDrawer$ = this.toggleDrawerSubject.asObservable();

  toggleDrawer() {
    this.toggleDrawerSubject.next();
  }

  

  // Expose destroy$ as an observable
  get onDestroy$() {
    return this.destroy$.asObservable();
  }

  ngOnDestroy(): void {
    // Emit value to trigger unsubscribe in takeUntil
    this.destroy$.next();
    this.destroy$.complete();
  }
}
