import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character_list_response';

@Component({
  imports: [],
  selector: 'CharacterItemComponent',
  styleUrl: './CharacterItemComponent.css',
  templateUrl: './CharacterItemComponent.html',
})
export class CharacterItemComponent{
  character = input<Character>();
}