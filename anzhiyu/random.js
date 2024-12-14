var posts=["2024/12/14/hello-world/","2024/12/14/US.KG域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };