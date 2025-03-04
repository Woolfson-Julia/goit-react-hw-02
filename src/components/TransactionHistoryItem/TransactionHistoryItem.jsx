import css from "./TransactionHistoryItem.module.css"

export default function TransactionHistoryItem({ items: { type, amount, currency } }) {
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
      </>
  );
}