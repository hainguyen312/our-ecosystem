import './overall-structure.scss';
import Diagram from './diagram';

export default function OverallStructure(){
    return(
        <div className='OverallStructure-container'>
            <h1 className='OS-heading' style={{color: 'white', fontFamily: 'Syne', fontWeight: '700', wordWrap: 'break-word'}}>Overall structure</h1>
            <p className='OS-description' style={{color: 'white', fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}>In early stage, the Start-Ups are supported by HUB Network, Hub Media, Hub Academy. Then, the Launchpad will support 
            potential project to raise capital towards higher milestones</p>
            <Diagram/>
        </div>
    )
}