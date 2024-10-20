import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => { 
  const userService = inject(UserService);
  const router = inject(Router)
   const user = userService.GetUserLoginInfo()
   if (user && user.token) {
    return true;
  }
  
  // Redirect to login page if not authenticated
  router.navigate(['/login'],);
  return false;
   
};

export const loginGuard : CanActivateFn = (route,state)=>{
  const userService = inject(UserService);
  const router = inject(Router)
  const user = userService.GetUserLoginInfo()
  if (user && user.token) {
    router.navigate(["/"])
   return false;
   
 }
 return true
}

