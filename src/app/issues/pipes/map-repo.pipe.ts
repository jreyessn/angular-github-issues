import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapRepo'
})
export class MapRepoPipe implements PipeTransform {

  /**
   * 
   * @param {string} value Repository Url
   * @returns
   */
  transform(value: string): string {
    return value.split('/repos/')[1] || '';
  }

}
