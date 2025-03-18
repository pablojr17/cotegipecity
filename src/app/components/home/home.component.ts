import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  newPost = { title: '', content: '', image: '' };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

  goToPost(id: number) {
    this.router.navigate(['/post', id]);
  }

  addPost() {
    if (this.newPost.title && this.newPost.content && this.newPost.image) {
      this.postService.addPost(this.newPost);
      this.newPost = { title: '', content: '', image: '' };
    }
  }
}
