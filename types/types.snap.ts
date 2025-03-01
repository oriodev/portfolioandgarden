// DECK.
export interface Deck {
  cards: Card[]
}

// CARD.
export interface Card {
  number: number,
  suite: Suite,
}

// SUITE.
export enum Suite {
  clubs = "clubs",
  hearts = "hearts",
  spades = "spades",
  diamonds = "diamonds"
}