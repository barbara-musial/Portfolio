import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";
import {FlipCardComponent} from "../flip-card/flip-card.component";
import {DescriptionCardComponent} from "../description-card/description-card.component";
import {EducationCardComponent} from "../education-card/education-card.component";
import {ExperienceCardComponent} from "../experience-card/experience-card.component";

@Component({
    selector: 'app-about-me-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent,
        FlipCardComponent,
        DescriptionCardComponent,
        EducationCardComponent,
        ExperienceCardComponent
    ],
    templateUrl: './about-me-page.component.html',
    styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent {

    protected readonly TabType = TabType;
}
