import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  fragmentSetDynamically: any='projetos';
  constructor(private router: Router) { }

  ngOnInit(): void {
  } 
}
