import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/CharacterService';
import { Character } from '../../interfaces/character_list_response';
import { CharacterListComponent } from '../character-item-component/CharacterItemComponent';

@Component({
  imports: [CharacterListComponent],
  selector: 'app_character_list_component',
  styleUrl: './CharacterListComponent.css',
  templateUrl: './CharacterListComponent.html',
})
export class EpisodeListComponent implements OnInit {

  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(resp => {
      this.characterList.set(resp.results);
    });
  }
}