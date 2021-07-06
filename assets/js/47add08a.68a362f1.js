(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6755:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},c={unversionedId:"plugins/GriefPrevention",id:"plugins/GriefPrevention",isDocsHomePage:!1,title:"Grief Prevention",description:"This plugin allows players to claim their builds to prevent others from griefing them. Players gain 500 claim blocks per hour up to a total of 62,500. More claim blocks can be purchased by using the command /buyclaim blocks [amount].",source:"@site/docs/plugins/GriefPrevention.md",sourceDirName:"plugins",slug:"/plugins/GriefPrevention",permalink:"/HearthDocs/docs/plugins/GriefPrevention",editUrl:"https://github.com/simoneedotexe/HearthDocs/edit/master/website/docs/plugins/GriefPrevention.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HearthCraft",permalink:"/HearthDocs/docs/intro"},next:{title:"Advanced Gift",permalink:"/HearthDocs/docs/plugins/AdvancedGift"}},s=[{value:"Commands",id:"commands",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin allows players to claim their builds to prevent others from griefing them. Players gain 500 claim blocks per hour up to a total of 62,500. More claim blocks can be purchased by using the command ",(0,i.kt)("strong",{parentName:"p"},"/buyclaim blocks ","[amount]"),"."),(0,i.kt)("p",null,"To make a claim, start by typing in ",(0,i.kt)("strong",{parentName:"p"},"/kit claim")," to gain a claim shovel and claim stick.\nNext you'll want to right click while looking at one corner of the area you want to claim, and then right click the opposite corner to create an imaginary square that will encompass your build."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qRkDnq4.png",alt:"exampleclaim"})),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/unclaim"),(0,i.kt)("td",{parentName:"tr",align:null},"Unclaims a claim that you are currently standing inside of")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/unclaim"),(0,i.kt)("td",{parentName:"tr",align:null},"Unclaims all claims if you are not standing inside of one")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/trust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Trusts the specified player to build inside your claim")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/accesstrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Gives the specified player permission to use your bed, levers, and buttons")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/containertrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Gives the specified player permission to access all your chests and barrels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/untrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Untrusts the specified player from your claim")))))}p.isMDXComponent=!0}}]);