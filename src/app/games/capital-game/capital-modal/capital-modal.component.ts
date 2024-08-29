import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'capital-modal',
    templateUrl: './capital-modal.component.html',
    styleUrls: ['./capital-modal.component.scss']
}) 
export class CapitalModalComponent {
    @Input() public isOpen: boolean = false;
    @Input() public highScoresList: Array<number> = [];
    @Output() public closeModal: EventEmitter<void> = new EventEmitter<void>();
    
    public onCloseModal(): void {
        this.closeModal.emit()
    }
}