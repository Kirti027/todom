import { Component, OnInit } from '@angular/core';
import { TodmService } from '../todm.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  postdata: any;
title;
message;
  constructor(private Service:TodmService) { }

  ngOnInit() {
    this.postdata = [];
    this.Service. getPost().subscribe(data => {
      this.postdata = data.posts;
    })
  
  }

  updated(post) {
    let obj,id= {
     title: this.title,
     content: this.message
    }
    this.Service.updateToDo(id,obj).subscribe(data => {
       alert(data.message);
     })
    
    //this.Service.updateObj = post
    //this.router.navigateByUrl('update');
  }

  update(post){
    this.Service.edit = post;
  }

  delete(id) {
    this.Service.deleteTodo(id).subscribe(data => {
      alert(data.message);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Record Deleted");
    
    })
  }

  }
 