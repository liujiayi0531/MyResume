// import logo from './logo.svg';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.scss';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Portolifio from './components/Portolifio';
import SkillStack from './components/SkillStack';
import WorkExperience from './components/WorkExperience';
import config from './config/config';

function App() {

    const [activeTab, setActiveTab] = useState('portolifio');
    const workArr = config.work.map((item, index)=>'workexperience'+(index+1));
    const anchors = useMemo(()=>["portolifio", "skillstack", "education"].concat(workArr).concat(["gallery"]),[]); // 锚点对应的id列表
    // true的时候不用自动跳转
    const [anchorSign, setAnchorSign] = useState(false);
    // 锚点计时器
    const timeoutRef = useRef(null);
    // 个人简介子组件
    const portolifioRef = useRef(null);
    // 技术栈子组件
    const skillStackRef = useRef(null);
    // 教育子组件
    const educationRef = useRef(null);

    useEffect(
        ()=>{
          const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !anchorSign) {
                      console.log(entry.target.id);
                      // 重新渲染页面名称动画
                        scrollToAnchor(entry.target.id); // 更新当前激活的锚点id, 强制滚动
                        // switch (entry.target.id) {
                        //   case 'portolifio':
                        //     // console.log(portolifioRef.current);
                        //     portolifioRef.current.reshowTag();
                        //     break;
                        //   case 'education':
                        //     educationRef.current.reshowTag();
                        //     break;
                        
                        //   default:
                        //     break;
                        // }
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.2 // 当20%进入视口时触发
            }
        );

        anchors.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            // 组件卸载时断开观察器
            anchors.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
      }, [anchors, anchorSign]
    )
    // 滚动至锚点
    const scrollToAnchor = (anchorName) => {
      console.log(anchorName);
      setActiveTab(anchorName);
      if (anchorName) {
          // 找到锚点
          let anchorElement = document.getElementById(anchorName);
          // 如果对应id的锚点存在，就跳转到锚点
          if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
      }
    }

    const resetObserver = (name)=>{

        // switch (name) {
        //   case 'portolifio':
        //     portolifioRef.current.removeTag();
        //     break;
        
        //   default:
        //     break;
        // }

        clearTimeout(timeoutRef.current);
        setAnchorSign(true);
        timeoutRef.current = setTimeout(() => {
          setAnchorSign(false);
        }, 700);
    }

  return (
    <div className="App">
        <Portolifio ref={portolifioRef} info={config.index}></Portolifio>
        <SkillStack ref={skillStackRef} info={config.skills}></SkillStack>
        <Education ref={educationRef} info={config.education}></Education>
        {config.work.map((item, index)=>{
          return <WorkExperience key={item.company} info={item} index={index}></WorkExperience>
        })}
        <Gallery info={config.gallery}></Gallery>
        <div className='tabBar'>
            <div className='tabItem'>
              <div onClick={()=>{scrollToAnchor(anchors[0]); resetObserver(anchors[0])}} 
                className={`iconContainer ${activeTab === anchors[0] ? 'active':''}`}
                >
                <div className='icon'></div>
                <div className='iconHover'></div>
                <div className='infoText'>简介</div>
              </div>
            </div>
            <div className='tabItem'>
            <div onClick={()=>{scrollToAnchor(anchors[1]); resetObserver(anchors[1])}} 
            className={`iconContainer ${activeTab === anchors[1] ? 'active':''}`}
>
                <div className='icon'></div>
                <div className='iconHover'></div>
                <div className='infoText'>技术栈</div>
              </div>
            </div>
            <div className='tabItem'>
            <div onClick={()=>{scrollToAnchor(anchors[2]); resetObserver(anchors[2])}}
                className={`iconContainer ${activeTab === anchors[2] ? 'active':''}`}>
                <div className='icon'></div>
                <div className='iconHover'></div>
                <div className='infoText'>教育经历</div>
              </div>
            </div>
            {/* <div className='tabItem'>
            <div onClick={()=>{scrollToAnchor(anchors[3]); resetObserver(anchors[3])}}
                className={`iconContainer ${activeTab === anchors[3] ? 'active':''}`}>
                <div className='icon'></div>
                <div className='iconHover'></div>
                <div className='infoText'>工作经历</div>
              </div>
            </div> */}
            {
              config.work.map(
                (item, index)=>{
                    return <div key={item.company} className='tabItem'>
                    <div onClick={()=>{scrollToAnchor(anchors[3+index]); resetObserver(anchors[3+index])}}
                        className={`iconContainer ${activeTab === anchors[3+index] ? 'active':''}`}>
                        <div className='icon'></div>
                        <div className='iconHover'></div>
                        <div className='infoText'>工作经历{index+1===1?'一':index+1===2?'二':'三'}</div>
                      </div>
                    </div>
                }
              )
            }
            <div onClick={()=>{scrollToAnchor(anchors[3+config.work.length]); resetObserver(anchors[3+config.work.length])}}
                className={`iconContainer ${activeTab === anchors[3+config.work.length] ? 'active':''}`}>
                <div className='icon'></div>
                <div className='iconHover'></div>
                <div className='infoText'>联系我</div>
              </div>
          </div>
    </div>
  );
}

export default App;
