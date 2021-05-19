import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Character } from '../interfaces/character';

@Injectable()
export class CharacterService {
    private API_URL = environment.API_URL

    constructor(private http: HttpClient){}

    getCharacterPagination(page: string): Observable<Character> {
        return this.http.get<Character>(this.API_URL + '/character/?page=' + page)
    }
}