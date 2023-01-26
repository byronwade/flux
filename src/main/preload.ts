import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

window.onload = function () {
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('overlayBtn');
    if (el) {
      el.addEventListener('click', () => {
        ipcRenderer.send('max');
      });
    }
  });
};

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    close() {
      ipcRenderer.send('close');
    },
    min() {
      ipcRenderer.send('min');
    },
    max() {
      ipcRenderer.send('max');
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
