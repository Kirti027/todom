import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodmService {
  useArray=[];
updateObj;
edit;
  constructor(private http:HttpClient) { }
  getPost()
  {
    return this.http.get<{posts:[]}>("http://localhost:3000/posts");
  }

  createToDo(obj) {
    return this.http.post<{message: string}>("http://localhost:3000/Createposts",obj);
  }

  updateToDo(id,obj) {
    return this.http.put<{message: string}>("http://localhost:3000/updateTodo/"+id,obj)
  }

  deleteTodo(id) {
    return this.http.delete<{message: string}>("http://localhost:3000/deleteTodo/"+id);
  }

}
