import './index.scss'
import './MyMenu.scss'

import { renderMyMenu } from './TheMenu'

const url = 'https://siakhooi.gitlab.io/public-api/my-pages/bookmark.json'
const menuid = 'mymenu'

renderMyMenu(url, menuid)
