import {Component, Input} from '@angular/core';

@Component({
    selector: 'copy-tooltip',
    standalone: true,
    imports: [],
    templateUrl: './copy-tooltip.component.html',
    styleUrl: './copy-tooltip.component.scss'
})
export class CopyTooltipComponent {
    @Input() valueToCopy: string = ''

    public copyToClipboard() {
        navigator.clipboard.writeText(this.valueToCopy);

    }

}
