import css from './TransactionHistory.module.css';

export default function TransactionHistory({
  transactions: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.text}>{type}</td>
      <td className={css.text}>{amount}</td>
      <td className={css.text}>{currency}</td>
    </>
  );
}
