// Hay que agregar la dependencia de axios ```yarn add axios```
//import axios from 'axios';

import { HttpClient } from "./02-open-close-c";


export class TodoService { 
    private http:HttpClient
    constructor(http:HttpClient) {
        this.http=http
    }

    async getTodoItems() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
    private http:HttpClient
    constructor(http:HttpClient) {
        this.http=http
    }

    async getPosts() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    private http:HttpClient
    constructor(http:HttpClient) {
        this.http=http
    }

    async getPhotos() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}