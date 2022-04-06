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
import { useParams } from 'react-router-dom';
import { ProductModel } from '../../interfaces/product.interface';
import { getProductById } from '../../services/api-service';

// interface IProfile {
//   name: string;
//   username: string;
//   email: string;
//   street: string;
//   city: string;
//   zipcode: string;
//   phone: string;
//   website: string;
// }

export const ProductDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setPrduct] = useState<ProductModel>();
  // const [comment, setComment] = useState<{ [x: string]: string }>();
  // const [isRead, setIsRead] = useState<boolean>(true);
  // const [isError, setIsError] = useState<boolean>(false);

  const { productId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProductById(productId);
        console.log(data);

        // setFullist(products);
        // const productList = getListByPage(page, products);
        // setProducts(productList);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          throw new Error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [productId]);

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
