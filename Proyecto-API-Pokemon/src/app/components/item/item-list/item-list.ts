import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemService } from '../../../services/item';
import { ListItem } from '../../../interfaces/api';
import { ItemItemComponent } from '../item-item/item-item';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemItemComponent],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemListComponent implements OnInit {
  private itemService = inject(ItemService);
  private cdr = inject(ChangeDetectorRef);
  itemList: ListItem[] = [];

  ngOnInit(): void {
    this.itemService.getItemList().subscribe({
      next: (data) => {
        this.itemList = data.results;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }
}