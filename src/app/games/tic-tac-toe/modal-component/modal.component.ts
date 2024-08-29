import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'modal-ctr',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class TicTacModalComponent {
    @Input() isEnded: boolean = false;
    @Input() isVictory: boolean = false;
    @Input() winnerName: string | undefined;
    @Output() restartGameEvent: EventEmitter<void> = new EventEmitter<void>();
    
    public restartGame() {
        this.restartGameEvent.emit();
    }
}

