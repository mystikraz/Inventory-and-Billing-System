import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { Menus } from './Menus/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMainMenu():Observable<string[]>{
    var menus=new Menus();
    return of(menus.MainMenu);
  }
}
