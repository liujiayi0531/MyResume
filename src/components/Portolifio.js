
import { useState, useEffect, forwardRef } from 'react';
import style from './Portolifio.module.scss';
// import avatar from 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/avatar.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const avatar = 'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/avatar.jpg';
const Portolifio = forwardRef(
    ({info}, ref) => {
        // useImperativeHandle(ref , ()=>({
        //     reshowTag : reshowTag,
        //     removeTag : removeTag
        // }))
        AOS.init(
            {
                duration: 500,
                easing: 'ease-in',
                delay: 200,
                once: false
            }
        )
        const [motto, setMotto] = useState('');
        const [currIndex, setCurrIndex] = useState(0);
        // const [showTag, setShowTag] = useState(true);
    
        // const reshowTag = ()=>{
        //     setShowTag(false);
        //     setTimeout(() => {
        //         setShowTag(true);
        //     }, 200);
        // }

        // const removeTag = ()=>{
        //     setShowTag(false);
        // }
    
        useEffect(() => {
            // 组件挂载后执行的逻辑
            // await new Promise(
            //     (res)=>{
            //         setTimeout(() => {
            //             res();
            //         }, 2500);
            //     }
            // )
            let mottoList = info.mottoList;
            let currMotto = mottoList[currIndex];
            let len = currMotto.length;
            let index = 0;
            let e1 = setInterval(insWords, 170);
            let e2 = null;
            function insWords() {
                if (index < len  && index >= 0) {
                    setMotto((mo) =>{
                        return mo + currMotto[index++];
                    });
                }
                if (index >= len) {
                    e2 = setInterval(delWords, 80);
                    clearInterval(e1);
                }
            }
    
            function delWords() {
                if (index >= 0) {
                    setMotto((mo) =>{
                        index--;
                        return mo.substring(0, mo.length-1);
                    });
                }
                if (index < 0) {
                    clearInterval(e2);
                    if(currIndex < mottoList.length-1){
                        setCurrIndex(currIndex=>currIndex+1);
                    } else{
                        setCurrIndex(currIndex=>0);
                    }
                }
            }

            return ()=>{
                clearInterval(e1);
                clearInterval(e2);
            }
    
            
        }, [info.mottoList, currIndex]);
    
    
        return (
            <>
                <div id="portolifio" className={style.bgImg}>
    
                    {/* 模拟boss展示条 */}
                    <div data-aos='tag1'
                        data-aos-easing='ease-in-out'
                        data-aos-duration="2000" className={style.tagContainer}>
                    {/* <div className={showTag?  style.tagContainer:style.tagContainerHide}> */}
                        <div className={style.showTag}>
                            <div className={style.tagText}>个人简介</div>
                        </div>
                    </div>
                    <div className={style.avatar}>
                        <img alt='头像' className={style.avatarImg} src={avatar}></img>
                    </div>
                    <div data-aos="fade" className={style.pInfo}>
                        <div className={style.name}>
                            <div>{info.name}</div>
                        </div>
                        <div className={style.personInfoFlex}>
                            <div className={style.personInfo}>
                                {info.age}
                            </div>
                            <div className={style.personInfo}>
                                {info.city}
                            </div>
                            <div className={style.personInfo}>
                                {info.phone}
                            </div>
                            <div className={style.personInfo}>
                                {info.position}
                            </div>
                        </div>
                        <div className={style.motto}>
                            {motto}
                        </div>
                        <div className={style.summary}>
                            {info.summary}
                        </div>
    
                    </div>
                </div>
            </>
        )
    }
)

export default Portolifio;

// export default function Portolifio({info}){


// }