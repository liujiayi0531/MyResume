import style from "./WorkExperience.module.scss"
import { forwardRef, useImperativeHandle, useState } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkExperience = forwardRef(
    ({info, index}, ref) => {
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
    return (
        <>
            <div id={`workexperience${index+1}`} className={style.bgImg}>
                    {/* 模拟boss展示条 */}
                    <div data-aos='tag4'
                        data-aos-easing='ease-in-out'
                        data-aos-duration="2000" className={style.tagContainer}>
                    {/* <div className={showTag?  style.tagContainer:style.tagContainerHide}> */}
                        <div className={style.showTag}>
                            <div className={style.tagText}>工作经历</div>
                        </div>
                    </div>
                <div data-aos="fade" className={style.workContainer}>
                    <div className={style.header}>
                        <div className={style.company}>
                            {info.company}
                        </div>
                        <div className={style.department}>
                            {info.department}
                        </div>
                        <div className={style.position}>
                            {info.position}
                        </div>
                        <div className={style.time}>
                            {info.time}
                        </div>
                    </div>

                    <div className={style.projects}>
                        {info.project.map((item, index)=>{
                            return    <div key={item.stack}>
                            <div className={style.ind}>
                                <div>项目{index===0?'一':index===1?'二':'三'}</div>
                                <div style={{marginLeft:'27px'}}>{item.name}</div>
                            </div>
                            <div className={style.stack}>
                                技术栈：{item.stack}
                            </div>
                            <div className={style.content}>
                                {item.content}
                            </div></div>
                        })}

                    </div>

                </div>
            </div>
        </>
    )
    })
export default WorkExperience;
//     return (
//         <>
//             <div id={workexperience} className={style.bgImg}>

//             </div>
//         </>
//     )
// }