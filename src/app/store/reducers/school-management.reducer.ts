import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { selectSchoolManagementId, sortByDate } from '../helpers';
import { SchoolManagement } from '../models';
// Import all the school actions to be consumed by the store
import * as SchoolManagementActions from '../actions/school-management.actions';

// First we want to build up out school management adapter:

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
  // - selected item
}

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<SchoolManagement> {
//   ids: string[] | number[];
//   entities: { [id: string]: SchoolManagement };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

// Custom sorting and indexing can also be injected here, all optional
export const adapter: EntityAdapter<SchoolManagement> = createEntityAdapter<
  SchoolManagement
>({ selectId: selectSchoolManagementId, sortComparer: sortByDate });

// Now we can setup our reducer using the adapter:

// When the store initializes, we want these extended properties to
// initialize as we want bellow
export const initialState: SchoolManagementState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

// Initializes the reducer with the initial state and actions
const schoolManagementReducer = createReducer(
  initialState,
  // Now we add every action we care about that actually touches the store:
  // on [this action], do [this thing] to the adapter
  // - e.g. add all the school management items (sm) to the store
  on(SchoolManagementActions.loadAllSuccess, (state, { sm }) =>
    adapter.addAll(sm, state)
  )
);

// Expose the setup reducer to the app
export function reducer(state: SchoolManagementState, action: Action) {
  return schoolManagementReducer(state, action);
}

// Now we can setup some entry points for us to select what we care about:

// Select extended store SM props
export const getSMLoading = (state: SchoolManagementState) => state.loading;
export const getSMLoaded = (state: SchoolManagementState) => state.loaded;

// deconstruct the adapter into its standard selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// alias the above selectors so they are move obvious to what they select
export const selectSMIds = selectIds; // array of all SM id's
export const selectSMEntities = selectEntities; // dictionary of SM's
export const selectAllSMs = selectAll; // array of all SM's
export const selectSMTotal = selectTotal; // number of SM's
