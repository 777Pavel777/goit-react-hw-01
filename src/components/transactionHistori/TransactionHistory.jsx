import css from './TransactionHistory.module.css';
import Transaction from '../transaction/Transaction';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.blockTop}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className={css.blockBottom} key={transaction.id}>
            <Transaction transactions={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
