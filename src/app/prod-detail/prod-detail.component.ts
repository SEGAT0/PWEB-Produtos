/* .. */
import { Component, Input, OnInit } from '@angular/core';
import { produtos } from '../students';
@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {

  
 @Input() produtos?: produtos; 
  constructor() { }

  ngOnInit(): void {
  }

}
