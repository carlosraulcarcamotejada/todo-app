import { User } from "../../../auth/interfaces";


export interface Auth  {
    errorMessage: string | undefined;
    status: "authenticated" | "not-authenticated" | "checking";
    user: User;
  }