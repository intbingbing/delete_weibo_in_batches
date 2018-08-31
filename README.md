# 批量删除微博记录  

##### `环境：chrome浏览器，别的没试过`  
#### 使用方法：  
1、chrome下登录并打开微博主页  
2、按下F12键，切换至“Console”栏  
3、复制本项目下content.txt内容，并粘贴至微博页的Console控制台下，回车即可（默认删除全部）  

#### 说明：   
1、在chrome控制台直接粘贴即可，开始会有6s时间加载至页面底部  
2、默认删除全部内容，还有“只删除转发内容”和“只删除原创内容”可选择，更改粘贴内容最后一行的main(all)即可，  

对应参数：  
/**  
 * @param{String}all 全部内容 默认  
 * @param{String}originalContentDrop 原创内容  
 * @param{String}forwardContentDrop 转发内容  
 */  
 
3、逻辑是从前往后删的，所以应在微博的第一页开始操作  
4、正常来说都能正常用，不排除其他账户结构不一致或环境不同而导致无法批量删除  
5、仅供学习交流，谨慎删除  

#### End:  
自己试了下还算正常。实现在main.js里，单纯的用jQuery操作DOM click事件，后期微博稍稍改下结构应该就失效了。如果有用欢迎点星。  

#### 如图  
![](/screen/example.png "界面")  
