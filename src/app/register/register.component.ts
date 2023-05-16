import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { UserdataService } from '../service/userdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerform !: FormGroup;
  // registerform = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //   Password: new FormControl(''),
  // }); 
  submitted = false;
  get f() {
    return this.registerform.controls;
  }

  users: any;
  id: any;

  constructor(
    private router: Router,
    private postdata: ServiceService,
    private valid: FormBuilder,
    private router1: ActivatedRoute

  ) {
    this.postdata.data().subscribe((data) => {
      this.users = data;
    });


  }



  ngOnInit() {
    this.id = this.router1.snapshot.paramMap.get('id')
    console.log(this.id)
    if (this.id) {
      this.postdata.singledata(this.id).subscribe((result) => {
        console.log(result)
        if (result) {
          this.data1(result)
        }
        

        console.log()

      })
    }


    this.registerform = this.valid.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      role: ['', Validators.required],
      profession: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  data1(data: any) {
    console.log(data)
    console.log(data.name)

    return this.registerform.patchValue({ name: data.name, age: data.age, role:data.role,profession:data.profession, email: data.email, password: data.password })

  }

  registerformdata() {

    console.log(this.registerform.value);
    console.log(this.id);
    this.submitted = true
    if (this.id) {
      this.postdata.editdata(this.id, this.registerform.value).subscribe((result) => {

        this.router.navigate(['/home']);
      });

    } 
    else{ 
      console.log(this.registerform.value.name)
      if(this.registerform.value.name && this.registerform.value.age&&this.registerform.value.role&&this.registerform.value.profession&&this.registerform.value.email && this.registerform.value.password){
        this.postdata.postauthors(this.registerform.value).subscribe((result) => {

          this.router.navigate(['/home']);
        });
      }
     
    }
    
  }
}
