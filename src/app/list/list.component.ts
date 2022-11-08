import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from '../mock';
import { produtos} from '../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  prods = PRODUTOS;
  selectedpd? : produtos;
 
  
  constructor() { }

  ngOnInit(): void {
  }
onSelect(pdr: produtos): void{
  this.selectedpd = pdr;
}

}
