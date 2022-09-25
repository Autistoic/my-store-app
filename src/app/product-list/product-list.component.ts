import { Component, ViewChild } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
        { field: 'name' },
        { field: 'description' }
    ];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };

    // Data that gets displayed in the grid
    public rowData$!: Observable<Product[]>;

    products: Product[] = [];

    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

    constructor(
        private productService: ProductService
    ) { }

    // Example load data from sever
    onGridReady(params: GridReadyEvent) {
        //chequear esta asignacion
        this.rowData$ = this.productService.getProducts();
    }

    // Example of consuming Grid Event
    onCellClicked(e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }

    // Example using Grid's API
    clearSelection(): void {
        this.agGrid.api.deselectAll();
    }

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
}