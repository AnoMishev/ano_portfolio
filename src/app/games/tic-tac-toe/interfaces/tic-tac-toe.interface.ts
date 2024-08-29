export type Cell = string;

// Define a type for a row of cells, which is an array of three cells.
export type Row = [Cell, Cell, Cell];

// Define a type for the entire grid, which is an array of three rows.
export type Grid = [Row, Row, Row];

export type PushedArray = {
    row: number,
    col: number

}