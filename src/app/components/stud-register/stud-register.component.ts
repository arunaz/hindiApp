import { Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
  
@Component({
  selector: 'app-stud-register',
  templateUrl: './stud-register.component.html',
  styleUrls: ['./stud-register.component.css']
})
export class StudRegisterComponent implements OnInit {

  formData: FormGroup;
  authService : AuthService;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.authService.test();
    this.formData = this.formBuilder.group({
      name: [null, Validators.required],
      class: [null, Validators.required],
      school: [null, Validators.required],
      date: [null, Validators.required],
      fName: [null, Validators.required],
      dateJoin: [null, Validators.required],
      fOcc: [null, Validators.required],
      mName: [null, Validators.required],
      phoneNo: [null, Validators.required],
      address: [null, Validators.required],
      abacus: [null, Validators.required],
      hindi: [null, Validators.required],
      gender: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    console.log("  on submit  ", this.formData);
    
    if (this.formData.valid) {
      console.log('form submitted');
    } else {
      console.log('else loop');
      // this.validateAllFormFields(this.formData);
    }
  }

  // validateAllFormFields (formData : FormData){
  //   // Object.keys(formData.controls).forEach(fields=>{

  //   })
  // }
}
