import { Component, OnInit } from '@angular/core';
import { TodmService } from '../todm.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title: string;
content: string;
data;
  constructor(private Service:TodmService) { }

  ngOnInit() {
    console.log(this.Service.edit);
    this.data = this.Service.edit;
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onSubmitUpdate(){
    let obj = {
      title: this.title,
      content: this.content
    }
    this.Service.updateToDo(this.data._id,obj).subscribe(data => {
      alert(data.message);
    },error =>{
      console.log(error);
    })
  }

}
