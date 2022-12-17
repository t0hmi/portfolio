import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToGithub(): void {
    window.open('https://github.com/t0hmi', '_blank')
  }

  goToLinkedin(): void {
    window.open('https://www.linkedin.com/in/thomas-hamon-01b1031a8/', '_blank')
  }

  goToGmail(): void {
    window.open('mailto:thomashamon.etu@gmail.com');
  }

}
