import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesList } from './jokes-list';

describe('JokesList', () => {
  let component: JokesList;
  let fixture: ComponentFixture<JokesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
