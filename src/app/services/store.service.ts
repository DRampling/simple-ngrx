import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSMSelectors from '../store/selectors/school-management.selectors';

import { loadSchoolManagement } from '../store/actions';
import { SchoolManagement } from '../store/models';

// This file gets big and ugly, but you can use this facade service to group
// all your store calls in only one service rather than have a service for every state slice:

@Injectable()
export class StoreService {
  schoolManagements$: Observable<SchoolManagement> = this.store.pipe(
    select(fromSMSelectors.selectAllSMs)
  );

  constructor(private store: Store<{ sms: SchoolManagement[] }>) {}

  // Declare all actions:

  // Ask store to load all SMs
  loadAllSMs(): void {
    this.store.dispatch(loadSchoolManagement());
  }

  // Declare all selectors:

  getSMLoading(): Observable<boolean> {
    return this.store.pipe(select(fromSMSelectors.selectSMLoading));
  }

  getSMLoaded(): Observable<boolean> {
    return this.store.pipe(select(fromSMSelectors.selectSMLoaded));
  }
}
