import style from "./Gallery.module.scss"

import { forwardRef, useImperativeHandle, useState } from "react"
// import qingduo from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/qingduo.png';
// import gamer from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/gamer.png';
// import sovits from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/sovits.png';
// import qrcode from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/wechat.png'
// import wechatIcon from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/wechatIcon.png'
// import emailIcon from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/email.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const qingduo = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/qingduo.png';
const gamer = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/gamer.png';
const sovits = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/sovits.png';
const qrcode = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/wechat.png'
const wechatIcon = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/wechatIcon.png'
const emailIcon = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/email.png'
const imageList = [qingduo, gamer, sovits];
const Gallery = forwardRef(
    ({info}, ref) => {
        useImperativeHandle(ref , ()=>({
            reshowTag : reshowTag,
            removeTag : removeTag
        }))

    AOS.init(
        {
            duration: 500,
            easing: 'ease-in',
            delay: 200,
            once: false
        }
    )

    const [showTag, setShowTag] = useState(true);

    const reshowTag = ()=>{
        setShowTag(false);
        setTimeout(() => {
            setShowTag(true);
        }, 200);
    }

    const removeTag = ()=>{
        setShowTag(false);
    }

    const navigate = (url)=>{
        window.location.href = url;
    }

    return (
        <>
            <div id="gallery" className={style.bgImg}>
                    {/* 模拟boss展示条 */}
                    <div data-aos='tag5'
                        data-aos-easing='ease-in-out'
                        data-aos-duration="2000" className={style.tagContainer}>
                    {/* <div className={showTag?  style.tagContainer:style.tagContainerHide}> */}
                        <div className={style.showTag}>
                            <div className={style.tagText}>联系我</div>
                        </div>
                    </div>
                <div data-aos="fade" className={style.galleryContainer}>
                <div className={style.web}>
                        参与项目
                </div>
                    <div className={style.website}>
                        {
                            info.website.map(
                                (item, index)=>{
                                    return <div onClick={()=>{navigate(item.url)}} key={item.name} className={style.card}> 
                                        <div>
                                            <img alt={item.name} className={style.icon} src={imageList[index]}></img>
                                        </div>
                                        <div className={style.name}>
                                            {item.name}
                                        </div>
                                    </div>;
                                }
                            )
                        }
                    </div>
                    <div className={style.conn}>
                        联系方式
                    </div>
                    <div className={style.connect}>
                        <div className={style.wechat}>
                            <div>
                                <img alt="微信" className={style.qrcode} src={qrcode}></img>
                            </div>
                        </div>
                        <div className={style.email}>
                            <div>ljywarcraft@126.com</div>
                        </div>
                    </div>

                    <div className={style.iconList}>
                        <div>
                            <img alt="微信icon" className={style.connectIcon} src={wechatIcon}></img>
                        </div>
                        <div>
                            <img style={{width:'30px', height:'30px'}} alt="邮箱icon" className={style.connectIcon} src={emailIcon}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    })


export default Gallery;