import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template: `
    
        <h1> New Componet</h1>
        <br>
        <div class = "col-md-6">
            <h3> Create Event Form will go here </h3>
            <br>
            <button type = "submit" class = "btn btn-primary"> Save </button>
            <button type = "submit" class = "btn btn-primary" (click)="cancel()"> Cancel </button>

        </div>
    `

})
export class CreateEventComponent{
        isDirty:boolean = true;
        constructor(private router: Router){

        }
        cancel():void {
            this.router.navigate(['/events']);
        }

}
