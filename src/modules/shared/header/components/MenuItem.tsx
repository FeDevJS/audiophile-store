import { MenuItemProp } from '../utils/header-types'

export const MenuItem = (props: MenuItemProp) => {
  const classes = props?.classNames?.join(' ')
  return (
    <li className={`menu-item`}>
      <a className={`${classes || ''}`} href='' rel='noopener noreferrer'>{props.title}</a>
    </li>
  )
}
