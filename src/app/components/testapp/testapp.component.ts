import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { UsercardInterface } from '../../models/usercard-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
declare var $: any;
@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    public dataApi: DataApiService,
    public router: Router,
    private authService: AuthService,
    private location: Location
    ) { }
  loadAPI = null;
  url = "assets/assetssimplicity/js/picturefill.min.js";
  url1 = "assets/assetssimplicity/js/jquery.min.js";
  url2= "assets/assetssimplicity/js/jquery-migrate.min.js";
  url3 = "assets/assetssimplicity/js/regenerator-runtime.min.js";
  url4 = "assets/assetssimplicity/js/wp-polyfill.min.js";
  url5 = "assets/assetssimplicity/js/libs.min.js";
  url6 = "assets/assetssimplicity/js/main.min.js";
  url7 = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";
  url8 = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js";
  url9 = "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js";
  url10 = "assets/assetssimplicity/js/barba.umd.js";  

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public show(a) {
    let option = a;
      for(let i =0;i<=5;i++){
        if (option===i){
          console.log("mostrar seccion : "+option);
        }
      }
     }

  public loadScript1() {
    let node = document.createElement("script");
    node.src = this.url1;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }   
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
   public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
   public loadScript4() {
    let node = document.createElement("script");
    node.src = this.url4;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript5() {
    let node = document.createElement("script");
    node.src = this.url5;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript6() {
    let node = document.createElement("script");
    node.src = this.url6;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript7() {
    let node = document.createElement("script");
    node.src = this.url7;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript8() {
    let node = document.createElement("script");
    node.src = this.url8;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript9() {
    let node = document.createElement("script");
    node.src = this.url9;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript10() {
    let node = document.createElement("script");
    node.src = this.url10;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  ngOnInit() {
     if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript1();
        this.loadScript2();
        this.loadScript3();
        this.loadScript4();
        this.loadScript5();
        this.loadScript6();
        this.loadScript7();
        this.loadScript8();
        this.loadScript9();
        this.loadScript10();
        });
      }
  }

}
