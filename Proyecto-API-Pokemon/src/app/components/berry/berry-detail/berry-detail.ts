import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BerryService } from '../../../services/berry';

@Component({
  selector: 'app-berry-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './berry-detail.html',
  styleUrl: './berry-detail.css'
})
export class BerryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private berryService = inject(BerryService);
  private cdr = inject(ChangeDetectorRef);

  berry: any = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.berryService.getBerryDetail(id).subscribe({
        next: (data) => {
          this.berry = data;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }
}