import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false

})
export class MyfilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.productName.toLowerCase( ).indexOf(filter.productName.toLowerCase( )) !== -1);
}

}
