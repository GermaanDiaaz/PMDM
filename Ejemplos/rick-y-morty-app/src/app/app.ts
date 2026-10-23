import { Component } from '@angular/core';
import { EpisodeListComponent } from './components/list/episode-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  title = 'rick-and-morty-app';
}