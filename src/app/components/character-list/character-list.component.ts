import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList: Results;

  currentPage: string = '1';

  nextPage: any;
  prevPage: any;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacterPagination(this.currentPage).subscribe(response => {
      this.characterList = response.results;
      this.nextPage = response.info.next;
      this.prevPage = response.info.prev;
    })
  }

  aumentarPagina() {
    // this.currentPage =
  }

}
