import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'no';
  itemsToDisplay = undefined;

  test(objList) {
    this.itemsToDisplay = objList.results.map(obj => ({
      textToDisplay: this.inputFormatter(obj),
      routerLink: this.url ? [this.url, obj.objectID] : null,
      displayAnchor: this.url
    }));
  }

  inputFormatter(obj) {

  }
}
