import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private homePageService: HomePageService) { }

  usersList: any[];

  ngOnInit() {
    this.homePageService.getUsers().subscribe(
      success => {
        this.usersList = success;
        console.log(this.usersList);
      });
  }

}
