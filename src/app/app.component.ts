import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Post neutre',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus urna sed facilisis euismod.',
      loveIts: 0,
      created_at: new Date('2010-04-24T03:30:00')
    },
    {
      title: 'Post adoré',
      content: 'Vestibulum laoreet varius nibh vel hendrerit. Fusce feugiat fermentum ipsum, posuere ultrices sem cursus eget.',
      loveIts: 2,
      created_at: new Date('2019-03-23T20:49:00')
    },
    {
      title: 'Post detesté',
      content: 'Nunc tempor ante sit amet sapien pharetra, non varius lectus faucibus. Aliquam cursus elit non nulla consequat pulvinar.',
      loveIts: -2,
      created_at: new Date()
    }
  ];
}
