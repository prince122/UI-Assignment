import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(arr: any[], searchText: string,fieldName?:string,fieldName2?:string): any[] {
    if (!arr) return [];
    if (!searchText) return arr;
    searchText = searchText.toLowerCase();
    return arr.filter(item => {
      // item[fieldName].toLowerCase().includes(searchText)
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }

}
