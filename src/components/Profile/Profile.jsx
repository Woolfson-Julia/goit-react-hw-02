import CardAvatar from "../CardAvatar/CardAvatar";
import CardList from "../CardList/CardList";
import css from "./Profile.module.css"


export default function Profile({name, tag, location, image, stats}) {
  return (
    <div className={css.container}>
      <CardAvatar
        name={name}
        tag={tag}
        location={location}
        image={image}
      />
      <CardList stats={stats} />
    </div>
  );
}