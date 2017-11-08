import { Component, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms'
 
@Component({
    selector: "login-secondary",
    templateUrl: 'app/user/loginsecondary.component.html',
    styles: [`
    em { float:right; color: #E05C65 }
    `] 
})
export class LoginSecondaryComponent {
    @ViewChild(NgForm) form;
    
    checkFormValidity():boolean {        
        if (this.form.invalid)
        {
            console.log(this.form.invalid)
            return true;
        }
        else
            return false;
    }
}