// import React from 'react';
import { ICard } from '../../utilities/interfaces';
import { CardItem } from '../card-item/card-item.component';

export const CardsGrid = ({ cards }: { cards: ICard[] }) => (
  <div className="card-grid row row-cols-2 row-cols-md-3 g-3">
    {cards.map((card, index) => (
      <CardItem key={index} image={card.image} />
    ))}
  </div>
);
