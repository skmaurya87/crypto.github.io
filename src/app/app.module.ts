import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';``
import { Injectable } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel'
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {RatingModule} from 'primeng/rating';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { Dashbord1Component } from './dashbord1/dashbord1.component';
import { Dashbord2Component } from './dashbord2/dashbord2.component';
import { CoinsComponent } from './coins/coins.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { CountryService } from './service/counrtyservices.service';
import { ReactiveFormsModule } from '@angular/forms';




import { ChartRatingComponent } from './chart-rating/chart-rating.component';
import { from } from 'rxjs';
import { TradeTableComponent } from './trade-table/trade-table.component';
import { TradehistroyComponent } from './tradehistroy/tradehistroy.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { ActiveOrdersFullComponent } from './active-orders-full/active-orders-full.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { CryptoMarketComponent } from './crypto-market/crypto-market.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { AllChartsComponent } from './charts/all-charts/all-charts.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { CustompipePipe } from './mypipe/custompipe.pipe';
import { WebAnalyticsComponent } from './analytics/web-analytics/web-analytics.component';
import { AudienceMetricsComponent } from './analytics/audience-metrics/audience-metrics.component';
import { SessionByChannelComponent } from './analytics/session-by-channel/session-by-channel.component';
import { WebPerformanceComponent } from './analytics/web-performance/web-performance.component';
import { GoogleAnalyticeComponent } from './analytics/google-analytice/google-analytice.component';
import { UserActivityComponent } from './analytics/user-activity/user-activity.component';
import { UserByCountryComponent } from './analytics/user-by-country/user-by-country.component';
import { PageViewComponent } from './analytics/page-view/page-view.component';
import { GoogleSessionComponent } from './analytics/google-session/google-session.component';
import { MainComponent } from './socialMedia/main/main.component';
import { SocialActivityComponent } from './socialMedia/social-activity/social-activity.component';
import { SocialFollowersComponent } from './socialMedia/social-followers/social-followers.component';
import { YoutubefacebookWidgetComponent } from './socialMedia/youtubefacebook-widget/youtubefacebook-widget.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { InputGroupsComponent } from './forms/input-groups/input-groups.component';
import { CustomFormsComponent } from './forms/custom-forms/custom-forms.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { FormsIndexComponent } from './forms/forms-index/forms-index.component';
import { TypeheadComponent } from './forms/typehead/typehead.component';
import { CheckboxValidationComponent } from './forms/checkbox-validation/checkbox-validation.component';
import { InputValidationComponent } from './forms/input-validation/input-validation.component';
import { WigetMainComponent } from './wigets/wiget-main/wiget-main.component';
import { CarouselComponent } from './wigets/carousel/carousel.component';
import { AccordianComponent } from './wigets/accordian/accordian.component';
import { ModalComponent } from './wigets/modal/modal.component';
import { TooltipComponent } from './wigets/tooltip/tooltip.component';







@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftnavbarComponent,
    Dashbord1Component,
    Dashbord2Component,
    CoinsComponent,
    ChartRatingComponent,
    TradeTableComponent,
    TradehistroyComponent,
    CurrentOrdersComponent,
    ActiveOrdersComponent,
    ActiveOrdersFullComponent,
    CryptoCurrencyComponent,
    CryptoMarketComponent,
    LineChartComponent,
    HighchartsChartComponent,
    AreaChartsComponent,
    AllChartsComponent,
    UiElementsComponent,
    CustompipePipe,
    WebAnalyticsComponent,
    AudienceMetricsComponent,
    SessionByChannelComponent,
    WebPerformanceComponent,
    GoogleAnalyticeComponent,
    UserActivityComponent,
    UserByCountryComponent,
    PageViewComponent,
    GoogleSessionComponent,
    MainComponent,
    SocialActivityComponent,
    SocialFollowersComponent,
    YoutubefacebookWidgetComponent,
    SimpleFormComponent,
    InputGroupsComponent,
    CustomFormsComponent,
    FormValidationComponent,
    FormsIndexComponent,
    TypeheadComponent,
    CheckboxValidationComponent,
    InputValidationComponent,
    WigetMainComponent,
    CarouselComponent,
    AccordianComponent,
    ModalComponent,
    TooltipComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    OwlModule,
    TableModule,
    CalendarModule,
    MultiSelectModule,
    AutoCompleteModule,
    RatingModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    AccordionModule,
    TabViewModule



  ],
  providers: [HttpClient, Injectable, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
