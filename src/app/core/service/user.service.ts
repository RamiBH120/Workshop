import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {

  /*list:User[]=[
    {
    idCustomer: 1,
    firstName: "Mila",
    lastName: " Kunis",
    birthDate: "1999-06-30",
    accountCategory: "Admin",
    email: "mila@kunis.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 2,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 3,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar1.png",profession: "Software Engineer"
  },
  {
  idCustomer: 4,
  firstName: "Ryan",
  lastName: "Gossling",
  birthDate:"1999-06-30",
  accountCategory: "Golden",
  email: "Ryan@nicholson.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
  profession: "Software Engineer"
  },
  {
  idCustomer: 5,
  firstName: "Robert",
  lastName: "Downey",
  birthDate: "1999-06-30",
  accountCategory: "Blocked Account",
  email: "robert@nicholson.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
  profession: "Software Engineer"
  }
  ]*/

  list:[]=[]
  url:string='http://localhost:3000/users';

  constructor(private http:HttpClient) { }
  
  httpOptions={
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.url+`/${id}`)
  }

  addUser(u:User):Observable<User>{
    return this.http.post<User>(this.url,u,this.httpOptions)
  }

  updateUser(id:number,u:User):Observable<User>{
    return this.http.put<User>(this.url+`/${id}`,u)
  }

  deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(this.url+`/${id}`)
  }
}
