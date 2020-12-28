import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  transform(price: number): string {
    return price.toFixed(2).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

}
