import {Pipe, PipeTransform} from '@angular/core';
import {Track} from '../../track.model';

@Pipe({name: 'orderBy', pure: false})
export class OrderBy implements PipeTransform {

  transform(input:any, sortType: string, sortDirection: string = 'asc'): any{
    // check if we got an array
    if (!Array.isArray(input)) {
      return input;
    }

    // define the type we get
    let list: Track[] = input;

    // sorting magic
    list.sort(function(a, b) {
      switch (sortType) {
        case 'name':
          // sort by name field
          if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1
          }
          if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
          }
        case 'genre':
          // sort by genre field
          if (a.PrimaryGenre.toLowerCase() < b.PrimaryGenre.toLowerCase()) {
            return -1
          }
          if (a.PrimaryGenre.toLowerCase() > b.PrimaryGenre.toLowerCase()) {
            return 1;
          }
        case 'price':
          // sort by price field
          if (a.Price < b.Price) {
            return -1;
          }
          if (a.Price > b.Price) {
            return 1;
          }
        case 'length':
          // sort by length field
          if (a.Length < b.Length) {
            return -1
          }
          if (a.Length > b.Length) {
            return 1;
          }
      }

      return 0;
    });


    // Should we sort by reverse?
    if (sortDirection !== 'asc') {
      list.sort().reverse();
    }

    // finished, return the sorted list
    return list;
  }
}
