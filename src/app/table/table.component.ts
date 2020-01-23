import { Driver } from '../model/driver';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService]
})
export class TableComponent implements OnInit {

  driver2: Driver[];

  brands: SelectItem[];

  clonedCars: { [s: string]: Driver; } = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
      this.driver2 = [
         
        {   vin: 'aaaa', 
            year: 2015, 
            brand: 'aaaa', 
            color: 'black', 
            percent: 5, 
            product: [{
                id: 1, 
                name: "cepillos_a", 
                percent: 5
            },
            {
                id: 2, 
                name: "pañales_a", 
                percent: 7}, 
            {   
                id: 3, name: 
                "bloqueador_a", 
                percent: 10}
            ]},
        {   vin: 'bbbb', 
            year: 2015, 
            brand: 'bbbb', 
            color: 'black', 
            percent: 4, 
            product: [{
                id: 1, 
                name: "cepillos", 
                percent: 4
            },
            {
                id: 2, 
                name: "pañales", 
                percent: 5} 
            ]},
        {   vin: 'cccc', 
            year: 2015, 
            brand: 'cccc', 
            color: 'black', 
            percent: 3, 
            product: [{
                id: 1, 
                name: "cepillos", 
                percent: 3
            },
            {
                id: 2, 
                name: "pañales", 
                percent: 3
            }]
        },
        {   vin: 'dddd', 
            year: 2015, 
            brand: 'dddd', 
            color: 'black', 
            percent: 8, 
            product: [{
                id: 1, 
                name: "cepillos", 
                percent: 8
            },
            {
                id: 2, 
                name: "pañales", 
                percent: 8
            }]
        },
        {   vin: 'eeee', 
            year: 2015, 
            brand: 'eeee', 
            color: 'black', 
            percent: 10, 
            product: [{
                id: 1, 
                name: "cepillos", 
                percent: 10
            },
            {
                id: 2, 
                name: "pañales", 
                percent: 10
            }]
        },
    ]

      this.brands = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

  onRowEditInit(driver: Driver) {
      this.clonedCars[driver.vin] = {...driver};
  }

  onRowEditSave(driver: Driver) {
      if (driver.year > 0) {
          delete this.clonedCars[driver.vin];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
      }
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
      }
  }

  onRowEditCancel(driver: Driver, index: number) {
      this.driver2[index] = this.clonedCars[driver.vin];
      delete this.clonedCars[driver.vin];
  }

}
