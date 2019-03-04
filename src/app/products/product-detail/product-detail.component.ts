import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-product-detail', // this component will not be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { // get the parameter from the URL
    console.log(this.route.snapshot.paramMap.get('id')); // get the value through snapshot or through observable
    // use snapshot if you need to get the initial value of the parameter
    // use observable if the parameter changes without leaving the page - eg. next button on the details page
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); // use + because the parameter is provided as a string

    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    };
  }


  onBack(): void {
    this.router.navigate(['/products']);
  }

}
