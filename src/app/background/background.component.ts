import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'background',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './background.component.html',
    styleUrl: './background.component.scss'
})
export class BackgroundComponent {
    @Input() showPhoto = false;
}
