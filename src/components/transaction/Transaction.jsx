import css from './Transaction.module.css';
import TransactionHistory from '../transactionHistori/TransactionHistory';

export default function Transaction({ transactions }) {
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
        {transactions.map(transaction => (
          <tr className={css.blockBottom} key={transaction.id}>
            <TransactionHistory transactions={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
