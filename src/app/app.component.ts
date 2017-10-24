import { Component } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const foo = from([0, 1, 2, 3, 4, 5]);

    foo.pipe(map(item => item * 2)).subscribe(console.log);
  }
}
