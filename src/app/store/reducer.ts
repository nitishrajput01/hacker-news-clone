import { createReducer, on, Action, State } from '@ngrx/store';
import * as formActions from './action';

export interface HackerNewsState {
    error: any,
    hackerNewsData: Array<any>
    collectionSize: any, // ref nbHits
    pageSize: any, // ref nbPages
    page: any // ref page
}

const initialState: HackerNewsState = {
    error: null,
    hackerNewsData: localStorage.length > 0 && localStorage.hasOwnProperty('hackerNewsData') ? JSON.parse(localStorage.getItem('hackerNewsData')) : null,
    collectionSize: localStorage.length > 0 && localStorage.hasOwnProperty('collectionSize')? JSON.parse(localStorage.getItem('collectionSize')): null,
    pageSize: localStorage.length > 0 && localStorage.hasOwnProperty('pageSize')? JSON.parse(localStorage.getItem('pageSize')): null,
    page: localStorage.length > 0 && localStorage.hasOwnProperty('page')? JSON.parse(localStorage.getItem('page')): null,
}

export const rootReducer = createReducer(initialState,
    on(formActions.LOAD_DATA,
        (state, action) => ({ ...state, pageNumber: action.pageNumber })),

    on(formActions.LOAD_SUCCESS_DATA,
        (state, action) => ({
            hackerNewsData: action.data, collectionSize: action.collectionSize,
            pageSize: action.pageSize, page: action.page, error: null
        })),

    on(formActions.INCREASE_UP_VOTE,
        (state, action) => {
            const value = { ...state.hackerNewsData[action.index] };
            const arr = [...state.hackerNewsData];
            value['points'] += 1;
            arr.splice(action.index, 1, value);
            return {
                ...state,
                hackerNewsData: [...arr]
            }
        }
    ),

    on(formActions.HIDE_NEWS,
        (state, action) => {
            const arr = [...state.hackerNewsData];
            arr.splice(action.index, 1);
            return {
                ...state,
                hackerNewsData: [...arr]
            }
        }    
    ),

    on(formActions.GET_LOCAL_STORAGE_STATE,
        (state, action) => {
            return {
                ...initialState
            }
        }
    
    )
)


export function reducer(state: HackerNewsState | undefined, action: Action) {
    return rootReducer(state, action);
}

export const newsFeatureKey = 'news';