import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(data => this.post = data);
  }
}
