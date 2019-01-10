const HDMI = require('hdmi-cec');

const monitor = new HDMI.CecMonitor(
  'cec-node-trigger'
)

monitor.emit = (...args) => console.warn('CEC Event:', ...args);

monitor.start()
