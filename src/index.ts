import { MicrobitWebUSBConnection } from '@microbit/microbit-connection';

const c = new MicrobitWebUSBConnection();
const b = document.body.appendChild(document.createElement("button")) as HTMLButtonElement
b.innerText = "Click me"
b.onclick = () => c.connect()
