import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  encodedText:string=""
  decodedText:string=""

  encodeText(input:string):void{
    let result:string = btoa(encodeURI(input))
    this.encodedText=result
  }

  decodeText(input:string):void{
    let result:string = decodeURI(atob(input));
    this.decodedText=result
  }

  restartEncoded():void{
    this.encodedText=""
  }

  restartDecoded():void{
    this.decodedText=""
  }

  copyText(input:string){
    navigator.clipboard.writeText(input)
    .then(e=>{
      alert("Copiado: "+input)
    })
  }

}
