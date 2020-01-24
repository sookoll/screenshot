const path = require('path')
const schedule = require('node-schedule')
const WebCapture = require('webpage-capture').default

const capturer = new WebCapture({
  outputDir: path.resolve(__dirname, './out')
})

// Web Address (URL) of the page to capture
const url = process.argv[2];
const interval = parseInt(process.argv[3]);

schedule.scheduleJob('*/' + interval + ' * * * * *', (fireDate) => {
  (async () => {
    // Single input
    const res = await capturer.capture(url)
    console.log(`${fireDate} ${res[0].output}`)
  })().catch(console.log)
      .then((plah) => {
        capturer.close()
      })
});
