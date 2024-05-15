import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  bannerImage: string = "assets/images/banner.webp";
  missionImage: string = "assets/images/mission.svg";
  visionImage: string = "assets/images/vision.svg";
  contactForm!: FormGroup;

  successMsg: boolean = false;

  siteKey: string = "6Lflo9kpAAAAAH8-WVUmx1rb6Rrawu3grSasZ-71";  //server key

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
     this.contactForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,40}$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,40}$')]],
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
      phone: ['', [Validators.required, Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]], // Only accepts numbers
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    })
  }

  async submit() {
    if (this.contactForm.valid) {
      emailjs.init('Y1-_EsApy0Z1FZbG9');
      let response = await emailjs.send('service_obpitzr', 'template_hztaz83', {
        from_name:
          this.contactForm.value.fname + ' ' + this.contactForm.value.lname,
        to_name: 'Mr. Admin',
        from_email: this.contactForm.value.email,
        from_phone: this.contactForm.value.phone,
        subject: 'Contact Us Message',
        message: this.contactForm.value.message,
      });
      // this.toastr.success(
      //   'Thanks For Contacting Us. We will be in touch with you shortly...',
      //   'Message Has Been Sent',
      //   { timeOut: 5000, progressBar: true, progressAnimation: 'increasing' }
      // );
      this.successMsg = true;
      this.contactForm.reset();
    } 
    else {
      this.toastr.error(
        'Something Went Wrong...',
        'Error',
        { timeOut: 3000, progressBar: true, progressAnimation: 'increasing' }
      );
    }
  }
  

}
