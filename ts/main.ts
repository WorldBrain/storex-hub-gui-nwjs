import * as storexHub from '@worldbrain/storex-hub/lib/main'
import Gui from './gui'

export async function main() {
    await storexHub.main()
    const gui = new Gui()
    gui.setup()
}

if (require.main === module) {
    main()
}

// https://github.com/evshiron/nwjs-builder-phoenix
