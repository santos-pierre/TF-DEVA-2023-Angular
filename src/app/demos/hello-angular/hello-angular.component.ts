import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  templateUrl: './hello-angular.component.html',
  styleUrls: ['./hello-angular.component.scss']
})
export class HelloAngularComponent {
	name: string = "Santos Pierre";

	// constructor() {
	// 	this.name = "Santos Pierre";
	// }
}
