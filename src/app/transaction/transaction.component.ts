import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  div1: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {

  
  
  }
  displayVal1=""
  displayVal2=""
  fetchdata(val:string,val2:string) {

    
this.displayVal1=val
this.displayVal2=val2
// val2=this.database["sname"]["scode"]
this.div1 = true;

      

  


  }

  
vanish()
{
  this.div1 = false;

}
}

