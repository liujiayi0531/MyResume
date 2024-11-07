import { forwardRef, useImperativeHandle , useState} from "react"
import style from "./SkillStack.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillStack = forwardRef(
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
        return (
            <>
                <div id="skillstack" className={style.bgImg}>
                    {/* 模拟boss展示条 */}
                    <div data-aos='tag2'
                        data-aos-easing='ease-in-out'
                        data-aos-duration="2000" className={style.tagContainer}>
                    {/* <div className={showTag?  style.tagContainer:style.tagContainerHide}> */}
                        <div className={style.showTag}>
                            <div className={style.tagText}>技术栈</div>
                        </div>
                    </div>
                    <div data-aos="my-diy"  className={style.skillsContainer}>
                        {info.map((item)=>{
                            return <div key={item.name} className={style.skillBox}>
                                <div className={style.score}>{item.score}</div>
                                <div className={style.totalScore}>/10</div>
                                <div className={style.subject}>{item.name}</div>
                            </div>;
                        })}
                    </div>
                </div>
            </>
        );
    })

export default SkillStack;