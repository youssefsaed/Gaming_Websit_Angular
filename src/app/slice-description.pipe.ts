import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceDescription'
})
export class SliceDescriptionPipe implements PipeTransform {

  transform(description:string):string  {

    return description.split(' ').slice(0,2).join(' ')+'...'
    
  }

}
