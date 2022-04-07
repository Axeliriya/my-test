import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
