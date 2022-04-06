import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '../../interfaces/product.interface';

export interface ProductsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  products: ProductModel[];
}
