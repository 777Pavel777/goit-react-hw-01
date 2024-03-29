import userData from '../../userData.json';
import css from './Profile.module.css';

export const Profile = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.upBlock}>
          <img className={css.avatar} src={userData.avatar} alt="User avatar" />
          <p className={css.userName}>{userData.username}</p>
          <p className={css.tag}>@{userData.tag}</p>
          <p className={css.location}>{userData.location}</p>
        </div>

        <ul className={css.bottomBlock}>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Followers</span>
            <span className={css.userNumberItem}>
              {userData.stats.followers}
            </span>
          </li>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Views</span>
            <span className={css.userNumberItem}>{userData.stats.views}</span>
          </li>
          <li className={css.userBlockItem}>
            <span className={css.userInfoItem}>Likes</span>
            <span className={css.userNumberItem}>{userData.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
