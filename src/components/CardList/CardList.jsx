import css from "./CardList.module.css"

export default function CardList({ stats: { followers, views, likes } }) {
  return (
  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.spanTitle}>Followers</span>
        <span className={css.span}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.spanTitle}>Views</span>
      <span className={css.span}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.spanTitle}>Likes</span>
        <span className={css.span}>{likes}</span>
    </li>
      </ul>
  )
}
