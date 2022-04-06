import { Button, Card, Input, Textarea, Loader, Title } from '..';
import styles from './UserDetails.module.scss';
import {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
  Dispatch,
} from 'react';
import apiServices from '../../services/api-service';
import { useParams } from 'react-router-dom';
import { validateRules } from '../../helpers/validate';

interface IProfile {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}

export const UserDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile | { [x: string]: string }>();
  const [comment, setComment] = useState<{ [x: string]: string }>();
  const [isRead, setIsRead] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const id = Number(userId);

      try {
        const { data } = await apiServices.getDetailsUser(id);
        const profile = {
          name: data[0].name,
          username: data[0].username,
          email: data[0].email,
          street: data[0].address.street,
          city: data[0].address.city,
          zipcode: data[0].address.zipcode,
          phone: data[0].phone
            .replace(/-/g, '')
            .slice(0, 11)
            .replace(/\d/, '8'),
          website: data[0].website,
        };
        setProfile(profile);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError(error?.message);
          throw new Error(error?.message);
        }
      }
    };
    fetchUser();
  }, [userId]);

  const onEditProfile = () => {
    setIsRead(!isRead);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, ...{ [e.target.name]: e.target.value } });
  };

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    !isError &&
      console.log(JSON.stringify({ ...profile, ...comment }, null, 2));
  };

  const onSubmitByEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSubmit();
    }
  };

  const validate = (
    e: ChangeEvent<HTMLInputElement>,
    setIsNotValid: Dispatch<React.SetStateAction<boolean>>,
    setMessage: Dispatch<React.SetStateAction<string>>,
  ) => {
    if (e.target.value.length < 1) {
      setIsNotValid(true);
      setIsError(true);
      setMessage('Обязательное поле');
    } else {
      Object.entries(validateRules()).map(([key, value]) => {
        if (key === e.target.name) {
          if (value.rule(e.target.value)) {
            setIsNotValid(false);
            setIsError(false);
            setMessage('');
          } else {
            setIsNotValid(true);
            setIsError(true);
            setMessage(value.errorMesagge);
          }
        }
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <div className={styles.user}>
          <Title>Профиль пользоваетля</Title>
          <Button
            className={styles.btn_primary}
            text="Редактировать"
            appearance="primary"
            onClick={onEditProfile}
          />
          <form
            className={styles.form}
            action="submit"
            onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
          >
            <Card className={styles.profile}>
              {profile &&
                Object.entries(profile).map(([key, value]) => (
                  <Input
                    key={key}
                    className={styles.input}
                    name={key}
                    text={value}
                    validate={validate}
                    readOnly={isRead}
                    onChange={onChange}
                  />
                ))}
              <Textarea
                name="comment"
                readOnly={isRead}
                onChange={onChangeTextarea}
                onKeyDown={onSubmitByEnter}
                className={styles.textarea}
              />
            </Card>
            <Button
              className={styles.btn}
              text="Отправить"
              appearance={isRead ? 'ghost' : 'green'}
              disabled={isRead || isError ? true : false}
              type="submit"
            />
          </form>
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};
