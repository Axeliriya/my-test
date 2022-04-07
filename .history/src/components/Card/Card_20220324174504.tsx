import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import cn from 'classnames';

export const Card = ({ color, children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.gray]: color === 'gray',
        [styles.light]: color === 'light',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
