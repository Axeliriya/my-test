import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.focus]: className === 'focus',
        [styles.primary]: appearance === 'primary',
        [styles.green]: appearance === 'green',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
