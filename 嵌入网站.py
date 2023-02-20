 
import sys,os
#需要提前加载库文件
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
