import { getNewsData, getPageSize, getCollectionSize, getPage } from './../store/selector';
import { LOAD_DATA } from './../store/action';
import { HackerNewsState, newsFeatureKey } from './../store/reducer';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CanvasJS from '../../assets/canvasjs.min';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public page: any;
  public pageSize: any;
  public collectionSize: any;
  public xYAxisData: any = [];
  data$: Observable<any>;

  constructor(private store: Store<{news: HackerNewsState}>, private cd : ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.store.dispatch(LOAD_DATA({pageNumber: 0}))
    this.loadData();  
  }
  /**
   * function to get initData
   */
  loadData() {
    this.data$ = this.store.pipe(select(getNewsData));
    setTimeout(() => {
    this.store.pipe(select(getCollectionSize)).subscribe(result => this.collectionSize = result);
    this.store.pipe(select(getPageSize)).subscribe(result => this.pageSize = result);
    this.store.pipe(select(getPage)).subscribe(result => this.page = result);
    this.getDataPoints();
    this.cd.detectChanges();
   }, 300);
  }
  /**
   * funtion to get data after pagination changes
   */
  getRefreshData() {
    this.store.dispatch(LOAD_DATA({pageNumber: this.page - 1}))
    this.loadData();
  }
  /**
   * function to show chart
   */
  showChart() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
	    theme: "light2",
      axisX: {
        title: "Id",
      },
      axisY:{
        title: "Votes",
      },
      data: [{        
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: this.xYAxisData
      }]
    });
    chart.render();
  }
/**
 * function to get chart points data
 */
  getDataPoints() {
    setTimeout(() => {
      this.data$.subscribe(result => this.xYAxisData = result);
      this.xYAxisData = this.xYAxisData.map((val) => {
        return {
          x: Number(val.objectID),
          y: val.points
        }
      });
      this.showChart();
      this.cd.detectChanges();
    }, 500);
  }

}

