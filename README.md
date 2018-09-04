# 批量删除微博记录  

#### 环境：PC端chrome、edge浏览器，除了IE别的应该都可以，没试过，试过的留个言  
##### `TIP: 如果嫌慢，可以把delayClick函数里的1500改为1000，但过快可能会出现服务器停止响应`  
#### 使用方法：  
1、chrome下登录并打开微博主页  
2、按下F12键，切换至“Console”栏  
3、复制本项目下main.js内容，并粘贴至微博页的Console控制台下，回车即可（默认删除全部）  

#### 说明：   
1、在chrome控制台直接粘贴即可，开始会有9s时间加载至页面底部  
2、默认删除全部内容，还有“只删除转发内容”和“只删除原创内容”可选择，更改粘贴内容最后一行的main(all)即可，  
对应参数：  
/**  
 \* @param{String}all 全部内容 默认  
 \* @param{String}originalContentDrop 原创内容  
 \* @param{String}forwardContentDrop 转发内容  
 */  
3、随时可以刷新或关闭网页退出删除  
4、仅供学习交流，谨慎删除  

#### End:  
引入jQuery操作DOM事件，后期微博稍稍改下结构应该就失效了。如果有用欢迎点星。  

#### 如图  
![](/screen/example.png "界面")  
