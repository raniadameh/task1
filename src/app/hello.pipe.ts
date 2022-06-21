import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(value: string, operation?: any): any {
    if ('lowercase' == operation){
      return value.toLowerCase();
    }  
    else if ('uppercase' == operation) {
      return value.toUpperCase();
    }
    return value;
  }
}
