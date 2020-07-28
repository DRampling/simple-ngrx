import { Injectable } from '@angular/core';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { SchoolManagementService } from '../../services/school-management.service';
import { loadAll, loadAllSuccess } from '../actions/school-management.actions';

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class SchoolManagementEffects {
  constructor(
    private actions$: Actions,
    private smService: SchoolManagementService
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll) /* When action is dispatched */,
      startWith(loadAll()),
      /* Hit the School Management Index endpoint of our REST API */
      /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
      /* 'SM Reducers' will take care of the rest */
      switchMap(() =>
        this.smService.index().pipe(map((sms) => loadAllSuccess({ sms })))
      )
    )
  );
}
