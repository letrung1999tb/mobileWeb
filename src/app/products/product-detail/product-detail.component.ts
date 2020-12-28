import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../core/models/Product';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {AddProductToCart} from '../../store/shop/shop.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  // product: Product;


  @Input('product') product: Product;
  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngDoCheck() {
    console.log(this.product);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;

    this.store.select('shop')
      .subscribe((data) => {
        console.log(data);
        for (let i = 0; i < data.products.length; i++) {
          if (data.products[i].id === +this.id) {
            console.log(this);

            this.product = data.products[i];
            break;
          }
        }
      });

  }

  onAddProductToCart(): void {
    this.store.dispatch(new AddProductToCart(this.product));
  }

}
