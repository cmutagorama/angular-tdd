import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss'],
})
export class AlertButtonComponent implements OnInit {
  content: Observable<any>;
  hideContent = true;
  severity = 423;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.content = this.messageService.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => this.toggle());
  }
}
