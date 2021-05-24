import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  products : Product[] = [];
  selectoption:string;
  productid : string;
  productname : string;
  productprice:string;
  productdesc:string;
  imageb64:string;
  isUpdate:boolean;

  constructor(
    private productservice:ProductService,
    private router: Router) { }


  ngAfterViewInit():void{
    this.onFileChange();
  }


  ngOnInit(): void {
    this.refresh();
    this.reset();
  }
  refresh(){
    this.productservice.getList().then((value)=>{
      if(value.success){
        this.products = value.data;
      }
    });
  }
  save(){
    let product = {
      select_option:this.selectoption,
      product_id: this.productid,
      product_name: this.productname,
      product_price: this.productprice,
      product_description:this.productdesc,
      image64 : this.imageb64
    } as Product;
    this.productservice.save(product).then((value) => {
      if (value.success) {
        alert("product value Saved");
        this.refresh();
        this.reset();
      }else{
        alert(value.message);
      }
    })
  }
  reset(){
    this.selectoption=null;
    this.productid=null;
    this.productname=null;
    this.productprice=null;
    this.productdesc=null;
  }

  fillAs(product:Product){
    this.isUpdate=true
    this.selectoption=product.select_option;
    this.productid=product.product_id;
    this.productname=product.product_name;
    this.productprice=product.product_price;
    this.productdesc=product.product_description;
 
      }
      delete(product : Product){
        this.productservice.delete(product.product_id).then((value)=>{
          if(value.success){
            alert("Deleted");
            this.refresh();
          }else{
            alert(value.message);
          }
        })
      }
      view(product : Product){
        localStorage.setItem('prod',product.product_id);
        this.router.navigateByUrl('/viewproduct');
      }
      blockunblock(product : Product){
        this.productservice.block(product.product_id).then((value)=>{
          alert(value.message);
        })
      }


      
      
onFileChange(){
    let input :any = document.getElementById('image');
    input.onchange = () => {
      var file = input.files[0],
        reader = new FileReader();
    
      reader.onloadend = () => {        
        this.imageb64 = reader.result.toString();
      };
    
      reader.readAsDataURL(file);
    };
  }
}
