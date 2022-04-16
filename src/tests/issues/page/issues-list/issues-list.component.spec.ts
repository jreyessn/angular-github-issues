import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesService } from '../../../../app/issues/services/issues.service';

import { IssuesListComponent } from '../../../../app/issues/page/issues-list/issues-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { environment } from '../../../../environments/environment';

jest.setTimeout(15000)

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let compiled: HTMLElement;
  let service: IssuesService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ 
        IssuesListComponent,
      ],
      providers: [ IssuesService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture   = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    service   = TestBed.inject(IssuesService)
    httpMock  = TestBed.inject(HttpTestingController)

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Debe de hacer match con el snapshot", () => {
    expect(compiled).toMatchSnapshot()
  })

  it("Debe mostrar el texto de que no se han encontrado Issues", () => {
    const p = compiled.querySelector(".grid p.text-secondary")
    expect(p?.textContent).toContain("No se han encontrado Issues")
  })

  // it("Debe de mostrar la cantidad de Issues traidos", (done) => {
  //   const items = [
  //     { url: "https://github.com/facebook/jest/issues/11607" },
  //     { url: "https://github.com/facebook/jest/issues/11607" },
  //     { url: "https://github.com/facebook/jest/issues/11607" },
  //     { url: "https://github.com/facebook/jest/issues/11607" },
  //     { url: "https://github.com/facebook/jest/issues/11607" },
  //   ]

  //   component.search("jest")
  //   component.data$.subscribe()
  //   const request = httpMock.expectOne(environment.api_github + 'search/issues?q=jest')
  //   request.flush({
  //     total_count:        5000,
  //     incomplete_results: true,
  //     items,
  //   })

  //   fixture.whenStable().then(() => { // wait for your async data
  //     fixture.detectChanges(); // refresh your fake template
  //     compiled = fixture.nativeElement;

  //     const p = compiled.querySelector("#count-issues")
  //     expect(p?.textContent).toContain("5,000 Issues")
      
  //     done()
  
  //   })



  // })


});
