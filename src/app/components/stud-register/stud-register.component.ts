import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomService } from '../../services/custom.service';

@Component({
  selector: 'app-stud-register',
  templateUrl: './stud-register.component.html',
  styleUrls: ['./stud-register.component.css']
})
export class StudRegisterComponent implements OnInit {

  formData: FormGroup;
  constructor(private formBuilder: FormBuilder, private customService: CustomService) { }
  hideElement : boolean  = true;
  ngOnInit() {

    this.formData = this.formBuilder.group({
      name: [null, Validators.required],
      std: [null, Validators.required],
      school: [null, Validators.required],
      date: [null, Validators.required],
      fName: [null, Validators.required],
      dateJoin: [null, Validators.required],
      fOcc: [null, Validators.required],
      mName: [null, Validators.required],
      phoneNo: [null, Validators.required],
      address: [null, Validators.required],
      abacus: [null],
      hindi: [null],
      gender: [null, Validators.required],
      email: [null]
    });

    

    // this.formData.controls.name.disable();
    // this.formData.controls.std.disable();
    // this.formData.controls.name.disable();
    // this.formData.controls.name.disable();

    // this.readonly = true;
    if (this.formData.valid) {
      console.log('  arun if ');
      // this.formData
      // this.formData['name'].disabled();
    } else {
      console.log('  arun else ');
      // this.formData['std'].disabled();
    }
  }

  onSubmit() {
    // if (this.formData.value.abacus || this.formData.value.hindi) {
    //   this.formData.get('abacus').clearValidators();
    //   this.formData.get('hindi').clearValidators();
    // }
    
    this.hideElement = false;
    this.formData.controls.name.disable();
    this.formData.controls.std.disable();
    
    this.formData.controls.address.disable();
    this.formData.controls.date.disable();
    this.formData.controls.dateJoin.disable();
    this.formData.controls.address.disable();
    if(!this.formData.value.email){
      this.formData.value.email.setValue("");
    }
    if(!this.formData.value.mName){
      this.formData.value.mName.setValue("");
    }

    if(!this.formData.controls.hindi){
      this.formData.controls.hindi.setValue("none");
    }
    if(!this.formData.controls.abacus){
      this.formData.controls.abacus.setValue("none");
    }
    this.formData.controls.email.disable();
    this.formData.controls.fName.disable();
    this.formData.controls.fOcc.disable();
    this.formData.controls.gender.disable();
    this.formData.controls.hindi.disable();
    this.formData.controls.abacus.disable();
    this.formData.controls.mName.disable();
    this.formData.controls.phoneNo.disable();
    this.formData.controls.school.disable();
  }

  // ***************************
  // Description : form Enabling
  // ***************************
  back(){
    this.hideElement = true;
    this.formData.controls.name.enable();
    this.formData.controls.std.enable();
    
    this.formData.controls.address.enable();
    this.formData.controls.date.enable();
    this.formData.controls.dateJoin.enable();
    this.formData.controls.address.enable();
    this.formData.controls.email.enable();
    this.formData.controls.mName.enable();
    this.formData.controls.hindi.enable();
    this.formData.controls.abacus.enable();
    
   

    // if(!this.formData.controls.hindi){
    //   this.formData.controls.hindi.setValue("none");
    // }
    // if(!this.formData.controls.abacus){
    //   this.formData.controls.abacus.setValue("none");
    // }
    this.formData.controls.email.enable();
    this.formData.controls.fName.enable();
    this.formData.controls.fOcc.enable();
    this.formData.controls.gender.enable();
    this.formData.controls.hindi.enable();
    this.formData.controls.abacus.enable();
    this.formData.controls.mName.enable();
    this.formData.controls.phoneNo.enable();
    this.formData.controls.school.enable();
  }

  // ****************************
  // Description : form disabling
  // ****************************
  reView() {

    console.log("  on submit  ");
    // this.customService.test(this.formData.value);
    this.customService._studRegister(this.formData.value)
      .then((user) => {
        console.log(user.json());
      })
      .catch((err) => {
        console.log(err);
      });

    if (this.formData.valid) {
      console.log('form submitted');
    } else {
      console.log('else loop');
      // this.validateAllFormFields(this.formData);
    }

  }

  // onLogin(): void {
  //   this.customService.login(this.formData.value)
  //     .then((user) => {
  //       console.log(user.json());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

    
  // }
}
