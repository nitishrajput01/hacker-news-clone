import {createReducer, on, Action, State} from '@ngrx/store';
import * as formActions from './action';

export interface HackerNewsState {
    error:any,
    hackerNewsData: Array<any>
    collectionSize: any, // ref nbHits
    pageSize: any, // ref nbPages
    page: any // ref page
}

const initialState: HackerNewsState = {
    error: null,
    hackerNewsData: null,
    collectionSize: null, 
    pageSize: null, 
    page: null,
}

export const rootReducer = createReducer(initialState,
    on(formActions.LOAD_DATA,
    (state, action) => ({...state, pageNumber: action.pageNumber})),
    on(formActions.LOAD_SUCCESS_DATA,
        (state, action) => ({hackerNewsData: action.data, collectionSize: action.collectionSize,
            pageSize: action.pageSize, page: action.page, error: null})))

export function reducer(state: HackerNewsState | undefined, action: Action) {
            return rootReducer(state, action);
}

export const newsFeatureKey = 'news';