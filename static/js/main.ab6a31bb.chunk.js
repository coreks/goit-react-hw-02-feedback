(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={statistics:"Statistics_statistics__14iH6",title:"Statistics_title__1QCEG",text:"Statistics_text__3cKCA"}},,,,,,,function(t,e,n){t.exports={notification:"Notification_notification__1ir70"}},function(t,e,n){t.exports={button:"FeedbackOptions_button__D1RWo"}},function(t,e,n){t.exports={title:"Section_title__3c3L8"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(4),s=n.n(c),i=n(5),o=n(6),r=n(7),l=n(12),u=n(11),d=n(8),b=n.n(d),j=n(0),h=function(t){var e=t.message;return Object(j.jsx)("div",{className:b.a.notification,children:e})},x=n(1),f=n.n(x),O=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,s=t.positivePercentage;return Object(j.jsxs)("div",{className:f.a.statistics,children:[Object(j.jsx)("h2",{className:f.a.title,children:"Statisics"}),c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:f.a.text,children:["Good: ",e]}),Object(j.jsxs)("p",{className:f.a.text,children:["Neutral: ",n]}),Object(j.jsxs)("p",{className:f.a.text,children:["Bad: ",a]}),Object(j.jsxs)("p",{className:f.a.text,children:["Total: ",c]}),Object(j.jsxs)("p",{className:f.a.text,children:["Positive feedback: ",s,"%"]})]}):Object(j.jsx)(h,{message:"No feedback given"})]})},p=n(9),v=n.n(p),k=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)("div",{children:e.map((function(t){return Object(j.jsx)("button",{type:"button",name:t,onClick:n,className:v.a.button,children:t},t)}))})},m=n(10),g=n.n(m),_=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{children:[e&&Object(j.jsx)("h1",{className:g.a.title,children:e}),n]})},N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleClickIncrement=function(e){var n=e.target.name;t.setState((function(t){return Object(i.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t}return Object(r.a)(n,[{key:"countPositiveFeedbackPercentage",value:function(){return(this.state.good/this.countTotalFeedback()*100).toFixed(0)}},{key:"render",value:function(){return Object(j.jsxs)(_,{title:"Please leave feedback",children:[Object(j.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.handleClickIncrement}),Object(j.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(a.Component),F=function(){return Object(j.jsx)(N,{})};n(18);s.a.render(Object(j.jsx)(F,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ab6a31bb.chunk.js.map