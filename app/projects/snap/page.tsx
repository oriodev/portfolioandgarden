"use client"

// SNAP TODO:
// KEYBOARD SUPPORT.
// WIN OVERLAY.
// INTSTRUCTION/WELCOME OVERLAY.
// MULTIPLAYER.
// MULTIPLAYER OPTION CHOICE IN WELCOME OVERLAY.

import { Suite } from "@/types/types.snap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [cardOne, setCardOne] = useState<Card | null>(null);
  const [cardTwo, setCardTwo] = useState<Card | null>(null);
  const [computerSnapTimeout, setComputerSnapTimeout] = useState<NodeJS.Timeout | null>();
  const [snapDetected, setSnapDetected] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  class Card {
    number;
    suite;

    constructor(number: number, suite: Suite) {
      this.number = number;
      this.suite = suite;
    }

    getImageUrl() {
      return `/projects/snap/${this.suite}/${this.number}.png`
    }

    getFlippedUrl() {
      return '/projects/snap/7.png'
    }
  }

  class Deck {
    cards;

    constructor() {
      this.cards = this.initialiseDeck();
    }

    initialiseDeck() {
      const suite = [Suite.clubs, Suite.diamonds, Suite.hearts, Suite.spades];
      const deck = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= 13; j++) {
          deck.push(new Card(j, suite[i]))
        }
      }

      return deck;
    }

    checkIfEmpty(): boolean {
      return this.cards.length < 1;
    }

    firstCard() {
      const index = Math.floor(Math.random() * this.cards.length);
      const card = this.cards[index];
      return card;
    }

    nextCard(cardOne: Card | null) {
      if (cardOne) this.remove(cardOne);
      const index = Math.floor(Math.random() * this.cards.length);
      const newCard = this.cards[index];
      return newCard;
    }

    remove(card: Card) {
      this.cards = this.cards.filter((c) => c !== card);
    }
  }

  class Game {
    deck;

    constructor() {
      this.deck = new Deck();
    }

    startGame() {
      return this.deck.firstCard();
    }

    turnDeck(cardOne: Card | null) {
      return this.deck.nextCard(cardOne);
    }

    checkSnap(cardOne: Card | null, cardTwo: Card | null) {
      if (!cardOne || !cardTwo) return;
      return cardOne.number === cardTwo.number;
    }
  }

  const [game] = useState(new Game());

  useEffect(() => {
    const initialCard = game.startGame();
    setCardOne(initialCard);
  }, [game]);

  const turnCard = () => {
    setSnapDetected(false);

    if (computerSnapTimeout) {
      clearTimeout(computerSnapTimeout);
      setComputerSnapTimeout(null);
    }
    
    const newCard = game.turnDeck(cardOne);
    setCardTwo(cardOne);
    setCardOne(newCard);

    const isWin = game.checkSnap(newCard, cardOne);

    if (isWin) {
      setSnapDetected(true);
      computerSnap();
    } else {
      setSnapDetected(false);
    }

    if (game.deck.checkIfEmpty()) {
      setGameOver(true);
    }
  }

  const computerSnap = () => {
    const randomDelay = Math.floor(Math.random() * 2000) + 1000;
    const timeout = setTimeout(() => {
      setComputerScore(prev => prev + 1);
      setSnapDetected(false);
    }, randomDelay)
    
    setComputerSnapTimeout(timeout);
  }

  const userSnap = () => {
    if (snapDetected) {
      setUserScore(prev => prev + 1)
      setSnapDetected(false);

      if (computerSnapTimeout) {
        clearTimeout(computerSnapTimeout);
        setComputerSnapTimeout(null);
      }
    }

  }

  return (
    <main className="flex items-center justify-center min-h-[80vh] bg-white">
      <div className="w-11/12 h-11/12 bg-gradient-to-tr from-pink-100 to-indigo-200 p-30 rounded-lg flex flex-col justify-center items-center gap-5">
        {/* TOP BAR */}
        <section className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-bold">🃏 SNAP!</h1>
          <p className="font-bold text-2xl">{userScore} vs {computerScore}</p>
          {gameOver && (
            <p>game over!!</p>
          )}
        </section>

        <section className="flex gap-5">
          {
            cardOne ? (
              <div className="relative w-24 h-32">
                <Image
                  src={cardOne.getImageUrl()}
                  alt={cardOne.number + cardOne.suite}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="hover:cursor-pointer"
                  onClick={turnCard}
                />
              </div>
            ) : (
              <div className="relative w-24 h-32">
                <Image
                  src={'/projects/snap/7.png'}
                  alt={'flipped card'}
                  fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="hover:cursor-pointer"
                />
              </div>
            )
          }

          {
            cardTwo && (
              <div className="relative w-24 h-32">
                <Image
                  src={cardTwo.getImageUrl()}
                  alt={cardTwo.number + cardTwo.suite}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )
          }

        </section>

        <section>
          <div
            onClick={userSnap}
            className="w-full text-center p-5 pl-25 pr-25 rounded-lg font-bold bg-indigo-300 effect-shine hover:cursor-pointer transition"
          >
            SNAP
          </div>
        </section>
      </div>
    </main>
  );
}
