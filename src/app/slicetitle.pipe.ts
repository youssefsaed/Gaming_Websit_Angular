import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicetitle'
})
export class SlicetitlePipe implements PipeTransform {

  transform(title:string): string {

    return  title.split(' ').slice(0,3).join(' ')
    
  }

}
