#### 温馨提示

本项目所使用的依赖部分来自于团队内部的NPM镜像地址中
所以需要切换成团队内部的镜像地址才可以使用

#### 切换步骤

> 1.切换镜像源

    // npm

    npm set registry https://npm.suwis.com


> 2.添加用户（初次使用时需要操作）

    // npm

    npm adduser --registry https://npm.suwis.com

> 3.登陆仓库保存用户凭证

     // npm 登录方式

     npm login

     // yarn 登录方式

     yarn config set registry https://npm.suwis.com

     yarn login

> 4.安装项目依赖

     // npm

     npm install

     // yarn

     yarn
