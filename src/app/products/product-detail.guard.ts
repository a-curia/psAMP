import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot, // to provide current route information
    // to provide router state information
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // check if the provided :id is valid, if not go back
      let id = +next.url[1].path; // products/10 like array [0] = products, array[1] = 10
      if (isNaN(id) || id < 1) {
        alert("Invalid product Id"); // route to an error page and back to list page
        this.router.navigate(['/products']);
        return false;
      }

    return true;  // to continue activateing the route
  }
}
