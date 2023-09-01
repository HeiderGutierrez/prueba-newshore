import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFixedComponent } from './banner-fixed.component';

describe('BannerFixedComponent', () => {
  let component: BannerFixedComponent;
  let fixture: ComponentFixture<BannerFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
