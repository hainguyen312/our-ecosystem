import HubNetwork from "./hub-network";
import HubMedia from "./hub-media";
import HubAcademy from "./hub-academy";
import HubGlobalLaunchPad from "./hub-global-lauchpad";
export default function OurEcosystem(){
    return(
        <div>
            <div className="OurSystem-container" style={{width: '100%', position: 'relative'}}>
                <div style={{left: 385, top: 0, position: 'absolute', textAlign: 'center', color: '#FFF8F8', fontSize: 60, fontFamily: 'Syne', fontWeight: '700', wordWrap: 'break-word'}}>Our ecosystem</div>
                <HubNetwork/>
                <HubMedia/>
                <HubAcademy/>
                <HubGlobalLaunchPad/>
            </div>
        </div>
    )
}