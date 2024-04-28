import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div>
  <img src={avatar} alt={name} width="68" />
  <p className={css.name}>{name}</p>
  <p className={clsx(css.status, isOnline === true? css.online: css.offline)}>{isOnline === true ? "Online" : "Offline"}</p>
</div>
    )
}