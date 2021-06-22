// import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import { Cats, ICard } from './utilities/interfaces';
import { CardsGrid } from './components/cards-grid/cards-grid.component';
import { ScoreBoard } from './components/scoreboard/scoreboard.component';

function App() {
  // * The Cat API
  const baseUrl: string = 'https://api.thecatapi.com/v1/images/search?';
  const limit: number = 9;
  const size: string = 'small';
  const apiUrl: string = `${baseUrl}size=${size}&limit=${limit}`;

  // * Hooks
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Couldnt find the url');
        setCards(initCards(await response.json()));
        setLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  const initCards = (cards: Cats[]): ICard[] => {
    let minifiedCards: ICard[] = [];
    for (const card of cards) {
      const { id, url } = card;
      minifiedCards.push({ id, image: url, touched: false });
    }
    console.log(minifiedCards);

    return minifiedCards;
  };

  return (
    <div className="App">
      <ScoreBoard />
      {loading ? 'loading...' : <p>loaded</p>}
      <CardsGrid cards={cards} />
    </div>
  );
}

export default App;
