import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { expand } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  env : string = environment.url;
  postenv:string = environment.url;

  constructor(private http: HttpClient) {
  } 

  data() { 
    return this.http.get(`${this.env}`+'/author');
  }  
 
  postauthors(data:any) {          
    return this.http.post(`${this.postenv}/signupsend`,data)
} 

deleteauthor(id:any){
  return this.http.delete(`${this.env}/delauthors/${id._id}`);
} 

singledata(id:any){
  return this.http.get(`${this.env}/authors/${id}`);
} 

editdata(id:any,data:any){
  return this.http.put(`${this.env}/authors/${id}`,data);
}
  // postdata(){
  //   return this.http.post(`${this.postenv}/signupsend`)
  // }
   
  


}