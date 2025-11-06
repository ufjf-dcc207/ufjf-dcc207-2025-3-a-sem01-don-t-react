import { useState } from "react";
import type { Card } from "../types";
import CardItem from "./CardItem";

interface ColumnProps {
  title: string;
  cards: Card[];
  onDropCard: (cardId: string, newColumn: string) => void;
  onRemoveCard: (columnName: string, cardId: string) => void; // 🆕
  onAddCard: (title: string, columnName: string) => void;
}

const Column = ({ title, cards, onDropCard, onRemoveCard, onAddCard }: ColumnProps) => {
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");
    onDropCard(cardId, title);
  };

  const [newTitle, setNewTitle] = useState("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleAddCard = () => {
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    onAddCard(trimmed, title);
    setNewTitle("");
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddCard();
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
      <div className="new-card">
        <input
          type = "text"
          placeholder="Novo card"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          <button onClick={handleAddCard}>+</button>
      </div>
    </div>
  );
};

export default Column;
