import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <input className={cn(styles.input)} {...props} />
    </div>
  );
};
