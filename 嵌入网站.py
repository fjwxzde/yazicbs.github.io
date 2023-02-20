 
import sys,os
#Tips by 鸭鸭

#需要提前加载库文件
#如果没有库文件，请在终端输入如下代码
#pip install PyQt5
#pip install PyQt5-Qt5
#pip install PyQt5-sip
#pip install PyQtWebEngine
#pip install PyQtWebEngine-Qt5
os.chdir(os.path.dirname(os.path.abspath(__file__)))
from PyQt5.QtGui import *
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import *
 
class MainWindow(QMainWindow):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.setWindowTitle('DuckStudio')
        #名称
        self.setWindowIcon(QIcon('icons/favicon.ico'))
        #图标
        self.resize(1200, 800)
        self.show()
        file_path = os.path.abspath(__file__)
        url = 'https://duckduckstudio.github.io/yazicbs.github.io/jp/'
        #URL
        self.browser = QWebEngineView()
        self.browser.load(QUrl(url))
        self.setCentralWidget(self.browser)
 
if __name__=='__main__':
    print('>>>程序已运行')
    #控制台提示完成
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())


#Chat GPT 的库 #pip install openai
#关于pip

#安装
#sudo easy_install pip

#列出已安装的包
#pip freeze or pip list

#导出requirements.txt
#pip freeze > <目录>/requirements.txt

#安装包
#在线安装
#pip install <包名> 或 pip install -r requirements.txt

#通过使用== >= <= > <来指定版本，不写则安装最新版

#安装本地安装包
#pip install <目录>/<文件名> 或 pip install --use-wheel --no-index --find-links=wheelhouse/ <包名>

#<包名>前有空格

#可简写为

#pip install --no-index -f=<目录>/ <包名>

#卸载包
#pip uninstall <包名> 或 pip uninstall -r requirements.txt

#升级包
#pip install -U <包名>

#或：pip install <包名> --upgrade

#升级pip
#pip install -U pip

#显示包所在的目录
#pip show -f <包名>

#搜索包
#pip search <搜索关键字>

#查询可升级的包
#pip list -o

#下载包而不安装
#pip install <包名> -d <目录> 或 pip install -d <目录> -r requirements.txt

#打包
#pip wheel <包名>

#更换国内pypi镜像
#国内pypi镜像
#阿里：https://mirrors.aliyun.com/pypi/simple
#中国科学技术大学：http://pypi.mirrors.ustc.edu.cn/simple/
#指定单次安装源
#pip install <包名> -i https://mirrors.aliyun.com/pypi/simple

#指定全局安装源
#在unix和macos，配置文件为：$HOME/.pip/pip.conf
#在windows上，配置文件为：%HOME%\pip\pip.ini

