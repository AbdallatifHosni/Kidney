import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
 constructor(private authService: AuthService) { }
 intercept(req: HttpRequest<any>, next: HttpHandler) {
 const token = this.authService.getToken();
 if (token) {
 const authReq = req.clone({
 headers: req.headers.set('Authorization', `Bearer ${token}`)
 });
 return next.handle(authReq);
 } else {
 return next.handle(req);
 }
 }
}
