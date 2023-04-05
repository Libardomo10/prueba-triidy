import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { ServiceResponse } from '../../shared/interface/service-response';

@Component({
  selector: 'bb-test-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  public characters: Array<any> = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.getListCharacters().subscribe((response: ServiceResponse) => {
      console.log(response);
      console.log(response.info);
      this.characters = response.results;
    });
  }

}
