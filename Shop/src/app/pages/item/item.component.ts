import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productDetail } from '../../interfases/productDetail.interfases';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  products: productDetail;
  id : string;

  constructor(private route: ActivatedRoute, public productServices: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parameter => {
       this.productServices.getProduct(parameter['id']).subscribe( (firebaseproducto: productDetail) =>{
        this.id = parameter['id'];
        this.products = firebaseproducto;
       });
    });
  }
}
