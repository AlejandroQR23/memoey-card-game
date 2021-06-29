// import React from 'react';
import { ICard } from '../../utilities/interfaces';
import { CardItem } from '../card-item/card-item.component';

export const CardsGrid = ({ cards, handleCardClick }: { cards: ICard[]; handleCardClick(id: string): void }) => (
  <div className="card-grid row row-cols-2 row-cols-md-3 g-3">
    {cards.map((card) => (
      <CardItem key={card.id} image={card.image} id={card.id} handleCardClick={handleCardClick} />
    ))}
  </div>
);
