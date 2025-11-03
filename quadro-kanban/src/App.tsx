import { useState } from "react";
import Column from "./components/Column";
import type { Card, Columns } from "./types";


const App = () => {

  const [columns, setColumns] = useState<Columns>({
    "Backlog": [{id: "1", title: "Começando a ficar legal"}],
    "Em Desenvolvimento": [],
    "Em Revisão": [],
    "Em Teste": [],
    "Concluído": []
  });

  const handleDropCard = (cardId: string, newColumn: string) => {

    let draggedCard: Card | null = null;

    const updated: Columns = Object.fromEntries(
      Object.entries(columns).map(([colName, cards]) => {
        const filtered = cards.filter((c) => {
          if (c.id === cardId) draggedCard = c;
          return c.id !== cardId;
        });
        return [colName, filtered];
      })
    );

    if (draggedCard) {
      updated[newColumn] = [...(updated[newColumn] || []), draggedCard];
      setColumns(updated);
    }

  };

  return (
    <div className="board">
      {Object.entries(columns).map(([colName, cards]) => (
        <Column
        key = {colName}
        title = {colName}
        cards = {cards}
        onDropCard = {handleDropCard}
        />
      ))}
    </div>
  );
  
};

export default App;