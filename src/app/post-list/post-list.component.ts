import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  private postSubscription: Subscription;
  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => { this.posts = posts; },
      (error) => { console.error('Erreur lors du chargement des posts: ' + error); }
    );
    this.postsService.emitAll();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
