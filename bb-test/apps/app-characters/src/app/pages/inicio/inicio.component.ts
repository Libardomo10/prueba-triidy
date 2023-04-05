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
  public listCharactersSelected: Array<any> = [];
  public results!: number | undefined;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.listCharactersSelected = [];
    this.rickMortyService.getListCharacters().subscribe((response: ServiceResponse) => {
      console.log(response);
      console.log(response.info);
      this.characters = response.results;
      this.results = response.info.count;
    });
  }

  charactersSelected(id: number) {
    let indexToRemove = this.characters.findIndex(resp => resp.id == id);
    let charactersSelected = this.characters.splice(indexToRemove, 1);
    this.listCharactersSelected.push(charactersSelected[0]);
  }

  removeCharacterSelected(id: number) {
    let indexToRemove = this.listCharactersSelected.findIndex(resp => resp.id == id);
    let characterToRemove = this.listCharactersSelected.splice(indexToRemove, 1);
    console.log(characterToRemove);
    
    this.characters.push(characterToRemove[0]);
  }
}
