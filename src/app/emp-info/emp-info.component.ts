import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit{
  empReceived1: string[]=[];
  empReceived2: string[]=[];
  empReceived3: string[]=[];

  getEmpFromServiceClass1() {
    this.empReceived1 = this.rservice.getEmp1()
  }
  getEmpFromServiceClass2() {
    this.empReceived2 = this.rservice.getEmp2()
  }
  getEmpFromServiceClass3() {
    this.empReceived3 = this.rservice.getEmp3()
  }

  constructor(private rservice: RecordsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
