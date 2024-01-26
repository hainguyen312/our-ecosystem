import image1 from '../../images/hubacademy.png'
import image2 from '../../images/Rectangle-hubacademy.png'
import './our-ecosystem.scss'

export default function HubAcademy(){
    return (
    <div style={{width: 614, height: 574.21, left: 647, top: 759.42, position: 'absolute'}}>
        <img style={{width: 614, height: 574.21, left: 0, top: 0, position: 'absolute', boxShadow: '0px 3.468050956726074px 20.808307647705078px -0.8670127391815186px rgba(0, 0, 0, 0.25)', borderRadius: 18.99, backdropFilter: 'blur(34.68px)'}} src={image1} />
        <div style={{width: 613.75, height: 347.76, left: 0, top: 226.45, position: 'absolute'}}>
            <div style={{width: 613.75, height: 347.76, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%)', boxShadow: '0px 3.468050956726074px 20.808307647705078px -0.8670127391815186px rgba(0, 0, 0, 0.25)', borderRadius: 18.99, backdropFilter: 'blur(34.68px)'}} />
            <img style={{width: 613.75, height: 347.76, left: 0, top: 0, position: 'absolute', opacity: 0.10, mixBlendMode: 'overlay', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 18.99}} src={image2} />
        </div>
        <div style={{width: 521.19, height: 113.98, left: 56.61, top: 378.31, position: 'absolute'}}>
        <span style={{color: '#58A1A0', fontSize: 21.63, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>20+ big incubation programs</span>
        <span style={{color: 'white', fontSize: 21.63, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}> and  accelerations organized.<br/>Key partners for implementation includes: FTU Innovation and Incubation Space, VSV Capital SCE, TFI,... </span></div>
        <div className='MoreBtn' style={{width: 148.27, height: 44.03, paddingLeft: 34.68, paddingRight: 34.68, paddingTop: 8.67, paddingBottom: 8.67, left: 402.58, top: 287.55, position: 'absolute', background: 'black', borderRadius: 18.99, border: '0.87px #373737 solid', justifyContent: 'center', alignItems: 'center', gap: 14.74, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 20.81, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>More</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
            <path d="M0.51074 2.36323L8.01315 9.99078L0.51074 17.6183L2.82043 19.9614L12.6489 9.99078L2.82043 0.0201316L0.51074 2.36323Z" fill="white"/>
            </svg>
        </div>
        <div className='HubAcademy-title' style={{width: 263, height: 52, left: 57, top: 288,position:'absolute'}}>HUB ACADEMY</div>
    </div>
    )
}
