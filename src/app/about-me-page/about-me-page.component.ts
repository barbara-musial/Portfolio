import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";

@Component({
    selector: 'app-about-me-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent
    ],
    templateUrl: './about-me-page.component.html',
    styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent {

    protected readonly TabType = TabType;
}
