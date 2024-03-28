import userData from '../../userData.json';
import clsx from 'clsx';
import css from './Profile.module.css';

export const Profile = () => {
  return (
    <>
      <div className={clsx(css.container)}>
        <div className={clsx(css.upBlock)}>
          <img
            className={clsx(css.avatar)}
            src={userData.avatar}
            alt="User avatar"
          />
          <p className={clsx(css.userName)}>{userData.username}</p>
          <p className={clsx(css.tag)}>@{userData.tag}</p>
          <p className={clsx(css.location)}>{userData.location}</p>
        </div>

        <ul className={clsx(css.bottomBlock)}>
          <li className={clsx(css.userBlockItem)}>
            <span className={clsx(css.userInfoItem)}>Followers</span>
            <span className={clsx(css.userNumberItem)}>
              {userData.stats.followers}
            </span>
          </li>
          <li className={clsx(css.userBlockItem)}>
            <span className={clsx(css.userInfoItem)}>Views</span>
            <span className={clsx(css.userNumberItem)}>
              {userData.stats.views}
            </span>
          </li>
          <li className={clsx(css.userBlockItem)}>
            <span className={clsx(css.userInfoItem)}>Likes</span>
            <span className={clsx(css.userNumberItem)}>
              {userData.stats.likes}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
