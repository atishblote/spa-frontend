import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl:string= 'https://spa-strapi.onrender.com/api'
  // baseUrl:string= 'https://api.cricfootbook.com'

  globalToken:string = "e8900ca2bb7ea29e81ccccb83aea824a19e5703cadac04de463cf50e85cc681f5ff85495c9d8136e5c14e30c370711ec6f9e5b78f9cbd1b746c0dea2f61f894fcb5318888f70eb87e818fad6f2a23f862b218ce2670497e98d8e3304e107e69d9f97a177dfde487280c1b98412d24a8c3a479c67e59072ce9fcca8ea3f3058ae"

  apiKey:any

  constructor(private http: HttpClient) { }

  private globalHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : `Bearer ${this.globalToken}`
    });
  }

  // private getSiteHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization' : `Bearer`
  //   });
  // }

  private siteHeadersToken(token:string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : `Bearer ${token}`
    });
  }



  // storeUserData(userData: any): void {
  //   sessionStorage.setItem('userData', JSON.stringify(userData));
  //   sessionStorage.setItem('authToken', userData.token);
  // }
  // getUserData() {
  //   const data = sessionStorage.getItem('userData');
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return null;
  //   }
  // }


  // login(body:any,endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.globalHeader()
  //   return this.http.post(url, body, { headers })
  // }

  // getUserSingle(endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.globalHeader()
  //   return this.http.get(url, { headers })
  // }

  // postWithToken(body:any,endpoint:string, token:any){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.siteHeadersToken(token)
  //   return this.http.post(url, body, { headers })
  // }

  getWithToken(endpoint:string){
    const url = `${this.baseUrl}/${endpoint}`
    const headers = this.globalHeader()
    return this.http.get(url, { headers })
  }
  // deleteWithToken(id:any,endpoint:string, token:any){
  //   const url = `${this.baseUrl}/${endpoint}/${id}`
  //   const headers = this.siteHeadersToken(token)
  //   return this.http.delete(url, { headers })
  // }

  // putWithToken(body:any,id:any,endpoint:string, token:any){
  //   const url = `${this.baseUrl}/${endpoint}/${id}`
  //   const headers = this.siteHeadersToken(token)
  //   return this.http.put(url, body, { headers })
  // }

  // uploadFile(endpoint:string,file: File, token:string) {
  //  const url = `${this.baseUrl}/${endpoint}`
  //   const formData: FormData = new FormData();
  //   formData.append('files', file, file.name);

  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   return this.http.post(url, formData, { headers });
  // }
  // postWithoutToken(body:any,endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.getSiteHeaders()
  //   return this.http.post(url, body, { headers })
  // }

  // getWithoutToken(endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.getSiteHeaders()
  //   return this.http.get(url, { headers })
  // }


  // updateWithToken(body:any,endpoint:string, token:any){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.getSiteHeaders()
  //   return this.http.put(url, body, { headers })
  // }
  // getWithToken(endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.getSiteHeaders()
  //   return this.http.get(url, { headers })
  // }

  // deleteWithToken(endpoint:string){
  //   const url = `${this.baseUrl}/${endpoint}`
  //   const headers = this.getSiteHeaders()
  //   return this.http.delete(url, { headers })
  // }
}
