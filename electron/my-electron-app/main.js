const { app, BrowserWindow } = require('electron')
const  path  = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.htm')
}
app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})