var posts=["2024/12/19/1249. 移除无效的括号/","2024/12/19/20. 有效的括号/","2024/12/19/21. 合并两个有序链表/","2024/11/26/2024高校联盟CTF杯的官方WP/","2024/12/19/28. 找出字符串中第一个匹配项的下标/","2024/12/19/69. x 的平方根/","2024/11/12/CTF基础知识——HTTP1.1 请求方法/","2024/11/12/CTF简介/","2024/11/12/DS_Store/","2024/12/19/Golang安装/","2024/12/19/HEXO管理系统/","2024/11/12/HG泄露/","2024/11/23/Cookie注入/","2024/11/23/MySQL结构/","2024/11/12/HTTP基本认证/","2024/11/24/Refer注入/","2024/12/19/US.KG域名/","2024/11/23/UA注入/","2024/11/12/git泄露,index/","2024/11/12/git泄露,log/","2024/11/12/git泄露,stash/","2024/11/10/kali安装/","2024/12/19/sql注入/","2024/11/12/svn泄露/","2024/11/12/vim缓存/","2024/11/24/反射型xss/","2024/12/19/习题/","2024/11/12/响应包源代码查看/","2024/11/14/工具下载/","2024/11/15/布尔盲注/","2024/10/30/实验室综合管理与服务平台-登录界面/","2024/11/12/弱口令/","2024/11/15/报错型sql注入/","2024/11/23/时间盲注/","2024/11/13/比赛内容/","2024/10/30/漏洞发现日志/","2024/12/19/算法知识图谱/","2024/11/12/比赛形式/","2024/11/24/过滤空格/","2024/11/12/默认口令/","2024/11/12/整数型SQL注入/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };