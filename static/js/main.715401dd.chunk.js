(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),c=(a(29),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),d=a(11),p=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card border-0  bg-"+this.props.cardbg+" text-"+this.props.warnatxt+" "+this.props.shadow},r.a.createElement("div",{className:"card-body text-"+this.props.alignbtn},r.a.createElement("p",{className:"h"+this.props.ukuranjudul+" text-"+this.props.alignjudul},this.props.judulkartu),r.a.createElement("p",{className:"h"+this.props.ukuranisi+" text-"+this.props.aligntext},this.props.isikartu),r.a.createElement("button",{className:"btn btn-"+this.props.warnabtn},this.props.namabtn)))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&r.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,r.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),r.a.createElement("form",null,r.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"10",readOnly:!0,ref:function(t){return e.textArea=t},value:'<div class="card border-0 bg-'+this.props.cardbg+" text-"+this.props.warnatxt+'"> \r\t<div class="card-body text-'+this.props.alignbtn+'">\r\t\t<p class="h'+this.props.ukuranjudul+" text-"+this.props.alignjudul+'">'+this.props.judulkartu+'</p>\r\t\t<a class="btn btn-'+this.props.warnabtn+'" href="...">'+this.props.namabtn+"</a>\r\t</div>\r</div>"})))}}]),t}(n.Component),b=a(7),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark gaya"},r.a.createElement("div",{className:"container"},r.a.createElement(b.b,{to:"/",className:"navbar-brand"},"Bootstrap Generator"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(b.b,{to:"/",className:"nav-item nav-link active text-light"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(b.b,{to:"/AlertGenerator",className:"nav-item nav-link text-light"},"Alert"),r.a.createElement(b.b,{to:"/ButtonGenerator",className:"nav-item nav-link text-light"},"Button"),r.a.createElement(b.b,{to:"/CardGenerator",className:"nav-item nav-link text-light"},"Cards")))))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.divClass},this.props.tipe.map((function(t,a){return r.a.createElement("button",{key:a,className:"btn btn-"+t.warnaBtn+" "+e.props.btnClass,value:t.value,onClick:e.props.fungsi},t.nama)})))}}]),t}(n.Component),E=[{warnaBtn:"light  ",value:"light",nama:"light"},{warnaBtn:"secondary  ",value:"secondary",nama:"secondary"},{warnaBtn:"dark  ",value:"dark",nama:"dark"},{warnaBtn:"primary  ",value:"primary",nama:"primary"},{warnaBtn:"warning  ",value:"warning",nama:"warning"},{warnaBtn:"danger  ",value:"danger",nama:"danger"},{warnaBtn:"success  ",value:"success",nama:"success"}],x=[{warnaBtn:"light  ",value:"light",nama:"light"},{warnaBtn:"secondary  ",value:"secondary",nama:"secondary"},{warnaBtn:"dark  ",value:"dark",nama:"dark"},{warnaBtn:"primary  ",value:"primary",nama:"primary"},{warnaBtn:"warning  ",value:"warning",nama:"warning"},{warnaBtn:"danger  ",value:"danger",nama:"danger"},{warnaBtn:"success  ",value:"success",nama:"success"},{warnaBtn:"white  ",value:"",nama:"transparent"}],w=[{warnaBtn:"light  ",value:"btn-light",nama:"light"},{warnaBtn:"secondary  ",value:"btn-secondary",nama:"secondary"},{warnaBtn:"dark  ",value:"btn-dark",nama:"dark"},{warnaBtn:"primary  ",value:"btn-primary",nama:"primary"},{warnaBtn:"warning  ",value:"btn-warning",nama:"warning"},{warnaBtn:"danger  ",value:"btn-danger",nama:"danger"},{warnaBtn:"success  ",value:"btn-success",nama:"success"},{warnaBtn:"white  ",value:"",nama:"transparent"}],f=[{warnaBtn:"light  ",value:"btn-outline-light",nama:"light"},{warnaBtn:"secondary  ",value:"btn-outline-secondary",nama:"secondary"},{warnaBtn:"dark  ",value:"btn-outline-dark",nama:"dark"},{warnaBtn:"primary  ",value:"btn-outline-primary",nama:"primary"},{warnaBtn:"warning  ",value:"btn-outline-warning",nama:"warning"},{warnaBtn:"danger  ",value:"btn-outline-danger",nama:"danger"},{warnaBtn:"success  ",value:"btn-outline-success",nama:"success"},{warnaBtn:"white  ",value:"",nama:"transparent"}],N=[{warnaBtn:"secondary",value:"left",nama:"left"},{warnaBtn:"secondary",value:"center",nama:"center"},{warnaBtn:"secondary",value:"right",nama:"right"}],y=[{warnaBtn:"secondary",value:"rounded-lg",nama:"rounded"},{warnaBtn:"secondary",value:"rounded-circle",nama:"circle"},{warnaBtn:"secondary",value:"rounded-pill",nama:"pill"},{warnaBtn:"secondary",value:"rounded-0",nama:"square"}],C=[{warnaBtn:"secondary",value:"btn-sm",nama:"small"},{warnaBtn:"secondary",value:"",nama:"medium"},{warnaBtn:"secondary",value:"btn-lg",nama:"large"}],j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.divClass},r.a.createElement("b",{className:this.props.textClass},this.props.children))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeBgCard=function(t){e.setState({cardbg:t.target.value})},e.changeTxtColor=function(t){e.setState({warnatxt:t.target.value})},e.changeWarnaBtn=function(t){e.setState({warnabtn:t.target.value})},e.changeWarnaDasar=function(t){e.setState({warnadasar:t.target.value})},e.changeJudulKartu=function(t){e.setState({judulkartu:t.target.value})},e.changeIsiKartu=function(t){e.setState({isikartu:t.target.value})},e.changeNamaBtn=function(t){e.setState({namabtn:t.target.value})},e.changeAlignJudul=function(t){e.setState({alignjudul:t.target.value})},e.changeAlignText=function(t){e.setState({aligntext:t.target.value})},e.changeAlignBtn=function(t){e.setState({alignbtn:t.target.value})},e.changeUkuranJudul=function(t){e.setState({ukuranjudul:t.target.value})},e.changeUkuranIsi=function(t){e.setState({ukuranisi:t.target.value})},e.state={ukuranjudul:"1",judulkartu:"Judul kartu",ukuranisi:"6",isikartu:"ini adalah teks singkat untuk penjelasan isi kartu",warnabtn:"light",namabtn:"kirim",cardbg:"primary",warnatxt:"light",alignbtn:"center",aligntext:"center",alignjudul:"center",shadow:"shadow",warnadasar:"light",tes:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"App container mb-5"},r.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Card Generator"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12 px-3 py-3 bg-"+this.state.warnadasar},r.a.createElement(p,{ukuranjudul:this.state.ukuranjudul,judulkartu:this.state.judulkartu,warnabtn:this.state.warnabtn,namabtn:this.state.namabtn,ukuranisi:this.state.ukuranisi,isikartu:this.state.isikartu,cardbg:this.state.cardbg,warnatxt:this.state.warnatxt,aligntext:this.state.aligntext,alignbtn:this.state.alignbtn,alignjudul:this.state.alignjudul,shadow:this.state.shadow})),r.a.createElement("div",{className:"col-md-7 col-sm-12"},r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Card Color"),r.a.createElement(v,{tipe:E,fungsi:this.changeBgCard,divClass:"row mx-3",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Text Color"),r.a.createElement(v,{tipe:E,fungsi:this.changeTxtColor,divClass:"row mx-3",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Button Color"),r.a.createElement(v,{tipe:E,fungsi:this.changeWarnaBtn,divClass:"row mx-3",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Background Color"),r.a.createElement(v,{tipe:E,fungsi:this.changeWarnaDasar,divClass:"row mx-3",btnClass:"mx-1 mt-1 col-auto"}))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-6 col-sm-12 pr-5"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-8"},r.a.createElement("b",{className:"text-center "},"Teks Judul"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.judulkartu,onChange:this.changeJudulKartu})),r.a.createElement("div",{className:"col-4"},r.a.createElement("b",{className:"text-left"},"Ukuran Judul"),r.a.createElement("select",{className:"form-control",value:this.state.ukuranjudul,onChange:this.changeUkuranJudul},r.a.createElement("option",{value:"1"},"Heading 1"),r.a.createElement("option",{value:"2"},"Heading 2"),r.a.createElement("option",{value:"3"},"Heading 3"),r.a.createElement("option",{value:"4"},"Heading 4"),r.a.createElement("option",{value:"5"},"Heading 5"),r.a.createElement("option",{value:"6"},"Heading 6")))),r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-8"},r.a.createElement("b",{className:"text-center"},"Teks Isi"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.isikartu,onChange:this.changeIsiKartu})),r.a.createElement("div",{className:"col-4"},r.a.createElement("b",{className:"text-left"},"Ukuran Isi"),r.a.createElement("select",{className:"form-control",value:this.state.ukuranisi,onChange:this.changeUkuranIsi},r.a.createElement("option",{value:"1"},"Heading 1"),r.a.createElement("option",{value:"2"},"Heading 2"),r.a.createElement("option",{value:"3"},"Heading 3"),r.a.createElement("option",{value:"4"},"Heading 4"),r.a.createElement("option",{value:"5"},"Heading 5"),r.a.createElement("option",{value:"6"},"Heading 6")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("b",{className:"text-center my-2"},"Teks Tombol"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.namabtn,onChange:this.changeNamaBtn}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-4"},r.a.createElement("b",{className:"text-center"},"Posisi Judul"),r.a.createElement("select",{className:"form-control",value:this.state.alignjudul,onChange:this.changeAlignJudul},r.a.createElement("option",{value:"left"},"Left"),r.a.createElement("option",{value:"center"},"Center"),r.a.createElement("option",{value:"right"},"Right"))),r.a.createElement("div",{className:"col-4"},r.a.createElement("b",{className:"text-center"},"Posisi Isi"),r.a.createElement("select",{className:"form-control",value:this.state.aligntext,onChange:this.changeAlignText},r.a.createElement("option",{value:"left"},"Left"),r.a.createElement("option",{value:"center"},"Center"),r.a.createElement("option",{value:"right"},"Right"))),r.a.createElement("div",{className:"col-4"},r.a.createElement("b",{className:"text-center"},"Posisi Tombol"),r.a.createElement("select",{className:"form-control",value:this.state.alignbtn,onChange:this.changeAlignBtn},r.a.createElement("option",{value:"left"},"Left"),r.a.createElement("option",{value:"center"},"Center"),r.a.createElement("option",{value:"right"},"Right"))))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement(h,{ukuranjudul:this.state.ukuranjudul,judulkartu:this.state.judulkartu,warnabtn:this.state.warnabtn,namabtn:this.state.namabtn,ukuranisi:this.state.ukuranisi,isikartu:this.state.isikartu,cardbg:this.state.cardbg,warnatxt:this.state.warnatxt,aligntext:this.state.aligntext,alignbtn:this.state.alignbtn,alignjudul:this.state.alignjudul})))))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert alert-"+this.props.tipe+" text-"+this.props.warna+" text-"+this.props.align},r.a.createElement("h4",null,this.props.judul),r.a.createElement("p",null,this.props.children))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded container"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&r.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,r.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),r.a.createElement("form",{className:"row"},r.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"5",readOnly:!0,ref:function(t){return e.textArea=t},value:'<div class="alert alert-'+this.props.tipe+" text-"+this.props.warna+" text-"+this.props.align+"> \r\t<h4>"+this.props.judul+"</h4>\r\t<p>"+this.props.isi+"</p>\r</div>"})))}}]),t}(n.Component),A=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeTipeAlert=function(t){e.setState({tipe:t.target.value})},e.changeJudulAlert=function(t){e.setState({judul:t.target.value})},e.changeIsiAlert=function(t){e.setState({isi:t.target.value})},e.changeWarnaAlert=function(t){e.setState({warna:t.target.value})},e.changeAlignAlert=function(t){e.setState({align:t.target.value})},e.state={tipe:"success",judul:"fatal error",isi:"ini content dari alert",warna:"success",align:"center"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"App container"},r.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Alert Generator"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12"},r.a.createElement(O,{index:"2",tipe:this.state.tipe,judul:this.state.judul,warna:this.state.warna,align:this.state.align},this.state.isi),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Header Alert"),r.a.createElement("div",{className:"row mt-1 mx-1 mb-2"},r.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.judul,onChange:this.changeJudulAlert})),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Isi Alert"),r.a.createElement("div",{className:"row mt-1 mx-1 mb-2"},r.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.isi,onChange:this.changeIsiAlert})),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Text Align"),r.a.createElement("div",{className:"row justify-content-center mb-2 mt-1"},r.a.createElement(v,{tipe:N,fungsi:this.changeAlignAlert,divClass:"btn-group",btnClass:"px-5"}))),r.a.createElement("div",{className:"col-md-7 col-sm-12"},r.a.createElement("div",{className:"container"},r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Warna Background Alert"),r.a.createElement(v,{tipe:E,fungsi:this.changeTipeAlert,divClass:"row mb-2",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Warna Text Alert"),r.a.createElement(v,{tipe:E,fungsi:this.changeWarnaAlert,divClass:"row mb-2",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement("div",{className:"row mb-5"},r.a.createElement(B,{tipe:this.state.tipe,warna:this.state.warna,align:this.state.align,judul:this.state.judul,isi:this.state.isi})))))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&r.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,r.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),r.a.createElement("form",null,r.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"3",readOnly:!0,ref:function(t){return e.textArea=t},value:'<button type="button" class="btn '+this.props.size+" "+this.props.tipe+" "+this.props.warnaO+" "+this.props.radius+'">\r \t'+this.props.isi+"\r</button>"})))}}]),t}(r.a.Component),T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeTipeButton=function(t){e.setState({tipe:t.target.value})},e.changeSizeButton=function(t){e.setState({size:t.target.value})},e.changeIsiButton=function(t){e.setState({isi:t.target.value})},e.changeWarnaButton=function(t){e.setState({warnaO:t.target.value})},e.changeRadiusButton=function(t){e.setState({radius:t.target.value})},e.changeWarnaDasar=function(t){e.setState({warnadasar:t.target.value})},e.state={tipe:"btn-success",isi:"Send",warnaO:"",radius:"",size:"",warnadasar:"dark"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"App container"},r.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Button Generator"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-12  border-right"},r.a.createElement("div",{className:"row mx-1 mb-3 bg-"+this.state.warnadasar},r.a.createElement("div",{className:"col my-5 justify-content-center"},r.a.createElement("button",{type:"button",className:" btn "+this.state.size+" "+this.state.tipe+" "+this.state.warnaO+" "+this.state.radius},this.state.isi))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(j,{textClass:"text-center"},"Bentuk Button"),r.a.createElement(v,{tipe:y,fungsi:this.changeRadiusButton,divClass:" mx-1 mt-1 mb-2 btn-group",btnClass:"px-3"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(j,{textClass:"text-center"},"Ukuran Button"),r.a.createElement(v,{tipe:C,fungsi:this.changeRadiusButton,divClass:"mx-1 mt-1 mb-2 btn-group",btnClass:"px-4"})),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Isi Button"),r.a.createElement("div",{className:"row mx-1 mt-1 mb-2"},r.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.isi,onChange:this.changeIsiButton}))),r.a.createElement("div",{className:"col-md-8 col-sm-12  "},r.a.createElement("div",{className:"container"},r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Warna Background"),r.a.createElement(v,{tipe:x,fungsi:this.changeWarnaDasar,divClass:"row mb-2",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Warna Button"),r.a.createElement(v,{tipe:w,fungsi:this.changeTipeButton,divClass:"row mb-2",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(j,{textClass:"text-center",divClass:"row justify-content-center"},"Warna Outline"),r.a.createElement(v,{tipe:f,fungsi:this.changeWarnaButton,divClass:"row mb-2",btnClass:"mx-1 mt-1 col-auto"}),r.a.createElement(S,{size:this.state.size,tipe:this.state.tipe,warnaO:this.state.warnaO,radius:this.state.radius,isi:this.state.isi}))))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 bg-light text-dark rounded"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("h4",{className:"col-6"},"Main Code"),document.queryCommandSupported("copy")&&r.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,r.a.createElement("button",{className:"btn btn-sm btn-primary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),r.a.createElement("form",null,r.a.createElement("textarea",{className:"form-control kode bg-light text-dark border-0",rows:"9",readOnly:!0,ref:function(t){return e.textArea=t},value:'<div class="card border-0 bg-'+this.props.cardbg+" text-"+this.props.warnatxt+'"> \r\t<div class="card-body text-'+this.props.alignbtn+'">\r\t\t<p class="h'+this.props.ukuranjudul+" text-"+this.props.alignjudul+'">'+this.props.judulkartu+'</p>\r\t\t<a class="btn btn-'+this.props.warnabtn+'" href="...">'+this.props.namabtn+"</a>\r\t</div>\r</div>"})))}}]),t}(n.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-dark"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Bootstrap Generator"),r.a.createElement("p",{className:"lead"},"Bootstrap has a lot of customization. We make it more easy for you to pick it"))),r.a.createElement("div",{className:"container pb-5"},r.a.createElement("div",{className:"row my-5"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h1",{className:"text-light"},"How to use it?"),r.a.createElement("p",{className:"text-light ml-5"},"Create new HTML file",r.a.createElement("br",null),"Copy The code")),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(G,null))),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card rounded-lg shadow border-0 bg-warning "},r.a.createElement("h3",{className:"card-title bold text-center text-dark mt-3"},"Alert Generator"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"text-dark"},r.a.createElement("li",null,"Customize text color"),r.a.createElement("li",{className:"mt-2"},"Customize alert color"),r.a.createElement("li",{className:"mt-2"},"Customize text align"),r.a.createElement("li",{className:"mt-2"},"Live code"),r.a.createElement("li",{className:"mt-2"},"Output code")),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(b.b,{to:"/AlertGenerator",className:"btn btn-dark rounded-pill"},"Open"))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card rounded-lg shadow border-0 bg-warning "},r.a.createElement("h3",{className:"card-title bold text-center text-dark mt-3"},"Button Generator"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"text-dark"},r.a.createElement("li",null,"Customize text color"),r.a.createElement("li",{className:"mt-2"},"Customize alert color"),r.a.createElement("li",{className:"mt-2"},"Customize text align"),r.a.createElement("li",{className:"mt-2"},"Live code"),r.a.createElement("li",{className:"mt-2"},"Output code")),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(b.b,{to:"/ButtonGenerator",className:"btn btn-dark rounded-pill"},"Open"))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card rounded-lg shadow border-0 bg-warning "},r.a.createElement("h3",{className:"card-title bold text-center text-dark mt-3"},"Card Generator"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"text-dark"},r.a.createElement("li",null,"Customize text color"),r.a.createElement("li",{className:"mt-2"},"Customize alert color"),r.a.createElement("li",{className:"mt-2"},"Customize text align"),r.a.createElement("li",{className:"mt-2"},"Live code"),r.a.createElement("li",{className:"mt-2"},"Output code")),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(b.b,{to:"/CardGenerator",className:"btn btn-dark rounded-pill"},"Open"))))))))}}]),t}(n.Component),z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeTipeAlert=function(t){e.setState({tipe:t.target.value})},e.changeJudulAlert=function(t){e.setState({judul:t.target.value})},e.state={tipe:"success",judul:"fatal error",isi:"ini content dari alert",warna:"success",align:"center"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"App container"},r.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Progress Bar Generator"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:1e3},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})))))}}]),t}(n.Component),H=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:W}),r.a.createElement(d.a,{path:"/BootstrapGenerator",component:W}),r.a.createElement(d.a,{path:"/CardGenerator",component:k}),r.a.createElement(d.a,{path:"/AlertGenerator",component:A}),r.a.createElement(d.a,{path:"/ButtonGenerator",component:T}),r.a.createElement(d.a,{path:"/ProgressBarGenerator",component:z}))},J=a(23),I=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("footer",{className:"fixed-bottom text-center bg-white shadow-lg pt-2 kecil"},r.a.createElement("p",null," Create with ",r.a.createElement(J.a,{className:"text-danger"})," by ",r.a.createElement("b",null,"Dimas Angkasa")," ")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35),a(36);l.a.render(r.a.createElement(b.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.715401dd.chunk.js.map