import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedUsersListComponent } from './saved-users-list.component';

describe('SavedUsersListComponent', () => {
  let component: SavedUsersListComponent;
  let fixture: ComponentFixture<SavedUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedUsersListComponent]
    });
    fixture = TestBed.createComponent(SavedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
