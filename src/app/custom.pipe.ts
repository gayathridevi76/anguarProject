import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name:string,gender: string): string {
    if(gender == "male")
    {
      return "Mrs." + name
    }
    else 
    {
      return "Miss." + name
    
    }
  }

}
