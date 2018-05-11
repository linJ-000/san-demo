import san from 'san'
import Hello from './component/Hello.san'
import DataOper from './component/DataOper.san'

import './assets/css/index.css'


var dataOper = new DataOper();
dataOper.attach(document.body);