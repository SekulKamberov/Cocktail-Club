import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})

export class AmountPipe implements PipeTransform {

  transform(q: any, d: any): number {
    let total: number = 0

    for (const dr of d) {
      total += dr.price * dr.quantity
    }

    /*d.map(o => {
      console.log(o)
        amount = o.cocktails.reduce((pre, cu) => pre += cu.price * cu.quantity, 0)
      })
    return amount */

    return total;
  }
}
