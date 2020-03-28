// import * as nw from 'nw'

declare const nw: any

export default class Gui {
    name = 'Storex Hub'

    private tray: any

    constructor(private options?: { shutdown?: () => Promise<void> }) {
        // gui.Window.get().on('loaded', () => {
        //     updateBackupLocation()
        // })
    }

    setup() {
        this._buildTray()
    }

    async closeApp() {
        await this.options?.shutdown?.()
        this.closeTray()
        nw.App.quit()
    }

    async closeTray() {
        if (this.tray) {
            this.tray.remove()
            this.tray = null
        }
    }

    _buildTray() {
        this.tray = new nw.Tray({ tooltip: this.name, icon: 'assets/img/tray_icon.png' })
        const menu = new nw.Menu()
        const itemCloseApp = new nw.MenuItem({ type: 'normal', label: 'Quit', click: () => this.closeApp() })
        menu.append(itemCloseApp)
        this.tray.menu = menu;
    }
}
