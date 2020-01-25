(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{229:function(a,r,e){"use strict";e.r(r);var t=e(1),s=Object(t.a)({},function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"yarn-troubleshoot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yarn-troubleshoot","aria-hidden":"true"}},[a._v("#")]),a._v(" Yarn Troubleshoot")]),a._v(" "),e("h3",{attrs:{id:"problem-yarn-global-nggak-jalan-di-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-yarn-global-nggak-jalan-di-linux","aria-hidden":"true"}},[a._v("#")]),a._v(" Problem :  yarn global nggak jalan di linux")]),a._v(" "),e("h4",{attrs:{id:"solusi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solusi","aria-hidden":"true"}},[a._v("#")]),a._v(" solusi :")]),a._v(" "),e("p",[a._v("Confirm your global bin path")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn global bin\n")])])]),e("p",[a._v("I got: /home/username/.yarn/bin\nset yarn prefix:\nmake sure your yarn prefix is the parent directory of your bin directory. You can confirm by running")]),a._v(" "),e("p",[a._v("yarn config get prefix\nwhen I ran this, my prefix was empty, so I set it:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn config set prefix ~/.yarn\n")])])]),e("p",[a._v("add the following to ~/.bash_profile or ~/.bashrc")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('export PATH="$PATH:`yarn global bin`"\n')])])]),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("for zsh users, be sure to add this line to ~/.zshrc")])]),a._v(" "),e("p",[a._v("restart your shell or start a new one")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("bash -l or zsh\n")])])]),e("p",[a._v("Referensi : "),e("a",{attrs:{href:"https://stackoverflow.com/questions/40317578/yarn-global-command-not-working/40333409#40333409",target:"_blank",rel:"noopener noreferrer"}},[a._v("Referensi"),e("OutboundLink")],1)])])},[],!1,null,null,null);r.default=s.exports}}]);