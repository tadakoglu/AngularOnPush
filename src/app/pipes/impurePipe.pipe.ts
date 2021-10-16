import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure:false
})
export class ImpurePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('impure pipe fired')
    return value;
  }

}
