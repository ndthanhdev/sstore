import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {ChartComponent} from './chart/chart.component';
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule
  ],
  declarations: [JumbotronComponent, ChartComponent, BarChartComponent, PieChartComponent],
  exports: [JumbotronComponent, ChartComponent, BarChartComponent, PieChartComponent]
})
export class SharedModule {
}
