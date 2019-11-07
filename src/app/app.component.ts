import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
  name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]);

  list = [];

  updateName() {
    this.name.setValue('Ijahn');
  }

  addItem() {
    this.list.push(this.name.value);
    this.name.setValue('');
  }
}
