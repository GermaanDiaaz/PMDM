import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { BerryService } from '../../../services/berry';
import { ListItem } from '../../../interfaces/api';
import { BerryItemComponent } from '../berry-item/berry-item';

@Component({
  selector: 'app-berry-list',
  standalone: true,
  imports: [BerryItemComponent],
  templateUrl: './berry-list.html',
  styleUrl: './berry-list.css'
})
export class BerryListComponent implements OnInit {
  private berryService = inject(BerryService);
  private cdr = inject(ChangeDetectorRef);
  berryList: ListItem[] = [];

  ngOnInit(): void {
    this.berryService.getBerryList().subscribe({
      next: (data) => {
        this.berryList = data.results;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }
}