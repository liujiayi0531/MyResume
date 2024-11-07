import style from "./Education.module.scss"
import { forwardRef, useImperativeHandle, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Education = forwardRef(
    ({info}, ref) => {

    AOS.init(
        {
            duration: 500,
            easing: 'ease-in',
            delay: 200,
            once: false,
            mirror: true
        }
    )
        useImperativeHandle(ref , ()=>({
            reshowTag : reshowTag,
            removeTag : removeTag
        }))

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
    return (
        <>
            <div id="education" className={style.bgImg}>
                    {/* 模拟boss展示条 */}
                    <div data-aos='tag3'
                        data-aos-easing='ease-in-out'
                        data-aos-duration="2000" className={style.tagContainer}>
                    {/* <div className={showTag?  style.tagContainer:style.tagContainerHide}> */}
                        <div className={style.showTag}>
                            <div className={style.tagText}>教育经历</div>
                        </div>
                    </div>
                <div data-aos="fade" className={style.eduContainer}>
                    {info.map((item)=>{
                        return <div key={item.name} className={style.content}>
                            <div className={style.header}>
                                <div className={style.school}>
                                    {item.name}
                                </div>
                                <div className={style.degree}>
                                    {item.degree}
                                </div>
                                <div className={style.locate}>
                                    {item.locate}
                                </div>
                                <div className={style.time}>
                                    {item.time}
                                </div>
                            </div>
                            <div className={style.secondLine}>
                                <div className={style.major}>
                                    专业：{item.major}
                                </div>
                                <div className={style.grade}>
                                    绩点：{item.grade}
                                </div>
                            </div>

                            <div className={style.detail}>
                                {item.reward}
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </>
    )
    })


export default Education;
//     return (
//         <>
//             <div id="education" className={style.bgImg}>

//             </div>
//         </>
//     )
// }