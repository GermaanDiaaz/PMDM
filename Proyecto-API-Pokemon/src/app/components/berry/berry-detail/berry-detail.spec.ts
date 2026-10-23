import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryDetail } from './berry-detail';

describe('BerryDetail', () => {
  let component: BerryDetail;
  let fixture: ComponentFixture<BerryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
