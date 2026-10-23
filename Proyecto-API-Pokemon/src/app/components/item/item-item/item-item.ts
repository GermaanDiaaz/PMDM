import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListItem } from '../../../interfaces/api';

@Component({
  selector: 'app-item-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-item.html',
  styleUrl: './item-item.css'
})
export class ItemItemComponent {
  @Input({ required: true }) item!: ListItem;

  get itemId(): string {
    const parts = this.item.url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
}