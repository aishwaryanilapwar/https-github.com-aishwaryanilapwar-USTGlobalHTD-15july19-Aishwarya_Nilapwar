import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  constructor(private service :TaskserviceService) { }

  ngOnInit() {
  }

}
