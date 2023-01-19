import { HttpClient } from '@angular/common/http';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DocumentService } from 'src/app/service/document.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  form!: FormGroup; 
  blogs: Blog[] = [];
  private blogSubscription: Subscription = new Subscription;

  constructor(private formBuilder : FormBuilder, private docService: DocumentService, private http: HttpClient) { }

  ngOnInit(): void {
    this.docService.getBlogs();
    this.blogSubscription = this.docService
      .getBlogsStream()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs
      })
    this.form = new FormGroup({
      name: new FormControl(null),
      mobile: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null),
      confirm: new FormControl(null),
    });
  }

  ngOnDestroy() {
    this.blogSubscription.unsubscribe();
  }

  onSubmit(value:any): void{
    console.log(value);
    this.docService.addBlog(this.form.value.name, this.form.value.mobile, this.form.value.email,this.form.value.username,this.form.value.password,this.form.value.confirm)
    this.form.reset();
  }

}