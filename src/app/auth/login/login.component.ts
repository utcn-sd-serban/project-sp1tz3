import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    this.getCustomers();
  }

  customers: Customer[];

  constructor(
    public authService: AuthService, 
    public router: Router, 
    public route: ActivatedRoute,
    public customerService: CustomerService) { }

  login(username: string, password: string){
    if(this.customers.find(c=> c.username===username && c.password===password)!=null){
    this.authService.login().subscribe(() => {
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? 
        this.router.parseUrl(this.authService.redirectUrl): '/products';
        this.router.navigateByUrl(redirect);
      }
    })
  }

  }

  logout(){
    this.authService.logout();
  }

  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(customers=>this.customers = customers);
  }
}
