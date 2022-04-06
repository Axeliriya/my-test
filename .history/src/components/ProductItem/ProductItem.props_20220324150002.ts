import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UserModel } from "../../interfaces/user.interface";

export interface UserProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  user: UserModel;
}