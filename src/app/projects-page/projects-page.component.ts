import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";

@Component({
    selector: 'projects-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent
    ],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

    protected readonly TabType = TabType;
}
