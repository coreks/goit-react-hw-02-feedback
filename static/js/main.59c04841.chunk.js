(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={statistics:"Statistics_statistics__3XM54",title:"Statistics_title__2vx8A",list:"Statistics_list__1iHo7"}},,,,,,,function(t,e,n){t.exports={notification:"Notification_notification__2tSln"}},function(t,e,n){t.exports={button:"FeedbackOptions_button__1bNf3"}},function(t,e,n){t.exports={title:"Section_title__jSWnb"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(4),i=n.n(c),s=n(5),o=n(6),r=n(7),l=n(12),d=n(11),b=n(8),u=n.n(b),j=n(0),h=function(t){var e=t.message;return Object(j.jsx)("div",{className:u.a.notification,children:e})},x=n(1),f=n.n(x),v=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(j.jsx)("div",{className:f.a.statistics,children:c?Object(j.jsxs)("ul",{className:f.a.list,children:[Object(j.jsxs)("li",{className:f.a.text,children:["Good: ",e]}),Object(j.jsxs)("li",{className:f.a.text,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:f.a.text,children:["Bad: ",a]}),Object(j.jsxs)("li",{className:f.a.text,children:["Total: ",c]}),Object(j.jsxs)("li",{className:f.a.text,children:["Positive feedback: ",i,"%"]})]}):Object(j.jsx)("div",{children:Object(j.jsx)(h,{message:"No feedback given"})})})},O=n(9),k=n.n(O),m=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)("div",{children:e.map((function(t){return Object(j.jsx)("button",{type:"button",name:t,onClick:n,className:k.a.button,children:t},t)}))})},p=n(10),g=n.n(p),_=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{children:[e&&Object(j.jsx)("h1",{className:g.a.title,children:e}),n]})},N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleClickIncrement=function(e){var n=e.target.name;t.setState((function(t){return Object(s.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t}return Object(r.a)(n,[{key:"countPositiveFeedbackPercentage",value:function(){return(this.state.good/this.countTotalFeedback()*100).toFixed(0)}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{title:"Please leave feedback",children:Object(j.jsx)(m,{options:Object.keys(this.state),onLeaveFeedback:this.handleClickIncrement})}),Object(j.jsx)(_,{title:"Statisics",children:Object(j.jsx)(v,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);n(18);i.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.59c04841.chunk.js.map