import { Action } from '@ngrx/store';

import { SchoolManagement } from '../models';

// Enum of app-wide strings:
// - these must always be UNIQUE
export enum SchoolManagementActionTypes {
  LOAD_SCHOOL_MANAGEMENT = '[School] Load School Management',
  LOAD_SCHOOL_MANAGEMENT_SUCCESS = '[School] Load School Management Success',
  LOAD_SCHOOL_MANAGEMENT_FAILURE = '[School] Load School Management Failure',
}

// Request action to load all school management items:
// - no params are required so no constructor needed
export class LoadSchoolManagement implements Action {
  readonly type = SchoolManagementActionTypes.LOAD_SCHOOL_MANAGEMENT;
}

// Action to provide all requested items:
// - constructor is required to transport the payload of out desired items
export class LoadSchoolManagementSuccess implements Action {
  readonly type = SchoolManagementActionTypes.LOAD_SCHOOL_MANAGEMENT_SUCCESS;

  constructor(public payload: SchoolManagement[]) {}
}

// Action to provide reason of failure to load:
// - constructor is required to transport error
export class LoadSchoolManagementFailure implements Action {
  readonly type = SchoolManagementActionTypes.LOAD_SCHOOL_MANAGEMENT_FAILURE;

  constructor(public payload: Error) {}
}

// Export the actions we want to use across the application
export type SchoolManagementActions =
  | LoadSchoolManagement
  | LoadSchoolManagementSuccess
  | LoadSchoolManagementFailure;
