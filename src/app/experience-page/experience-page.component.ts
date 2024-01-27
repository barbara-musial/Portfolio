import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {TabType} from "../../enums/tabType.enum";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
    selector: 'app-experience-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent
    ],
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {

    protected readonly TabType = TabType;
}
