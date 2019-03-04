import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) { // we want to performa something every time the values is changed
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  errorMessage: string;

  // products: any[] = [
  products: IProduct[] = [];


  constructor(private productService: ProductService) {
    // when the component is first initalized
    // this.filteredProducts = this.products;// constructor is executed before the OnInit
    // this.listFilter = 'cart';
  }

  ngOnInit(): void {
    console.log('In OnInit()');
    // this.products = this.productService.getProducts();
    // this.filteredProducts = this.products;
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error // casting operator
      );
  }



  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); // array filter
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClickedDisplayOnParent(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }

}
