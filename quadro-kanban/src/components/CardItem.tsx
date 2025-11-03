// Esse arquivo irá conter os cards

import type { Card } from '../types';


/**
 * Essa função "onDragStart", é acionada quando arrasta um elemento.
 * Dá uma lida nesses links aqui se não souber o que faz: 
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event
 * https://dev.to/cristiansifuentes/mastering-mouse-events-in-react-typescript-click-drag-hover-and-beyond-21a6
*/

interface CardItemProps {
    card: Card;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, cardId: string ) => void;
}

const CardItem = ({ card, onDragStart }: CardItemProps) => {
    return (
        <div className='card' draggable onDragStart={(e) => onDragStart(e, card.id)}>
            <p>{card.title}</p>
        </div>
    );
};

export default CardItem;