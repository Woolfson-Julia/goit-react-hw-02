import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
    <thead className={css.thead}>
      <tr className={css.tr}>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tbody}>
          {items.map((item) => (
        <tr className={css.tr} key={item.id}>
        <TransactionHistoryItem items = {item} />
      </tr>    
      ))}    
    </tbody>
</table>
)}