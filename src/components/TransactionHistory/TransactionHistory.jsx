import css from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.head}>
      <th className={css.name}>Type</th>
      <th className={css.name}>Amount</th>
      <th className={css.name}>Currency</th>
    </tr>
  </thead>

            <tbody>
        {items.map((item) => {
                    return (
      <tr className={css.row} key = {item.id}>
      <td className={css.info}>{item.type}</td>
      <td className={css.info}>{item.amount}</td>
      <td className={css.info}>{item.currency}</td>
    </tr>
        )
    })
                    
    }
                
     
  </tbody>
</table>
    )
}