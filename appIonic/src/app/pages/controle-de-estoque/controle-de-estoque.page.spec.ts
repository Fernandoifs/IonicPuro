import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleDeEstoquePage } from './controle-de-estoque.page';

describe('ControleDeEstoquePage', () => {
  let component: ControleDeEstoquePage;
  let fixture: ComponentFixture<ControleDeEstoquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControleDeEstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
