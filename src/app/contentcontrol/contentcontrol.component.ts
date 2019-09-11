import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-contentcontrol',
  templateUrl: './contentcontrol.component.html',
  styleUrls: ['./contentcontrol.component.css']
})
export class ContentcontrolComponent implements OnInit {

  constructor(private route:ActivatedRoute,private menuService:MenuService) { }

  ngOnInit() {
  }

}
