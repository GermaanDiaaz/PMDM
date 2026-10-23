import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryItem } from './berry-item';

describe('BerryItem', () => {
  let component: BerryItem;
  let fixture: ComponentFixture<BerryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
