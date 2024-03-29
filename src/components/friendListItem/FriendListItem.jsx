import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img className={css.friendIcon} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.userStatus, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
