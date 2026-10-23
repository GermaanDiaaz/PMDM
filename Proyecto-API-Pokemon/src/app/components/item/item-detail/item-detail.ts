import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService } from '../../../services/item';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private itemService = inject(ItemService);
  private cdr = inject(ChangeDetectorRef);

  item: any = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.itemService.getItemDetail(id).subscribe({
        next: (data) => {
          this.item = data;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }
}