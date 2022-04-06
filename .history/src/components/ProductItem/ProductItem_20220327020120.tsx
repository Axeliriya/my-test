import { Link } from 'react-router-dom';
import { Card } from '..';
import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  const { name, address, company, id } = user;

  return (
    <li {...props}>
      <Card className={styles.card} color="light">
        <div>
          <span className={styles.span}>ФИО: </span>
          {name}
        </div>
        <div>
          <span className={styles.span}>город: </span>
          {address.city}
        </div>
        <div>
          <span className={styles.span}>компания: </span>
          {company.name}
        </div>
        <Link className={styles.link} to={`${id}`}>
          Подробнее
        </Link>
      </Card>
    </li>
  );
};
