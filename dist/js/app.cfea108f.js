(function(t){function s(s){for(var a,i,o=s[0],c=s[1],p=s[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);r&&r(s);while(d.length)d.shift()();return l.push.apply(l,p||[]),e()}function e(){for(var t,s=0;s<l.length;s++){for(var e=l[s],a=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(a=!1)}a&&(l.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},n={app:0},l=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/test_psk-house/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var p=0;p<o.length;p++)s(o[p]);var r=c;l.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"03c4":function(t,s,e){},"23b0":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),n=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"head"},[s("div",{staticClass:"container"},[s("div",{staticClass:"head__wrapper"},[s("select",{staticClass:"select",attrs:{name:"house",id:"house"},on:{change:function(s){return t.selectHouse(s.target.value)}}},t._l(t.data.houses,(function(e,a){return s("option",{key:a,domProps:{value:e,selected:0===a}},[t._v(" Дом № "+t._s(a+1)+" ")])})),0),t._m(0)])])]),s("section",{staticClass:"chess"},[s("div",{staticClass:"container"},[s("div",{staticClass:"chess__wrapper"},t._l(t.curHouse,(function(t,e){return s("Entrance",{key:e,attrs:{entrance:t}})})),1)])])])},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"legends"},[s("div",{staticClass:"legends__title"},[t._v("Легенда:")]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_free"}),s("span",{staticClass:"legend__description"},[t._v("- свободно;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_sales"}),s("span",{staticClass:"legend__description"},[t._v("- выданы ключи;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_treaty"}),s("span",{staticClass:"legend__description"},[t._v("- договор;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_booking"}),s("span",{staticClass:"legend__description"},[t._v("- бронь;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_decor"}),s("span",{staticClass:"legend__description"},[t._v("- оформление;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_non-residential"}),s("span",{staticClass:"legend__description"},[t._v("- нежилое;")])]),s("div",{staticClass:"legends__block"},[s("div",{staticClass:"legend legend_additionally"}),s("span",{staticClass:"legend__description"},[t._v("- с предложениями.")])])])}],i=e("2f62"),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"entrance"},[s("div",{staticClass:"entrance__content"},t._l(t.entrance.floors,(function(e,a){return s("div",{key:a,staticClass:"entrance__floors"},[s("div",{staticClass:"entrance__floor"},[t._v(t._s(e.floor))]),t._l(e.flats,(function(t,e){return s("Cell",{key:e,attrs:{id:t.id}})}))],2)})),0),s("div",{staticClass:"entrance__title"},[t._v(" "+t._s(t.entrance.title)+" ")])])},c=[],p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"cell",class:{cell_sales:"Выданы ключи"===t.getDataFlat.status,cell_decor:"Оформление"===t.getDataFlat.status,cell_booking:"Бронь"===t.getDataFlat.status,cell_treaty:"Договор"===t.getDataFlat.status,"cell_non-residential":"Нежилые помещения"===t.getDataFlat.type,cell_additionally:t.getDataFlat.renovation||t.getDataFlat.marginal||t.getDataFlat.installment||t.getDataFlat.subsidy},on:{click:function(s){return t.showPopup(t.id)}}},[t._v(" "+t._s(t.getDataFlat.plan_type)+" ")]),t.curFloor===t.id?s("Popup",{attrs:{data:t.getDataFlat}}):t._e()],1)},r=[],u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"popup",class:{popup_left:t.scrollWidth,popup_right:!t.scrollWidth,popup_bottom:t.scrollHeight,popup_top:!t.scrollHeight}},[s("div",{staticClass:"popup__title"}),s("div",{staticClass:"popup__content"},[s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Тип: ")]),t._v(t._s(t.data.type)+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Цена: ")]),t._v(t._s(t.data.cost.toLocaleString("ru-RU"))+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Этаж: ")]),t._v(" "+t._s(t.data.floor)+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Номер квартиры: ")]),t._v(" "+t._s(t.data.number)+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Статус: ")]),t._v(" "+t._s(t.data.status)+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Планировка: ")]),t.data.plan_type?s("span",[t._v(t._s(t.data.plan_type))]):s("span",[t._v("—")])]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Площадь: ")]),t._v(" "+t._s(t.data.square)+" ")]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Cубсидированная : ")]),t.data.subsidy?s("span",[t._v("Да")]):s("span",[t._v("Нет")])]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("Маржинальная : ")]),t.data.marginal?s("span",[t._v("Да")]):s("span",[t._v("Нет")])]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("С ремонтом: ")]),t.data.renovation?s("span",[t._v("Да")]):s("span",[t._v("Нет")])]),s("div",{staticClass:"popup__block"},[s("span",{staticClass:"popup__subtitle"},[t._v("С рассрочкой: ")]),t.data.installment?s("span",[t._v("Да")]):s("span",[t._v("Нет")])])])])},d=[],_={data(){return{scrollWidth:!1,scrollHeight:!1}},props:{data:{type:Object}},mounted(){this.scrollWidth=document.documentElement.offsetWidth<document.documentElement.scrollWidth,this.scrollHeight=document.documentElement.offsetHeight<document.documentElement.scrollHeight&&document.documentElement.scrollHeight>window.innerHeight}},v=_,f=(e("d335"),e("2877")),g=Object(f["a"])(v,u,d,!1,null,"32707279",null),b=g.exports,h={components:{Popup:b},props:{id:{type:String}},computed:{...Object(i["d"])(["data","curFloor"]),getDataFlat(){let t;for(let s in this.data.flats)s===this.id&&(t=this.data.flats[s]);return t}},methods:{...Object(i["c"])(["showPopup"])}},C=h,m=(e("967f"),Object(f["a"])(C,p,r,!1,null,"5ae6d117",null)),y=m.exports,k={components:{Cell:y},props:{entrance:{type:Object,require:!0}}},w=k,j=(e("bf9e"),Object(f["a"])(w,o,c,!1,null,"19eec2dc",null)),O=j.exports,D={components:{Entrance:O},computed:{...Object(i["d"])(["data","curHouse"])},methods:{...Object(i["c"])(["updateData","selectHouse","hiddenPopup"]),...Object(i["b"])(["getData"])},async created(){await this.getData().then(async t=>{if(200===t.status){const s=await t.json();this.updateData(s),this.selectHouse(s.houses[0])}}).catch(t=>{console.log(t),alert("Что-то пошло не так! Попробуйте повторить попытку попозже!")}),window.addEventListener("click",t=>{t.target.classList.contains("cell")||this.hiddenPopup()}),window.addEventListener("keyup",t=>{"Escape"===t.code&&this.hiddenPopup()})}},F=D,H=(e("e7bc"),Object(f["a"])(F,n,l,!1,null,null,null)),P=H.exports;a["a"].use(i["a"]);var x=new i["a"].Store({state:{data:[],curHouse:[],curFloor:""},getters:{},mutations:{updateData(t,s){t.data=s},selectHouse(t,s){t.curHouse=[],t.curHouse=t.data.entrances.filter(t=>t.house_id===s)},showPopup(t,s){t.curFloor=s},hiddenPopup(t){t.curFloor=""}},actions:{async getData(){const t=await fetch("data.json");return t}}});a["a"].config.productionTip=!1,new a["a"]({store:x,render:t=>t(P)}).$mount("#app")},"5a30":function(t,s,e){},"769b":function(t,s,e){},"967f":function(t,s,e){"use strict";e("03c4")},bf9e:function(t,s,e){"use strict";e("769b")},d335:function(t,s,e){"use strict";e("23b0")},e7bc:function(t,s,e){"use strict";e("5a30")}});
//# sourceMappingURL=app.cfea108f.js.map