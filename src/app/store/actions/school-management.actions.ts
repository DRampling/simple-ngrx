import { createAction, props } from '@ngrx/store';

import { SchoolManagement } from '../models';

export const loadAll = createAction(
  '[School/API] Load all' // this should ALWAYS be UNIQUE
);

export const loadAllSuccess = createAction(
  '[School/API] Load all success', // this should ALWAYS be UNIQUE
  props<{ sm: SchoolManagement[] }>()
);

// All the school management actions are probably handled the same way
export const failure = createAction(
  '[School/API] Failure',
  props<{ err: { concern: 'LOAD'; error: any } }>()
  // I can extend concerns as I add more actions
  // - concern: 'CREATE' | 'PATCH' | 'DELETE'
);
