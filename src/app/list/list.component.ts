
import { Component, OnInit } from '@angular/core';

import { produtos} from '../students';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  //prods = PRODUTOS;
  prods: produtos[] = []
  selectedpd? : produtos;
 
  
  //constructor() { }
  constructor(private prodService: ProdService){}


  getproducts(): void{  
    this.prodService.getproducts()
    .subscribe(products => this.prods = products)
 }

ngOnInit(): void {
  this.getproducts
  }

onSelect(pdr: produtos): void{
  this.selectedpd = pdr;
}

}
