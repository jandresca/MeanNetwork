import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  saveTask(post: any) {
    return this._http.post<any>(this.env + 'post/saveTask', post);
  }

  listTask() {
    return this._http.get<any>(this.env + 'post/listTask');
  }

  updateTask(post: any) {
    return this._http.put<any>(this.env + 'post/updateTask', post);
  }

  deleteTask(post: any) {
    return this._http.delete<any>(this.env + 'post/deleteTask/' + post._id);
  }

  saveTaskImg(post: any) {
    return this._http.post<any>(this.env + 'post/saveTaskImg', post);
  }

}