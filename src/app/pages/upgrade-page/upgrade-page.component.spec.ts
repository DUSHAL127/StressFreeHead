import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePageComponent } from './upgrade-page.component';

describe('UpgradePageComponent', () => {
  let component: UpgradePageComponent;
  let fixture: ComponentFixture<UpgradePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradePageComponent]
    });
    fixture = TestBed.createComponent(UpgradePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
