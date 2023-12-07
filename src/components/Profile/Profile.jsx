import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={css.items} key={key}>
            <span className={css.label}>
              {key[0].toUpperCase() + key.slice(1)}
            </span>
            <span className={css.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Profile };
