import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';
import { SidebarService } from '../services/sidebar.service';


declare function customInitFuctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {



  constructor(private settingService: SettingsService,
              private sidebarService: SidebarService) { }

  ngOnInit(): void {
    customInitFuctions();
    this.sidebarService.cargarMenu();
  }

}
