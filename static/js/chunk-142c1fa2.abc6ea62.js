(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142c1fa2"],{"154f":function(e,t,a){},"16af":function(e,t,a){"use strict";a("5002")},"1792e":function(e,t,a){"use strict";a("154f")},5002:function(e,t,a){},a749:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["components"===e.$route.name?a("div",[a("div",{staticClass:"div_card"},[a("div",{staticClass:"title clearfix"},[a("div",{staticClass:"left"},[e._v(" 组件管理 "),a("a-tooltip",{attrs:{title:"组件管理的额外说明"}},[a("a-icon",{attrs:{type:"question-circle"}})],1)],1),a("div",{staticClass:"right"},[e._v(" 组件加载 "),a("a-button",{attrs:{shape:"circle",icon:"sync",size:"small"},on:{click:e.addComponet}})],1)]),a("div",{staticClass:"content"},[a("a-divider"),a("p",[e._v(" 模板是漏洞辅助验证平台的核心模块，您可以选择列表中的模板进行验证服务的构建。如果您需要新增其他模板，请按照以下的流程进行操作。 ")]),a("a-row",[a("a-col",{staticClass:"wb-m-t-10 wb-m-b-16",attrs:{span:18,offset:3}},[a("a-steps",{attrs:{size:"small"}},[a("a-step",{attrs:{title:"查看模板"}}),a("a-step",{attrs:{title:"提交模板代码",status:"process"}}),a("a-step",{attrs:{title:"官方审核完成合并代码",status:"process"}})],1)],1)],1)],1)]),a("AppPage",{ref:"child"})],1):a("router-view")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-list"},[a("a-list",{staticClass:"card-list",attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:e.dataSource},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},["new"==t.id?[a("a-button",{staticClass:"new-btn",attrs:{type:"dashed"},on:{click:e.showModal}},[a("div",{staticStyle:{"font-size":"90px"}},[e._v("+")])])]:[a("a-card",{attrs:{hoverable:!0}},[a("a-card-meta",[a("div",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.title)+" "),0===t.type?a("a-tag",{attrs:{color:"#108ee9"}},[e._v("利用组件")]):a("a-tag",{attrs:{color:"#f2ab24"}},[e._v("监听组件")])],1),a("a-avatar",{staticClass:"card-avatar",staticStyle:{backgroundcolor:"#87d068"},attrs:{slot:"avatar",icon:"fire"},slot:"avatar"}),a("div",{staticClass:"meta-content",attrs:{slot:"description"},slot:"description"},[e._v(e._s(t.desc?t.desc:"暂无介绍"))])],1),a("p",{staticClass:"Textright wb-m-b-1"},[e._v(e._s(t.author))]),a("template",{staticClass:"ant-card-actions",slot:"actions"},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return e.jump(t)}}},[e._v("使用文档")]),a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return e.editComponent(t)}}},[e._v("修改组件")]),a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return e.delete_template(t)}}},[e._v("删除组件")])])],2)]],2)}}])}),a("a-pagination",{staticClass:"Textright",attrs:{"page-size-options":e.pageSizeOptions,total:e.total,"show-size-changer":"","page-size":e.pageSize},on:{showSizeChange:e.onShowSizeChange,change:e.changePage},scopedSlots:e._u([{key:"buildOptionText",fn:function(t){return["50"!==t.value?a("span",[e._v(e._s(t.value)+"条/页")]):e._e(),"50"===t.value?a("span",[e._v("全部")]):e._e()]}}]),model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),e.visible?a("newConponets",{attrs:{visible:e.visible,titles:e.titles,content:e.content}}):e._e()],1)},o=[],n=(a("380f"),a("f64c")),l=a("0995"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{title:e.titles,visible:e.visible,maskClosable:!1,width:"700px",footer:""},on:{cancel:e.init}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",e._b({attrs:{label:"组件标题"}},"a-form-item",e.waiformItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入组件标题，例如DNS协议监听组件"}]}],expression:"[\n                        'title',\n                        { rules: [{ required: true, message: '请输入组件标题，例如DNS协议监听组件' }] },\n                    ]"}],staticStyle:{width:"80%"},attrs:{required:!0,placeholder:"请输入组件标题，例如DNS协议监听组件"}})],1),a("a-form-item",e._b({attrs:{label:"组件名称"}},"a-form-item",e.waiformItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入组件名称，例如DNS"}]}],expression:"['name', { rules: [{ required: true, message: '请输入组件名称，例如DNS' }] }]"}],staticStyle:{width:"80%"},attrs:{required:!0,placeholder:"请输入组件名称，例如DNS"}})],1),a("a-form-item",e._b({attrs:{label:"组件介绍"}},"a-form-item",e.waiformItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{rules:[{required:!0,message:"请输入组件介绍"}]}],expression:"['desc', { rules: [{ required: true, message: '请输入组件介绍' }] }]"}],staticStyle:{width:"80%"},attrs:{placeholder:"一段简短的组件介绍"}})],1),a("a-form-item",e._b({attrs:{label:"生成链接格式"}},"a-form-item",e.waiformItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["payload",{rules:[{required:!0,message:"请输入生成链接格式"}]}],expression:"['payload', { rules: [{ required: true, message: '请输入生成链接格式' }] }]"}],staticStyle:{width:"80%"},attrs:{required:!0,placeholder:"使用http协议为http://{domain}/{key}"}})],1),a("a-form-item",e._b({attrs:{label:"配置信息",required:!0}},"a-form-item",e.waiformItemLayout,!1),[e._l(e.waiArray,(function(t,i){return a("div",{key:i,staticClass:"alertContain"},[1!==e.waiArray.length?a("a-icon",{staticClass:"closeIcon",attrs:{type:"close"},on:{click:function(t){return e.cloneContainer(i)}}}):e._e(),a("a-form-item",e._b({attrs:{label:"配置名",required:!0}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["item_name-"+t,{rules:[{required:!0,message:"请输入配置名"}]}],expression:"[\n                                `item_name-${t}`,\n                                { rules: [{ required: true, message: '请输入配置名' }] },\n                            ]"}],staticStyle:{width:"80%"},attrs:{placeholder:"请输入配置名"}})],1),e._l(e.form.getFieldValue("keys")[t],(function(i,s){return a("a-form-item",e._b({key:i,attrs:{label:0===s?"参数名":"",required:!0}},"a-form-item",0===s?e.formItemLayout:e.formItemLayoutWithOutLabel,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config["+i+"-"+t+"]",{validateTrigger:["change","blur"],rules:[{required:!0,whitespace:!0,message:"请输入参数名"}]}],expression:"[\n                                `config[${k}-${t}]`,\n                                {\n                                    validateTrigger: ['change', 'blur'],\n                                    rules: [\n                                        {\n                                            required: true,\n                                            whitespace: true,\n                                            message: '请输入参数名',\n                                        },\n                                    ],\n                                },\n                            ]"}],staticStyle:{width:"80%"},attrs:{placeholder:"请输入参数名"}}),e.form.getFieldValue("keys")[t].length>1?a("a-icon",{staticClass:"dynamic-delete-button",staticStyle:{"margin-left":"5px","font-size":"20px"},attrs:{type:"minus-circle-o",disabled:1===e.form.getFieldValue("keys").length},on:{click:function(){return e.remove(t,i)}}}):e._e(),e.form.getFieldValue("keys")[t].length-1===s?a("a-icon",{staticClass:"dynamic-delete-button",staticStyle:{"margin-left":"5px","font-size":"20px"},attrs:{type:"plus-circle",disabled:1===e.form.getFieldValue("keys").length},on:{click:function(){return e.add(t)}}}):e._e()],1)}))],2)})),a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.addwai}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加配置信息 ")],1)],2),a("a-form-item",e._b({attrs:{label:"公开组件"}},"a-form-item",e.waiformItemLayout,!1),[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_private",{rules:[{required:!0,message:"请选择是否公开组件"}]}],expression:"['is_private', { rules: [{ required: true, message: '请选择是否公开组件' }] }]"}]},[a("a-radio",{attrs:{value:1}},[e._v("是")]),a("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1),a("a-form-item",e._b({attrs:{label:"配置支持多选"}},"a-form-item",e.waiformItemLayout,!1),[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["choice_type",{rules:[{required:!0,message:"请选择是否配置支持多选"}]}],expression:"[\n                        'choice_type',\n                        { rules: [{ required: true, message: '请选择是否配置支持多选' }] },\n                    ]"}]},[a("a-radio",{attrs:{value:1}},[e._v("是")]),a("a-radio",{attrs:{value:0}},[e._v("否")])],1)],1),a("a-form-item",e._b({attrs:{label:"上传插件",required:!0}},"a-form-item",e.waiformItemLayout,!1),[a("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["file_name",{valuePropName:"fileList",getValueFromEvent:e.normFile},{rules:[{required:!0,message:"请上传文件"}]}],expression:"[\n                        'file_name',\n                        {\n                            valuePropName: 'fileList',\n                            getValueFromEvent: normFile,\n                        },\n                        { rules: [{ required: true, message: '请上传文件' }] },\n                    ]"}],attrs:{name:"code",action:"/api/v1/templates/manage/upload_template/",withCredentials:!0,headers:e.headers,multiple:!1,accept:"text/x-python-script"}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 点击上传 ")],1)],1)],1),a("a-form-item",e._b({},"a-form-item",e.layoutBottomWithOutLabel,!1),[a("a-button",{staticClass:"mgLeft10",on:{click:e.init}},[e._v("取消")]),a("a-button",{staticClass:"mgLeft10",attrs:{type:"primary","html-type":"submit"}},[e._v("确定")])],1)],1)],1)],1)},m=[];let u=1,d=1;var p={name:"newComponents",props:{visible:!1,titles:"",content:""},components:{},data(){return{headers:{Authorization:"Token "+sessionStorage.getItem("token")},waiArray:[0],waiformItemLayout:{labelCol:{sm:{span:6}},wrapperCol:{sm:{span:18}}},formItemLayout:{labelCol:{sm:{span:5}},wrapperCol:{sm:{span:19}}},formItemLayoutWithOutLabel:{wrapperCol:{sm:{span:19,offset:5}}},layoutBottomWithOutLabel:{wrapperCol:{sm:{span:8,offset:16}}}}},beforeCreate(){},created(){this.form=this.$form.createForm(this,{name:"dynamic_form_item"}),this.content?this.editConfig():this.form.getFieldDecorator("keys",{initialValue:[[0]],preserve:!0})},mounted(){},methods:{editConfig(){let e=[];this.waiArray=[],u=0,d=0,this.content.template_item_info.forEach(t=>{let a=[];this.form.getFieldDecorator("item_name-"+d,{initialValue:t.item_name}),t.config.forEach(e=>{this.form.getFieldDecorator(`config[${u}-${d}]`,{initialValue:e}),a.push(u++)}),e[d]=a,this.waiArray.push(d++)}),this.form.getFieldDecorator("is_private",{initialValue:this.content.is_private,preserve:!0}),this.form.getFieldDecorator("choice_type",{initialValue:this.content.choice_type,preserve:!0}),this.form.getFieldDecorator("desc",{initialValue:this.content.desc,preserve:!0}),this.form.getFieldDecorator("payload",{initialValue:this.content.payload,preserve:!0}),this.form.getFieldDecorator("title",{initialValue:this.content.title,preserve:!0}),this.form.getFieldDecorator("name",{initialValue:this.content.name,preserve:!0}),this.form.getFieldDecorator("keys",{initialValue:e,preserve:!0})},addwai(){const{form:e}=this,t=e.getFieldValue("keys");t[d]=Array.of(u++);const a=t;e.setFieldsValue({keys:a}),this.waiArray.push(d++)},remove(e,t){const{form:a}=this,i=a.getFieldValue("keys");1!==i.length&&(i[e]=i[e].filter(e=>e!==t),a.setFieldsValue({keys:i}))},add(e){const{form:t}=this,a=t.getFieldValue("keys");a[e]=a[e].concat(u++);const i=a;t.setFieldsValue({keys:i})},cloneContainer(e){this.waiArray.splice(e,1)},configInfo(e){let t=[];Object.keys(e).forEach(a=>{if(a.includes("item_name")){let i=[];const s=e.config?e.config:[];Object.keys(s).forEach(t=>{a.split("-")[1]===t.split("-")[1]&&i.push(e.config[t])}),t.push({item_name:e[a],config:i})}}),e.template_item_info=t,e.file_name=Array.isArray(e.file_name)?e.file_name[0].response.data.file_name:this.content.file_name},callingInter(e){this.content?l["a"].update_template({...e,template_id:this.content.id}).then(e=>{this.init(),this.$parent.initData()}):l["a"].templatesManage(e).then(e=>{this.init(),this.$parent.initData()})},handleSubmit(e){e.preventDefault(),this.form.validateFields((e,t)=>{e||(this.configInfo(t),this.callingInter(t))})},init(){this.$parent.content="",this.form.resetFields(),u=1,d=1,this.$parent.visible=!1},normFile(e){return Array.isArray(e)?e:e&&2==e.fileList.length?[e.fileList[1]]:[e.fileList[0]]}}},h=p,f=(a("16af"),a("2877")),g=Object(f["a"])(h,c,m,!1,null,"48fcbf1b",null),v=g.exports,_={name:"Article",components:{newConponets:v},data(){return{dataSource:[],pageSizeOptions:["10","20","30","40","50"],current:1,pageSize:10,total:50,visible:!1,titles:"新增组件",content:""}},created(){this.initData()},methods:{showModal(){this.titles="新增组件",this.visible=!0},editComponent(e){l["a"].template_info({template:e.id}).then(t=>{1===t.code?(this.titles="编辑组件",this.content={...e,...t.data},this.visible=!0):n["a"].error(t.message)})},delete_template(e){l["a"].delete_template({template_id:e.id}).then(e=>{1===e.code?(this.initData(),this.$message.success("删除成功")):n["a"].error(e.message)})},jump(e){window.open("https://github.com/wuba/Antenna#readme","_blank")},initData(e={}){let t={page_size:this.pageSize,page:this.current,...e};l["a"].getTemplatesManage(t).then(e=>{if(1===e.code){let{data:t}=e;this.total=t.count,t.results.unshift({id:"new"}),this.dataSource=t.results}else this.$message.error(e.message)})},onShowSizeChange(e,t){this.pageSize=t,this.initData()},changePage(e,t){let a={page_size:t,page:e};this.initData(a)}}},y=_,b=(a("1792e"),Object(f["a"])(y,r,o,!1,null,"165cdad6",null)),w=b.exports,C=a("c24c"),k=a.n(C),S={components:{AppPage:w},data(){return{}},created(){},mounted(){this.newNav()},methods:{newNav(){let e=sessionStorage.getItem("firstLogin"),t=!0;if("true"==e){const e=new k.a({animate:!1,nextBtnText:"下一步",allowClose:!1,onDeselected:()=>{t&&sessionStorage.setItem("firstLogin","false"),t=!0}});e.defineSteps([{element:document.getElementsByClassName("ant-menu-item")[2],popover:{title:"组件管理",description:"通过新建和编辑组件补充平台支持的能力",position:"right"},showButtons:!0,closeBtnText:"跳出",onNext:()=>{t=!1,this.$router.push({path:"/message"})}},{element:document.getElementsByClassName("ant-menu-item")[3],popover:{title:"消息管理",description:"可以获取所有的组件链接的请求信息",position:"right"},showButtons:!0,closeBtnText:"跳出",onNext:()=>{t=!1,this.$router.push({path:"/open"})}},{element:document.getElementsByClassName("ant-menu-item")[4],popover:{title:"OpenAPI",description:"获取Antenna系统通过api调用的接口",position:"right"},showButtons:!0,doneBtnText:"下一步",closeBtnText:"跳出",onNext:()=>{t=!1}},{element:document.getElementsByClassName("ant-dropdown-link")[0],popover:{title:"个人账户",description:"修改密码、退出系统",position:"left"},showButtons:!0,doneBtnText:"完成",closeBtnText:"跳出",onNext:()=>{}}]),e.start()}},addComponet(){l["a"].initial_template().then(e=>{1==e.code&&(this.$refs.child.initData(),this.$message("组件加载成功"))})}}},x=S,F=Object(f["a"])(x,i,s,!1,null,"697212eb",null);t["default"]=F.exports}}]);