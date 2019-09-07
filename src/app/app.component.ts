import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyBBU3puoWkpjTRHOLaePPqhiETp4t-6nik',
      authDomain: 'openclassrooms-ng-blog.firebaseapp.com',
      databaseURL: 'https://openclassrooms-ng-blog.firebaseio.com',
      projectId: 'openclassrooms-ng-blog',
      storageBucket: '',
      messagingSenderId: '742165422668',
      appId: '1:742165422668:web:b8fe4fdd62965147ff0ae9'
    };
    firebase.initializeApp(config);
  }

}
