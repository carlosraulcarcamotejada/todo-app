import { User } from ".";


export type Auth = {
    errorMessage: string | undefined;
    status: "authenticated" | "not-authenticated" | "checking";
    user: User;
  }