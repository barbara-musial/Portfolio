import {Component} from '@angular/core';
import {SliderComponent} from "../slider/slider.component";

@Component({
    selector: 'experience-card',
    standalone: true,
    imports: [
        SliderComponent
    ],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

}
