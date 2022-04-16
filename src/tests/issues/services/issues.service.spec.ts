import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IssuesService } from '../../../app/issues/services/issues.service';

jest.setTimeout(30000);

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it("Debe verificar si alguno de los titulos de los objetos obtenidos tiene el filtro aplicado", (done) => {
    service.list("rxjs").subscribe(value => {
      expect(
        value.items.map(item => item.title.toLowerCase())
      ).toContain("rxjs")
      done()
    })
  })

});
