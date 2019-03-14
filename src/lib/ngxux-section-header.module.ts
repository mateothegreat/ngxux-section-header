import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule }                   from '@angular/router';
import { NgxuxSectionHeaderComponent }    from './ngxux-section-header.component';

@NgModule({

    declarations: [

        NgxuxSectionHeaderComponent

    ],

    imports: [

        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,

    ],

    exports: [

        NgxuxSectionHeaderComponent

    ]

})
export class NgxuxSectionHeaderModule {
}
