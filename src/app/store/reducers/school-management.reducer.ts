import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { selectSchoolManagementId, sortByDate } from '../helpers';
import { SchoolManagement } from '../models';

// It can be helpful to extend the models we are working with so handle app
// logic - e.g. only show a screen when this data has loaded, show a loading
// spinner if loading etc...
export interface SchoolManagementState extends EntityState<SchoolManagement> {
  loaded: boolean;
  loading: boolean;
  // Other application dependant metadata about school management could go
  // here, for example:
  // - current page
  // - last file opened
}

// Custom sorting and indexing can also be injected here, all optional
export const adapter: EntityAdapter<SchoolManagement> = createEntityAdapter<
  SchoolManagement
>({ selectId: selectSchoolManagementId, sortComparer: sortByDate });

// When the store initializes, we want these extended properties to
// initialize as we want bellow
export const initialSchoolManagementState: SchoolManagementState = adapter.getInitialState(
  {
    loaded: false,
    loading: false,
  }
);
