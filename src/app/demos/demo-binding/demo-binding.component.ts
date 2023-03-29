import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent {
	email: string = '';

	reset() {
		this.email = '';
	}
}
