import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(contact: Array<IContact>, param:string){
   if(param == 'first' ){
     return contact.sort((a,b) => a.firstName<b.firstName ? -1:1)
   }
   else if ( param == 'reverseFirst'){
     return contact.reverse()
   }
   if(param == 'last' ){
    return contact.sort((a,b) => a.lastName.toLowerCase()>b.lastName.toLowerCase() ? 1:-1)
  }
  else if ( param == 'reverseLast'){
    return contact.reverse()
  }
  if(param == 'number' ){
    return contact.sort((a,b) => a.phone>b.phone ? 1:-1)
  }
  else if ( param == 'reverseNumber'){
    return contact.reverse()
  }
   return contact
  }
}
