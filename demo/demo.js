var data={
        '个人展示':[
          			{'name':'个人展示','method':'全屏滚动','src':'jQuery特效/全屏滚动/1.全屏滚动.html'},
          ],
				'Html \&\& CSS':[
                    {'name':'css实现雷达扫描效果','method':'css3新特性','src':'html/css3新特性/css实现雷达图.html'},
                    {'name':'纯css实现全景移动','method':'css3新特性','src':'html/css3新特性/纯css实现全景移动.html'},
          			{'name':'css实现动态环形效果','method':'css','src':'html/css制作环形.html'},
          			{'name':'自适应两栏式布局','method':'浮动','src':'html/两栏式布局/1.5.CSS_coding.html'},
					{'name':'模拟报纸排版','method':'实现复杂页面','src':'html/模拟报纸排版/1.6.newspaperLayout.html'},
					{'name':'页面架构及样式布局','method':'实现复杂页面','src':'html/页面架构及样式布局/task1.7__页面架构及样式布局.html'},
					{'name':'响应式网格(栅格化)布局','method':'媒体查询','src':'html/响应式网格(栅格化)布局/task1.8_响应式网格(栅格化)布局.html'},	
					{'name':'实现一个复杂的页面','method':'实现一个复杂的页面','src':'html/实现一个复杂的页面/task1.9.实现一个复杂的页面.html'},	
					{'name':'响应式网格(栅格化)布局','method':'响应式网格(栅格化)布局','src':'html/响应式网格(栅格化)布局/task1.8_响应式网格(栅格化)布局.html'},	
					{'name':'移动Web布局实践','method':'移动端页面实现','src':'html/移动Web布局实践/task1.11_移动Web布局实践.html'},	
          			{'name':'css3新特性','method':'css3新特性','src':'html/css3新特性/task1.13_CSS3新特性.html'},
          			{'name':'css3新特性瀑布流布局','method':'css3新特性','src':'html/css3新特性/纯CSS3瀑布布局.html'},
          			{'name':'网站首页','method':'JS+HTML','src':'website/index.html'},
				],
				'JavaScript':[
					{'name':'基础JavaScript练习','method':'数组的方法','src':'javaScript/1.基础JavaScript练习.html'},
					{'name':'DOM操作的练习','method':'DOM操作','src':'javaScript/2.dom操作/task1.16_零基础JavaScript编码.html'},
			        {'name':'js实现数据展现','method':'数据展现','src':'javaScript/3.数据展示/js实现数据展现.html'},
			        {'name':'碰撞检测','method':'DOM事件','src':'javaScript/5.碰撞检测.html'},
			        {'name':'模拟百度百科导航','method':'滚动事件+位置判断','src':'javaScript/百度百科滚动导航.html'},
			        {'name':'模拟聊天','method':'滚动事件+innerHTML','src':'javaScript/模拟QQ聊天/sendMessage.html'},
				],
				"Reactjs":[
					{'name':"评论显示与发表组件开发commentBox","method":"组件式开发，this.props/this.state","src":"reactjs/Demos/components/commentBox/commentBox.html"},
					{"name":"搜索栏searchBox",'method':"组件式开发",'src':"reactjs/Demos/components/searchBox/searchBox.html"},
				],
        "Bootstrap":[
			        {"name":"表单验证状态","method":"表单的各种状态","src":"bootstrap/webpage/4.form-2.html"},
			        {"name":"各种按钮","method":"各种按钮状态","src":"bootstrap/webpage/6.button.html"},
			        {"name":"各种图片样式","method":"图片样式","src":"bootstrap/webpage/7.pictures.html"},
			        {"name":"输入框组","method":"组件和其他按钮的结合","src":"bootstrap/webpage/8.input-group-addon.html"},
			        {"name":"导航样式","method":"水平导航+垂直导航","src":"bootstrap/webpage/12.nav.html"},
        ],
				"页面布局":[
					{'name':'单列居中布局之text-align(父)+margin(子)','method':'','src':'布局/单列居中布局/1.html'},	
					{'name':'单列居中布局之display:table(子)','method':'','src':'布局/单列居中布局/2.html'},	
					{'name':'单列居中布局之position+transform','method':'','src':'布局/单列居中布局/3.html'},	
					{'name':'单列居中布局之display:flex;justify-content:center;(子)','method':'','src':'布局/单列居中布局/4.html'},
				]
			};

var str="";
for(var item in data){
	str+='<p style=\"color:red;font-size:20px;margin:30px auto 10px 0;\">'+item+'</p><table><tbody>';
	for (var i = 0; i < data[item].length; i++) {

		str+='<tr><td width=\"10%;\">'+(i+1)+'</td><td width=\"50%;\"><a href='+data[item][i].src +'>'+data[item][i].name+'</a></td><td  width=\"40%;\" >'+data[item][i].method+'</td></tr>';
		// console.log(str);
	}
	str+="</tbody></table>";
}
document.getElementById('demo_container').innerHTML=str;