import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";

@Component({
    selector: 'contact-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent
    ],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

    protected readonly TabType = TabType;
}
