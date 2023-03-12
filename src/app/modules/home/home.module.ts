import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NetbookAppBarComponent } from '@ntb/netbook-app-bar/netbook-app-bar.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NetbookAppBarComponent],
})
export class HomeModule {}
