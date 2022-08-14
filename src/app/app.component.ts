import { Component } from '@angular/core';
import { ButtonRendererComponent } from './renderer/button.renderer.componen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CurrencyCellRendererUSD(params: any) {
    var inrFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    return inrFormat.format(params.value);
  }
  frameworkComponents: any;
  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  rowDataClicked1 = {};
  column = [
    { field: 'ID', },
    { field: 'CARID', },
    //{ field: 'INSTOCK', },
    {
      headerName: 'INSTOCK',
      //field: 'INSTOCK',
      editable: true,
      cellRenderer: (params: any) => {
         return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    //{ field: 'HP',editable: true, cellRenderer: this.onCellValueChanged},
    { field: 'HP', editable: true, },
    { field: 'PRICE', cellRenderer: this.CurrencyCellRendererUSD },
    { field: 'COLOR', },
    //{ field: 'EDIT', },
    {
      headerName: 'EDIT',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Edit'
      }
    },

  ];

  row = [
    { ID: 1, CARID: "HJKFSHJK42525fsdfs", INSTOCK: true, HP: 250, PRICE: 50.000, COLOR: "red", EDIT: "edit" }
  ]
  onBtnClick1(e: any) {
    this.rowDataClicked1 = e.rowData;
  }
  onCellValueChanged($event: any) {
    debugger;
    if ($event.colDef.field === 'HP' && $event.data.HP < 0) {
      // debugger
      $event.node.setDataValue('HP', $event.oldValue);
      console.log('value reverted');
    }
    else {
      $event.data.HP.value = ($event.data.HP);

    }
  }
}
