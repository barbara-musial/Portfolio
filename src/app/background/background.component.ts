import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'background',
    standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
    templateUrl: './background.component.html',
    styleUrl: './background.component.scss'
})
export class BackgroundComponent {
    @Input() showPhoto = false;
    @Input() doubleColorBg = false;
}
