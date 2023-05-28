import './index.scss'
import './MyMenu.scss'

import { renderMyMenu } from './TheMenu'

const url = 'https://siakhooi.github.io/json-my-links/bookmark.json'
const menuid = 'mymenu'

renderMyMenu(url, menuid)
