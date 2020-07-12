import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ApiServices {
    constructor(private httpClient: HttpClient) {
    } 
    getFrontStories(pageNumber?: any) {
        return this.httpClient.get(`${environment.api_base_url}/v1/search?tags=front_page&page=${pageNumber}`)
    }
}