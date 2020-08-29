import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

  appUser = JSON.parse(localStorage.getItem('UserInfo'));
  constructor() { }

  ngOnInit() {
  }

}
