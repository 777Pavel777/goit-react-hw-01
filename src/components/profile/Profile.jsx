import css from './Profile.module.css';

export default function Profile({ username, tag, location, image, stats }) {
  return (
    <>
      <div className={css.container}>
        <div className={css.upBlock}>
          <img className={css.avatar} src={image} alt="User avatar" />
          <p className={css.userName}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.bottomBlock}>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Followers</span>
            <span className={css.userNumberItem}>{stats.followers}</span>
          </li>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Views</span>
            <span className={css.userNumberItem}>{stats.views}</span>
          </li>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Likes</span>
            <span className={css.userNumberItem}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
