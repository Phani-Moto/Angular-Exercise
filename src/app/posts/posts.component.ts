import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [DataService]
})
export class PostsComponent implements OnInit {

  public postsData:any;
  constructor(private dataService:DataService ) {
    console.log(dataService)
   }

  ngOnInit() {
    this.dataService.getPosts().subscribe((data)=>{
      console.log(data);
      this.postsData = data;
    },
    (error) => {
      console.log(error.message)
    });
  }

}
