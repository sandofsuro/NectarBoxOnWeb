webpackJsonp([1],{0:function(e,t,A){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),s=A(2),i=A(1),l=i.StyleSheet,c=i.TabBarIOS,b=i.Text,m=i.View,u=i.AppRegistry,d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==",p=function(e){function t(){var e,A,a,o;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return A=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={selectedTab:"redTab",notifCount:0,presses:0},a._renderContent=function(e,t,A){return s.createElement(m,{style:[f.tabContent,{backgroundColor:e}]},s.createElement(b,{style:f.tabText},t),s.createElement(b,{style:f.tabText},A," re-renders of the ",t))},o=A,r(a,o)}return a(t,e),o(t,[{key:"render",value:function(){var e=this;return s.createElement(c,{unselectedTintColor:"yellow",tintColor:"white",unselectedItemTintColor:"red",barTintColor:"darkslateblue"},s.createElement(c.Item,{title:"Blue Tab",icon:{uri:d,scale:3},selected:"blueTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"blueTab"})}},this._renderContent("#414A8C","Blue Tab")),s.createElement(c.Item,{icon:"history",badge:this.state.notifCount>0?this.state.notifCount:void 0,badgeColor:"black",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab",notifCount:e.state.notifCount+1})}},this._renderContent("#783E33","Red Tab",this.state.notifCount)),s.createElement(c.Item,{icon:A(450),selectedIcon:A(451),renderAsOriginal:!0,title:"More",selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab",presses:e.state.presses+1})}},this._renderContent("#21551C","Green Tab",this.state.presses)))}}]),t}(s.Component);p.title="<TabBarIOS>",p.description="Tab-based navigation.",p.displayName="TabBarExample";var f=l.create({tabContent:{flex:1,alignItems:"center"},tabText:{color:"white",margin:50}});u.registerComponent("TabBarExample",function(){return p});var g=document.createElement("div");document.body.appendChild(g),u.runApplication("TabBarExample",{rootTag:g}),e.exports=p},450:function(e,t){e.exports="data:image/png;base64,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"},451:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=test.js.map