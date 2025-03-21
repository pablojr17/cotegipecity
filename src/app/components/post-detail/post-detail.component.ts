import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
declare var gtag: Function;
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(data => this.post = data);
  }

  goBack() {
    gtag('event', 'voltar_post', {
      'event_category': 'Navegação',
      'event_label': this.post?.title || 'Post Desconhecido',
      'post_id': this.post?.id || 'N/A',
      'post_titulo': this.post?.title || 'Sem título',
      'post_url': window.location.href,
      'event_ip': 123321123,
      'post_tempo_visualizacao': Math.floor(performance.now() / 1000) + 's'
    });

    this.location.back();
  }
}
