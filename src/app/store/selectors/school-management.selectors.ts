import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

// Again import everything as a single alias
import * as fromSM from '../reducers/school-management.reducer';

// First we want to create the base state (selectSMState) to select from:

export interface State {
  schoolManagements: fromSM.SchoolManagementState;
}

export const reducers: ActionReducerMap<State> = {
  schoolManagements: fromSM.reducer,
};

export const selectSMState = createFeatureSelector<
  fromSM.SchoolManagementState
>('schoolManagements');

// Now we can create selectors from our base state:

// Our 4 base selectors, nearly always useful:
export const selectSMIds = createSelector(selectSMState, fromSM.selectSMIds);
export const selectSMEntities = createSelector(
  selectSMState,
  fromSM.selectSMEntities
);
export const selectAllSMs = createSelector(selectSMState, fromSM.selectAllSMs);
export const selectSMTotal = createSelector(
  selectSMState,
  fromSM.selectSMTotal
);

// Our 2 extended props on our state:
export const selectSMLoading = createSelector(
  selectSMState,
  fromSM.getSMLoading
);
export const selectSMLoaded = createSelector(selectSMState, fromSM.getSMLoaded);
