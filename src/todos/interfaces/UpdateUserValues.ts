import { User } from "../../auth/interfaces";


export interface UpdateUserValues extends User  {
    password:string
}