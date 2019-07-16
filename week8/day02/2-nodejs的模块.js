// 在nodejs中没有html了，js之间引用就需要模块化；
// 在nodejs中，所有的js文件都是模块，所有的方法和逻辑都要写在模块内。
// node内置的模块分为三种： 
// 1.内置模块： 安装node时，随着node一起安装的模块，这些模块都是nodejs的核心模块，如http模块，fs模块，
// 2. 自定义模块：自己写的模块
// 3. 第三方模块： 通过npm或者yarn安装的模块，比如nrm,yarn,lessc等

// 在nodejs中运行js 
// 1.找到你要运行的js文件目录
// 2. 在js文件所在目录中，按住shift键，点击鼠标右键，选择在此处打开powershell窗口（window7是在此处打开命令行窗口）
// 3.在命令行界面中输入: node 文件名 回车 

// vsCode 安装code Runner 插件 --> 右键选择 run Code 选项 （在nodejs中运行js）

// 插件运行：
// 1. code runner 插件,右键 run code 
// 2. webstorm 在js文件中右键run文件名