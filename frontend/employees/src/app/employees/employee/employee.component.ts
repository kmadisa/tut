import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      first_name: '',
      last_name: '',
      birth_date: new Date(),
      employee_id: null,
      person_id: null,
      employee_number: '',
      employed_date: new Date(),
      terminated_date: new Date()
    }
  }

  onSubmit(form : NgForm){
    if(form.value.employee_id == null)
      this.insertRecord(form)
    else
      this.updateRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form : NgForm){
    this.service.putEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
