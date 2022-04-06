import {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  Dispatch,
} from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  text?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate: (
    e: ChangeEvent<HTMLInputElement>,
    setIsValid: Dispatch<React.SetStateAction<boolean>>,
    setMessage: Dispatch<React.SetStateAction<string>>,
  ) => void;
  readOnly: boolean;
}
