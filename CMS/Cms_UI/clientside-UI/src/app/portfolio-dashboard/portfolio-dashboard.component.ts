import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  showActiveTab:any;
  constructor() { }

  ngOnInit() {
  }
  checkActiveTab(tabname){
this.showActiveTab=tabname;
  }

}
