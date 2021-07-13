import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitapiService } from '../gitapi.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  visible:boolean = true;
  currentState = 'initial';
  projetosList:any= []
  projetoSelecionado:any
  fragment: string='';
  activatedRoute: any;
  gitData: any=[];

  constructor(public gitApi: GitapiService, private router: Router) { 
    console.log(router.isActive(router.url,true))
  }

  ngOnInit(): void {    
    this.gitApi.getGithubRepo().subscribe((response) => {
      this.gitData=response
    })

    this.projetoSelecionado=this.gitData[0]
    this.changeState()
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  showDiv(projetoId:any) {
    this.projetoSelecionado=this.gitData.find((projeto:any)=>{
      return projeto.id==projetoId})
  }
}
