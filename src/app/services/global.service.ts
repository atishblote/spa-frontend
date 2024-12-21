import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl:string= 'https://spa-strapi-3.onrender.com/api'
  // baseUrl:string= 'https://api.cricfootbook.com'

  globalToken:string = "d8d6220c854dd6ff16cbe2394ef08af85924c74c6497b73964295e6f2918214c299d2a78858a8197dd351032d3afc1518e878732e61e29247125047969a00542da24fcc8c9970f52b44b246e832304b81e3bc0dbb8a56283b43da58bfc42716bf80e9b3e09b3ac16f8b9505c5df88f07eeb5f5921eb477f6860e4e660b1f07d6";

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
