import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName',
  standalone: false
})
export class MarketNamePipe implements PipeTransform {

  markets = [
    {id: 'amazon_price', name: 'Amazon' },
    {id: 'cardmarket_price', name: 'Cardmarket' },
    {id: 'coolstuffinc_price', name: 'CoolStuffInc' },
    {id: 'ebay_price', name: 'Ebay' },
    {id: 'tcgplayer_price', name: 'TCGPlayer' },
  ]

  transform(value: string): string {
    const market = this.markets.find(m => m.id === value);
    return market?.name || '';
  }

}
