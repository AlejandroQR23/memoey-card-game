import './cards-grid.styles.scss';

import { ICard } from '../../utilities/interfaces';
import { CardItem } from '../card-item/card-item.component';

export const CardsGrid = ({ cards, handleCardClick }: { cards: ICard[]; handleCardClick(id: string): void }) => (
  <div className="cards-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
    {cards.map((card) => (
      <CardItem key={card.id} image={card.image} id={card.id} handleCardClick={handleCardClick} />
    ))}
  </div>
);
