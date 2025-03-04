import css from "./CardAvatar.module.css"

export default function CardAvatar({ name, tag, location, image }) {
  return (
    <div className={css.container}>
      <img className={css.img}
      src={image}
      alt="User avatar"
    />
      <p className={css.textName}>{name}</p>
      <p className={css.text}>@{tag}</p>
      <p className={css.text}>{location}</p>
    </div>
  );
};