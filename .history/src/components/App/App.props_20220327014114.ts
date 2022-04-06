import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UserModel } from '../../interfaces/user.interface';

export interface AppProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error: string | null;
  users: UserModel[];
  isLoading: boolean;
}
