(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d99","chunk-ac75"],{"/1Eu":function(e,t,s){"use strict";var i=s("GXSS");s.n(i).a},"3kMh":function(e,t,s){"use strict";var i=s("WV/u");s.n(i).a},"74kI":function(e,t,s){"use strict";var i=s("oqV7");s.n(i).a},A4N6:function(e,t,s){},BzA1:function(e,t,s){"use strict";var i=s("a/5N"),a={name:"ImportInfo",components:{},props:{list:Array},data:function(){return{}},computed:{showList:function(){return this.list.filter(function(e){return"file"!==e.formType})}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{getValueContent:function(e){if("map_address"===e.formType)return e.value?e.value.detailAddress:"";if("structure"===e.formType||"user"===e.formType||"checkbox"===e.formType){if(Object(i.a)(e.value)){var t={structure:"name",user:"realname",checkbox:""}[e.formType];return e.value.map(function(e){return t?e[t]:e}).join("，")}return""}if("single_user"===e.formType)return Object(i.c)(e.value)&&e.value.realname?e.value.realname:"";if("customer"===e.formType||"business"===e.formType||"contract"===e.formType||"contacts"===e.formType||"category"===e.formType||"statusName"===e.formType||"typeName"===e.formType){var s={customer:"customerName",business:"businessName",contract:"contractNum",contacts:"contactsName",category:"categoryName",statusName:"statusName",typeName:"typeName"}[e.formType];return Object(i.a)(e.value)?e.value.length>0?e.value[0][s]:"":e.value?e.value[s]:""}return e.value}}},n=(s("/1Eu"),s("KHd+")),l=Object(n.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"content-title"},[e._v("基本信息")]),e._v(" "),e._l(e.showList,function(t,i){return s("p",{key:i,staticClass:"detail-cell"},[s("span",{staticClass:"detail-cell__label"},[e._v("\n      "+e._s(t.name)+"\n    ")]),s("br"),e._v(" "),s("span",{staticClass:"detail-cell__value"},[e._v("\n      "+e._s(e.getValueContent(t))+"\n    ")])])})],2)},[],!1,null,"93b29b9c",null);l.options.__file="ImportInfo.vue";t.a=l.exports},C3Po:function(e,t,s){"use strict";var i=s("QbLZ"),a=s.n(i),n=s("8GhS"),l=s("zsVz"),o={name:"TaskQuickAdd",components:{XhUserCell:n.p},props:{params:Object},data:function(){return{sendLoading:!1,isUnfold:!1,sendContent:"",sendStopTime:"",mainUser:[]}},computed:{createMainUser:function(){return this.mainUser&&this.mainUser.length?this.mainUser[0]:null}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{inputFocus:function(){var e=this;this.$emit("focus"),this.isUnfold=!0,this.$nextTick(function(){e.$refs.input.focus()})},selectMainUser:function(e){this.mainUser=e.value},send:function(){var e=this;if(this.sendContent.length){this.sendLoading=!0;var t={name:this.sendContent,stopTime:this.sendStopTime,mainUserId:this.createMainUser?this.createMainUser.userId:""};this.params&&(t=a()({},t,this.params)),Object(l.e)(t).then(function(t){e.sendLoading=!1,e.$message.success("新建成功"),e.resetSendData(),e.$emit("send")}).catch(function(){e.sendLoading=!1})}else this.$message.error("请填写任务标题")},resetSendData:function(){this.sendContent="",this.sendStopTime="",this.mainUser=[],this.isUnfold=!1},addClose:function(){this.isUnfold=!1}}},c=(s("3kMh"),s("KHd+")),r=Object(c.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}],staticClass:"task-quick-add",class:["add",{unfold:e.isUnfold,"is-close":!e.isUnfold}]},[e.isUnfold?s("i",{staticClass:"wk wk-close",on:{click:e.addClose}}):e._e(),e._v(" "),s("el-input",{ref:"input",staticClass:"input",attrs:{maxlength:100,"prefix-icon":e.isUnfold?"":"el-icon-plus",placeholder:"添加任务"},on:{focus:e.inputFocus},model:{value:e.sendContent,callback:function(t){e.sendContent=t},expression:"sendContent"}}),e._v(" "),s("flexbox",{staticClass:"add-info"},[s("el-date-picker",{ref:"endTime",class:{"no-time-top":!e.sendStopTime},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:""},model:{value:e.sendStopTime,callback:function(t){e.sendStopTime=t},expression:"sendStopTime"}}),e._v(" "),s("xh-user-cell",{attrs:{value:e.mainUser,radio:"",placement:"top"},on:{"value-change":e.selectMainUser}},[s("div",{staticClass:"select-user",attrs:{slot:"reference"},slot:"reference"},[e.createMainUser?s("xr-avatar",{attrs:{name:e.createMainUser.realname,size:24,src:e.createMainUser.img}}):s("i",{staticClass:"wk wk-persons add-info--person"})],1)])],1),e._v(" "),s("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.send,expression:"send"}],staticClass:"send-btn",attrs:{icon:"wk wk-top",type:"primary"}},[e._v("发布")])],1)},[],!1,null,"3fb6eee8",null);r.options.__file="TaskQuickAdd.vue";t.a=r.exports},"G+lJ":function(e,t,s){"use strict";var i=s("tuyL");s.n(i).a},GXSS:function(e,t,s){},ItBn:function(e,t,s){},"Jqh+":function(e,t,s){"use strict";var i=s("sV0V");s.n(i).a},RXH0:function(e,t,s){"use strict";var i=s("ItBn");s.n(i).a},STDM:function(e,t,s){},Sv8J:function(e,t,s){"use strict";var i=s("koqc");s.n(i).a},Vm8M:function(e,t,s){"use strict";var i=s("7Qib"),a={name:"MapView",components:{},props:{title:{type:String,default:""},lat:{type:[String,Number],default:0},lng:{type:[String,Number],default:0}},data:function(){return{}},computed:{},mounted:function(){var e=this;this.$el.style.zIndex=Object(i.q)(),document.body.appendChild(this.$el),Object(i.l)().then(function(){var t=new BMap.Map("choicemap",{enableMapClick:!1}),s=new BMap.Point(parseFloat(e.lng),parseFloat(e.lat));t.centerAndZoom(s,18),t.enableScrollWheelZoom();var i=new BMap.Marker(s);t.addOverlay(i);var a=new BMap.InfoWindow(e.title);i.addEventListener("click",function(){t.openInfoWindow(a,s)})})},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},methods:{hiddenView:function(){this.$emit("hidden")}}},n=(s("Sv8J"),s("KHd+")),l=Object(n.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map-view"},[t("div",{attrs:{id:"choicemap"}}),this._v(" "),t("i",{staticClass:"el-icon-close map-close",on:{click:this.hiddenView}})])},[],!1,null,"69088704",null);l.options.__file="MapView.vue";t.a=l.exports},"WV/u":function(e,t,s){},ZX9L:function(e,t,s){"use strict";var i={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var s=this.options[t];if(s.value==e)return s}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},a=(s("G+lJ"),s("KHd+")),n=Object(a.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[s("div",{staticClass:"type-popper"},[s("div",{staticClass:"type-content"},[e._l(e.options,function(t,i){return s("div",{key:i,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(s){e.typeSelectClick(t)}}},[s("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),s("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[s("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?s("div",{staticClass:"type-content-custom"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),s("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),s("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[s("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"9dc9cb18",null);n.options.__file="index.vue";t.a=n.exports},eOwn:function(e,t,s){"use strict";var i=s("QbLZ"),a=s.n(i),n=s("7Dod"),l=s("6iAj"),o=s("4XAY"),c=s("KTTK"),r=s("mkuN"),d=s("zMq1"),u=s("ye9D"),h=s("NYF1"),p=s("YIeP"),m=s("7Qib");var f={methods:{dispatch:function(e,t,s){for(var i=this.$parent||this.$root,a=i.$options.componentName;i&&(!a||a!==e);)(i=i.$parent)&&(a=i.$options.componentName);i&&i.$emit.apply(i,[t].concat(s))},broadcast:function(e,t,s){(function e(t,s,i){this.$children.forEach(function(a){a.$options.componentName===t?a.$emit.apply(a,[s].concat(i)):e.apply(a,[t,s].concat([i]))})}).call(this,e,t,s)}}},v={name:"LogAdd",components:{CrmRelative:r.a,AddImageList:d.a,AddFileList:u.a,AddRelateList:h.a,CommonWords:p.a},mixins:[f],props:{showBusiness:{type:Boolean,default:!1},showContacts:{type:Boolean,default:!1},contacts:Array,contactsId:[String,Number],followTypes:Array,id:[String,Number],crmType:{type:String,default:""}},data:function(){return{isUnfold:!1,content:"",imgFiles:[],businessAction:{},files:[],showBusinessPopover:!1,business:[],selectContactsId:"",followType:"",nextTime:"",showRelativeType:"",batchId:Object(m.r)()}},computed:{autosize:function(){return this.isUnfold?{minRows:3,maxRows:6}:{minRows:1,maxRows:1}}},watch:{followTypes:function(){this.getDefalutFollowType()},content:function(e){var t=!!(e&&e.length>0);this.dispatch("SlideView","setEditClose",[t])},contactsId:function(){this.selectContactsId=this.contactsId||""},id:{handler:function(){this.businessAction={type:"condition",data:{moduleType:this.crmType,customerId:this.id}}},immediate:!0}},created:function(){this.selectContactsId=this.contactsId||"",this.getDefalutFollowType()},beforeDestroy:function(){},methods:{getDefalutFollowType:function(){this.followTypes&&this.followTypes.length>0?this.followType=this.followTypes[0].value:this.followType=""},resetInfo:function(){this.nextTime="",this.isUnfold=!1,this.content="",this.dispatch("SlideView","setEditClose",[!1]),this.imgFiles=[],this.files=[],this.business=[],this.selectContactsId=this.contactsId||"",this.showRelativeType="",this.batchId=Object(m.r)(),this.getDefalutFollowType()},commonWordsSelect:function(e){var t=this;this.content?this.$confirm("您选中的常用语将覆盖当前填写内容?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",customClass:"is-particulars"}).then(function(){t.content=e}).catch(function(){}):this.content=e},checkRelativeInfos:function(e){"business"==this.showRelativeType&&(this.business=e.data)},barClick:function(e){this.showRelativeType=e,"business"==e?this.showBusinessPopover=!0:"file"==e?this.$refs.fileInput.click():"img"==e&&this.$refs.imgInput.click()},uploadFile:function(e){var t=e.target.files;if(t.length){for(var s=0;s<t.length;s++){if(-1==t[s].type.indexOf("image")&&"img"==this.showRelativeType)return void this.$message.error("请上传正确的文件类型")}for(var i="image/*"==e.target.accept?"img":"file",a=0;a<t.length;a++){var n=t[a];this.uploadFileRequest(n,i)}e.target.value=""}},uploadFileRequest:function(e,t,s){var i=this;this.$wkUploadFile.upload({file:e,params:{type:t,batchId:this.batchId}}).then(function(a){var n=a.res.data||{};n.size=Object(m.h)(e.size),"img"==t?i.imgFiles.push(n):(n.icon=Object(m.o)(e),i.files.push(n)),s&&s()}).catch(function(){})},deleteImage:function(e,t){this.deleteImgOrFile("image",e,t)},deleteFile:function(e,t){this.deleteImgOrFile("file",e,t)},deleteImgOrFile:function(e,t,s){var i=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.c)({id:t.fileId}).then(function(t){"image"==e?i.imgFiles.splice(s,1):i.files.splice(s,1),i.$message.success("操作成功")}).catch(function(){})}).catch(function(){})},deleteAllFile:function(e){var t=this;this.batchId&&this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.e)({batchId:t.batchId,type:e}).then(function(s){2==e?t.imgFiles=[]:t.files=[],t.$message.success("操作成功")}).catch(function(){})}).catch(function(){})},deleteRelate:function(e,t){this.business.splice(t,1)},inputFocus:function(){var e=this;this.isUnfold=!0,this.$nextTick(function(){e.$refs.textarea.focus(),e.$emit("focus")})},sendClick:function(){this.$emit("send",{id:this.id,content:this.content,files:this.files,images:this.imgFiles,business:this.business,contactsId:this.selectContactsId,batchId:this.batchId,followType:this.followType,nextTime:this.nextTime})},close:function(){this.isUnfold=!1,this.$emit("close")}}},y=(s("RXH0"),s("KHd+")),b=Object(y.a)(v,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["mix-content",{unfold:!e.isUnfold}]},[e.isUnfold?s("i",{staticClass:"wk wk-close",on:{click:e.close}}):e._e(),e._v(" "),e.isUnfold?s("div",{staticClass:"mix-content-select"},[e.showContacts?s("el-select",{attrs:{clearable:"",placeholder:"选择联系人"},model:{value:e.selectContactsId,callback:function(t){e.selectContactsId=t},expression:"selectContactsId"}},e._l(e.contacts,function(e){return s("el-option",{key:e.contactsId,attrs:{label:e.name,value:e.contactsId}})})):e._e(),e._v(" "),s("el-select",{attrs:{clearable:"",placeholder:"选择跟进方式"},model:{value:e.followType,callback:function(t){e.followType=t},expression:"followType"}},e._l(e.followTypes,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),s("el-date-picker",{attrs:{editable:!1,type:"datetime",placeholder:"选择下次联系时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.nextTime,callback:function(t){e.nextTime=t},expression:"nextTime"}}),e._v(" "),s("common-words",{on:{select:e.commonWordsSelect}})],1):e._e(),e._v(" "),s("div",{class:["i-cont",{unfold:!e.isUnfold}]},[e.isUnfold?e._e():s("i",{staticClass:"wk wk-write"}),e._v(" "),s("el-input",{ref:"textarea",attrs:{autosize:e.autosize,maxlength:800,type:"textarea",clearable:"",resize:"none",placeholder:"请输入内容"},on:{focus:e.inputFocus},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),e.imgFiles.length>0&&e.isUnfold?s("add-image-list",{attrs:{data:e.imgFiles},on:{delete:e.deleteImage,"delete-all":function(t){e.deleteAllFile(2)},upload:e.uploadFile}}):e._e(),e._v(" "),e.files.length>0&&e.isUnfold?s("add-file-list",{attrs:{data:e.files},on:{delete:e.deleteFile,"delete-all":function(t){e.deleteAllFile(1)}}}):e._e(),e._v(" "),e.business.length>0&&e.isUnfold?s("add-relate-list",{attrs:{data:e.business,type:"business"},on:{delete:e.deleteRelate}}):e._e(),e._v(" "),e.isUnfold?s("div",{staticClass:"bar-cont"},[s("el-button",{staticClass:"handle-button",attrs:{type:"text",icon:"wk wk-picture"},on:{click:function(t){e.barClick("img")}}},[e._v("图片")]),e._v(" "),s("el-button",{staticClass:"handle-button",attrs:{type:"text",icon:"wk wk-file"},on:{click:function(t){e.barClick("file")}}},[e._v("附件")]),e._v(" "),e.showBusiness?s("el-popover",{attrs:{placement:"bottom",width:"700","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showBusinessPopover,callback:function(t){e.showBusinessPopover=t},expression:"showBusinessPopover"}},[s("crm-relative",{ref:"crmrelative",attrs:{show:e.showBusinessPopover,radio:!1,action:e.businessAction,"selected-data":{business:e.business},"crm-type":"business"},on:{close:function(t){e.showBusinessPopover=!1},changeCheckout:e.checkRelativeInfos}}),e._v(" "),s("el-button",{staticClass:"handle-button",staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"text",icon:"wk wk-associate"},on:{click:function(t){e.barClick("business")}},slot:"reference"},[e._v("关联商机")])],1):e._e(),e._v(" "),s("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.sendClick,expression:"sendClick"}],staticClass:"send-btn",attrs:{type:"primary"}},[e._v("发布")])],1):e._e(),e._v(" "),s("input",{ref:"fileInput",staticClass:"file-input",attrs:{accept:"*.*",type:"file",multiple:""},on:{change:e.uploadFile}}),e._v(" "),s("input",{ref:"imgInput",staticClass:"file-input",attrs:{accept:"image/*",type:"file",multiple:""},on:{change:e.uploadFile}})],1)},[],!1,null,"5ea91ca5",null);b.options.__file="LogAdd.vue";var g=b.exports,_=s("O8VQ"),C=s("/G0b"),T=s("8OTK"),w=s("C3Po"),k=s("ZoMv"),x=s("Z+Ht"),I=s("vvxI"),D=s("ZX9L"),S=s("FdMb"),L=s("L2JU"),$={name:"Activity",components:{LogAdd:g,LogCell:_.a,CRMAllCreate:T.default,TaskQuickAdd:w.a,TimeTypeSelect:D.a,LogEditDialog:C.a,CRMFullScreenDetail:function(){return Promise.all([s.e("chunk-d929"),s.e("chunk-494f"),s.e("chunk-331e"),s.e("chunk-29c99")]).then(s.bind(null,"3z7q"))}},mixins:[x.a,I.a],props:{handle:{type:Array,default:function(){return[]}},id:[String,Number],contactsId:[String,Number],crmType:{type:String,default:""},isSeas:{type:Boolean,default:!1},typeList:{type:Array,default:function(){return[]}},detail:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,filterValue:{},timeOptions:[{label:"全部",value:""},{label:"最近7天",value:"7"},{label:"最近30天",value:"30"},{label:"最近60天",value:"60"}],contacts:[],followTypes:[],handleType:"",activityType:{icon:"all",color:"#2362FB",command:"",label:"全部活动"},list:[],noMore:!1,page:1,isCRMCreate:!1,createActionInfo:{type:"relative",crmType:this.crmType,data:{}},createCRMType:"",isTaskCreate:!1,showFullDetail:!1,relationID:"",relationCrmType:"",scrollKey:Date.now(),logEditData:null,logEditPosition:{seciton:0,index:0},logEditDialogVisible:!1}},computed:a()({},Object(L.b)(["crm"]),{canCreateFollowRecord:function(){return this.crm&&this.crm.followRecord&&this.crm.followRecord.save},showRelate:function(){return"customer"==this.crmType},scrollDisabled:function(){return this.loading||this.noMore},taskParams:function(){var e={};return e[this.crmType+"Ids"]=this.id,e}}),watch:{id:function(){this.initInfo(),this.refreshLogList()}},created:function(){this.debouncedRefreshLogList=Object(S.a)(300,this.refreshLogList),this.initInfo()},methods:{getLogTypeList:function(){var e=this;Object(l.q)().then(function(t){e.followTypes=t.data.map(function(e){return{value:e,label:e}})}).catch(function(){})},getContactsList:function(){var e=this;Object(n.H)({customerId:this.id}).then(function(t){e.contacts=t.data.list}).catch(function(){})},sendLog:function(e){var t=this;if(e.content){var s={};s.activityType=k.a[this.crmType],s.activityTypeId=e.id,s.content=e.content,s.category=e.followType;var i=e.business.map(function(e){return e.businessId});s.batchId=e.batchId,s.businessIds=i.join(","),s.contactsIds=e.contactsId,s.nextTime=e.nextTime||"",s.isEvent=0,this.sendLoading=!0,Object(o.a)(s).then(function(e){t.sendLoading=!1,t.$message.success("发布成功"),t.$refs.logAdd&&t.$refs.logAdd.resetInfo(),t.refreshLogList()}).catch(function(){t.sendLoading=!1})}else this.$message.error("请输入跟进内容")},handleClick:function(e){var t=this;if(this.handleType==e?this.handleType="":this.handleType=e,"log"==e)this.isTaskCreate=!1,this.$nextTick(function(){t.$refs.logAdd&&(t.$refs.logAdd.isUnfold=t.handleType==e)});else if("task"==e)this.isTaskCreate=!0,this.$nextTick(function(){t.$refs.taskAdd.inputFocus()});else{this.isTaskCreate=!1;var s={type:"relative",crmType:this.crmType,data:{}};"contacts"==this.crmType?(s.data.customer=Object(m.s)(this.detail),"business"==e&&(s.relativeData={contactsId:this.detail.contactsId})):"customer"==this.crmType?s.data.customer=Object(m.s)(this.detail):"business"==this.crmType?(s.data.customer=Object(m.s)(this.detail),s.data.business=Object(m.s)(this.detail),"contacts"==e&&(s.relativeData={businessId:this.detail.businessId})):"contract"==this.crmType&&(s.data.customer=Object(m.s)(this.detail),s.data.contract=Object(m.s)(this.detail)),this.createActionInfo=s,this.createCRMType=e,this.isCRMCreate=!0}},initInfo:function(){var e=this;this.$nextTick(function(){e.$refs.logAdd&&e.$refs.logAdd.resetInfo(),e.$refs.taskAdd&&e.$refs.taskAdd.resetSendData()}),this.filterValue={search:"",timeLine:{label:"全部",value:""}},this.getLogTypeList(),this.showRelate&&this.getContactsList()},refreshLogList:function(){this.page=1,this.noMore=!1,this.list=[],this.scrollKey=Date.now()},handleSelectClick:function(e){this.activityType=e,this.refreshLogList()},timeTypeChange:function(e){this.filterValue.timeLine=e,this.refreshLogList()},getLogList:function(){var e=this;this.loading=!0;var t={page:this.page,crmType:k.a[this.crmType],activityType:this.activityType.command,activityTypeId:this.id};this.filterValue.search&&(t.search=this.filterValue.search),this.filterValue.timeLine.type&&("custom"===this.filterValue.timeLine.type?(t.startDate=this.filterValue.timeLine.startTime.replace(/\./g,"-"),t.endDate=this.filterValue.timeLine.endTime.replace(/\./g,"-")):t.intervalDay=this.filterValue.timeLine.value||""),Object(o.c)(t).then(function(t){if(e.loading=!1,!e.noMore)if(e.page++,e.list.length){var s=e.list[e.list.length-1];t.data.time&&t.data.list.length&&s.time!=t.data.time&&e.list.push(t.data)}else t.data.time&&t.data.list.length&&e.list.push(t.data);e.noMore=t.data.lastPage}).catch(function(){e.noMore=!0,e.loading=!1})},createCRMSuccess:function(){this.handleType="",this.refreshLogList()},createCRMClose:function(){this.isCRMCreate=!1,this.handleType=""},checkCRMDetail:function(e,t){this.relationID=t,this.relationCrmType=e,this.showFullDetail=!0},getActivityIcon:function(e){return this.getXrIcon(this.getActivityType(e))},getActivityTypeColor:function(e){return this.getXrIconColor(this.getActivityType(e))},logCellDelete:function(e,t,s){this.list[s].list.splice(t,1),0==this.list[s].list.length&&this.list.splice(s,1),this.scrollKey=Date.now()},logCellEdit:function(e,t,s){this.logEditData=e,this.logEditPosition={seciton:s,index:t},this.logEditDialogVisible=!0},logEditSave:function(e){this.logEditPosition.seciton>=0&&this.logEditPosition.index>=0&&this.list[this.logEditPosition.seciton].list.splice(this.logEditPosition.index,1,e)}}},M=(s("Jqh+"),Object(y.a)($,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getLogList,expression:"getLogList"}],key:e.scrollKey,staticClass:"main",attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},[s("div",[!e.isSeas&&e.handle&&e.handle.length?s("div",{staticClass:"main-handle"},e._l(e.handle,function(t,i){return s("el-button",{key:i,class:{"is-select":e.handleType===t.type},attrs:{type:"primary",icon:"wk wk-add"},on:{click:function(s){e.handleClick(t.type)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})):e._e(),e._v(" "),!e.isSeas&&e.handle&&e.handle.length?[!e.isTaskCreate&&e.canCreateFollowRecord?s("log-add",{ref:"logAdd",staticClass:"log-add",attrs:{id:e.id,"show-business":e.showRelate,"show-contacts":e.showRelate,contacts:e.contacts,"contacts-id":e.contactsId,"follow-types":e.followTypes,"crm-type":e.crmType},on:{send:e.sendLog,focus:function(t){e.handleType="log"},close:function(t){e.handleClick(e.handleType)}}}):s("task-quick-add",{ref:"taskAdd",staticClass:"task-quick-add",attrs:{params:e.taskParams},on:{focus:function(t){e.handleType="task"},send:e.refreshLogList}})]:e._e(),e._v(" "),s("div",{staticClass:"log",class:{"is-top":e.handle&&0==e.handle.length}},[s("flexbox",{staticClass:"log__header",attrs:{justify:"flex-end"}},[s("el-input",{attrs:{placeholder:"关键字搜索","prefix-icon":"el-icon-search"},on:{input:e.debouncedRefreshLogList},model:{value:e.filterValue.search,callback:function(t){e.$set(e.filterValue,"search",t)},expression:"filterValue.search"}}),e._v(" "),s("time-type-select",{attrs:{width:190,options:e.timeOptions,"default-type":e.filterValue.timeLine},on:{change:e.timeTypeChange}}),e._v(" "),e.typeList.length>1?s("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleSelectClick}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{class:["wk","dropdown-icon","wk-"+e.activityType.icon],style:{backgroundColor:e.activityType.color}}),e._v(e._s(e.activityType.label)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.typeList,function(t,i){return s("el-dropdown-item",{key:i,attrs:{command:t}},[s("i",{class:["wk","dropdown-icon","wk-"+t.icon],style:{backgroundColor:t.color}}),e._v(e._s(t.label))])}))],1):e._e()],1),e._v(" "),e._l(e.list,function(t,i){return s("div",{key:i,staticClass:"log-section"},[s("div",{staticClass:"log-section__title"},[s("span",{staticClass:"section-title"},[s("span",{staticClass:"section-title__time"},[e._v(e._s(t.time))])])]),e._v(" "),e._l(t.list,function(a,n){return[1==a.type?s("div",{key:n,staticClass:"log-cell",class:{"only-one":1==t.list.length}},[s("log-cell",{attrs:{item:a,section:i,index:n,"can-delete":!e.isSeas},on:{"crm-detail":e.checkCRMDetail,delete:e.logCellDelete,edit:e.logCellEdit}}),e._v(" "),s("i",{staticClass:"wk wk-message log-cell__mark"})],1):s("div",{key:n,staticClass:"log-cell activity-cell",class:{"only-one":1==t.list.length}},[2==a.type?s("div",{staticClass:"activity-cell"},[s("span",{staticClass:"activity-cell__label"},[e._v(e._s(a.createTime)+" "+e._s(a.realname)+"创建了"+e._s(e.getActivityTypeName(a.activityType))+"：")]),s("span",{staticClass:"activity-cell__content",on:{click:function(t){e.checkCRMDetail(e.getActivityType(a.activityType),a.activityTypeId)}}},[e._v(e._s(a.activityTypeName||"查看详情"))])]):3==a.type?s("div",{staticClass:"activity-cell"},[s("span",{staticClass:"activity-cell__label"},[e._v(e._s(a.createTime)+" "+e._s(a.realname)+"将商机：")]),e._v(" "),s("span",{staticClass:"activity-cell__content",on:{click:function(t){e.checkCRMDetail("business",a.activityTypeId)}}},[e._v(e._s(a.activityTypeName))]),e._v(" "),s("span",[e._v(e._s(" 阶段变为 "+a.content))])]):4==a.type?s("log-cell",{attrs:{item:a,section:i,index:n,"can-delete":""},on:{"crm-detail":e.checkCRMDetail,delete:e.logCellDelete}}):e._e(),e._v(" "),s("i",{staticClass:"log-cell__mark",class:e.getActivityIcon(a.activityType),staticStyle:{"background-color":"#FB9323"},style:{backgroundColor:e.getActivityTypeColor(a.activityType)}})],1)]})],2)}),e._v(" "),e.loading?s("p",{staticClass:"scroll-bottom-tips"},[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?s("p",{staticClass:"scroll-bottom-tips"},[e._v("没有更多了")]):e._e()],2)],2),e._v(" "),e.isCRMCreate?s("c-r-m-all-create",{attrs:{"crm-type":e.createCRMType,action:e.createActionInfo},on:{"save-success":e.createCRMSuccess,close:e.createCRMClose}}):e._e(),e._v(" "),s("c-r-m-full-screen-detail",{attrs:{visible:e.showFullDetail,"crm-type":e.relationCrmType,id:e.relationID},on:{"update:visible":function(t){e.showFullDetail=t}}}),e._v(" "),s("log-edit-dialog",{attrs:{visible:e.logEditDialogVisible,data:e.logEditData},on:{"update:visible":function(t){e.logEditDialogVisible=t},save:e.logEditSave}})],1)},[],!1,null,"e2d5d0ee",null));M.options.__file="index.vue";t.a=M.exports},"ej9+":function(e,t,s){"use strict";var i={name:"BaseTabsHead",components:{},props:{selectValue:[String,Number],tabs:Array},data:function(){return{currentValue:""}},computed:{},watch:{selectValue:function(){this.currentValue=this.selectValue}},mounted:function(){this.currentValue=this.selectValue},beforeDestroy:function(){},methods:{handleTabsClick:function(e,t){this.$emit("update:selectValue",e.name),this.$emit("change",e.name)}}},a=(s("jGgZ"),s("KHd+")),n=Object(a.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("flexbox",{staticClass:"base-tabs-head",attrs:{justify:"space-between"}},[s("div",[e._t("left")],2),e._v(" "),s("el-tabs",{on:{"tab-click":e.handleTabsClick},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.tabs,function(e,t){return s("el-tab-pane",{key:t+e.name,attrs:{label:e.label,name:e.name}})})),e._v(" "),s("div",[e._t("right")],2)],1)},[],!1,null,"52d082d3",null);n.options.__file="index.vue";t.a=n.exports},jGgZ:function(e,t,s){"use strict";var i=s("A4N6");s.n(i).a},koqc:function(e,t,s){},oqV7:function(e,t,s){},pshG:function(e,t,s){"use strict";var i=s("STDM");s.n(i).a},sV0V:function(e,t,s){},tuyL:function(e,t,s){},"u+/2":function(e,t,s){"use strict";s.r(t);var i=s("4XAY"),a=s("ej9+"),n={name:"CrmCell",components:{},mixins:[s("dAOq").a],props:{crmType:String,data:Object,section:Number,index:Number},data:function(){return{}},computed:{iconObj:function(){return{icon:this.crmType,color:{contract:"#FD5B4A",receivables:"#FFB940",invoice:"#1cbaf5"}[this.crmType]||"blue"}},relateData:function(){return"contract"==this.crmType?{type:"customer",typeName:"客户",id:this.data.catagoryCiteId,name:this.data.catagoryCiteName}:"receivables"==this.crmType?{type:"contract",typeName:"合同",id:this.data.catagoryCiteId,name:this.data.catagoryCiteName}:null},moreTypes:function(){var e=[];return this.data.permission&&this.data.permission.isRecheck&&e.push({type:"withdraw",name:"撤销",icon:"reset"}),e},canCheck:function(){return this.data.permission&&this.data.permission.isCheck}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{handleClick:function(e){this.$emit("handle",e,this.data,this.index,this.section)},checkRelationDetail:function(){this.$emit("handle","relate-detail",this.relateData,this.index,this.section)},handleTypeDrop:function(e){this.$emit("handle",e,this.data,this.index,this.section)}}},l=(s("74kI"),s("KHd+")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section"},[s("div",{staticClass:"examine-cell"},[s("flexbox",{staticClass:"person"},[e.data.createUser?s("xr-avatar",{staticClass:"person__hd",attrs:{name:e.data.createUser.realname,id:e.data.createUser.userId,size:40,src:e.data.createUser.img,disabled:!1}}):e._e(),e._v(" "),s("div",{staticClass:"person__bd"},[s("div",{staticClass:"person__bd-name"},[e._v(e._s(e.data.createUser.realname))]),e._v(" "),s("div",{staticClass:"person__bd-des"},[e._v(e._s("创建审批于 "+e.data.createTime))])]),e._v(" "),s("div",{staticClass:"rt-setting"},[s("span",{staticClass:"dep"},[s("span",[e._v(e._s(e.getStatusName(e.data.examineStatus)))])]),e._v(" "),s("span",{staticClass:"bg-color",style:{"background-color":e.getStatusColor(e.data.examineStatus)}})])],1),e._v(" "),s("div",{staticClass:"examine-cell__bd"},[e.data.content?s("p",{staticClass:"examine-cell__bd--content"},[e._v(e._s(e.data.content))]):e._e(),e._v(" "),s("flexbox",{staticClass:"examine-content"},[s("i",{class:["wk","examine-content__hd","wk-"+e.iconObj.icon],style:{backgroundColor:e.iconObj.color}}),e._v(" "),s("div",{staticClass:"examine-content__bd"},[s("div",[s("a",{on:{click:function(t){e.handleClick("detail")}}},[e._v(e._s(e.data.catagory))])]),e._v(" "),e.data.causeTitle?s("div",{staticClass:"examine-content__bd--des"},[e._v(e._s(e.data.causeTitle))]):e._e()])]),e._v(" "),s("div",{staticClass:"examine-stage"},[s("i",{class:e.getStatusIcon(e.data.examineStatus),style:{color:e.getStatusColor(e.data.examineStatus)}}),s("span",[e._v(e._s(""+(e.data.examineName||"")+e.getStatusName(e.data.examineStatus)))])]),e._v(" "),e.relateData&&e.relateData.id?s("div",{staticClass:"examine-relate"},[s("div",{staticClass:"examine-relate__hd"},[e._v("相关信息")]),e._v(" "),s("div",{staticClass:"examine-relate__bd"},[s("flexbox",{staticClass:"relate-cell",attrs:{align:"stretch"}},[s("div",{staticClass:"relate-cell__hd"},[s("i",{staticClass:"wk wk-contacts"}),e._v(" "),s("span",[e._v(e._s("相关"+e.relateData.typeName)+"：")])]),e._v(" "),s("div",{staticClass:"relate-cell__bd"},[s("div",{staticClass:"relate-cell__bd--item text-one-line"},[s("a",{on:{click:e.checkRelationDetail}},[e._v(e._s(e.relateData.name))])])])])],1)]):e._e()],1)],1),e._v(" "),s("div",{staticClass:"section__ft"},[e.canCheck?s("el-button",{staticClass:"xr-btn--red handle-button",attrs:{icon:"wk wk-close",type:"primary"},on:{click:function(t){e.handleClick("reject")}}},[e._v("驳回")]):e._e(),e._v(" "),e.canCheck?s("el-button",{staticClass:"xr-btn--green handle-button",attrs:{icon:"wk wk-success",type:"primary"},nativeOn:{click:function(t){e.handleClick("pass")}}},[e._v("通过")]):e._e(),e._v(" "),e.moreTypes.length>0?s("el-dropdown",{staticStyle:{float:"right"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[s("el-button",{staticClass:"handle-button",attrs:{icon:"el-icon-more"}}),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreTypes,function(t,i){return s("el-dropdown-item",{key:i,attrs:{icon:e._f("wkIconPre")(t.icon),command:t.type}},[e._v(e._s(t.name))])}))],1):e._e()],1)])},[],!1,null,"420bcf88",null);o.options.__file="CrmCell.vue";var c=o.exports,r=s("yPq4"),d=s("QhmF"),u={name:"Index",components:{BaseTabsHead:a.a,CrmCell:c,CRMAllDetail:r.a,ExamineHandle:d.a},mixins:[],props:{},data:function(){return{crmType:"",tabsSelectValue:"1",tabs:[{label:"全部",name:"all"},{label:"待我审批的",name:"1"},{label:"我已审批的",name:"2"}],list:[],loading:!1,noMore:!1,scrollKey:Date.now(),page:1,detailIndex:0,rowID:"",rowData:{},detailCrmType:"",showCrmDetail:!1,showExamineHandle:!1,recordId:"",examineStatus:1}},computed:{scrollDisabled:function(){return this.loading||this.noMore}},watch:{},mounted:function(){this.crmType=this.$route.params.type},beforeRouteUpdate:function(e,t,s){this.crmType=e.params.type,this.tabsSelectValue="1",this.refreshList(),s()},beforeDestroy:function(){},methods:{refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var e=this;this.loading=!0;var t={page:this.page,limit:15,status:"all"==this.tabsSelectValue?"":this.tabsSelectValue};"contract"==this.crmType?t.categoryType=1:"receivables"==this.crmType?t.categoryType=2:"invoice"==this.crmType&&(t.categoryType=3),Object(i.g)(t).then(function(s){e.loading=!1;var i="all"==e.tabsSelectValue?"":e.tabsSelectValue;t.status==i?(e.noMore||(e.list=e.list.concat(s.data.list),e.page++),e.noMore=s.data.lastPage):e.refreshList()}).catch(function(){e.noMore=!0,e.loading=!1})},tabsChange:function(e){this.refreshList()},cellHandle:function(e,t,s){this.detailIndex=s,"detail"==e?(this.detailCrmType=this.crmType,this.rowID=t.catagoryId,this.showCrmDetail=!0):"relate-detail"==e?(this.showDview=!1,this.rowID=t.id,this.detailCrmType=t.type,this.showCrmDetail=!0):"reject"!=e&&"pass"!=e&&"withdraw"!=e||(this.rowID=t.catagoryId,this.examineStatus={pass:1,reject:2,withdraw:4}[e],this.rowData=t,this.showExamineHandle=!0)},examineHandleCallBack:function(e){this.refreshDataByHandle()},refreshDataByHandle:function(){this.refreshList()},detailHandleCallBack:function(e,t){this.detailIndex=t,this.refreshDataByHandle()}}},h=(s("pshG"),Object(l.a)(u,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("base-tabs-head",{attrs:{tabs:e.tabs,"select-value":e.tabsSelectValue},on:{"update:selectValue":function(t){e.tabsSelectValue=t},change:e.tabsChange}}),e._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getList,expression:"getList"}],key:""+e.scrollKey+e.tabsSelectValue,staticClass:"cell-section",attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},[e._l(e.list,function(t,i){return s("crm-cell",{key:i,attrs:{"crm-type":e.crmType,data:t,index:i},on:{handle:e.cellHandle}})}),e._v(" "),e.loading?s("p",{staticClass:"scroll-bottom-tips"},[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?s("p",{staticClass:"scroll-bottom-tips"},[e._v("没有更多了")]):e._e()],2),e._v(" "),s("c-r-m-all-detail",{attrs:{visible:e.showCrmDetail,"crm-type":e.detailCrmType,id:e.rowID,"no-listener-class":["relate-cell","examine-content"]},on:{"update:visible":function(t){e.showCrmDetail=t}}}),e._v(" "),s("examine-handle",{attrs:{show:e.showExamineHandle,id:e.rowID,"record-id":e.rowData.examineRecordId,detail:e.rowData,status:e.examineStatus,"examine-type":"crm_"+e.crmType},on:{close:function(t){e.showExamineHandle=!1},save:e.examineHandleCallBack}})],1)},[],!1,null,"34a67a2b",null));h.options.__file="index.vue";t.default=h.exports}}]);