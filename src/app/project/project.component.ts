import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {    
    this.projetosList=[{
      id: 'Site 0',
      titulo: 'Nenhum site foi adicionado.',
      descricao: 'No momento não há nada aqui, mas vai ter, eu juro!',
      foto: '',
      link: ''
    }
    // {
    //   id: 'Picture House',
    //   titulo: 'Picture House',
    //   descricao: 'Fiz o site todo nesse aqui.',
    //   foto: 'url(../assets/projetos/picture_house/picture_house.jpg)',
    //   link: 'https://shacalliitto.github.io/heros/Pages/phindex.html'
    // }
  ]
    this.projetoSelecionado=this.projetosList[0]
    this.changeState()
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  showDiv(projetoId:any) {
    this.projetoSelecionado=this.projetosList.find((projeto:any)=>projeto.id==projetoId)
    console.log(this.projetoSelecionado) 
  }
}
