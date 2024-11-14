import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEffectComponent } from './route-effect.component';

describe('RouteEffectComponent', () => {
  let component: RouteEffectComponent;
  let fixture: ComponentFixture<RouteEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
