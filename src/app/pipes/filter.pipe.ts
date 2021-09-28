
import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/cardetails';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarDetails[], filterText: string): CarDetails[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:CarDetails)=>
      (p.brandName.toLocaleLowerCase().indexOf(filterText)
      && p.colorName.toLocaleLowerCase().indexOf(filterText))!==-1):value;
  }

}
