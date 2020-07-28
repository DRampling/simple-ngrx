import { createAction, props } from '@ngrx/store';

import { SchoolManagement } from '../models';

export const loadSchoolManagement = createAction(
  '[School/API] Load School Management', // this should ALWAYS be UNIQUE
  props<{ sm: SchoolManagement[] }>()
);
