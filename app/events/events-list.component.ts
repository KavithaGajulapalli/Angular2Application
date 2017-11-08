import {Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
 import { IEvent } from './shared/event.modal'
declare let toastr:any
@Component({
    
    templateUrl: 'app/events/events-list.component.html'

})
export class EventsListComponent implements OnInit {

  events:IEvent[];
  constructor(private eventService: EventService, private toastrService: ToastrService, private route:ActivatedRoute) {
      
  }
  ngOnInit(){
   this.events = this.route.snapshot.data['events']
  }
  thumbnailClickEVent(name):void{
   this.toastrService.success(name)
  }
}