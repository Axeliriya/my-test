import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  countPhoto: number;
  children?: ReactNode;
}
