import image1 from '../../images/hubGLP.png'
import image2 from '../../images/Rectangle-hubGLP.png'
import './our-ecosystem.scss'

export default function HubGlobalLaunchPad(){
 return(
    <div style={{height: 583.42, left: 0, top: 1368.63, position: 'absolute'}}>
    <div style={{width: 1267.28, height: 583.42, left: 0, top: 0, position: 'absolute'}}>
        <img style={{width: 1264.10, height: 583.42, left: 0, top: 0, position: 'absolute', boxShadow: '0px 3.6520893573760986px 21.91253662109375px -0.9130223393440247px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(36.52px)'}} src={image1} />
        <div style={{width: 1267.28, height: 583.42, left: 0, top: 0, position: 'absolute', opacity: 0.10, mixBlendMode: 'overlay', borderRadius: 20}} />
    </div>
    <div style={{width: 624.52, height: 583.42, left: 638.21, top: 0, position: 'absolute'}}>
        <div style={{width: 622.95, height: 583.42, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.45) 100%)', boxShadow: '0px 3.6520893573760986px 21.91253662109375px -0.9130223393440247px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(15px)'}} />
        <img style={{width: 624.52, height: 583.42, left: 0, top: 0, position: 'absolute', opacity: 0.10, mixBlendMode: 'overlay', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 20}} src={image2} />
    </div>
    <div className='HubGLP-title' style={{width: 489.38, left: 701.20, top: 64.82, position: 'absolute',wordWrap: 'break-word'}}>HUB GLOBAL LAUNCHPAD</div>
    <div style={{width: 481.16, left: 700.29, top: 157.04, position: 'absolute'}}><span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>25 Startup Clubs Members </span>
    <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}>at universities are connected in Vietnam<br/></span>
    <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>100 Startup Competitions</span>
    <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}> organized (e.g: Kawai Business Startup, Techstart , I-Startup,…)<br/></span>
    <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>40 Hub branches</span>
    <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}> in Vietnam</span>
    </div>
    <div className='MoreBtn' style={{width: 150.43, height: 45.26, paddingLeft: 36.52, paddingRight: 36.52, paddingTop: 9.13, paddingBottom: 9.13, left: 699.38, top: 469.29, position: 'absolute', background: 'black', borderRadius: 20, border: '0.91px #373737 solid', justifyContent: 'center', alignItems: 'center', gap: 15.52, display: 'flex'}}>
        <div style={{color: 'white', fontSize: 21.91, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>More</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
        <path d="M0.463324 2.52164L8.36386 10.554L0.463324 18.5863L2.89559 21.0537L13.2456 10.554L2.89559 0.0541973L0.463324 2.52164Z" fill="white"/>
        </svg>
    </div>
</div>
 )
}