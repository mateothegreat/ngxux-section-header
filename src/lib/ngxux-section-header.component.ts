import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxuxSectionHeaderButton }               from './ngxux-section-header-button';

@Component({

    selector: 'ngxux-section-header',
    template: `

        <div class="wrapper">

            <div *ngIf="backPath"
                 [routerLink]="[ backPath ]"
                 class="back">

                <mat-icon>arrow_back_ios</mat-icon>

            </div>

            <div class="left">

                <div *ngIf="title" class="first">{{ title }}</div>
                <div *ngIf="description" class="second">{{ description }}</div>

            </div>

            <div class="right">

                <button *ngFor="let button of buttons"
                        mat-raised-button
                        [color]="button.color"
                        [routerLink]="button.path ? [ button.path ] : null"
                        (click)="_onButtonClick(button)">

                    {{ button.label }}

                </button>

            </div>

        </div>

    `,
    styleUrls: [ './ngxux-section-header.component.scss' ]

})
export class NgxuxSectionHeaderComponent {

    @Input() public backPath: string;
    @Input() public title: string;
    @Input() public description: string;
    @Input() public buttons: Array<NgxuxSectionHeaderButton>;

    @Output() public onButtonClick: EventEmitter<NgxuxSectionHeaderButton> = new EventEmitter();

    public _onButtonClick(button: NgxuxSectionHeaderButton): void {

        this.onButtonClick.emit(button);

    }

}
