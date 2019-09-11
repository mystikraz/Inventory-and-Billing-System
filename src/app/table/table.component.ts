import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableMenus: string[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getTableMenus();
    console.log(this.tableMenus);
  }
  getTableMenus(){
    this.menuService.getTableMenu()
    .subscribe(tableMenu=>this.tableMenus=tableMenu);
  }

}
