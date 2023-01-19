import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';

import { map } from 'rxjs/operators';
import { Blog } from '../model/blog'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private blogs: Blog[] = [];
  private blogs$ = new Subject<Blog[]>()
  readonly url = "http://localhost:3000/api/blog"

  constructor(private http : HttpClient) {}

  //  addDocument(doc : Document): Observable <Document>{
  //   return this.http.post<Document>(this.addDocURL,doc);
  //  }

  //  getAllDocument(): Observable<Document[]>{
  //   return this.http.get<Document[]>(this.getDocURL);
  //  }

  //  updateDocument(doc: Document): Observable <Document>{
  //   return this.http.put<Document>(this.updateDocURL,doc);
  //  }

  //  deleteDocument(doc: Document): Observable <Document>{
  //   return this.http.delete<Document>(this.deleteDocURL+'/'+doc.id);
  //  }

   //
   getBlogs() {
    this.http
      .get<{ blogs: Blog[] }>(this.url)
      .pipe(
        map((blogData) => {
          return blogData.blogs;
        })
      )
      .subscribe((blogs) => {
        this.blogs = blogs;
        this.blogs$.next(this.blogs);
      });
  }

  getBlogsStream() {
    return this.blogs$.asObservable();
  }

  addBlog(name: string, mobile: string, email: string, username: string, password: string, confirm: string): void {
    const blogData = new FormData();
    blogData.append("name", name);
    blogData.append("mobile", mobile);
    blogData.append("email", email);
    blogData.append("username", username);
    blogData.append("password", password);
    blogData.append("confirm", confirm);

    this.http.post<{ blog: Blog }>(this.url, blogData)
      .subscribe((blogData) => {
        const blog: Blog = {
          _id: blogData.blog._id,
          name: name,
          mobile: mobile,
          email: email,
          username: username,
          password: password,
          confirm: confirm,
        };
        this.blogs.push(blog);
        this.blogs$.next(this.blogs)
      });
  }
}
