import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (!form.valid) return;

    emailjs.send(
      'service_guseapr',       // service ID
      'template_5bb21ip',      // template ID
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      },
      'hBNYRScJg7T0vl5MH'      // key
    )
    .then((result: EmailJSResponseStatus) => {
      alert('✅ Message sent successfully!');
      form.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('❌ Failed to send message. Please try again later.');
    });
  }
}
