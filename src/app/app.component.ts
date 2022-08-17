import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'utcToLocal';

  localDateTimeResult:string|any;

  constructor(private datePipe:DatePipe){this.localDateTimeResult = 'Converted Local Time here...';}

  onConvert(){
    const utcInputEl = <any>document.querySelector('#utcInput');
    if(utcInputEl){
      console.log(utcInputEl.value);

      if(utcInputEl.value){
        const t = new Date(utcInputEl.value);
        console.log(t);
        
        t.setMinutes(t.getMinutes()+30);
        t.setHours(t.getHours()+6);
        console.log('After/t',t);

        this.localDateTimeResult = this.datePipe.transform(t, 'yyyy-MM-dd hh:mm:ss a');
      }
    }
  }

  onReset(){
    const utcInputEl = <any>document.querySelector('#utcInput');
    
    if(utcInputEl){
      if(utcInputEl.value) utcInputEl.value=null;
    }
    
    this.localDateTimeResult = 'Converted Local Time here...';
  }
}
