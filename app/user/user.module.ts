import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms'
import { LoginSecondaryComponent } from './loginsecondary.component'



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
         RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        LoginSecondaryComponent
    ],
    providers: []
})
   
export class UserModule{

}