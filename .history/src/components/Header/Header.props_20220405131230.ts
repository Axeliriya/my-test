import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  children: ReactNode;
}
