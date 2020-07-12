import {createAction, props} from '@ngrx/store';

export const LOAD_DATA = createAction('[Home Page] Load Data', props<{pageNumber: any}>())
export const LOAD_SUCCESS_DATA = createAction('[Home Page] Load Success Data', props<{data: any, collectionSize:any, pageSize:any, page: any }>());
export const LOAD_FAILURE_DATA = createAction('[Home Paae] Load Failure', props<{error: any}>());