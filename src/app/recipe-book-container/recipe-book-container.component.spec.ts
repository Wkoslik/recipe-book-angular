import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookContainerComponent } from './recipe-book-container.component';

describe('RecipeBookContainerComponent', () => {
  let component: RecipeBookContainerComponent;
  let fixture: ComponentFixture<RecipeBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
