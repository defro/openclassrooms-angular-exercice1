import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getAll();
  }

  emitAll() {
    this.postsSubject.next(this.posts);
  }

  getAll() {
    firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
      const posts = data.val() ? data.val() : [];

      // firebase ne peut pas contenir de chanp date donc on convertit la donnée timestamp en Date
      this.posts = posts.map((post) => {
        post.createdAt = new Date(post.timestamp);
        return post;
      });

      this.emitAll();
    });
  }

  saveAll() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addOne(post: Post) {
    // firebase ne peut pas enregisté un format Date alors une conversion en timestamp est nécessaire
    post.timestamp = post.createdAt.getTime();

    this.posts.push(post);
    this.saveAll();
    this.emitAll();
  }

  updateOne(post: Post) {
    const index = this.posts.findIndex((element) => {
      if (element === post) {
        return true;
      }
    });

    this.posts[index] = post;
    this.saveAll();
    this.emitAll();
  }

  removeOne(post: Post) {
    const index = this.posts.findIndex((element) => {
      if (element === post) {
        return true;
      }
    });

    this.posts.splice(index, 1);
    this.saveAll();
    this.emitAll();
  }

}
