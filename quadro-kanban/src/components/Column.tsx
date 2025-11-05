import type { Card } from "../types";
import CardItem from "./CardItem";

interface ColumnProps {
  title: string;
  cards: Card[];
  onDropCard: (cardId: string, newColumn: string) => void;
  onRemoveCard: (columnName: string, cardId: string) => void; // 🆕
}

const Column = ({ title, cards, onDropCard, onRemoveCard }: ColumnProps) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");
    onDropCard(cardId, title);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>{title}</h2>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          onDragStart={(e, id) => e.dataTransfer.setData("cardId", id)}
          onRemove={() => onRemoveCard(title, card.id)} // botão de remover
        />
      ))}
    </div>
  );
};

export default Column;
