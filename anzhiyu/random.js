var posts=["2024/12/14/US.KG域名/","2024/11/23/Cookie注入/","2024/11/24/Refer注入/","2024/11/23/UA注入/","2024/11/23/MySQL结构/","2024/12/14/习题/","2024/11/23/时间盲注/","2024/11/15/报错型sql注入/","2024/11/12/整数型SQL注入/","2024/11/24/过滤空格/","2024/10/30/漏洞发现日志/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };