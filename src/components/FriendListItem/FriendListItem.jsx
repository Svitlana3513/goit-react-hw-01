import css from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnLine}) {
    return (
        <div>
  <img src={avatar} alt="Avatar" width={48} />
  <p>{name}</p>
  <p>{isOnLine}</p>
</div>
    )
}