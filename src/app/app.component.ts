import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular 4 with jquery';
  toggleTitle() {
    $('.title').slideToggle();
  }
  constructor() {

  }
 
  ngOnInit() {
    this.handle()
  }

  handle() {
    $('.menu>ul>li').click(function () {
      if ($(this).hasClass('active')) {
        $(this).children('.submenu').slideUp();
        $(this).removeClass('active');
      } else {
        $('.submenu').slideUp();
        $('.menu>ul>li').removeClass('active');
        $(this).children('.submenu').slideDown();
        $(this).addClass('active');
      }
    });
  }
}
