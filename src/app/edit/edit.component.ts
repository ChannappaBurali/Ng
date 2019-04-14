import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../register';
import { GetListService } from '../get-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allEmployees: Observable<Register[]>;
  ID:string;
  UserForm:any;
  constructor(private GetService:GetListService) { 
    this.ID = this.GetService.getData(); 
    //this.allEmployees=this.GetService.getEmployeeById(this.ID);     
  }

  loadEmployeeToEdit(employeeId: string) {  
    this.GetService.getEmployeeById(employeeId).subscribe(employee=> {  
      
      this.UserForm.controls['FName'].setValue(employee.FName);  
     this.UserForm.controls['LName'].setValue(employee.LName);  
      this.UserForm.controls['EMail'].setValue(employee.EMail);  
     // this.UserForm.controls['Gender'].setValue(employee.Gender);  
      this.UserForm.controls['Phone'].setValue(employee.Phone);  
      this.UserForm.controls['DOB'].setValue(employee.DOB);  
    });
  }
  ngOnInit() {
  }

}
