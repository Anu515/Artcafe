import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addart',
  templateUrl: './addart.component.html',
  styleUrls: ['./addart.component.css']
})
export class AddartComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  onFileSelect(event: Event){
    const allowedMimeTypes = [ "image/png", "image/jpeg", "image/jpg", "PDF", "ODT", "DOCX", "PPTX" ];
    

  }

}
