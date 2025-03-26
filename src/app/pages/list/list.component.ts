import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  cards: Card[] = [];
  offset = 0;
  cardTextFC = new FormControl('');
  constructor (private cardService: CardService){}
  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((res) =>{
      this.cards = [];
      this.searchCards(res);
    });
    this.searchCards();
  }

  onScroll() {
    this.offset += 100;
    this.searchCards();
  }

  searchCards(cardName: string | null = null) {
    this.cardService.getCards(cardName, this.offset).subscribe( (res) =>{
      this.cards = [...this.cards, ...res];
    });
  }

}
