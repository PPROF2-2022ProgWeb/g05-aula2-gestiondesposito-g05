import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(public translate:TranslateService) { }

 switchLang =(lang:string)=>{
  this.translate.use(lang);
 }

}
