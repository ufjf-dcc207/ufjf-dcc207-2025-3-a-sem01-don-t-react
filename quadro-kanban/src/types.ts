// Esse arquivo irá centralizar as tipagens dos componentes do projeto

export type Card = {
    id: string;
    title: string;
};

export type Columns = {
    [key: string]: Card[];
}