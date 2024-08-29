import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'cell-tictac',
    template: './cell.component.html',
    styleUrls: ['./cell.component.scss']
})
export class CellComponent {
    @Input() public cell: string | undefined;
    @Input() public row: number | undefined;
    @Input() public col: number | undefined;
    @Output() public cellClick: EventEmitter<{row: number | undefined, col: number | undefined}> = new EventEmitter();

    public clickCell() {
        this.cellClick.emit({ row: this.row, col: this.col })
    }
    
}