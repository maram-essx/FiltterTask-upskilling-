import { Component } from '@angular/core';
import { FormControl,FormGroup ,Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private _UsersService: UsersService) {}

  contactForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  sendContactData(contactFormData: FormGroup) {
    if (contactFormData.valid) {
      //calling methon of sendData from service
      this._UsersService.sendData(contactFormData.value).subscribe({
        next: (response) => console.log(response),
        error: (err) => console.log(err),
      });
    }
  }
}
