import css from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = `${css.status} ${isOnline ? css.online : css.offline}`;

  return (
    <li className={css.item}>
      <span className={statusClass}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export { FriendListItem };
