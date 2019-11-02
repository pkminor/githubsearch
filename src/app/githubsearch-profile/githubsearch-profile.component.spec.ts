import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchProfileComponent } from './githubsearch-profile.component';

describe('GithubsearchProfileComponent', () => {
  let component: GithubsearchProfileComponent;
  let fixture: ComponentFixture<GithubsearchProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubsearchProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
