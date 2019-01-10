const HDMI = require('hdmi-cec');

const monitor = new HDMI.CecMonitor(
  'cec-node-trigger'
)

monitor.start()

monitor.on('op.CEC_VERSION', console.warn)
monitor.executeOperation(HDMI.LogicalAddress.TV, HDMI.OperationCode.GET_CEC_VERSION);

// const commander = new HDMI.Commander
