import { Injectable } from '@angular/core';
import { produtos } from './students';
import { PRODUTOS } from './mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdService {


getproducts(): Observable<produtos[]> {
  const list = of(PRODUTOS);
  return list;
}

constructor() { }
}
