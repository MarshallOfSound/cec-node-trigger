const HDMI = require('hdmi-cec');

const monitor = new HDMI.CecMonitor(
  'cec-node-trigger'
)

monitor.start()

console.info('Starting CEC');
monitor.on('ready', () => {
  console.info('CEC Ready');
  monitor.on('op.CEC_VERSION', console.warn)
  console.info('Asking for CEC version');
  monitor.executeOperation(HDMI.LogicalAddress.TV, HDMI.OperationCode.GET_CEC_VERSION);
});

// const commander = new HDMI.Commander
