import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'type-delete-text-cmp',
    standalone: true,
    imports: [],
    templateUrl: './type-delete-text-cmp.component.html',
    styleUrl: './type-delete-text-cmp.component.scss'
})
export class TypeDeleteTextCmpComponent {
    @ViewChild("textElement") textElement!: ElementRef;
    @ViewChild("blinkElement") blinkElement!: ElementRef;

    @Input() wordArray: string[] = [];
    @Input() textColor = "black";
    @Input() fontFamily = '\'Manrope\', sans-serif'
    @Input() fontSize = "20px";
    @Input() blinkWidth = "2px";

    private typingSpeedMilliseconds = 600;
    private deleteSpeedMilliseconds = 600;
    private i = 0;

    constructor(private renderer: Renderer2) {
    }

    ngAfterViewInit(): void {
        this.initVariables();
        this.typingEffect();
    }

    private initVariables(): void {
        this.renderer.setStyle(
            this.textElement.nativeElement,
            "color",
            this.textColor
        );
        this.renderer.setStyle(
            this.textElement.nativeElement,
            "font-size",
            this.fontSize
        );
        this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");

        this.renderer.setStyle(
            this.blinkElement.nativeElement,
            "border-right-width",
            this.blinkWidth
        );
        this.renderer.setStyle(
            this.blinkElement.nativeElement,
            "border-right-color",
            this.textColor
        );
        this.renderer.setStyle(
            this.blinkElement.nativeElement,
            "font-size",
            this.fontSize
        );
    }

    private typingEffect(): void {
        const word = this.wordArray[this.i].split("");
        const loopTyping = () => {
            if (word.length > 0) {
                this.textElement.nativeElement.innerHTML += word.shift();
            } else {
                this.deletingEffect();
                return;
            }
            setTimeout(loopTyping, this.typingSpeedMilliseconds);
        };
        loopTyping();
    }

    private deletingEffect(): void {
        const word = this.wordArray[this.i].split("");
        // @ts-ignore
        const loopDeleting = () => {
            if (word.length > 0) {
                word.pop();
                this.textElement.nativeElement.innerHTML = word.join("");
            } else {
                this.i = this.wordArray.length > this.i + 1 ? this.i + 1 : 0;

                this.typingEffect();
                return false;
            }
            setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
        };
        loopDeleting();
    }
}
