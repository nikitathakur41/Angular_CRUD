import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
}









// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import{ HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserserviceService {
//   url:string = environment.url;
//   constructor(private http:HttpClient) {}
//     fetchApi(){
//        return this.http.get(this.url+'/authors');
//     }
//     PostauthorData(data:any){
//       console.log(data);
//       return this.http.post(this.url+'/add_author',data);
//     }
    
    
//   }
