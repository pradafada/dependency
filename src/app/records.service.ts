import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  emp1: string[] = ["Adam Taylor", 'E234', 'at@abc.net']
  emp2: string[] = ["John Sims", 'A567', 'js@abc.net']
  emp3: string[] = ["Bob Nomes", 'B890', 'bn@abc.net']

  getEmp1(): string[] {
    return this.emp1
  }
  getEmp2(): string[] {
    return this.emp2
  }
  getEmp3(): string[] {
    return this.emp3
  }

  constructor() { }
}
