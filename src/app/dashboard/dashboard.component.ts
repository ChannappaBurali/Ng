import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetListService } from '../get-list.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Register } from '../register';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allEmployees: Observable<Register[]>;


  constructor(private router:Router,private ListService:GetListService,private formBuilder: FormBuilder) { 
    this.loadAllEmployees();  
  }
  loadAllEmployees() {  
    this.allEmployees = this.ListService.getAllEmployee();  
  }
  ngOnInit() {
  }

}
