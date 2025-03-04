import clsx from "clsx";
import css from "./FriendListItem.module.css"

export default function FriendListItem({ items: { avatar, name, isOnline } }) {

  const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.textName}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
