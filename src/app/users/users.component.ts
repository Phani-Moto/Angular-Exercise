import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [DataService]
})
export class UsersComponent implements OnInit {

  public usersData:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((data)=>{
      console.log(data);
      this.usersData = data;
    },
    (error) => {
      console.log(error.message)
    });
  }

}
