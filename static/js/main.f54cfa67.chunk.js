(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),l=(a(29),a(30),a(21)),i=a(10),o=a(1),m=a(2),u=a(4),d=a(3),p=a(5),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"loadingBar",style:{width:"100%",height:"100%",paddingBottom:"75%",position:"relative"}},r.a.createElement("img",{src:"https://media.giphy.com/media/hBBXSfblmnvOw/giphy.gif"})))}}]),t}(n.Component),E=a(11),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageOne,a=e.FirstBtnClick,n=e.dataReceived.landerText;return r.a.createElement("div",null,r.a.createElement("main",{className:"main main--1 "+(t?"alert-shown":"alert-hidden")},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"title"},n.popUpH3Text),r.a.createElement("span",{className:"badge","data-badge":"!"},r.a.createElement("img",{src:"https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/icon-box.svg",alt:""})),r.a.createElement("p",null,r.a.createElement("br",null),n.popUpP1Text),r.a.createElement("hr",null),r.a.createElement("dl",{className:"tracking-code"},r.a.createElement("dt",null," ",n.popUpP2Text,":"),r.a.createElement("dd",{style:{color:"red"}},"Iph022QXw"))),r.a.createElement("button",{type:"button",className:"btn screen-trigger--1",onClick:a},n.popUpP3Text)))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageTwo,a=e.dataReceived.landerText;return r.a.createElement("main",{className:"main main--2 "+(t?"alert-shown":"alert-hidden")},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"spinner"}),r.a.createElement("img",{className:"main__icon icon icon-check",src:"3question/Seguimiento y ubicaci\xf3n_files/check-circle-regular.png"}),r.a.createElement("ul",{className:"loading-list"},r.a.createElement("li",null,a.surveyHeaderText),r.a.createElement("li",null,a.surveyH4Text),r.a.createElement("li",null,a.websiteP1Text))))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageThree,a=e.SecondBtnClick,n=e.dataReceived,c=n.landerText,s=n.offerwallItems[0].offer.item;return r.a.createElement("main",{className:"main main--3 "+(t?"alert-shown":"alert-hidden")},r.a.createElement("ol",{className:"steps-wrap"},r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step"}),r.a.createElement("li",{className:"step"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:s.pictureUrl,alt:"",style:{maxWidth:"30%"}}),r.a.createElement("div",{className:"product__content"},r.a.createElement("h3",{className:"subtitle"},c.websiteP2Text,":"),r.a.createElement("dl",{className:"product__info"},r.a.createElement("dt",null,c.questionsHeaderText,":"),r.a.createElement("dd",null,c.checkingProductText)),r.a.createElement("dl",{className:"product__info"},r.a.createElement("dt",null,c.submittingText,":"),r.a.createElement("dd",null,c.orderQuantityLeftText)),r.a.createElement("dl",{className:"product__info"},r.a.createElement("dt",null,c.completedSurveyH4Text,":"),r.a.createElement("dd",null,s.name)),r.a.createElement("dl",{className:"product__info"},r.a.createElement("dt",null,c.completedSurveyP1Text,":"),r.a.createElement("dd",null,n.locale.currencyTag,n.offerwallItems[0].offer.shippingPrice))))),r.a.createElement("button",{type:"button",className:"btn screen-trigger--2",onClick:a},c.completedSurveyP2Text))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={answerKeys:["a","b","c"]},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dataReceived.landerText.questions,a=Object.keys(t);if(this.props.isFetched)return a.map(function(a){return r.a.createElement("div",{key:a.toString()},r.a.createElement("div",{className:"question question--".concat(Number(a)+Number(1)," ").concat(e.props.currentKey==a?"alert-shown":"alert-hidden")},r.a.createElement("h2",{className:"subtitle"},t[a].question),r.a.createElement("div",{className:"question__answers"},Object.keys(e.props.dataReceived.landerText.questions[a].answers).map(function(n){return r.a.createElement("div",{key:n},r.a.createElement("input",{type:"radio",id:"question"+a+1+e.state.answerKeys[n],name:"question"+a+1}),r.a.createElement("label",{for:"question"+a+1+e.state.answerKeys[n],onClick:e.props.ChangeCurrentKey},r.a.createElement("span",null,t[a].answers[n].answer)),r.a.createElement("br",null))}))))})}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageFour,a=e.dataReceived,n=e.isFetched,c=e.currentKey,s=e.ChangeCurrentKey,l=a.offerwallItems[0].offer.item;return r.a.createElement("main",{className:"main main--4 "+(t?"alert-shown":"alert-hidden")},r.a.createElement("ol",{className:"steps-wrap"},r.a.createElement("li",{className:"step step step--done"}),r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step"})),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:l.pictureUrl,alt:"",style:{maxWidth:"30%"}}),r.a.createElement("form",{className:"questions-wrap"},r.a.createElement(f,{dataReceived:a,isFetched:n,currentKey:c,ChangeCurrentKey:s}))))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageFive,a=e.stageSix;return r.a.createElement("main",{className:"main main--5 "+(t?"alert-shown":"alert-hidden")+(a?" checked":"")},r.a.createElement("ol",{className:"steps-wrap"},r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step step--current"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"spinner",style:{display:a?"none":"block"}}),r.a.createElement("img",{className:"main__icon icon icon-check",src:"https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/check-circle-regular.png"})))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stageSeven,a=e.dataReceived,n=a.landerText,c=a.offerwallItems[0].offer;return r.a.createElement("main",{className:"main main--6 ".concat(t?"alert-shown":"alert-hidden")},r.a.createElement("ol",{className:"steps-wrap"},r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step step--current"}),r.a.createElement("li",{className:"step step--current"})),r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"title title--primary"},n.leaveCommentText," #21410"),r.a.createElement("img",{src:c.item.pictureUrl,alt:"",className:"spaced1",style:{maxWidth:"30%"}}),r.a.createElement("h3",{className:"subtitle"},n.commentButtonText,": ",r.a.createElement("br",null),n.thankYouText," ",n.orderQuantityLeftText),r.a.createElement("p",null,n.antiSpamText)),r.a.createElement("a",{href:c.offerUrl.url,target:"blank_",className:"btn"},n.ClickOkText))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"foot"},r.a.createElement("h4",{className:"foot__title"},"Developed by:"),r.a.createElement("div",{className:"foot__icons"},r.a.createElement("img",{src:"https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/foot-icon01.svg",alt:""}),r.a.createElement("img",{src:"https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/express.png",alt:""}),r.a.createElement("img",{src:"https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/foot-icon03.svg",alt:""})))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={stageOne:!0,stageTwo:!1,stageThree:!1,stageFour:!1,stageFive:!1,stageSix:!1,currentKey:0},e.ChangeCurrentKey=e.ChangeCurrentKey.bind(Object(E.a)(e)),e.FirstBtnClick=e.FirstBtnClick.bind(Object(E.a)(e)),e.SecondBtnClick=e.SecondBtnClick.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"FirstBtnClick",value:function(){var e=this;this.setState({stageOne:!1,stageTwo:!0}),setTimeout(function(){e.setState({stageTwo:!1,stageThree:!0})},1800)}},{key:"SecondBtnClick",value:function(){this.setState({stageThree:!1,stageFour:!0})}},{key:"ChangeCurrentKey",value:function(){var e=this,t=this.state.currentKey,a=this.props.dataReceived;setTimeout(function(){e.setState(function(e){return{currentKey:e.currentKey+1}})},250),t+1===a.landerText.questions.length&&(setTimeout(function(){e.setState({stageFour:!1,stageFive:!0})},500),setTimeout(function(){e.setState({stageSix:!0}),setTimeout(function(){e.setState({stageFive:!1,stageSix:!1,stageSeven:!0}),console.log("stageSeven: true")},3e3),console.log("stageSix: true")},2e3))}},{key:"render",value:function(){var e=this.state,t=e.stageOne,a=e.stageTwo,n=e.stageThree,c=e.stageFour,s=e.stageFive,l=e.stageSix,i=e.stageSeven,o=e.currentKey,m=this.props,u=m.dataReceived,d=m.isFetched;return r.a.createElement("div",null,r.a.createElement("style",null,"\n            :root {\n              --buttonColor: ".concat(u.brand.buttonColor,";\n              --hoverButtonColor: ").concat(u.brand.hoverButtonColor,";\n              }\n            ")),r.a.createElement("div",{className:"page"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:u.brand.logo,alt:"Icon",className:"header__icon"})),r.a.createElement(g,{stageOne:t,stageTwo:a,dataReceived:u,FirstBtnClick:this.FirstBtnClick}),r.a.createElement(v,{stageTwo:a,stageThree:n,dataReceived:u}),r.a.createElement(b,{stageThree:n,stageFour:c,dataReceived:u,SecondBtnClick:this.SecondBtnClick}),r.a.createElement(y,{stageFour:c,dataReceived:u,isFetched:d,currentKey:o,ChangeCurrentKey:this.ChangeCurrentKey}),r.a.createElement(O,{stageFive:s,stageSix:l}),r.a.createElement(N,{stageSeven:i,dataReceived:u}),r.a.createElement(j,null)))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={isFetched:!1,dataReceived:null,stageOne:!0,stageTwo:!1,stageThree:!1,stageFour:!1,stageFive:!1,stageSix:!1,currentKey:0},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.myjson.com/bins/jlxov").then(function(e){return e.json()}).then(function(t){t,e.setState({isFetched:!0,dataReceived:t}),console.log(e.state.dataReceived)})}},{key:"render",value:function(){var e=this.state,t=e.isFetched,a=e.dataReceived;return t?r.a.createElement("div",null,r.a.createElement(w,{isFetched:t,dataReceived:a})):r.a.createElement(h,null)}}]),t}(n.Component);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",component:k}))))};s.a.render(r.a.createElement(T,null),document.getElementById("root")),window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})}},[[24,1,2]]]);
//# sourceMappingURL=main.f54cfa67.chunk.js.map