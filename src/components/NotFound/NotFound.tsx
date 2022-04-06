import errorImg from './404.png';

export const NotFound = (): JSX.Element => {
  return (
    <div>
      <img src={errorImg} alt="Not Found Page" />
    </div>
  );
};
