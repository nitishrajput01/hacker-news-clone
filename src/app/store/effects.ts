import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ApiServices } from '../services/http.service';
import * as formActions from './action'

@Injectable()
export class HackerNewsEffects {

    $loadData = createEffect(() => this.actions$.pipe(
        ofType(formActions.LOAD_DATA),
        exhaustMap((result) => this.service.getFrontStories(result.pageNumber)
        .pipe(
            map((response) => {
                return formActions.LOAD_SUCCESS_DATA({data: response['hits'],
                collectionSize: response['nbHits'],
                pageSize: response['hitsPerPage'],
                page: response['page']
            })}),
                catchError((error) => of(formActions.LOAD_FAILURE_DATA(error)))
        ))
      )
    )
  

  constructor(
    private actions$: Actions,
    private service: ApiServices
  ) {}
}