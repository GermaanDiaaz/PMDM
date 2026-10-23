import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryList } from './berry-list';

describe('BerryList', () => {
  let component: BerryList;
  let fixture: ComponentFixture<BerryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryList],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
