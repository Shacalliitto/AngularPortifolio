import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RedesComponent } from './redes/redes.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { SwiperModule } from 'swiper/angular';
import { ContatoComponent } from './contato/contato.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { CurriculoComponent } from './curriculo/curriculo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedesComponent,
    NavComponent,
    AboutComponent,
    ContatoComponent,
    ProjectComponent,
    CurriculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule {}