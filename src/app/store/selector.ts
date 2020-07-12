import { createSelector, State } from "@ngrx/store";
import {HackerNewsState} from './reducer';

export const getNewsData = createSelector(
    (state: {news: HackerNewsState}) => state.news,
    (state: HackerNewsState) => state.hackerNewsData,
)

export const getCollectionSize = createSelector(
    (state: {news: HackerNewsState}) => state.news,
    (state: HackerNewsState) => state.collectionSize
)

export const getPageSize =  createSelector(
    (state: {news: HackerNewsState}) => state.news,
    (state: HackerNewsState) => state.pageSize
)

export const getPage =  createSelector(
    (state: {news: HackerNewsState}) => state.news,
    (state: HackerNewsState) => state.page + 1
)