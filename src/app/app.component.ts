import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainMenus:string[];
  constructor(private menuService:MenuService) {
    
  }
  ngOnInit() {
    this.menuService.getMainMenu()
    .subscribe(mainMenu=>this.mainMenus=mainMenu);
  }
  title = 'InventoryManagementSystem';
}
