import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodeListComponent } from './components/character-list-component/CharacterListComponent';

@Component({
  imports: [RouterOutlet, EpisodeListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('German_Diaz_Castro');
}
