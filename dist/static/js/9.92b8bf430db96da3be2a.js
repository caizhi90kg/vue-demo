webpackJsonp([9],{"+SYd":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=t("mvHQ"),a=t.n(l),d=100,s=200,o={data:function(){var e=[{id:d++,label:"基础类",code:s++,children:[{id:d++,label:"人口基础信息",code:s++,children:null},{id:d++,label:"法人基础信息",code:s++,children:null},{id:d++,label:"空间地理信息",code:s++,children:[{id:d++,label:"电子证照",code:s++,children:null},{id:d++,label:"社会信用",code:s++,children:null}]}]},{id:d++,label:"主题类",code:s++,children:[{id:d++,label:"综合政务",code:s++,children:null},{id:d++,label:"方针政策",code:s++,children:null},{id:d++,label:"机构编制",code:s++,children:[{id:d++,label:"中央党务",code:s++,children:null},{id:d++,label:"城乡建设",code:s++,children:null}]}]}];return{data:JSON.parse(a()(e)),addDialog:{name:null,code:null,visible:!1,rules:{name:[{type:"string",required:!0,message:"必填项呢！",trigger:"blur"}],code:[{type:"string",required:!0,message:"必填项呢！",trigger:"blur"}]}},editDialog:{name:null,code:null,visible:!1,rules:{name:[{type:"string",required:!0,message:"必填项呢！",trigger:"blur"}],code:[{type:"string",required:!0,message:"必填项呢！",trigger:"blur"}]}},addwhich:null,editwhich:null}},methods:{append:function(e){this.addDialog.visible=!0,this.addwhich=e},edit:function(e){this.editDialog.visible=!0,this.editwhich=e,this.editDialog.name=e.label,this.editDialog.code=e.code},SaveAdd:function(){var e=this;this.$refs.Addform.validate(function(i){if(i){var t={id:d++,label:e.addDialog.name,code:e.addDialog.code,children:[]};e.addwhich.children||e.$set(e.addwhich,"children",[]),e.addwhich.children.push(t),e.$message({type:"success",message:"添加成功！"}),e.resetForm("Addform"),e.addDialog.visible=!1}else e.$message({type:"warning",message:"添加失败!"})})},SaveEdit:function(){var e=this;this.$refs.Editform.validate(function(i){i?(e.editwhich.label=e.editDialog.name,e.editwhich.code=e.editDialog.code,e.$message({type:"success",message:"修改成功！"}),e.resetForm("Editform"),e.editDialog.visible=!1):e.$message({type:"warning",message:"修改失败!"})})},CancelAdd:function(){this.addDialog.visible=!1,this.resetForm("Addform")},CancelEdit:function(){this.editDialog.visible=!1,this.resetForm("Editform")},resetForm:function(e){this.$refs[e].resetFields()},remove:function(e,i){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var l=e.parent,a=l.data.children||l.data,d=a.findIndex(function(e){return e.id===i.id});a.splice(d,1),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},n={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"custom-tree-container"},[e._m(0),e._v(" "),t("div",{staticClass:"block"},[t("el-tree",{attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(i){var l=i.node,a=i.data;return t("div",{staticClass:"custom-tree-node"},[t("span",[e._v(e._s(a.label))]),e._v(" "),t("span",[e._v(e._s(a.code))]),e._v(" "),t("span",[t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(){return e.append(a)}}},[t("i",{staticClass:"fa fa-plus"}),e._v("添加")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(){return e.edit(a)}}},[t("i",{staticClass:"fa fa-pencil"}),e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(){return e.remove(l,a)}}},[t("i",{staticClass:"fa fa-trash"}),e._v("删除")])],1),e._v(" "),t("el-dialog",{attrs:{title:"新增信息","close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1,visible:e.addDialog.visible},on:{"update:visible":function(i){e.$set(e.addDialog,"visible",i)}}},[t("el-form",{ref:"Addform",attrs:{"status-icon":!0,rules:e.addDialog.rules,model:e.addDialog,"label-width":""}},[t("el-form-item",{attrs:{prop:"name",label:"名称"}},[t("el-input",{model:{value:e.addDialog.name,callback:function(i){e.$set(e.addDialog,"name",i)},expression:"addDialog.name"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"code",label:"金额"}},[t("el-input",{model:{value:e.addDialog.code,callback:function(i){e.$set(e.addDialog,"code",i)},expression:"addDialog.code"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.CancelAdd}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.SaveAdd}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑信息","close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1,visible:e.editDialog.visible},on:{"update:visible":function(i){e.$set(e.editDialog,"visible",i)}}},[t("el-form",{ref:"Editform",attrs:{"status-icon":!0,rules:e.editDialog.rules,model:e.editDialog,"label-width":""}},[t("el-form-item",{attrs:{prop:"name",label:"名称"}},[t("el-input",{model:{value:e.editDialog.name,callback:function(i){e.$set(e.editDialog,"name",i)},expression:"editDialog.name"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"code",label:"金额"}},[e.editDialog.code?t("el-input",{model:{value:e.editDialog.code,callback:function(i){e.$set(e.editDialog,"code",i)},expression:"editDialog.code"}}):e._e()],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.CancelEdit}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.SaveEdit}},[e._v("确 定")])],1)],1)],1)}}])})],1)])},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"tree-header"},[i("span",[this._v("名称")]),i("span",[this._v("代码")]),i("span",[this._v("操作")])])}]};var r=t("VU/8")(o,n,!1,function(e){t("dOwj")},null,null);i.default=r.exports},dOwj:function(e,i){}});
//# sourceMappingURL=9.92b8bf430db96da3be2a.js.map