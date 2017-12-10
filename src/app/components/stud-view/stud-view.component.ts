import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomService } from '../../services/custom.service';

@Component({
  selector: 'app-stud-view',
  templateUrl: './stud-view.component.html',
  styleUrls: ['./stud-view.component.css']
})
export class StudViewComponent implements OnInit {

  formData: FormGroup;
  constructor(private formBuilder: FormBuilder, private customService: CustomService) { }
  // constructor() { }
  value : String = "";
  errorMessage : String = "";
  
  tableData: Array<{}> = [];
  ngOnInit() {
    this.formData = this.formBuilder.group({
      
      abacus: [null],
      hindi: [null]
     
    });
  }
  /* 
  *****************************************
  Description : Search level getStudDetails
  *****************************************
  */
  getStudDetails(){
    console.log(" getStudDetails ", this.formData.value.abacus);
    console.log(" getStudDetails ", this.formData.value.hindi);
    if(this.formData.value.abacus || this.formData.value.hindi){
      console.log(' if ');
      this.customService._studView(this.formData.value)
      .subscribe(
        // console.log(response.json());
        result => this.tableData = result,
        error => this.errorMessage = <any>error
      );
    } else {
      console.log(' else ');
      this.value = 'Error : Please select any one level';
    }
  }
}
