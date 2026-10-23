import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemItem } from './item-item';

describe('ItemItem', () => {
  let component: ItemItem;
  let fixture: ComponentFixture<ItemItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
