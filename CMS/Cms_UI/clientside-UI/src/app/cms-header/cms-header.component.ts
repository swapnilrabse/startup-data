import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-header',
  templateUrl: './cms-header.component.html',
  styleUrls: ['./cms-header.component.scss']
})
export class CmsHeaderComponent implements OnInit {

  username="swapnil";
  activeTab:any;
  constructor(private router: Router) { }


  ngOnInit() {
    this.activeTab=this.router.url.split('/')[2];
  //   this.router.events.subscribe((res) => {
  //    this.ac
  // })
  }

}
