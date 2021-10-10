import { Component, OnInit } from '@angular/core';
import { Conferencebooking } from '../models/conferencebooking';
import { ServicereqService } from '../servicereq.service';


@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  allbooking: Conferencebooking[];

  constructor(private conferencebookingserve: ServicereqService ) { }

  ngOnInit(): void {
    this.getAllBookings();
  }
 

  getAllBookings(){
    this.conferencebookingserve.GetAllBooking().subscribe(
      data =>{this.allbooking = data}
    )
  }

}
