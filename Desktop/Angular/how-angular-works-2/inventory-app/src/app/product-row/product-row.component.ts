import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() Product: Product;
  @Output() iSSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit() {
  }

}
