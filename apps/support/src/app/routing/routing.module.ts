import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';

import { LandingComponent } from '../pages/landing/landing.component';
import { TicketsComponent } from '../pages/tickets/tickets.component';


@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    CommonModule,
    RouterModule.forRoot(
      [
        { path: '', component: LandingComponent },
        { path: 'tickets', component: TicketsComponent },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
