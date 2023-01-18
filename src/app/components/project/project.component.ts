import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goProject() {
    window.open('https://github.com/t0hmi/Chat-App', '_blank')
  }

  goProjectConnectFour() {
    window.open('https://github.com/t0hmi/connect-four', '_blank')
  }

  goProjectRockPaper() {
    window.open('https://t0hmi.github.io/rock-paper-scissors/', '_blank')
  }
}
