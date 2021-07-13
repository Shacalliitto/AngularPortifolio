import { Router } from '@angular/router';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  animations: [
    trigger('slide', [
      state('hide', style({ transform: 'translateX(100vh)' })),
      state('show', style({ transform: 'translateX(0%)' })),
      transition('* => *', animate(400))
    ])
  ]
})
export class NavComponent implements OnInit {

  fragmentSetDynamically: any='projetos';
  constructor(public router: Router) { 
    router.events.forEach((event) => {
      console.log(event)
    });
    this.onResize()
  }

  ngOnInit(): void {
  }

  screenHeight:any
  screenWidth:any
  activeSlide:any
  pages:any
  activeClass:any

  @HostListener('window:resize', ['$event'])
    onResize(event?:any){
      this.screenWidth = window.innerWidth
      //console.log(this.screenWidth);
      if(this.screenWidth < 400) {
         this.activeSlide = 'hide'
      }else{
        this.activeSlide = 'show'
      }
    }

  menuController() {
    if (this.activeSlide == 'hide') {
      this.activeSlide = 'show'
    } else if (this.activeSlide == 'show') {
      this.activeSlide = 'hide'
    }
  }

  animateIcon(){
    console.log('Clicado!')
  }
  
}

type navbarType = 'hide' | 'show'
