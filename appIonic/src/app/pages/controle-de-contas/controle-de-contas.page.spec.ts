import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleDeContasPage } from './controle-de-contas.page';

describe('ControleDeContasPage', () => {
  let component: ControleDeContasPage;
  let fixture: ComponentFixture<ControleDeContasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControleDeContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
