import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { Menus } from './Menus/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
menus:Menus;
  constructor() {
    this.menus=new Menus();
   }
  getMainMenu():Observable<string[]>{
    return of(this.menus.MainMenu);
  }
  getTableMenu():Observable<string[]>{
    return of(this.menus.TablesMenu);
  }
}
