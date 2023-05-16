import { Component,OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'; 
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
}) 


export class HomeComponent  {  
   authors :any 
   id:any
  
  constructor(private router:Router,private getdata:ServiceService){  
    this.getdata.data().subscribe((res)=>{ 
      console.log("home")
      this.authors=res 
    }) 
  }
   number: number=10;  
   show: boolean=true;
  data:string="show"

   fun(){   
    this.data="HIDE",
    this.show = !this.show 
   } 
   deletefun(id:any){   
     
    console.log(id)
    this.getdata.deleteauthor(id).subscribe((res)=>{  
     console.log(res)
      this.router.navigate(['/home']);
      }) 
      
   }
   editfun(editid:any){  
    this.id=editid 
    console.log(this.id)
    this.router.navigate(['register/'+`${this.id}`]); 
    

   }
   arr = [{
        id: 1,
       fName: "Nikita",
        lName: "Thakur",
        userName: "nikitathakur",
        email: "nikitathakur0904@gmail.com"
     },
     {
       id: 2,
       fName: "Anshu",
       lName: "Thakur",
         userName: "anshuthakur",
       email: "anshuthakur0904@gmail.com"
       },
       {
        id: 3,
         fName: "Ishani",
         lName: "Thakur",
         userName: "ishanithakur",
        email: "ishanithakur0904@gmail.com"
       }]
    
    
   
}
    
    
    
    


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserserviceService } from '../service/userservice.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {

//   products = [
//     { name: 'Rice', id: 1, price: 200 },
//     { name: 'Beans', id: 2, price: 300 },
//     { name: 'Bananna', id: 3, price: 400 },
//   ];

//   authors:any;
// constructor(private router:Router,private authorData : UserserviceService){
//   this.authorData.fetchApi().subscribe((data)=>{
//     this.authors = data;
//   });

// }
//   show: boolean = true;
//   button: any = 'show';

//   onClick() {
//     this.show = !this.show
//     if (this.show)
//       this.button = "Hide";
//     else
//       this.button = "Show";
//   }

 

//   arr = [{
//     id: 1,
//     fName: "Nikita",
//     lName: "Thakur",
//     userName: "nikitathakur",
//     email: "nikitathakur0904@gmail.com"
//   },
//   {
//     id: 2,
//     fName: "Anshu",
//     lName: "Thakur",
//     userName: "anshuthakur",
//     email: "anshuthakur0904@gmail.com"
//   },
//   {
//     id: 3,
//     fName: "Ishani",
//     lName: "Thakur",
//     userName: "ishanithakur",
//     email: "ishanithakur0904@gmail.com"
//   }]


//   ngOnInit(): void {
//     console.log("Hello World")
//   }

// }
