import { TestBed } from '@angular/core/testing';
import { Berry } from './berry';

describe('Berry', () => {
  let service: Berry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Berry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
