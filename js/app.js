;(function (window) { 
	//在html中遍历todos数据 渲染到页面
	const todos=[
		{
			id:1,
			title:'吃饭',
			done:true
		},
		{
			id:2,
			title:'睡觉',
			done:false
		}
	]
	new Vue({
		el:'#todoapp',
		data:{
			todos:todos
		}
	})
})();
