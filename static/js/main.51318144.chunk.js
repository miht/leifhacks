(this.webpackJsonpleifhacks=this.webpackJsonpleifhacks||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/Project2.c8233917.png"},function(e,t,a){e.exports=a.p+"static/media/Project3.dedbec8a.png"},,,function(e,t,a){e.exports=a.p+"static/media/reference_Placeholder.1f0b1ae8.png"},function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/Project1.403f1b80.png"},function(e,t,a){e.exports=a.p+"static/media/Project_Leif.8edd64cd.png"},function(e,t,a){e.exports=a.p+"static/media/Project_GGJ2019.3e75b005.png"},function(e,t,a){e.exports=a.p+"static/media/Project_Ouija.ac98a90c.png"},function(e,t,a){e.exports=a.p+"static/media/Project_Thesis.2089e477.png"},function(e,t,a){e.exports=a.p+"static/media/Project_GuardianSymphony.b0eadfe3.png"},function(e,t,a){e.exports=a.p+"static/media/Project_Helios.105a1663.png"},function(e,t,a){e.exports=a.p+"static/media/Project_Store.a2606fe8.png"},function(e,t,a){e.exports=a.p+"static/media/Project_RubeGoldberg.2144402b.png"},function(e,t,a){e.exports=a.p+"static/media/Project_CodenameRagnarok.dfdb6fd6.png"},function(e,t,a){e.exports=a.p+"static/media/project_Earth.72f1c425.png"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/living_room.9a679a04.png"},function(e,t,a){e.exports=a.p+"static/media/kitchen.e4d56daf.png"},function(e,t,a){e.exports=a.p+"static/media/treehouse.d79abe83.png"},function(e,t,a){e.exports=a.p+"static/media/Leifhacks_Logo.3a252de7.png"},function(e,t,a){e.exports=a.p+"static/media/artstation-logo.ef8780fa.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin-logo.b01a800c.png"},function(e,t,a){e.exports=a.p+"static/media/github-logo.d7243fe7.png"},function(e,t,a){e.exports=a.p+"static/media/buymeacoffee.486093e8.png"},function(e,t,a){e.exports=a.p+"static/media/profileImage.faf73214.png"},function(e,t,a){e.exports=a.p+"static/media/signature.bb7b489e.png"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(24),s=a.n(o),r=(a(40),a(41),a(3)),c=a(4),u=(a(23),a(7)),l=a(8),m=a(10),d=a(9),p=(a(6),n.a.Component,n.a.Component,a(25)),g=a.n(p),f=a(26),b=a.n(f),v=a(27),q=a.n(v);var h=function(){return n.a.createElement("div",{className:"HexagonalPanel"},n.a.createElement(N,{title:"Work",position:0,src:b.a}),n.a.createElement(N,{title:"Hobby",position:1,src:q.a}),n.a.createElement(N,{title:"Leisure",position:2,src:g.a}))},E={0:{left:"50%",top:"6.25%",transform:"translate(-50%, 6.25%)"},1:{left:"0%",bottom:"0%",transform:"translate(0%, 0%)"},2:{left:"100%",bottom:"0%",transform:"translate(-100%, 0%)"}};function N(e){return n.a.createElement("div",{className:"HexagonalPanelCell",style:Object(r.a)({},E[e.position])},n.a.createElement("div",{className:"HexagonalButton",style:Object(r.a)({},{backgroundImage:"url(".concat(e.src,")")})},n.a.createElement("p",{className:"HexagonalButtonLabel"},e.title)))}var j=function(e){return n.a.createElement("div",{className:"LinkLabel"},n.a.createElement("img",{src:e.src}),n.a.createElement("p",{className:"ContactSectionLabel"},e.content))};function k(e){return n.a.createElement("div",{className:"ProjectItem",onClick:e.onClick,style:Object(r.a)({},{backgroundImage:"url(".concat(e.project.src,")")})},n.a.createElement("div",{className:"ProjectItemTitle"},n.a.createElement("p",null,e.project.tag)),n.a.createElement("p",{className:"ProjectItemTag"},e.project.title))}var y=function(e){var t=e.projects.map((function(t,a){return n.a.createElement(k,{key:t.projectId,project:t,onClick:function(){return e.onClick(a)}})}));return n.a.createElement("div",{className:"ProjectsPane"},t)},x=a(1),P=a.n(x),w=a(2),S=a.n(w);var L=function(e){var t=Object(i.useState)(0),a=Object(c.a)(t,2),o=a[0],s=a[1],u=Object(i.useState)(e.projects[o].thumbnails[0]),l=Object(c.a)(u,2),m=l[0],d=l[1],p=e.projects[o],g=p.thumbnails.map((function(e){return n.a.createElement("img",{onMouseOver:function(){return d(e)},key:e,className:"ProjectThumbnail",src:e})}));return n.a.createElement("div",{className:"ProjectDetailsPane"},n.a.createElement("div",{className:"ProjectDetailsView",style:Object(r.a)({},{backgroundImage:"url(".concat(m,")")})},n.a.createElement("p",{className:"ProjectTitle"},p.title),n.a.createElement("p",{className:"ProjectDate"},p.date),n.a.createElement("p",{className:"ProjectDescription"},p.description),n.a.createElement("div",{className:"ProjectThumbnailList"},g)),n.a.createElement(y,{projects:e.projects,onClick:function(t){return function(t){s(t),e.onProjectSelected(e.projects[t].color),d(e.projects[t].thumbnails[0])}(t)}}))};var C=function(e){var t=e.skills.map((function(e){return n.a.createElement("p",{className:"SkillItem",key:e,p:!0},e)}));return n.a.createElement("div",{className:"SkillsPane"},t)};var _=function(e){var t=e.references.map((function(e,t){var a=t%2===0?"left":"right",i=n.a.createElement("div",null,n.a.createElement("p",{style:{textAlign:a}},n.a.createElement("i",null,'"'.concat(e.quote,'"'))),n.a.createElement("p",{style:{textAlign:"left"===a?"right":"left"}},"-".concat(e.name)));return"left"===a?n.a.createElement("div",{className:"ReferenceItem",key:t},i,n.a.createElement("img",{src:e.src})):n.a.createElement("div",{className:"ReferenceItem",key:t},n.a.createElement("img",{src:e.src}),i)}));return n.a.createElement("div",{className:"ReferencesPane"},t)};function O(){return n.a.createElement("div",{className:"Divider"})}var I=a(28),G=a.n(I),H=a(29),T=a.n(H),A=a(30),B=a.n(A),R=a(31),D=a.n(R),U=a(32),J=a.n(U),Q=a(33),W=a.n(Q),M=a(34),V=a.n(M),F=a(11),K=a.n(F),X=a(12),Y=a.n(X),$=a(13),z=a.n($),Z=a(14),ee=a.n(Z),te=a(15),ae=a.n(te),ie=a(16),ne=a.n(ie),oe=a(17),se=a.n(oe),re=a(18),ce=a.n(re),ue=a(19),le=a.n(ue),me=a(20),de=a.n(me),pe=a(21),ge=a.n(pe),fe=a(5),be=a.n(fe),ve=[{title:"Guardian Symphony",tag:"Unity/Blender",src:ne.a,date:"2015",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[ne.a,P.a,S.a],color:{r:115,g:194,b:37}},{title:"Ouija",tag:"Node.js/Blender",src:ee.a,date:"2019",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[ee.a,P.a,S.a],color:{r:0,g:15,b:50}},{title:"Global Game Jam 2019",tag:"Unity/Blender",src:z.a,date:"2019",description:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",thumbnails:[z.a,P.a,S.a],color:{r:81,g:48,b:179}},{title:"Master Thesis - Fur",tag:"Unreal Engine",src:ae.a,date:"2019",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[ae.a,P.a,S.a],color:{r:0,g:0,b:0}},{title:"Wish2Go",tag:"React Native/GraphQL",src:K.a,date:"2020",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[K.a,P.a,S.a],color:{r:0,g:125,b:125}},{title:"Concept Art",tag:"Art",src:Y.a,date:"2014-Today",description:" Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",thumbnails:[Y.a,P.a,S.a],color:{r:50,g:25,b:25}},{title:"Graphics Engine",tag:"Qt/C++",src:se.a,date:"2018",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[se.a,P.a,S.a],color:{r:241,g:147,b:32}},{title:"Store",tag:"Unity/Blender",src:ce.a,date:"2020-Ongoing",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",thumbnails:[ce.a,P.a,S.a],color:{r:201,g:62,b:37}},{title:"Rube Goldberg",tag:"Unity/Blender",src:le.a,date:"2016",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[le.a,P.a,S.a],color:{r:255,g:15,b:15}},{title:"Codename Ragnarok",tag:"Unity/Blender",src:de.a,date:"On hold",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",thumbnails:[de.a,P.a,S.a],color:{r:60,g:125,b:25}},{title:"Earth",tag:"Blender",src:ge.a,date:"2018",description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",thumbnails:[ge.a,P.a,S.a],color:{r:21,g:82,b:150}}],qe=["Javascript","Node.js","React Native","C/C#/C++","Python","Clojure","Java","Git","Swift","WebGL","MongoDB","GraphQL","PostgreSQL","GLSL/HLSL","Perl"],he=["Unity","Blender","Visual Studio","Unreal Engine","Qt Creator","Photoshop","Android Studio","Krita"],Ee=[{name:"Angelina Von Gegerfelt, my mentor at Valtech",quote:"I mentored and managed Leif at Valtech, and he was a great developer and colleague. Leif showed great diversity in his skills, but also a willingness to dig deep when working with something and learn it thoroughly. Frontend or backend, doesn't matter; Leif will create good code independently on where in the stack it is. He was quick to help anyone who needed, and shared his knowledge as often as he could.",src:be.a},{name:"Hedvig Reutersw\xe4rd, former colleague at Digpro",quote:"Leif is a former colleague of mine that I would take the oppertunity to work with again.He is a an exceptional team member who not only gives support to others but also excels in whatever he takes on - whether it is software development, game design or 3d modelling.Leif is not only competent in one area but always shown himself adept in many areas.Never ceasing to learn new skills, he is an outstanding hard worker with an eye for detail that would be an asset for any team.Leif is naturally gifted with an understanding for development and design in all its shapes.",src:be.a},{name:"Name Namesson",quote:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, \n        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",src:be.a},{name:"Name Namesson",quote:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, \n        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,",src:be.a}];var Ne=function(){var e=Object(i.useState)({r:81,g:148,b:194}),t=Object(c.a)(e,2),a=t[0],o=t[1];return n.a.createElement("div",{className:"Home",style:{backgroundColor:"rgba(".concat(a.r,", ").concat(a.g,", ").concat(a.b,", 1)")}},n.a.createElement("div",{className:"TitlePane"},n.a.createElement("img",{src:G.a,alt:"Logo",className:"Logo"}),n.a.createElement("p",{className:"Subtitle"},"Doing what I like best")),n.a.createElement("div",{className:"ContentPane"},n.a.createElement("div",{className:"Introduction"},n.a.createElement("img",{className:"ProfilePicture",src:W.a}),n.a.createElement("div",null,n.a.createElement("p",null,"Hi, and thanks for stopping by!"),n.a.createElement("p",null,"Learn more about me by reading about my projects. You'll find my contact details at the bottom of the page."),n.a.createElement("p",null,"Enjoy!"),n.a.createElement("img",{className:"Signature",src:V.a}),n.a.createElement("p",null,"Leif T. Sundkvist"))),n.a.createElement("p",{className:"Header"},"FOREWORD"),n.a.createElement("p",{className:"Paragraph"},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),n.a.createElement(h,null),n.a.createElement("p",{className:"Header"},"PROJECTS"),n.a.createElement(O,null),n.a.createElement(L,{projects:ve,onProjectSelected:function(e){return o(e)}}),n.a.createElement(O,null),n.a.createElement("p",{className:"Header"},"SKILLS"),n.a.createElement(C,{skills:qe}),n.a.createElement("p",{className:"Header"},"TOOLS"),n.a.createElement(C,{skills:he}),n.a.createElement("p",{className:"Header"},"REFERENCES"),n.a.createElement(_,{references:Ee})),n.a.createElement("div",{className:"ContactPane"},n.a.createElement("div",{className:"ContactSectionPane"},n.a.createElement("p",{className:"ContactSectionTitle"}," Get in touch "),n.a.createElement("p",{className:"ContactSectionLabel"},"+46 ____ ____ ____"),n.a.createElement("p",{className:"ContactSectionLabel"},"leif.t.sundkvist@gmail.com")),n.a.createElement("div",{className:"ContactSectionPane"},n.a.createElement("p",{className:"ContactSectionTitle"}," Look deeper "),n.a.createElement(j,{src:T.a,content:"ArtStation"}),n.a.createElement(j,{src:B.a,content:"LinkedIn"}),n.a.createElement(j,{src:D.a,content:"GitHub"}),n.a.createElement("button",{className:"BuyMeACoffeeButton",style:Object(r.a)({},{backgroundImage:"url(".concat(J.a,")")}),onClick:function(){return window.open("https://www.buymeacoffee.com/DOXnKhm")}}))))};var je=function(){return n.a.createElement(Ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.51318144.chunk.js.map