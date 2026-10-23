import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListItem } from '../../../interfaces/api';

@Component({
  selector: 'app-berry-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './berry-item.html',
  styleUrl: './berry-item.css'
})
export class BerryItemComponent {
  @Input({ required: true }) item!: ListItem;

  get berryId(): string {
    const parts = this.item.url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
}