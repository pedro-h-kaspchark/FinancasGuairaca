import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    templateUrl: './bills-to-pay.component.html',
    providers: [MessageService]
})
export class BillsToPayComponent implements OnInit {
    cols: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        
    }

    openNew() {
        
    }

    hideDialog() {
        
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
