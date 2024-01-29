import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";
import {NgClass, NgIf} from "@angular/common";
import {CopyTooltipComponent} from "../copy-tooltip/copy-tooltip.component";
import {CalculatorComponent} from "../calculator/calculator.component";

@Component({
    selector: 'contact-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent,
        NgIf,
        NgClass,
        CopyTooltipComponent,
        CalculatorComponent
    ],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
    protected readonly TabType = TabType;
    public contactFormOpen = false;


    public toggleFormOpen(event: MouseEvent) {
        event.preventDefault();
        this.contactFormOpen = !this.contactFormOpen
    }
}
