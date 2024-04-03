import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test1';

  public myForm!: FormGroup;
  constructor() { }
  ngOnInit() {
    this.myForm = new FormGroup({
      myName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      myAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      myCity: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

}
