import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { Dashbord1Component } from './dashbord1/dashbord1.component';
import { Dashbord2Component } from './dashbord2/dashbord2.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { AllChartsComponent } from './charts/all-charts/all-charts.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { WebAnalyticsComponent } from './analytics/web-analytics/web-analytics.component';
import { MainComponent } from './socialMedia/main/main.component';
import { InputGroupsComponent } from './forms/input-groups/input-groups.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { CustomFormsComponent } from './forms/custom-forms/custom-forms.component';
import { FormsIndexComponent } from './forms/forms-index/forms-index.component';
import { WigetMainComponent } from './wigets/wiget-main/wiget-main.component';
import { CarouselComponent } from './wigets/carousel/carousel.component';
import { AccordianComponent } from './wigets/accordian/accordian.component';
import { ModalComponent } from './wigets/modal/modal.component';
import { TooltipComponent } from './wigets/tooltip/tooltip.component';


const routes: Routes = [
  {path : '', component:Dashbord1Component},  
  {path : 'dashbord1' , component:Dashbord1Component},
  {path : 'dashbord2' , component:Dashbord2Component},
  {path : 'line-chart' , component:LineChartComponent},
  {path : 'area-charts' , component:AreaChartsComponent},
  {path : 'all-charts' , component:AllChartsComponent},
  {path : 'ui-elements' , component:UiElementsComponent},
  {path : 'web-analytics' , component:WebAnalyticsComponent},
  {path : 'main', component:MainComponent},
  {path : 'forms-index' , component:FormsIndexComponent, children:[
    {path : 'simple-form' , component:SimpleFormComponent},
    {path : 'input-groups' , component:InputGroupsComponent},
    {path : 'custom-forms' , component:CustomFormsComponent},
    {path: 'form-validation' , component:FormValidationComponent},
  ]},
  
  {path : 'wiget-main', component:WigetMainComponent, children:[
    {path : 'carousel', component:CarouselComponent},
    {path : 'accordian', component:AccordianComponent},
    {path : 'modal', component:ModalComponent},
    {path : 'tooltip', component:TooltipComponent}
  ]},  
    
 
  {path: '**', component:Dashbord1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
