import{_ as u,r as t,o as v,c as m,a as d,w as i,e as a,b as e,f as l}from"./app-iYgfbW7h.js";const h={},b=l('<h1 id="github-releases" tabindex="-1"><a class="header-anchor" href="#github-releases" aria-hidden="true">#</a> GitHub Releases</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>GitHub API 速率限制：未经身份验证的请求的主要速率限制为每小时 60 个请求。使用个人访问令牌发出 API 请求计入您每小时 5000 个请求的个人速率限制。</p></div><h2 id="仓库结构" tabindex="-1"><a class="header-anchor" href="#仓库结构" aria-hidden="true">#</a> 仓库结构</h2>',3),p=e("p",null,[a("最简单的用法，直接写 "),e("code",null,"所有者/仓库"),a("，只能填一个")],-1),x=e("h5",{id:"输入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输入","aria-hidden":"true"},"#"),a(" 输入")],-1),g=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`alistGo/alist
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),_=e("p",null,"与下面的写法效果一致：",-1),f=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`/:alistGo/alist
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),w=e("p",null,"挂载到子目录，可以挂多个仓库",-1),z=e("h5",{id:"输入-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#输入-1","aria-hidden":"true"},"#"),a(" 输入")],-1),E=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`/alist-gh:alistGo/alist
/alist-web-gh:alistGo/alist-web
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("p",null,[a("最前面的 "),e("code",null,"/"),a(" 可以省略：")],-1),R=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`alist-gh:alistGo/alist
alist-web-gh:alistGo/alist-web
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=l(`<h2 id="显示-readme、license-文件" tabindex="-1"><a class="header-anchor" href="#显示-readme、license-文件" aria-hidden="true">#</a> 显示 README、LICENSE 文件</h2><p>开启前：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alist/
├── alist-linux-amd64.tar.gz
└── alist-windows-amd64.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alist/
├── alist-linux-amd64.tar.gz
├── alist-windows-amd64.zip
├── README.md
├── README_cn.md
└── LICENSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后，不显示文件夹总大小和修改时间。</p><h2 id="令牌" tabindex="-1"><a class="header-anchor" href="#令牌" aria-hidden="true">#</a> 令牌</h2>`,7),K={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},M=l(`<h2 id="显示所有版本" tabindex="-1"><a class="header-anchor" href="#显示所有版本" aria-hidden="true">#</a> 显示所有版本</h2><p>开启前：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alist/
├── alist-linux-amd64.tar.gz
└── alist-windows-amd64.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alist/
├── v3.41.0/
│   ├── alist-linux-amd64.tar.gz
│   └── alist-windows-amd64.zip
├── v3.40.0/
│   ├── alist-linux-amd64.tar.gz
│   └── alist-windows-amd64.zip
└── v3.39.4/
    ├── alist-linux-amd64.tar.gz
    └── alist-windows-amd64.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>`,6);function G(A,S){const r=t("Tabs"),c=t("ExternalLinkIcon"),o=t("Mermaid");return v(),m("div",null,[b,d(r,{id:"11",data:[{id:"1"},{id:"2"}],"tab-id":"UrlTree"},{title0:i(({value:s,isActive:n})=>[a("1")]),title1:i(({value:s,isActive:n})=>[a("2")]),tab0:i(({value:s,isActive:n})=>[p,x,g,_,f]),tab1:i(({value:s,isActive:n})=>[w,z,E,C,R]),_:1}),k,e("p",null,[a("访问私有仓库时需要，也可减少速率访问限制的影响。访问："),e("a",K,[a("https://github.com/settings/tokens"),d(c)])]),M,d(o,{id:"mermaid-73",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2OAzMTM4GhY+Snp5+SlFmWWpRsX5yfm5ufp5eRklujnJ5alJKYpnu87XTnk9dqoSkJ4loPQByQ7Mf"})])}const N=u(h,[["render",G],["__file","github_releases.html.vue"]]);export{N as default};
