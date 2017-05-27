import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'VND'
})
export class VNDPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }
    const r = value.toString().split('').reverse();
    return r
      .reduce((a, b, i, g) => !(i % 3) ? a.concat([g.slice(i, i + 3)]) : a, [])
      .map(array => array.reverse())
      .map(array => array.join(''))
      .reverse()
      .join('.')
      .concat(' VND');
  }

}
