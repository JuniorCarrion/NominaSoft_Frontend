import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent implements OnInit {

  date:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
