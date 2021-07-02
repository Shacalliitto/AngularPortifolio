import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(-0%)'})),
      transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('1.0s 100ms ease')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(200%)' }))
      ])
    ])]
})
export class HomeComponent implements OnInit {
  visible:boolean = true;
  currentState = 'initial';
  projetosList:any= []
  projetoSelecionado:any
  fragment: string='';
  activatedRoute: any;
  constructor() { }

  
  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
  ngOnInit(): void{}
  
}
