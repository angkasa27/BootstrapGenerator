(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l),s=(a(29),a(1)),o=a(2),i=a(4),m=a(3),u=a(5),b=a(11),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card border-0  bg-"+this.props.cardbg+" text-"+this.props.warnatxt+" "+this.props.shadow},c.a.createElement("div",{className:"card-body text-"+this.props.alignbtn},c.a.createElement("p",{className:"h"+this.props.ukuranjudul+" text-"+this.props.alignjudul},this.props.judulkartu),c.a.createElement("p",{className:"h"+this.props.ukuranisi+" text-"+this.props.aligntext},this.props.isikartu),c.a.createElement("button",{className:"btn btn-"+this.props.warnabtn},this.props.namabtn)))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&c.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,c.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),c.a.createElement("form",null,c.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"9",disable:!0,ref:function(t){return e.textArea=t},value:'<div class="card border-0 bg-'+this.props.cardbg+" text-"+this.props.warnatxt+'"> \r\t<div class="card-body text-'+this.props.alignbtn+'">\r\t\t<p class="h'+this.props.ukuranjudul+" text-"+this.props.alignjudul+'">'+this.props.judulkartu+'</p>\r\t\t<a class="btn btn-'+this.props.warnabtn+'" href="...">'+this.props.namabtn+"</a>\r\t</div>\r</div>"})))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).changeBgCard=function(t){e.setState({cardbg:t.target.value})},e.changeTxtColor=function(t){e.setState({warnatxt:t.target.value})},e.changeWarnaBtn=function(t){e.setState({warnabtn:t.target.value})},e.changeWarnaDasar=function(t){e.setState({warnadasar:t.target.value})},e.changeJudulKartu=function(t){e.setState({judulkartu:t.target.value})},e.changeIsiKartu=function(t){e.setState({isikartu:t.target.value})},e.changeNamaBtn=function(t){e.setState({namabtn:t.target.value})},e.changeAlignJudul=function(t){e.setState({alignjudul:t.target.value})},e.changeAlignText=function(t){e.setState({aligntext:t.target.value})},e.changeAlignBtn=function(t){e.setState({alignbtn:t.target.value})},e.changeUkuranJudul=function(t){e.setState({ukuranjudul:t.target.value})},e.changeUkuranIsi=function(t){e.setState({ukuranisi:t.target.value})},e.state={ukuranjudul:"1",judulkartu:"Judul kartu",ukuranisi:"6",isikartu:"ini adalah teks singkat untuk penjelasan isi kartu",warnabtn:"light",namabtn:"kirim",cardbg:"primary",warnatxt:"light",alignbtn:"center",aligntext:"center",alignjudul:"center",shadow:"shadow",warnadasar:"light",tes:!0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container mb-5"},c.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Card Generator"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5 px-3 py-3 bg-"+this.state.warnadasar},c.a.createElement(h,{ukuranjudul:this.state.ukuranjudul,judulkartu:this.state.judulkartu,warnabtn:this.state.warnabtn,namabtn:this.state.namabtn,ukuranisi:this.state.ukuranisi,isikartu:this.state.isikartu,cardbg:this.state.cardbg,warnatxt:this.state.warnatxt,aligntext:this.state.aligntext,alignbtn:this.state.alignbtn,alignjudul:this.state.alignjudul,shadow:this.state.shadow})),c.a.createElement("div",{className:"col-7"},c.a.createElement("div",{className:"card rounded border-left border-bottom-0 border-right-0 border-top-0"},c.a.createElement("b",{className:"text-center"},"Card Color"),c.a.createElement("div",{className:"row mx-3"},c.a.createElement("button",{className:"btn btn-light mx-1 col-auto",value:"light",onClick:this.changeBgCard},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 col-auto",value:"secondary",onClick:this.changeBgCard},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 col-auto",value:"dark",onClick:this.changeBgCard},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 col-auto",value:"primary",onClick:this.changeBgCard},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 col-auto",value:"warning",onClick:this.changeBgCard},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 col-auto",value:"danger",onClick:this.changeBgCard},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 col-auto",value:"success",onClick:this.changeBgCard},"success")),c.a.createElement("b",{className:"text-center"},"Text Color"),c.a.createElement("div",{className:"row mx-3"},c.a.createElement("button",{className:"btn btn-light mx-1 col-auto",value:"light",onClick:this.changeTxtColor},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 col-auto",value:"secondary",onClick:this.changeTxtColor},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 col-auto",value:"dark",onClick:this.changeTxtColor},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 col-auto",value:"primary",onClick:this.changeTxtColor},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 col-auto",value:"warning",onClick:this.changeTxtColor},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 col-auto",value:"danger",onClick:this.changeTxtColor},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 col-auto",value:"success",onClick:this.changeTxtColor},"success")),c.a.createElement("b",{className:"text-center"},"Button Color"),c.a.createElement("div",{className:"row mx-3"},c.a.createElement("button",{className:"btn btn-light mx-1 col-auto",value:"light",onClick:this.changeWarnaBtn},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 col-auto",value:"secondary",onClick:this.changeWarnaBtn},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 col-auto",value:"dark",onClick:this.changeWarnaBtn},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 col-auto",value:"primary",onClick:this.changeWarnaBtn},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 col-auto",value:"warning",onClick:this.changeWarnaBtn},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 col-auto",value:"danger",onClick:this.changeWarnaBtn},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 col-auto",value:"success",onClick:this.changeWarnaBtn},"success")),c.a.createElement("b",{className:"text-center"},"Background Color"),c.a.createElement("div",{className:"row mx-3"},c.a.createElement("button",{className:"btn btn-light mx-1 col-auto",value:"light",onClick:this.changeWarnaDasar},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 col-auto",value:"secondary",onClick:this.changeWarnaDasar},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 col-auto",value:"dark",onClick:this.changeWarnaDasar},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 col-auto",value:"primary",onClick:this.changeWarnaDasar},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 col-auto",value:"warning",onClick:this.changeWarnaDasar},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 col-auto",value:"danger",onClick:this.changeWarnaDasar},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 col-auto",value:"success",onClick:this.changeWarnaDasar},"success"))))),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"card border-left-0 border-bottom-0 border-right border-top-0 pr-5"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col-8"},c.a.createElement("b",{className:"text-center "},"Teks Judul"),c.a.createElement("input",{type:"text",className:"form-control",value:this.state.judulkartu,onChange:this.changeJudulKartu})),c.a.createElement("div",{className:"col-4"},c.a.createElement("b",{className:"text-left"},"Ukuran Judul"),c.a.createElement("select",{className:"form-control",value:this.state.ukuranjudul,onChange:this.changeUkuranJudul},c.a.createElement("option",{value:"1"},"Heading 1"),c.a.createElement("option",{value:"2"},"Heading 2"),c.a.createElement("option",{value:"3"},"Heading 3"),c.a.createElement("option",{value:"4"},"Heading 4"),c.a.createElement("option",{value:"5"},"Heading 5"),c.a.createElement("option",{value:"6"},"Heading 6")))),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-8"},c.a.createElement("b",{className:"text-center"},"Teks Isi"),c.a.createElement("input",{type:"text",className:"form-control",value:this.state.isikartu,onChange:this.changeIsiKartu})),c.a.createElement("div",{className:"col-4"},c.a.createElement("b",{className:"text-left"},"Ukuran Isi"),c.a.createElement("select",{className:"form-control",value:this.state.ukuranisi,onChange:this.changeUkuranIsi},c.a.createElement("option",{value:"1"},"Heading 1"),c.a.createElement("option",{value:"2"},"Heading 2"),c.a.createElement("option",{value:"3"},"Heading 3"),c.a.createElement("option",{value:"4"},"Heading 4"),c.a.createElement("option",{value:"5"},"Heading 5"),c.a.createElement("option",{value:"6"},"Heading 6")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("b",{className:"text-center my-2"},"Teks Tombol"),c.a.createElement("input",{type:"text",className:"form-control",value:this.state.namabtn,onChange:this.changeNamaBtn}))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-4"},c.a.createElement("b",{className:"text-center"},"Posisi Judul"),c.a.createElement("select",{className:"form-control",value:this.state.alignjudul,onChange:this.changeAlignJudul},c.a.createElement("option",{value:"left"},"Left"),c.a.createElement("option",{value:"center"},"Center"),c.a.createElement("option",{value:"right"},"Right"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("b",{className:"text-center"},"Posisi Isi"),c.a.createElement("select",{className:"form-control",value:this.state.aligntext,onChange:this.changeAlignText},c.a.createElement("option",{value:"left"},"Left"),c.a.createElement("option",{value:"center"},"Center"),c.a.createElement("option",{value:"right"},"Right"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("b",{className:"text-center"},"Posisi Tombol"),c.a.createElement("select",{className:"form-control",value:this.state.alignbtn,onChange:this.changeAlignBtn},c.a.createElement("option",{value:"left"},"Left"),c.a.createElement("option",{value:"center"},"Center"),c.a.createElement("option",{value:"right"},"Right")))))),c.a.createElement("div",{className:"col-6"},c.a.createElement("b",null,"Source Code"),c.a.createElement(d,{ukuranjudul:this.state.ukuranjudul,judulkartu:this.state.judulkartu,warnabtn:this.state.warnabtn,namabtn:this.state.namabtn,ukuranisi:this.state.ukuranisi,isikartu:this.state.isikartu,cardbg:this.state.cardbg,warnatxt:this.state.warnatxt,aligntext:this.state.aligntext,alignbtn:this.state.alignbtn,alignjudul:this.state.alignjudul}))))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"alert alert-"+this.props.tipe+" text-"+this.props.warna+" text-"+this.props.align},c.a.createElement("h4",null,this.props.judul),c.a.createElement("p",null,this.props.children))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded container"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&c.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,c.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),c.a.createElement("form",{className:"row"},c.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"5",disable:!0,ref:function(t){return e.textArea=t},value:'<div class="alert alert-'+this.props.tipe+" text-"+this.props.warna+" text-"+this.props.align+"> \r\t<h4>"+this.props.judul+"</h4>\r\t<p>"+this.props.isi+"</p>\r</div>"})))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).changeTipeAlert=function(t){e.setState({tipe:t.target.value})},e.changeJudulAlert=function(t){e.setState({judul:t.target.value})},e.changeIsiAlert=function(t){e.setState({isi:t.target.value})},e.changeWarnaAlert=function(t){e.setState({warna:t.target.value})},e.changeAlignAlert=function(t){e.setState({align:t.target.value})},e.state={tipe:"success",judul:"fatal error",isi:"ini content dari alert",warna:"success",align:"center"},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Alert Generator"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 col-sm-12"},c.a.createElement(p,{index:"2",tipe:this.state.tipe,judul:this.state.judul,warna:this.state.warna,align:this.state.align},this.state.isi),c.a.createElement("b",{className:"text-center"},"Header Alert"),c.a.createElement("div",{className:"row mt-1 mx-1 mb-2"},c.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.judul,onChange:this.changeJudulAlert})),c.a.createElement("b",{className:"text-center"},"Isi Alert"),c.a.createElement("div",{className:"row mt-1 mx-1 mb-2"},c.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.isi,onChange:this.changeIsiAlert})),c.a.createElement("b",{className:"text-left "},"Text Align"),c.a.createElement("div",{className:"row mt-1 mb-2"},c.a.createElement("button",{className:"btn btn-secondary col-md-3 mt-1 mx-3",value:"left",onClick:this.changeAlignAlert},"left"),c.a.createElement("button",{className:"btn btn-secondary col-md-3 mt-1 mx-3",value:"center",onClick:this.changeAlignAlert},"center"),c.a.createElement("button",{className:"btn btn-secondary col-md-3 mt-1 mx-3",value:"right",onClick:this.changeAlignAlert},"right"))),c.a.createElement("div",{className:"col-md-7 col-sm-12"},c.a.createElement("div",{className:"container"},c.a.createElement("b",{className:"text-center"},"Warna Alert"),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("button",{className:"btn btn-light mx-1 mt-1 col-auto",value:"light",onClick:this.changeTipeAlert},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 mt-1 col-auto",value:"secondary",onClick:this.changeTipeAlert},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 mt-1 col-auto",value:"dark",onClick:this.changeTipeAlert},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 mt-1 col-auto",value:"primary",onClick:this.changeTipeAlert},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 mt-1 col-auto",value:"warning",onClick:this.changeTipeAlert},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 mt-1 col-auto",value:"danger",onClick:this.changeTipeAlert},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 mt-1 col-auto",value:"success",onClick:this.changeTipeAlert},"success")),c.a.createElement("b",{className:"text-center"},"Warna Text"),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("button",{className:"btn btn-light mx-1 mt-1 col-auto",value:"light",onClick:this.changeWarnaAlert},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 mt-1 col-auto",value:"secondary",onClick:this.changeWarnaAlert},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 mt-1 col-auto",value:"dark",onClick:this.changeWarnaAlert},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 mt-1 col-auto",value:"primary",onClick:this.changeWarnaAlert},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 mt-1 col-auto",value:"warning",onClick:this.changeWarnaAlert},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 mt-1 col-auto",value:"danger",onClick:this.changeWarnaAlert},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 mt-1 col-auto",value:"success",onClick:this.changeWarnaAlert},"success")),c.a.createElement("div",{className:"row mb-5"},c.a.createElement(v,{tipe:this.state.tipe,warna:this.state.warna,align:this.state.align,judul:this.state.judul,isi:this.state.isi}))))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("h4",{className:"col-6"},"Output"),document.queryCommandSupported("copy")&&c.a.createElement("div",{className:"col-6 text-right"},this.state.copySuccess,c.a.createElement("button",{className:"btn btn-sm btn-secondary rounded-pill","data-toggle":"tooltip","data-placement":"left",title:"Copy the Code",onClick:this.copyToClipboard},"Copy"))),c.a.createElement("form",null,c.a.createElement("textarea",{className:"form-control kode bg-dark text-white border-0",rows:"3",disable:!0,ref:function(t){return e.textArea=t},value:'<button type="button" class="btn '+this.props.size+" "+this.props.tipe+" "+this.props.warnaO+" rounded"+this.props.radius+'">\r \t'+this.props.isi+"\r</button>"})))}}]),t}(c.a.Component),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).changeTipeButton=function(t){e.setState({tipe:t.target.value})},e.changeSizeButton=function(t){e.setState({size:t.target.value})},e.changeIsiButton=function(t){e.setState({isi:t.target.value})},e.changeWarnaButton=function(t){e.setState({warnaO:t.target.value})},e.changeRadiusButton=function(t){e.setState({radius:t.target.value})},e.changeWarnaDasar=function(t){e.setState({warnadasar:t.target.value})},e.state={tipe:"btn-success",isi:"Send",warnaO:"",radius:"",size:"",warnadasar:"dark"},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("h1",{className:"mb-5 mt-3 text-center"},"Button Generator"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-12  border-right"},c.a.createElement("div",{className:"row mx-1 mb-3 bg-"+this.state.warnadasar},c.a.createElement("div",{className:"col my-5 justify-content-md-center"},c.a.createElement("button",{type:"button",class:" btn "+this.state.size+" "+this.state.tipe+" "+this.state.warnaO+" rounded"+this.state.radius},this.state.isi))),c.a.createElement("b",{className:"text-center "},"Jenis Outline Button"),c.a.createElement("div",{className:"row mx-1 mt-1 mb-2"},c.a.createElement("button",{className:"btn btn-secondary mx-2 mt-1 col-md-auto",value:"-lg",onClick:this.changeRadiusButton},"Rounded"),c.a.createElement("button",{className:"btn btn-secondary mx-2 mt-1 col-md-auto",value:"-circle",onClick:this.changeRadiusButton},"Circle"),c.a.createElement("button",{className:"btn btn-secondary mx-2 mt-1 col-md-auto",value:"-pill",onClick:this.changeRadiusButton},"Pill"),c.a.createElement("button",{className:"btn btn-secondary mx-2 mt-1 col-md-auto",value:"-0",onClick:this.changeRadiusButton},"Square")),c.a.createElement("b",{className:"text-center "},"Ukuran Button"),c.a.createElement("div",{className:"row mt-1 mx-1 mb-2"},c.a.createElement("button",{className:"btn btn-secondary mx-3 col-3",value:"btn-sm",onClick:this.changeSizeButton},"Small"),c.a.createElement("button",{className:"btn btn-secondary mx-2 col-3",value:"",onClick:this.changeSizeButton},"Medium"),c.a.createElement("button",{className:"btn btn-secondary mx-3 col-3",value:"btn-lg",onClick:this.changeSizeButton},"Large")),c.a.createElement("b",{className:"text-center"},"Isi Button"),c.a.createElement("div",{className:"row mx-1 mt-1 mb-2"},c.a.createElement("input",{type:"text",name:"header",className:"form-control",value:this.state.isi,onChange:this.changeIsiButton}))),c.a.createElement("div",{className:"col-md-8 col-sm-12  "},c.a.createElement("div",{className:"container"},c.a.createElement("b",{className:"text-center"},"Warna Background"),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("button",{className:"btn btn-light mx-1 col-auto",value:"light",onClick:this.changeWarnaDasar},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 mt-1 col-auto",value:"secondary",onClick:this.changeWarnaDasar},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 mt-1 col-auto",value:"dark",onClick:this.changeWarnaDasar},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 mt-1 col-auto",value:"primary",onClick:this.changeWarnaDasar},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 mt-1 col-auto",value:"warning",onClick:this.changeWarnaDasar},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 mt-1 col-auto",value:"danger",onClick:this.changeWarnaDasar},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 mt-1 col-auto",value:"success",onClick:this.changeWarnaDasar},"success"),c.a.createElement("button",{className:"btn btn-white mx-1 mt-1 col-auto",value:"a",onClick:this.changeWarnaDasar},"Transparent")),c.a.createElement("b",{className:"text-center"},"Warna Button"),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("button",{className:"btn btn-light mx-1 mt-1 col-auto",value:"btn-light",onClick:this.changeTipeButton},"light"),c.a.createElement("button",{className:"btn btn-secondary mx-1 mt-1 col-auto",value:"btn-secondary",onClick:this.changeTipeButton},"secondary"),c.a.createElement("button",{className:"btn btn-dark mx-1 mt-1 col-auto",value:"btn-dark",onClick:this.changeTipeButton},"dark"),c.a.createElement("button",{className:"btn btn-primary mx-1 mt-1 col-auto",value:"btn-primary",onClick:this.changeTipeButton},"primary"),c.a.createElement("button",{className:"btn btn-warning mx-1 mt-1 col-auto",value:"btn-warning",onClick:this.changeTipeButton},"warning"),c.a.createElement("button",{className:"btn btn-danger mx-1 mt-1 col-auto",value:"btn-danger",onClick:this.changeTipeButton},"danger"),c.a.createElement("button",{className:"btn btn-success mx-1 mt-1 col-auto",value:"btn-success",onClick:this.changeTipeButton},"success"),c.a.createElement("button",{className:"btn btn-white mx-1 mt-1 col-auto",value:"",onClick:this.changeTipeButton},"transparent")),c.a.createElement("b",{className:"text-center"},"Warna Outline Button"),c.a.createElement("div",{className:"row mb-2"},c.a.createElement("button",{className:"btn btn-light mt-1 mx-1 col-auto",value:"btn-outline-light",onClick:this.changeWarnaButton},"light"),c.a.createElement("button",{className:"btn btn-secondary mt-1 mx-1 col-auto",value:"btn-outline-secondary",onClick:this.changeWarnaButton},"secondary"),c.a.createElement("button",{className:"btn btn-dark mt-1 mx-1 col-auto",value:"btn-outline-dark",onClick:this.changeWarnaButton},"dark"),c.a.createElement("button",{className:"btn btn-primary mt-1 mx-1 col-auto",value:"btn-outline-primary",onClick:this.changeWarnaButton},"primary"),c.a.createElement("button",{className:"btn btn-warning mt-1 mx-1 col-auto",value:"btn-outline-warning",onClick:this.changeWarnaButton},"warning"),c.a.createElement("button",{className:"btn btn-danger mt-1 mx-1 col-auto",value:"btn-outline-danger",onClick:this.changeWarnaButton},"danger"),c.a.createElement("button",{className:"btn btn-success mt-1 mx-1 col-auto",value:"btn-outline-success",onClick:this.changeWarnaButton},"success"),c.a.createElement("button",{className:"btn btn-white mt-1 mx-1 col-auto",value:"",onClick:this.changeWarnaButton},"transparent")),c.a.createElement(N,{size:this.state.size,tipe:this.state.tipe,warnaO:this.state.warnaO,radius:this.state.radius,isi:this.state.isi})))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Home")}}]),t}(n.Component),C=function(){return c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:k}),c.a.createElement(b.a,{path:"/CardGenerator",component:g}),c.a.createElement(b.a,{path:"/AlertGenerator",component:E}),c.a.createElement(b.a,{path:"/ButtonGenerator",component:x}))},y=a(10),w=(a(34),a(23)),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark gaya"},c.a.createElement("div",{className:"container"},c.a.createElement(y.b,{to:"/Home",className:"navbar-brand"},"B-Gen"),c.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{class:"navbar-nav"},c.a.createElement(y.b,{to:"/",className:"nav-item nav-link active text-light"},"Home",c.a.createElement("span",{class:"sr-only"},"(current)")),c.a.createElement(y.b,{to:"/AlertGenerator",className:"nav-item nav-link text-light"},"Alert"),c.a.createElement(y.b,{to:"/ButtonGenerator",className:"nav-item nav-link text-light"},"Button"),c.a.createElement(y.b,{to:"/CardGenerator",className:"nav-item nav-link text-light"},"Cards"))))),c.a.createElement(C,null),c.a.createElement("footer",{className:"fixed-bottom text-center bg-white shadow-lg pt-2 kecil"},c.a.createElement("p",null," Create with ",c.a.createElement(w.a,{className:"text-danger"})," by ",c.a.createElement("b",null,"Dimas Angkasa")," ")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35),a(36);r.a.render(c.a.createElement(y.a,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.84a09cba.chunk.js.map