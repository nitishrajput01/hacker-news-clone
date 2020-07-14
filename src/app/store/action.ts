import {createAction, props} from '@ngrx/store';

export const LOAD_DATA = createAction('[Home Page] Load Data', props<{pageNumber: any}>())
export const LOAD_SUCCESS_DATA = createAction('[Home Page] Load Success Data', props<{data: any, collectionSize:any, pageSize:any, page: any }>());
export const LOAD_FAILURE_DATA = createAction('[Home Paae] Load Failure', props<{error: any}>());
export const INCREASE_UP_VOTE = createAction('[Home Page] Increase Upvote', props<{objectID: any, index: number}>());
export const HIDE_NEWS = createAction('[Home Page] Hide News', props<{index: number}>());
export const GET_LOCAL_STORAGE_STATE = createAction('[Home Page] Local Storage');