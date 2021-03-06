import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }
  getPosts(count = 10): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL).pipe(
      map(res => res.filter((post, i) => i < count))
    );
  }
}
