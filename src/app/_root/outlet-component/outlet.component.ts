import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'outlet-component',
    templateUrl: './outlet.component.html',
    styleUrls: ['./outlet.component.scss']
})
export class OutletComponent {
    isLeftMenuOpen: boolean = false;
    isRightMenuOpen: boolean = false;

    public openLeftMenu(): void {
        this.isLeftMenuOpen = !this.isLeftMenuOpen;
    }

    public openRightMenu() {
        this.isRightMenuOpen = !this.isRightMenuOpen;
    }
}