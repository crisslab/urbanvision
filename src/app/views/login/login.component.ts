import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  config = {
    displayKey : "description", //if objects array passed which key to be displayed defaults to description,
    search:false, //enables the search plugin to search in the list
    placeholder:'Seleziona città',
    limitTo:10
  }

  dropdownOptions = ['Roma','Bertinoro'];
  dataModelOptions : any = Array();
  city;


  constructor(private router: Router){}

  login() {
    this.router.navigate(['/map',{  city: this.city }]);
  }


  changeValue($event: any) {
    this.city = $event.value;
  }
}
