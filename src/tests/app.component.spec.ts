import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Debe crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Debe hacer el match con el snapshot', () => {
    const fixture  = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot()
  });



});
