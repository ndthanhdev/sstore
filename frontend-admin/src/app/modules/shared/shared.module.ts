import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {ChartComponent} from './chart/chart.component';
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {FileDropDirective} from "ng2-file-upload";
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { RattingStarsComponent } from './ratting-stars/ratting-stars.component';
import { ProductVariationValuesComponent } from './product-variation-values/product-variation-values.component';
import { VNDPipe } from './vnd.pipe';

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule
  ],
  declarations: [
    JumbotronComponent,
    ChartComponent,
    BarChartComponent,
    PieChartComponent,
    FileDropDirective,
    LoadingIndicatorComponent,
    RattingStarsComponent,
    ProductVariationValuesComponent,
    VNDPipe],
  exports: [
    JumbotronComponent,
    ChartComponent,
    BarChartComponent,
    PieChartComponent,
    FileDropDirective,
    LoadingIndicatorComponent,
    RattingStarsComponent,
    ProductVariationValuesComponent,
    VNDPipe]
})
export class SharedModule {
}
