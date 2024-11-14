import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResolverComponent } from './route-resolver.component';

describe('RouteResolverComponent', () => {
  let component: RouteResolverComponent;
  let fixture: ComponentFixture<RouteResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteResolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
