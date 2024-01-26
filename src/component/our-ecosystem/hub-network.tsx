import image1 from '../../images/hubnetwork.png'
import image2 from '../../images/Rectangle-hubnetwork.png'
import './our-ecosystem.scss'

export default function HubNetwork(){
 return(
        <div style={{width: 1259, height: 583.42, left: 0, top: 141, position: 'absolute'}}>
            <div style={{width: 1257.19, height: 583.42, left: 1.81, top: 0, position: 'absolute'}}>
                <img style={{width: 1254.04, height: 583.42, left: 0, top: 0, position: 'absolute', borderRadius:20 }} src={image1} />
                    <div style={{width: 1257.19, height: 583.42, left: 0, top: 0, position: 'absolute', opacity: 0.10, borderRadius: 20}} />
            </div>
            <div style={{width: 614, height: 583.42, left: 0, top: 0, position: 'absolute'}}>
            <div style={{width: 612.46, height: 583.42, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%)', boxShadow: '0px 3.6520893573760986px 21.91253662109375px -0.9130223393440247px rgba(0, 0, 0, 0.25)', borderRadius: 20, backdropFilter: 'blur(15px)'}} />
                <img style={{width: 614, height: 583.42, left: 0, top: 0, position: 'absolute', opacity: 0.10, borderRadius: 20}} src={image2} />
            </div>
            <div className="HubNetwork-title" style={{left: 124.99, top: 48.39, position: 'absolute'}}>HUB NETWORK</div>
            <div style={{width: 553.53, left: 44.32, top: 165.26, position: 'absolute'}}><span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>25 Startup Clubs Members </span>
                <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}>at universities are connected in Vietnam<br/></span>
                <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>100 Startup Competitions</span>
                <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}> organized (e.g: Kawai Business Startup, Techstart , I-Startup,…)<br/></span>
                <span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '700', wordWrap: 'break-word'}}>40 Hub branches</span><span style={{color: 'white', fontSize: 27.39, fontFamily: 'Anek Odia', fontWeight: '400', wordWrap: 'break-word'}}> in Vietnam</span>
            </div>
            <div className='MoreBtn' style={{width: 149.23, height: 45.26, paddingLeft: 36.52, paddingRight: 36.52, paddingTop: 9.13, paddingBottom: 9.13, left: 44.32, top: 443.73, position: 'absolute', background: 'black', borderRadius: 20, border: '0.91px #373737 solid', justifyContent: 'center', alignItems: 'center', gap: 15.52, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 21.91, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>More</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
                <path d="M0.805212 3.32682L8.70575 11.3591L0.805212 19.3914L3.23747 21.8589L13.5875 11.3591L3.23747 0.859373L0.805212 3.32682Z" fill="white"/>
                </svg>
            </div>
        </div>
 )
}