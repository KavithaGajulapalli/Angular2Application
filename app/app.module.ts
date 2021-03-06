import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventService } from './events/shared/event.service'
import {ToastrService } from './common/toastr.service'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'
import { appRoutes } from './routes'

import { AuthService } from './user/auth.service'
@NgModule({
    imports: [ 
                BrowserModule, 
                RouterModule.forRoot(appRoutes)
             ],
    declarations: [ 
                    EventsAppComponent, 
                    EventsListComponent,
                    EventThumbnailComponent, 
                    NavBarComponent, 
                    EventDetailsComponent, 
                    CreateEventComponent, 
                    Error404Component 
                ],
    providers: [
                EventService,
                 ToastrService, 
                 EventRouteActivator,
                 EventListResolver,
                 {
                     provide: 'canDeactivateCreateEvent',
                     useValue: checkDirtySate
                },
                AuthService
                ],
    bootstrap: [ EventsAppComponent] 
})
export class AppModule{

}
function checkDirtySate(component:CreateEventComponent){
        if(component.isDirty){
            return window.confirm('You have not saved the form. DO you really want to leave?')
        }
        return true;
}