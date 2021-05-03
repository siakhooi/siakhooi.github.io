import './index.css';
import './MyMenu.css';

import { renderMyMenu } from './MyMenu.js';

const url = 'https://siakhooi.gitlab.io/public-api/my-pages/bookmark.json';
const menuid = 'mymenu';

renderMyMenu(url, menuid);
