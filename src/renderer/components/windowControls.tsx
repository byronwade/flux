export default function WindowControls() {
	return (
    <div className="window-controls">
        <span className="minimize" onClick={()=>{ window.electron.ipcRenderer.min(); }}  />
        <span className="maximize" onClick={()=>{ window.electron.ipcRenderer.max(); }} />
        <span className="close" onClick={()=>{ window.electron.ipcRenderer.close(); }}  />
    </div>
	);
}