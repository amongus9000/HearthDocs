(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[399],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9571:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={},c={unversionedId:"Plugins/GriefPrevention",id:"Plugins/GriefPrevention",isDocsHomePage:!1,title:"Grief Prevention",description:"This plugin allows players to claim their builds to prevent others from griefing them. Players gain 500 claim blocks per hour up to a total of 62,500. More claim blocks can be purchased by using the command /buyclaim blocks [amount].",source:"@site/docs/Plugins/GriefPrevention.md",sourceDirName:"Plugins",slug:"/Plugins/GriefPrevention",permalink:"/HearthDocs/docs/Plugins/GriefPrevention",editUrl:"https://github.com/simoneedotexe/HearthDocs/edit/master/website/docs/Plugins/GriefPrevention.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GSit",permalink:"/HearthDocs/docs/Plugins/GSit"},next:{title:"Head Database",permalink:"/HearthDocs/docs/Plugins/HeadDatabase"}},s=[{value:"Commands",id:"commands",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin allows players to claim their builds to prevent others from griefing them. Players gain 500 claim blocks per hour up to a total of 62,500. More claim blocks can be purchased by using the command ",(0,i.kt)("strong",{parentName:"p"},"/buyclaim blocks ","[amount]"),"."),(0,i.kt)("p",null,"To make a claim, start by typing in ",(0,i.kt)("strong",{parentName:"p"},"/kit claim")," to gain a claim shovel and claim stick.\nNext you'll want to right click while looking at one corner of the area you want to claim, and then right click the opposite corner to create an imaginary square that will encompass your build."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qRkDnq4.png",alt:"exampleclaim"})),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/unclaim"),(0,i.kt)("td",{parentName:"tr",align:null},"Unclaims a claim that you are currently standing inside of")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/unclaim"),(0,i.kt)("td",{parentName:"tr",align:null},"Unclaims all claims if you are not standing inside of one")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/trust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Trusts the specified player to build inside your claim")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/accesstrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Gives the specified player permission to use your bed, levers, and buttons")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/containertrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Gives the specified player permission to access all your chests and barrels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/untrust ","[player]"),(0,i.kt)("td",{parentName:"tr",align:null},"Untrusts the specified player from your claim")))))}p.isMDXComponent=!0}}]);