import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportarNotasPage } from './importar-notas.page';

describe('ImportarNotasPage', () => {
  let component: ImportarNotasPage;
  let fixture: ComponentFixture<ImportarNotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImportarNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
