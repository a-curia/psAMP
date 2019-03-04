import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StarComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // AppRoutingModule,
    RouterModule.forChild([ // forChild not to re-register the router service
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
