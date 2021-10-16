import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  pure:true  /* default*/
})
export class PurePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('pure pipe fired')

    return value;
  }

}
