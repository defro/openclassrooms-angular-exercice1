import { Component } from '@angular/core';
import {Post} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    new Post(
      'Post neutre',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus urna sed facilisis euismod.',
      0,
      new Date('2010-04-24T03:30:00')
    ),
    new Post(
      'Post adoré',
      'Vestibulum laoreet varius nibh vel hendrerit. Fusce feugiat fermentum ipsum, posuere ultrices sem cursus eget.',
      2,
      new Date('2019-03-23T20:49:00')
    ),
    new Post(
      'Post detesté',
      'Nunc tempor ante sit amet sapien pharetra, non varius lectus faucibus. Aliquam cursus elit non nulla consequat pulvinar.',
      -2
    )
  ];

  constructor() {
    //console.log(this.posts);
  }

}
