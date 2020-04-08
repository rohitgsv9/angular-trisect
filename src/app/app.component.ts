import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  public name="rorhit";
  public message="";
  title = 'self';
  public siteUrl=window.location.href;
  public myid="thisisID"
  public isDisabled=true 
  public value='';
  public sclass="text-success";
  public sclass1="text-danger";
  public hasherror=true;
  public isSpecial=true;
  public sbind="pink";
  public titlestyle={
    color:"blue",
    fontStyle:"italic"   
  }
  

  public no="";
  public text="";
  public p='';
  public isDis=true;
  public color="pink";
  public colors=["red", "green", "blue", "pink"]

  public messageClass={
    "text-success":!this.hasherror,
    "text-danger":this.hasherror,
    "text-special":this.isSpecial
  }

  fn(){
    return "you can do " + this.title;
  }

  onClick(){
    console.log("hello onClick");
    this.no="welome angular 9";
  }

  fn1(value){
    console.log(value);
  }

  
}
