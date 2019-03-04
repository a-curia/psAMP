import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  // selector: 'app-product-detail', // this component will not be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { // get the parameter from the URL
    console.log(this.route.snapshot.paramMap.get('id')); // get the value through snapshot or through observable
    // use snapshot if you need to get the initial value of the parameter
    // use observable if the parameter changes without leaving the page - eg. next button on the details page
  }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id'); // use + because the parameter is provided as a string

    this.pageTitle += `: ${param}`;
    if (param) {
      const id = +param;
      this.getProduct(id);
    }

  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
