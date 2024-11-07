const config = {
    index:{
        name: '刘嘉懿',
        age: '28岁',
        city: '上海市',
        phone: '18049970209',
        position: '全栈开发',
        summary: `你好，我是一名全栈工程师。我毕业于杜克大学，计算机专业。毕业后我在腾讯IEG工作了三年，期间完成了先锋云游戏平台，问卷系统，语音房小程序
        等业务的前后端功能开发和维护。之后在百度MEG工作了一年，主要专注于擎舵AIGC平台的前后端开发。我乐于学习计算机领域的新知识，注重代码质量和可读性，善于归纳整理文档。
        同时，我善于沟通，也有较强的英语能力，可以和英语母语者无障碍沟通。`,
        mottoList:[
            "你好，天命人",
            "世人都晓神仙好，惟有功名忘不了",
            "人心烧没了，修好一座破庙，又有何用",
            "既见未来，为何不拜",
            "若不披上这件衣裳，众生又怎知我尘缘已断，金海尽干",
            "踏上取经路，比到达灵山更重要",
            "在生的路上，我们每个人都是取经人",
            "肉眼凡夫，求而不得神仙骨",
            "半荣半枯，几人知是长生路",
            "我来助你！",
        ]
    },
    skills:[
        {score: 9, name: "Java"},
        {score: 9, name: "Springboot"},
        {score: 8, name: "SpringCloud"},
        {score: 9, name: "Vue"},
        {score: 9, name: "React"},
        {score: 9, name: "Mysql"},
        {score: 9, name: "Redis"},
        {score: 8, name: "Kafka"},
        {score: 8, name: "Uniapp"},
        {score: 8, name: "Docker"},
        {score: 9, name: '英语能力'}
    ],
    education:[
        {time: '2022-2024', name: '杜克大学', major:'计算机工程', degree:"硕士",
            locate:'美国，Durham', reward:'主修课程：C++，数据库，机器学习等，绩点排名前40%，参与过实验室项目(计算机视觉相关)', grade:'3.4/4'
        },
        {time: '2018-2022', name: '山东大学', major:'通信工程',
            locate:'山东，济南', degree:"本科",
             reward:'入学第一年学院绩点前10%，曾获院级奖学金，英语六级成绩565，学院排名第一。担任学生会体育部干事，组织过运动会', grade:'4.4/5'},
    ],
    work:[
        {time: '2023.09 - 2024.06', position: '全栈开发工程师',department:'MEG',company:'百度', project:[
            {
                name:'擎舵AI生成式平台',
                stack: 'Vue+Canvas+Fabric+Echarts+SpringBoot+Kafka+Mysql+Redis+Docker',
                content: `项目背景: 百度擎舵平台是专为 AI 营销推广打造的智能工具，支持生成营销图、营销视频等功能，极大提升内容创作效率。平台已服务超过 3000+品牌，助力其实现精准营销和内容智能化生产。项目地址：https://qingduo.baidu.com/
                责任描述：
                1. 负责开发并封装在线图片&视频编辑器等前端组件，以及擎舵平台的管理后台接口编写和前端功能开发。
                2. 使用 Canvas API 对图片进行裁剪，并封装组件。使用 Fabric.js 进行图片编辑器的开发。
                3. 使用 Lottie 进行视频编辑器动画功能的开发，使用 ECharts 进行后管系统数据展示。
                4. 负责使用 Java 设计模式对代码进行优化，使用 Redis 对系统热点数据进行缓存缩短 Mysql 接口请求时间。
                5. 负责使用 Kafka 开发消息推送接口确保日志消息和关键数据发送到后管系统实现实时高效的消息传递。`
            }
        ]},
        {
            time: '2020.07 - 2023.07', position: '全栈开发工程师',department:'IEG', company:'腾讯', project:[
                {   name:'先锋云游戏平台',
                    stack: 'Vue+Webpack+Webrtc+Monorepo+SpringBoot+MongoDb+Redis',
                    content: `项目背景:先锋云游戏平台海外版，作为腾讯先锋云游戏平台的国际拓展项目，致力于为海外玩家提供高品质、多平台支持的云游戏服务。项目已拥有数百款正版游戏库，覆盖全球数千万用户，成为云游戏领域的佼佼者。将国内的游戏切片以 url 链接的形式进行出海推广，功能包括音视频流的处理以及流量数据监测，游戏菜单功能，键位映射，排队功能，异常处理功能等。
                    责任描述：
                    1. 使用 monorepo 的形式分功能模块管理 sdk，模块包括推流，点击映射，异常处理等。
                    2. 使用 webpack 进行打包，并上传至 cdn 增加加载速度。
                    3. 使用 Webrtc 进行视频推流，并对移动端设备进行适配。
                    4. 使用 SpringBoot，负责后端 Java 异常拦截器和异常类封装，前端 axios 二次封装，统一处理接口异常。
                    5. 使用 MongoDb 存储和过滤系统关键日志数据，同时缓存到 Redis 中，减轻数据库压力。`
                },
                {   name:'游戏问卷系统',
                    stack: 'Vue+JSBridge+Webpack+SpringCloud+Redis+MybatisPlus+Mysql+Docker',
                    content:`项目背景：该系统用于收集用户在游戏中 bug 反馈 以及有奖调查。开发内容包括 web 客户端以及管理端。
                    责任描述：
                    1. 负责问卷调查系统后端 SpringCloud 框架(Web 客户端和管理端)搭建和前端框架搭建。
                    2. 负责针对问卷可能包含单选、多选、评分、文本输入等不同题型支持前端动态调整和扩展。
                    3. 负责前端用响应式实现不同尺寸设备适配，使用 i18n 进行多语言适配。
                    4. 负责 webpack 打包优化，包括雪碧图优化，gzip 压缩，上传 cdn 等。
                    5. 使用 JSBridge 与 Native 交互，优化用户填写问卷体验。
                    6. 负责针对 Mysql 问卷数据使用 Kettle 进行清洗转换提取关键性建议进行版本迭代更新。`
                }
            ]
        }
    ],
    gallery:{
        website:[
            {name: '擎舵AIGC平台', url: 'https://qingduo.baidu.com/', image:'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/qingduo.png'},
            {name: '先锋云游戏', url: 'https://gamer.qq.com/', image:'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/gamer.png'},
            {name: 'Sovits语音模型训练', url:'https://www.bilibili.com/video/BV1dW421A7oa/?vd_source=3c9aa31a80d766a70d5254545616e040', image:'https://myweb-1301075348.cos.ap-shanghai.myqcloud.com/assets/sovits.png'}
        ],
        connect:[
            {name: '微信', image: 'src/assets/wechat.png'},
            {name: '邮箱', url: 'ljywarcraft@126.com'},
            {name: '领英', url:'https://www.linkedin.com/in/jiayi-liu-a13a242b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}
        ]
    
    }
};

export default config;