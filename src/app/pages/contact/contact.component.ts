import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/providers/config/config.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,public config: ConfigService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company_name: [''],
      street_no: [''],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      job_title: [''],
      zip_city: ['',Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    else {
      console.log(this.contactForm.value);
      this.config.postHttp('createContactUsQuery', this.contactForm.value).then((data: any) => {
        console.log(data)
        this.config.toastSuccess(data.data);
        this.contactForm.reset();
      });
    }
  }

}
