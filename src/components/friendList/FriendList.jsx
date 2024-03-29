import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li className={css.friendItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
