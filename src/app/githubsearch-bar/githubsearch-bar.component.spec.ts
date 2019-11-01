import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchBarComponent } from './githubsearch-bar.component';

describe('GithubsearchBarComponent', () => {
  let component: GithubsearchBarComponent;
  let fixture: ComponentFixture<GithubsearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubsearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
