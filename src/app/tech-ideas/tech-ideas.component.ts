import { Component, OnInit } from '@angular/core';
import { GetCityNamesService } from '../get-city-names.service';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord } from './customValidation';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
cities:any
  constructor(private _cityname: GetCityNamesService, private formB: FormBuilder) {
    this.cities=this._cityname.getNames()
   }
techIdeasForm = this.formB.group({
  name: ['', [Validators.required, Validators.minLength(3), avoidWord(/tourist/)]],
  age: [""],
  email: ["", Validators.required],
  city:["", Validators.required],
  brief:["", [Validators.required, Validators.minLength(100), avoidWord(/nothing/)]]
});
  ngOnInit(): void {
  }
//Getter method
get nameFormControl(){

  return this.techIdeasForm.get('name')!
  }
  
  get ageFormControl(){
  
    return this.techIdeasForm.get('age')!
    }

  get emailFormControl(){
  
  return this.techIdeasForm.get('email')!
  }

  get cityFormControl(){
  
    return this.techIdeasForm.get('city')!
    }

    get briefFormControl(){
  
      return this.techIdeasForm.get('brief')!
      }
onClick(){
  console.log(this.techIdeasForm.value)
  this.techIdeasForm.reset();
}
    }

