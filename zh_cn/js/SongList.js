// 网页左下角的歌单
// Song url:https://music.163.com/song/media/outer/url?id=****.mp3 (****处填音乐id)

/* 随机 */
// 歌单列表
var playlists = [
    // Sweet
    [
        {
            title: 'Floating Star',
            author: 'Kirara Magic / Shion Lee',
            url: 'https://music.163.com/song/media/outer/url?id=1830190033.mp3',
            pic: 'https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg'
        },
        {
            title: 'Aurora VIP',
            author: 'Kirara Magic / Shion Lee',
            url: 'https://music.163.com/song/media/outer/url?id=1830187577.mp3',
            pic: 'https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg'
        },
    ],
    // Music Game
    [
        {
            title: 'Particle Arts',
            author: 'Virtual Self',
            url: 'https://music.163.com/song/media/outer/url?id=523251142.mp3',
            pic: 'https://p2.music.126.net/yse1TOVcXNbesBSLPj3w5g==/109951168831529267.jpg'
        },
        {
            title: 'BLRINK',
            author: 'Sta',
            url: 'https://music.163.com/song/media/outer/url?id=1491221345.mp3',
            pic: 'https://arcwiki.mcd.blue/images/thumb/e/e8/Songs_blrink.jpg/384px-Songs_blrink.jpg'
            // 图片来自 Arcaea 中文维基：https://arcwiki.mcd.blue/BLRINK
        },
        {
            title: 'Testify',// Let me forget everthing...
            author: 'void / 星熊南巫',// 记住，光光，要杀，我了
            url: 'https://music.163.com/song/media/outer/url?id=1965912564.mp3',
            pic: 'https://arcwiki.mcd.blue/images/thumb/2/22/Songs_testify.jpg/384px-Songs_testify.jpg'
            // 图片来自 Arcaea 中文维基：https://arcwiki.mcd.blue/Testify
        },
        {
            title: "Le Porteur d'Ombre",// 切勿使用单引号
            author: '黒皇帝 / AKA',// 星白在永夜城吃大餐
            url: 'https://music.163.com/song/media/outer/url?id=2061373391.mp3',
            pic: 'https://p2.music.126.net/7lTOqQ6G9_3sKuDsNc5bdw==/109951168718068730.jpg'
            // 图片非曲目原图
        },
        {
            title: "無人区-Vacuum Track#ADD8E6-",
            author: 'NoKANY',
            url: 'https://music.163.com/song/media/outer/url?id=511181532.mp3',
            pic: 'https://p1.music.126.net/WXAAn_D-gfPB9iVcVZQwAw==/109951163037603327.jpg'
        },
        {
            title: "Live Fast Die Young",// 切勿使用单引号
            author: 'anubasu-anubasu',// 星白在永夜城吃大餐
            url: 'https://music.163.com/song/media/outer/url?id=1933521478.mp3',
            pic: 'https://arcwiki.mcd.blue/images/thumb/b/b1/Songs_livefastdieyoung.jpg/384px-Songs_livefastdieyoung.jpg'
            // 图片来自 Arcaea 中文维基：https://arcwiki.mcd.blue/Live_Fast_Die_Young
        },
        /* 慎 放
        {
            title: 'Hardcore ASMR',
            author: 'ななひら / t+pazolite',
            url: 'https://music.163.com/song/media/outer/url?id=1904491623.mp3',
            pic: 'https://p2.music.126.net/f2acbIEcDS-WdxsGZygIFg==/109951166743080327.jpg'
        },
        */
    ],
    // 崩铁
    [
        {
            title: '太空漫步',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2034615687.mp3',
            pic: 'https://p2.music.126.net/RWIGyShmnjmUxizXco6fVg==/109951168505830245.jpg'
        },
        {
            title: '水龙吟',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2067222280.mp3',
            pic: 'https://p1.music.126.net/oDhurcFOPMPVMLnc6xF99A==/109951168765200998.jpg'
        },
        {
            title: 'WHITE NIGHT (Instrumental)',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2122308130.mp3',
            pic: 'https://p1.music.126.net/sZ-rACbFrybF0x_lI6XNMw==/109951169297766755.jpg'
        },
    ],
    // 原神
    [
        {
            title: '清润玉响',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2140118672.mp3',
            pic: 'https://p1.music.126.net/MlajrhHqU-33qDnu41p11w==/109951169447872203.jpg'
        },
        {
            title: '柔灯轻漾时',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2130083946.mp3',
            pic: 'https://p2.music.126.net/vkLKNH2WpfYh4p4ACRRYOg==/109951169367650385.jpg'
        },
    ],
    // 崩坏3
    [
        {
            title: 'Da Capo',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2026565329.mp3',
            pic: 'https://p2.music.126.net/awzv1LpuBJiKTeB7roh_Aw==/109951168434956885.jpg'
        },
        {
            title: 'Da Capo',
            author: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=2026565329.mp3',
            pic: 'https://p2.music.126.net/awzv1LpuBJiKTeB7roh_Aw==/109951168434956885.jpg'
        },
    ],
];

// 从歌单列表中随机选择一个歌单
var randomPlaylistIndex = Math.round(/* 四舍五入 */Math.random() * playlists.length);
// 关于随机，详见MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 伪随机
var randomPlaylist = playlists[randomPlaylistIndex];

/* 日志记录 */
const playlistNames = {
    0: "小甜甜",
    1: "音游",
    2: "崩铁",
    3: "原神",
    4: "崩坏3",
    default: "[WARN]未定义歌单名称"
    // 最后更新分类：2024/5/9
};

// 获取歌单名称
const SongListSet = playlistNames[randomPlaylistIndex] || playlistNames.default;

const logMessage = SongListSet === playlistNames.default ?
    console.warn(`${SongListSet}`) :
    console.log(`[INFO]选中歌单 [${SongListSet}]`);

/* -----END----- */

/* 创建 APlayer 对象 */
var ap = new APlayer({
    element: document.getElementById('aplayer'),
    showlrc: false,
    fixed: true,
    mini: true,
    audio: randomPlaylist
});
