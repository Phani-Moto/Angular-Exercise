import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [DataService]
})
export class CommentsComponent implements OnInit {

  public commentsData:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getComments().subscribe((data)=>{
      console.log(data);
      this.commentsData = data;
    },
    (error) => {
      console.log(error.message)
    });
  }

}
