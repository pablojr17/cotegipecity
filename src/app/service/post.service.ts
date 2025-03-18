import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts = [
    { id: 1, title: 'História de Cotegipe', content: 'Cotegipe tem uma rica história...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5Cs--HmVRCYOb0M-jvSi3HDXtjmPiUle2g&s' },
    { id: 2, title: 'Senhor Tião - O faz-tudo', content: 'O Senhor Tião era conhecido por...', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYhC3ypGiQtDIoZOzuLdzw_ceySBRrXnZ0fh2Sm0rLRUBcca3qq_pmGrBJKpY2c_gPCr317lk2gNl8E9TEeZiuI33kHh3AyQSivAojAJwqWDIUbMNv1f9dT9M9_AZe5V7ogFVFm-e1wTi9/s1600/TI%C3%83O+OLEIRO+98+ANOS_05.jpg' }
  ];

  getPosts(): Observable<any[]> {
    return of(this.posts);
  }

  getPostById(id: number): Observable<any> {
    return of(this.posts.find(post => post.id === id));
  }

  addPost(post: any): void {
    this.posts.push({ id: this.posts.length + 1, ...post });
  }
}
