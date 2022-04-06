import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ text, appearance, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.green]: appearance === 'green',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {text}
    </button>
  );
};
