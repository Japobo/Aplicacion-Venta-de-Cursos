import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoFormPage } from './curso-form.page';

describe('CursoFormPage', () => {
  let component: CursoFormPage;
  let fixture: ComponentFixture<CursoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
