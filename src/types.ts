// Esse arquivo irá centralizar as tipagens dos componentes do projeto

export interface Card {
    id: string;
    title: string;
};

export interface Columns {
    [key: string]: Card[];
}