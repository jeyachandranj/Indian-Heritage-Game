self.fallback=async e=>{let{destination:a,url:c}=e,n={document:"/fallback",image:!1,audio:!1,video:!1,font:!1}[a];return n?caches.match(n,{ignoreSearch:!0}):Response.error()};