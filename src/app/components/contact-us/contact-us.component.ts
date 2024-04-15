import { Component, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../firebase.service'; // Adjust path as necessary
import { isPlatformBrowser } from '@angular/common'; // Import this helper
import { Modal } from 'bootstrap'; // Ensure this is correctly imported

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @ViewChild('successModal') successModal!: ElementRef;
  @ViewChild('failureModal') failureModal!: ElementRef;

  constructor(
    private firebaseService: FirebaseService,
    @Inject(PLATFORM_ID) private platformId: Object) {} // Inject PLATFORM_ID to check the platform

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Add a timestamp to the form data
      const formDataWithDate = {
        ...form.value,
        dateSubmitted: new Date() // Adds the current date and time as dateSubmitted
      };

      this.firebaseService.addDocument('Contact-Us-Messages', formDataWithDate)
        .then(() => {
          if (isPlatformBrowser(this.platformId)) {
            this.showModal(this.successModal.nativeElement);
          }
          form.reset();
        })
        .catch(error => {
          console.error('Error submitting contact info:', error);
          if (isPlatformBrowser(this.platformId)) {
            this.showModal(this.failureModal.nativeElement);
          }
          form.reset();
        });
    } else {
      if (isPlatformBrowser(this.platformId)) {
        this.showModal(this.failureModal.nativeElement); // Show error modal if form is invalid
      }
      form.reset();
    }
  }

  async showModal(modalElement: HTMLElement) {
    if (isPlatformBrowser(this.platformId)) {
      const { Modal } = await import('bootstrap');
      const modalInstance = new Modal(modalElement);
      modalInstance.show();
    }
  }
}
