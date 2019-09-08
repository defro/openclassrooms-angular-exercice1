import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts++;
    this.postsService.updateOne(this.post);
  }

  onDontLoveIt() {
    this.post.loveIts--;
    this.postsService.updateOne(this.post);
  }

  onDelete() {
    if (confirm('Êtes vous sur de vouloir supprimer ce post ?')) {
      this.postsService.removeOne(this.post);
    } else {
      return null;
    }
  }

}
