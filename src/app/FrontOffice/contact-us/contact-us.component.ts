// contact-us.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {

  onSubmit(form: any) {
    const { name, email, message } = form.value;
    const subject = `Message from ${name}`;
    const mailtoLink = `mailto:azer.alahmar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  }
}
