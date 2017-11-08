import { Injectable } from '@angular/core'
import { IUser } from './user.modal'

@Injectable()

export class AuthService {
    curretUser: IUser;

    loginUser( userName: string, password:string){
        this.curretUser = {
            userId: 1,
            userName: userName,
            firstName: "John" ,
            lastName: "Papa"
        }
    }
    isAuthenticated(): boolean {
        return !! this.curretUser;
    }
}
