import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      emailjs.send(
        'service_guseapr',   // 👈 from EmailJS dashboard
        'template_5bb21ip',  // 👈 from EmailJS template
        {
          name: form.value.name,       // matches {{name}}
          email: form.value.email,     // matches {{email}}
          message: form.value.message  // matches {{message}}
        },
        'hBNYRScJg7T0vl5MH'     // 👈 from EmailJS account → API Keys
      ).then((result: EmailJSResponseStatus) => {
        alert('✅ Message sent successfully!');
        form.reset();
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert('❌ Failed to send message. Please try again later.');
      });
    }
  }
}
