import { Injectable } from "@angular/core";

@Injectable({
providedIn:"root"
})
export class UserService{
users=[
        {
            name:'aishwarya',
            company:'ust'
        },

        {
            name:'mayuri',
            company:'syntel'
        }

]
printdetails()
{
    console.log("function is executing");
}
}
