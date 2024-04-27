# Music Games 页面开发者文档
前言：<br>
如果你不知道你是怎么看到这个界面的，亦或者你不参与网站的开发，你可以不用查看这个文件。<br>
本文件仅针对Music Games页面，对于其他页面请查看相应页面的注释<br>

## 总信息
全部页面使用背景色`#f5f5dc`<br>

## 索引页
含有各个子页面的链接。<br>
本页面不自动设定标题`center-text`<br>
### 已知问题
* 缺少页面展示图
* 缺少未完成页面变化

## Arcaea
本页面不自动设定标题`center-text`<br>
### 已知问题
* 缺少页面展示图
* 页面描述不详细
* 缺少成绩图
### 相关示例
A text tell you HOW to add something.<br>
#### index(索引) example
```html
<a href="#SongName">SongName</a>
&nbsp;|&nbsp;
```

#### example use(成绩图)
```html
<h2 id="SongName" class="center_text">SongName SCORE</h2>
<img src="https://duckduckstudio.github.io/yazicbs.github.io/music_games/photos/Arcaea/[SongName]-SCORE-EXp-FR.png">
<!-- And You can set the width and height IF IT NEED -->
```
> [!NOTE]
> If want, Can add a info to say something.
> e.g.(Under the photo)

```html
<p>First time CLEAR!</p>
```
#### photo name example(图片名称)
格式：`[SongName]-SCORE-LEVER-CLEAR`<br>
e.g. `[Fracture Ray]-09383298-A-HardTC`<br>
相关参数：<br>
* LEVER:[EXp, EX, AA, A, B, C, D] -> EXp => EX+
* CLEAR:[PM, FR, HardTC, TC, EasyTC, TL]
