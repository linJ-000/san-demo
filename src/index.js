import san from 'san'
import Hello from './component/Hello.san'
import DataOper from './component/DataOper.san'
import CondAndCirc from './component/CondAndCirc.san'
import StyleCtrl from './component/StyleCtrl.san'
import EventHandle from './component/EventHandle.san'

import './assets/css/index.css'


var dataOper = new DataOper();
dataOper.attach(document.body);

var condAndCirc  = new CondAndCirc()
condAndCirc.attach(document.body)

var styleCtrl = new StyleCtrl()
styleCtrl.attach(document.body)

var eventHandle = new EventHandle()
eventHandle.attach(document.body)