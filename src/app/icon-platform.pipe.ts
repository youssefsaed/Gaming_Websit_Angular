import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPlatform'
})
export class IconPlatformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
