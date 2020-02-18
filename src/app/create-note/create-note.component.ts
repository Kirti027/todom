import { Component, OnInit } from '@angular/core';
import { TodmService } from '../todm.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  topic:string;
  message:string;
  obj1;
  postdata:any;
  title;
  content;
  constructor(private Service:TodmService) { }

  ngOnInit() {
  }
  createnote(){
    let obj = {
      title: this.title,
      content: this.content
    }
    this.Service.createToDo(obj).subscribe(data => {
      alert(data.message)
    })
  }
}
