// Esse arquivo irá conter as colunas

import type { Card } from '../types';
import CardItem from './CardItem';


interface ColumnProps {
    title: string;
    cards: Card[];
    onDropCard: (cardId: string, newColumn: string) => void;
}

const Column = ({title, cards, onDropCard}: ColumnProps) => {
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const cardId = e.dataTransfer.getData("cardId");
        onDropCard(cardId, title);
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    return (
        <div className = "column" onDrop={handleDrop} onDragOver={handleDragOver}>
            <h2>{title}</h2>
            {cards.map((card) => (
                <CardItem
                key={card.id}
                card={card}
                onDragStart={(e, id) => e.dataTransfer.setData("cardId", id)}
                />
            ))}
        </div>
    );
};

export default Column;