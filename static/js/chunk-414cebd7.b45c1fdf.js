/*! time: 2023-7-25 17:52:02 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-414cebd7"],{"3aa7":function(S,e,l){},bb7b:function(S,e,l){"use strict";l.r(e);var a=function(){var S=this,e=S._self._c;return e("div",{staticClass:"petsCont",class:{mobilePets:"mobile"===S.device}},[e("div",{staticClass:"petsPage"},[e("div",{staticClass:"title"},[S._v("合成目标 "),e("el-tooltip",{attrs:{effect:"dark",placement:"bottom"}},[e("fa-icon",{staticStyle:{width:"20px"},attrs:{icon:["fas","question-circle"]}}),e("div",{attrs:{slot:"content"},slot:"content"},[S._v(" 描述（分值）"),e("br"),S._v(" 一定不要（-15）"),e("br"),S._v(" 不想要（1）"),e("br"),S._v(" 不太想要（2）"),e("br"),S._v(" 一般（3）"),e("br"),S._v(" 能接受（4）"),e("br"),S._v(" 想要（5）"),e("br")])],1)],1),e("chips-form",{ref:"ruleForm",attrs:{data:S.ruleForm,config:S.ruleFormConfig},on:{"update:data":function(e){S.ruleForm=e}}})],1),e("div",{staticClass:"petsPage"},[e("div",{staticClass:"title"},[S._v("合成配方")]),S._l(S.formulaRuleShow,(function(l,a){return e("div",{key:a,style:`color: rgba(255,0,0,${l.value/(S.dataMax||1)})`},[e("span",[S._v(S._s(S.DataName[l.form[0]])+"+"+S._s(S.DataName[l.form[1]])+":"+S._s(l.value))])])}))],2)])},o=[],u=l("2f62"),v={name:"Pets",data(){return{value:3,formulaRule:[{level:"S",value:0,form:["A1","A1"],out:["S2","S5","S6","S9"]},{level:"S",value:0,form:["A1","A2"],out:["S1","S5","S6","SA"]},{level:"S",value:0,form:["A1","A3"],out:["S2","S5","S6","SA"]},{level:"S",value:0,form:["A1","A4"],out:["S2","S5","S7","S9"]},{level:"S",value:0,form:["A1","A5"],out:["S2","S4","S7","S9"]},{level:"S",value:0,form:["A1","A6"],out:["S1","S4","S8","S9"]},{level:"S",value:0,form:["A2","A2"],out:["S1","S4","S6","S9"]},{level:"S",value:0,form:["A2","A3"],out:["S1","S5","S8","SA"]},{level:"S",value:0,form:["A2","A4"],out:["S2","S4","S7","SA"]},{level:"S",value:0,form:["A2","A5"],out:["S1","S7","SB","SC"]},{level:"S",value:0,form:["A2","A6"],out:["S3","S7","SA","SC"]},{level:"S",value:0,form:["A3","A3"],out:["S1","S8","SB","SC"]},{level:"S",value:0,form:["A3","A4"],out:["S3","S8","S9","SC"]},{level:"S",value:0,form:["A3","A5"],out:["S2","S4","S6","S9"]},{level:"S",value:0,form:["A3","A6"],out:["S3","S5","S6","SB"]},{level:"S",value:0,form:["A4","A4"],out:["S3","S4","S7","SB"]},{level:"S",value:0,form:["A4","A5"],out:["S3","S8","SB","SC"]},{level:"S",value:0,form:["A4","A6"],out:["S3","S4","S8","SA"]},{level:"S",value:0,form:["A5","A5"],out:["S1","S8","SB","SC"]},{level:"S",value:0,form:["A5","A6"],out:["S2","S5","S7","SA"]},{level:"S",value:0,form:["A6","A6"],out:["S3","S6","SB","SC"]},{level:"SS",value:0,form:["S1","S1"],out:["SS2","SS5","SSB","SSC"]},{level:"SS",value:0,form:["S1","S2"],out:["SS1","SS4","SS7","SS9"]},{level:"SS",value:0,form:["S1","S3"],out:["SS3","SS5","SS6","SS8"]},{level:"SS",value:0,form:["S1","S4"],out:["SS1","SS3","SS8","SSA"]},{level:"SS",value:0,form:["S1","S5"],out:["SS5","SS8","SSA","SSC"]},{level:"SS",value:0,form:["S1","S6"],out:["SS1","SS3","SS5","SSC"]},{level:"SS",value:0,form:["S1","S7"],out:["SS4","SS6","SS8","SSB"]},{level:"SS",value:0,form:["S1","S8"],out:["SS2","SS3","SSA","SSB"]},{level:"SS",value:0,form:["S1","S9"],out:["SS4","SS7","SS8","SSB"]},{level:"SS",value:0,form:["S1","SA"],out:["SS1","SS5","SS7","SS9"]},{level:"SS",value:0,form:["S1","SB"],out:["SS1","SS4","SS5","SS8"]},{level:"SS",value:0,form:["S1","SC"],out:["SS1","SS9","SSA","SSB"]},{level:"SS",value:0,form:["S2","S2"],out:["SS3","SS5","SS7","SS9"]},{level:"SS",value:0,form:["S2","S3"],out:["SS1","SS8","SSA","SSB"]},{level:"SS",value:0,form:["S2","S4"],out:["SS1","SS5","SS8","SSA"]},{level:"SS",value:0,form:["S2","S5"],out:["SS3","SS4","SS6","SSB"]},{level:"SS",value:0,form:["S2","S6"],out:["SS2","SS4","SS7","SS8"]},{level:"SS",value:0,form:["S2","S7"],out:["SS1","SS3","SS9","SSC"]},{level:"SS",value:0,form:["S2","S8"],out:["SS2","SS3","SS9","SSA"]},{level:"SS",value:0,form:["S2","S9"],out:["SS1","SS5","SS6","SSC"]},{level:"SS",value:0,form:["S2","SA"],out:["SS1","SS2","SS5","SS6"]},{level:"SS",value:0,form:["S2","SB"],out:["SS1","SS3","SS5","SSC"]},{level:"SS",value:0,form:["S2","SC"],out:["SS1","SS2","SS3","SSA"]},{level:"SS",value:0,form:["S3","S3"],out:["SS1","SS2","SS3","SSC"]},{level:"SS",value:0,form:["S3","S4"],out:["SS3","SS4","SS5","SS6"]},{level:"SS",value:0,form:["S3","S5"],out:["SS7","SS8","SSB","SSC"]},{level:"SS",value:0,form:["S3","S6"],out:["SS4","SS8","SSB","SSC"]},{level:"SS",value:0,form:["S3","S7"],out:["SS2","SS5","SS9","SSA"]},{level:"SS",value:0,form:["S3","S8"],out:["SS1","SS6","SS7","SSB"]},{level:"SS",value:0,form:["S3","S9"],out:["SS2","SS3","SS6","SSC"]},{level:"SS",value:0,form:["S3","SA"],out:["SS4","SS6","SS7","SSC"]},{level:"SS",value:0,form:["S3","SB"],out:["SS4","SS6","SS7","SSB"]},{level:"SS",value:0,form:["S3","SC"],out:["SS4","SS7","SS8","SSA"]},{level:"SS",value:0,form:["S4","S4"],out:["SS2","SS6","SS7","SSA"]},{level:"SS",value:0,form:["S4","S5"],out:["SS2","SS6","SS8","SSB"]},{level:"SS",value:0,form:["S4","S6"],out:["SS1","SS2","SSA","SSB"]},{level:"SS",value:0,form:["S4","S7"],out:["SS2","SS5","SSA","SSC"]},{level:"SS",value:0,form:["S4","S8"],out:["SS4","SS5","SSA","SSB"]},{level:"SS",value:0,form:["S4","S9"],out:["SS4","SS7","SSB","SSC"]},{level:"SS",value:0,form:["S4","SA"],out:["SS4","SS6","SS7","SSC"]},{level:"SS",value:0,form:["S4","SB"],out:["SS5","SS6","SS9","SSB"]},{level:"SS",value:0,form:["S4","SC"],out:["SS1","SS3","SS6","SSC"]},{level:"SS",value:0,form:["S5","S5"],out:["SS1","SS9","SSA","SSB"]},{level:"SS",value:0,form:["S5","S6"],out:["SS3","SS6","SS9","SSC"]},{level:"SS",value:0,form:["S5","S7"],out:["SS4","SS6","SS7","SS9"]},{level:"SS",value:0,form:["S5","S8"],out:["SS1","SS7","SS9","SSC"]},{level:"SS",value:0,form:["S5","S9"],out:["SS2","SS3","SS5","SS9"]},{level:"SS",value:0,form:["S5","SA"],out:["SS1","SS2","SS8","SSB"]},{level:"SS",value:0,form:["S5","SB"],out:["SS2","SS4","SS8","SSC"]},{level:"SS",value:0,form:["S5","SC"],out:["SS2","SS4","SS5","SS8"]},{level:"SS",value:0,form:["S6","S6"],out:["SS4","SS8","SS9","SSA"]},{level:"SS",value:0,form:["S6","S7"],out:["SS4","SS5","SS6","SSB"]},{level:"SS",value:0,form:["S6","S8"],out:["SS2","SS8","SS9","SSB"]},{level:"SS",value:0,form:["S6","S9"],out:["SS2","SS5","SS7","SSC"]},{level:"SS",value:0,form:["S6","SA"],out:["SS2","SS4","SS9","SSC"]},{level:"SS",value:0,form:["S6","SB"],out:["SS2","SS3","SS7","SS8"]},{level:"SS",value:0,form:["S6","SC"],out:["SS3","SS5","SS9","SSB"]},{level:"SS",value:0,form:["S7","S7"],out:["SS1","SS3","SS6","SS7"]},{level:"SS",value:0,form:["S7","S8"],out:["SS1","SS2","SS6","SS7"]},{level:"SS",value:0,form:["S7","S9"],out:["SS6","SS7","SS9","SSA"]},{level:"SS",value:0,form:["S7","SA"],out:["SS1","SS3","SS7","SSB"]},{level:"SS",value:0,form:["S7","SB"],out:["SS1","SS2","SS4","SSC"]},{level:"SS",value:0,form:["S7","SC"],out:["SS2","SS7","SS9","SSC"]},{level:"SS",value:0,form:["S8","S8"],out:["SS3","SS5","SS8","SSC"]},{level:"SS",value:0,form:["S8","S9"],out:["SS2","SS7","SSB","SSA"]},{level:"SS",value:0,form:["S8","SA"],out:["SS4","SS5","SS7","SSA"]},{level:"SS",value:0,form:["S8","SB"],out:["SS5","SS6","SS9","SSA"]},{level:"SS",value:0,form:["S8","SC"],out:["SS3","SS4","SS9","SSA"]},{level:"SS",value:0,form:["S9","S9"],out:["SS1","SS4","SS8","SS9"]},{level:"SS",value:0,form:["S9","SA"],out:["SS2","SS8","SS9","SSB"]},{level:"SS",value:0,form:["S9","SB"],out:["SS3","SS5","SS8","SS9"]},{level:"SS",value:0,form:["S9","SC"],out:["SS6","SS8","SSB","SSA"]},{level:"SS",value:0,form:["SA","SA"],out:["SS1","SS6","SS8","SSA"]},{level:"SS",value:0,form:["SA","SB"],out:["SS3","SS4","SSB","SSA"]},{level:"SS",value:0,form:["SA","SC"],out:["SS3","SS7","SSA","SSC"]},{level:"SS",value:0,form:["SB","SB"],out:["SS6","SS8","SS9","SSC"]},{level:"SS",value:0,form:["SB","SC"],out:["SS3","SS4","SS5","SS7"]},{level:"SS",value:0,form:["SC","SC"],out:["SS6","SS9","SSC","SSA"]}],ruleForm:{},data:{},dataMax:0,ruleFormConfig:[{type:"radio-button",prop:"level",label:"目标等级",default:"SS",change:()=>{for(const S in this.ruleForm)["level","showType"].includes(S)||(this.ruleForm[S]=4);this.formulaRule.forEach(S=>S.value=0),this.dataMax=0},option:[{label:"A"},{label:"S"},{label:"SS"}]},{type:"radio-button",prop:"showType",label:"图谱等级",default:"SS",change:()=>{this.computedData(this.ruleForm.level,this.ruleForm.showType,this.reSetData())},option:[{label:"A"},{label:"S"},{label:"SS"}]}],DataList:[{id:"A1",value:0,level:"A",name:"枯树精",alias:"树精"},{id:"A2",value:0,level:"A",name:"灰石人",alias:"绿石头"},{id:"A3",value:0,level:"A",name:"黑曜",alias:"黑石头"},{id:"A4",value:0,level:"A",name:"达兹",alias:"幽灵"},{id:"A5",value:0,level:"A",name:"门番",alias:"狼狗"},{id:"A6",value:0,level:"A",name:"菲尼克斯",alias:"火鸟"},{id:"S1",value:0,level:"S",name:"熔岩恶魔",alias:"大嘴"},{id:"S2",value:0,level:"S",name:"双刃蜥蜴",alias:"双刀"},{id:"S3",value:0,level:"S",name:"宝箱战士",alias:"宝箱怪"},{id:"S4",value:0,level:"S",name:"怨恨",alias:"怨恨"},{id:"S5",value:0,level:"S",name:"格瑞姆",alias:"石头怪"},{id:"S6",value:0,level:"S",name:"霓石精",alias:"冰女"},{id:"S7",value:0,level:"S",name:"披甲战象",alias:"大象"},{id:"S8",value:0,level:"S",name:"石像鬼",alias:"石像鬼"},{id:"S9",value:0,level:"S",name:"森之喀戎",alias:"绿人马"},{id:"SA",value:0,level:"S",name:"霜之喀戎",alias:"冰人马"},{id:"SB",value:0,level:"S",name:"暗之喀戎",alias:"暗人马"},{id:"SC",value:0,level:"S",name:"驯鹿",alias:"牛头"},{id:"SS1",value:0,level:"SS",name:"戴维船长",alias:"船长"},{id:"SS2",value:0,level:"SS",name:"巴风特",alias:"恶魔"},{id:"SS3",value:0,level:"SS",name:"卡斯帕",alias:"老鹰"},{id:"SS4",value:0,level:"SS",name:"马赫斯",alias:"狮子"},{id:"SS5",value:0,level:"SS",name:"欧文",alias:"欧文"},{id:"SS6",value:0,level:"SS",name:"处刑者",alias:"处刑"},{id:"SS7",value:0,level:"SS",name:"符石守护者",alias:"符石"},{id:"SS8",value:0,level:"SS",name:"梅尔基奥尔",alias:"梅尔"},{id:"SS9",value:0,level:"SS",name:"冥界凤凰",alias:"凤凰"},{id:"SSA",value:0,level:"SS",name:"西蒙",alias:"飞龙"},{id:"SSB",value:0,level:"SS",name:"暴雨领主",alias:"水怪"},{id:"SSC",value:0,level:"SS",name:"枯骨法师",alias:"骨法"}],DataName:{}}},computed:{...Object(u["c"])({device:"settings/device"}),formulaRuleShow(){const S=this.formulaRule.filter(S=>S.level===this.ruleForm.showType&&S.value>0);return S.sort((S,e)=>e.value-S.value)}},mounted(){this.getConfig(),this.DataList.forEach(S=>{this.DataName[S.id]=S.name})},methods:{computedData(S,e,l){console.info(S);const a=this.formulaRule.filter(e=>e.level===S);a.forEach(S=>{S.value=0,S.out.forEach(e=>{let a=l[e]-1?l[e]-1:-15;S.value+=a})});let o=a.map(S=>S.value);o=o.sort((S,e)=>e-S),this.dataMax=o[0],a.forEach(S=>{S.value<o[10]&&(S.value=0),void 0===l[S.form[0]]&&(l[S.form[0]]=0),void 0===l[S.form[1]]&&(l[S.form[1]]=0),l[S.form[0]]+=S.value,l[S.form[1]]+=S.value});let u=["A","S","SS"],v=u.indexOf(S);return v>u.indexOf(e)?this.computedData(u[v-1],e,l):l},reSetData(){return this.formulaRule.forEach(S=>S.value=0),this.dataMax=0,this.$Lodash.cloneDeep(this.ruleForm)},getConfig(){this.DataList.forEach(S=>{this.ruleFormConfig.push({type:"el-rate",prop:S.id,label:S.name,default:4,attrs:{showText:!0,max:6,texts:["一定不要","不想要","不太想要","一般","能接受","想要"],colors:["#99A9BF","#F7BA2A","#FF9900"]},show:e=>e.level===S.level,change:()=>{this.computedData(this.ruleForm.level,this.ruleForm.showType,this.reSetData())},option:[{label:-18,desc:"一定不要"},{label:0,desc:"不想要"},{label:1,desc:"不太想要"},{label:2,desc:"一般"},{label:3,desc:"能接受"},{label:4,desc:"想要"}]})})}}},t=v,r=(l("dc6b"),l("2877")),m=Object(r["a"])(t,a,o,!1,null,"0ba8f0fb",null);e["default"]=m.exports},dc6b:function(S,e,l){"use strict";l("3aa7")}}]);