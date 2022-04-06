import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Input = ({
  name,
  text,
  validate,
  onChange,
  readOnly,
  className,
  ...props
}: InputProps): JSX.Element => {
  const [type, setType] = useState<string>('text');

  const [isNotValid, setIsNotValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  const getType = (str: string) => {
    str === 'phone' && setType('tel');
    str === 'email' && setType('email');
  };

  useEffect(() => {
    name && getType(name);
  }, [name]);

  return (
    <div className={cn(styles.wrapper, className)}>
      {isNotValid && message && (
        <div className={styles.messageError}>{message}</div>
      )}
      <label className={styles.label} htmlFor={name}>
        {name && label(name)}
      </label>
      <input
        className={cn(styles.input, {
          [styles.error]: isNotValid,
        })}
        id={name}
        name={name}
        value={text}
        type={type}
        readOnly={readOnly}
        onChange={(e: ChangeEvent<HTMLInputElement>) => (
          onChange(e), validate(e, setIsNotValid, setMessage)
        )}
        {...props}
      />
    </div>
  );
};
