import { Component, OnInit } from '@angular/core';
import { RickmortyService } from './service/rickmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  personajes:any;
  stateService: any;
  
  constructor
  ( private rickmortyservice: RickmortyService)
  { }


  ngOnInit(){
    this.rickmortyservice.getCharacters().subscribe((_personajes:any)=>{
      console.log(_personajes)
      this.personajes = _personajes.results;
      this.stateService.setPersonajes(this.personajes);
    })
  }
}
