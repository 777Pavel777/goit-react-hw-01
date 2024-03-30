import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from './profile/Profile';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistori/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
