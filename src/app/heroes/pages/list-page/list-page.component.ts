import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  
  constructor(
    private heroesService:HeroService
  ){}
  public heroes:Hero[]=[];


  ngOnInit(): void {
    this.heroesService.getHeores().subscribe(heroes=> this.heroes = heroes)
  }
  




}
