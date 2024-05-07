import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customername'
})
  
export class CustomerNamePipe implements PipeTransform {

transform(fullname: String, gender: String): String {
    let names = fullname.split(' ');
    let lastname = names.pop();
    let salutation = '';
    if (gender == "Male") {
    salutation = "Mr. ";
    } else if (gender == "Female") {
    salutation = "Ms. ";
    }
    return `${salutation} ${lastname}, ${names.join(' ')}`;
}
}