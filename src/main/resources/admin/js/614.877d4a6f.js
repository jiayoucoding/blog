"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[614],{75614:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",[a("a-row",{attrs:{gutter:12,align:"middle",type:"flex"}},[a("a-col",{staticClass:"pb-3",attrs:{span:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"关键词："}},[a("a-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery()}},model:{value:t.list.params.keyword,callback:function(e){t.$set(t.list.params,"keyword",e)},expression:"list.params.keyword"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"存储位置："}},[a("a-select",{attrs:{loading:t.types.loading,allowClear:""},on:{change:function(e){return t.handleQuery()}},model:{value:t.list.params.attachmentType,callback:function(e){t.$set(t.list.params,"attachmentType",e)},expression:"list.params.attachmentType"}},t._l(t.types.data,(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(t._f("typeText")(e))+" ")])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"文件类型："}},[a("a-select",{attrs:{loading:t.mediaTypes.loading,allowClear:""},on:{change:function(e){return t.handleQuery()}},model:{value:t.list.params.mediaType,callback:function(e){t.$set(t.list.params,"mediaType",e)},expression:"list.params.mediaType"}},t._l(t.mediaTypes.data,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e}},[t._v(t._s(e)+" ")])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-space",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleQuery()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.handleResetParam()}}},[t._v("重置")])],1)],1)])],1)],1)],1),a("div",{staticClass:"mb-0 table-operator"},[a("a-button",{attrs:{icon:"cloud-upload",type:"primary"},on:{click:function(e){t.upload.visible=!0}}},[t._v("上传")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:t.list.selected.length,expression:"list.selected.length"}],attrs:{icon:"check-circle",type:"primary"},on:{click:t.handleSelectAll}},[t._v(" 全选 ")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:t.list.selected.length,expression:"list.selected.length"}],attrs:{icon:"delete",type:"danger"},on:{click:t.handleDeleteAttachmentInBatch}},[t._v(" 删除 ")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:t.list.selected.length,expression:"list.selected.length"}],attrs:{icon:"close"},on:{click:function(e){t.list.selected=[]}}},[t._v(" 取消")])],1)])],1),a("a-col",{attrs:{span:24}},[a("a-list",{staticClass:"attachments-group",attrs:{dataSource:t.list.data,grid:{gutter:6,xs:2,sm:2,md:4,lg:6,xl:6,xxl:6},loading:t.list.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e,n){return[a("a-list-item",{key:n,on:{click:function(a){return t.handleItemClick(e)},mouseenter:function(a){return t.$set(e,"hover",!0)},mouseleave:function(a){return t.$set(e,"hover",!1)},contextmenu:function(a){return a.preventDefault(),t.handleContextMenu(a,e)}}},[a("div",{staticClass:"border border-solid",class:t.isItemSelect(e)?"border-blue-600":"border-slate-200"},[a("div",{staticClass:"attach-thumb attachments-group-item"},[t.isImage(e)?a("span",{staticClass:"attachments-group-item-img",style:{backgroundImage:"url('"+encodeURI(e.thumbPath)+"')"},attrs:{loading:"lazy"}}):a("span",{staticClass:"attachments-group-item-type"},[t._v(t._s(e.suffix))])]),a("a-card-meta",{staticClass:"p-2 cursor-pointer",scopedSlots:t._u([{key:"description",fn:function(){return[a("a-tooltip",{attrs:{title:e.name}},[a("div",{staticClass:"truncate"},[t._v(t._s(e.name))])])]},proxy:!0}],null,!0)}),a("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isItemSelect(e)&&e.hover,expression:"!isItemSelect(item) && item.hover"}],staticClass:"absolute top-1 right-2 font-bold cursor-pointer transition-all",style:{fontSize:"18px",color:"rgb(37 99 235)"},attrs:{theme:"twoTone",type:"plus-circle"},on:{click:function(a){return a.stopPropagation(),t.handleSelect(e)}}}),a("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.isItemSelect(e),expression:"isItemSelect(item)"}],staticClass:"absolute top-1 right-2 font-bold cursor-pointer transition-all",style:{fontSize:"18px",color:"rgb(37 99 235)"},attrs:{theme:"twoTone",type:"check-circle"}}),a("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.hover&&t.list.selected.length>0,expression:"item.hover && list.selected.length > 0"}],staticClass:"absolute top-1 left-2 font-bold cursor-pointer transition-all",style:{fontSize:"18px"},attrs:{theme:"twoTone",type:"profile"},on:{click:function(a){return a.stopPropagation(),t.handleOpenDetail(e)}}})],1)])]}}])})],1)],1),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{staticClass:"pagination",attrs:{current:t.pagination.page,defaultPageSize:t.pagination.size,pageSizeOptions:["18","36","54","72","90","108"],total:t.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePageChange,showSizeChange:t.handlePageSizeChange}})],1),a("AttachmentUploadModal",{attrs:{visible:t.upload.visible},on:{"update:visible":function(e){return t.$set(t.upload,"visible",e)},close:t.onUploadClose}}),a("AttachmentDetailModal",{attrs:{addToPhoto:!0,attachment:t.list.current,visible:t.detailVisible},on:{"update:visible":function(e){t.detailVisible=e},delete:function(e){return t.handleListAttachments()}},scopedSlots:t._u([{key:"extraFooter",fn:function(){return[a("a-button",{attrs:{disabled:t.selectPreviousButtonDisabled},on:{click:t.handleSelectPrevious}},[t._v("上一项")]),a("a-button",{attrs:{disabled:t.selectNextButtonDisabled},on:{click:t.handleSelectNext}},[t._v("下一项")])]},proxy:!0}])})],1)},s=[],i=a(75725),r=a(47458),l=(a(70315),a(3662),a(15928),a(41479),a(90195),a(31875),a(21082),a(82395),a(91411)),o=a(27474),c=a(17132),u=a(94671),d={components:{PageView:o.B4},mixins:[l.jB,l.KT],filters:{typeText:function(t){return u.k[t].text}},data:function(){return{list:{data:[],loading:!1,total:0,hasNext:!1,hasPrevious:!1,params:{page:0,size:18,keyword:void 0,mediaType:void 0,attachmentType:void 0},selected:[],current:{}},mediaTypes:{data:[],loading:!1},types:{data:[],loading:!1},upload:{visible:!1},detailVisible:!1}},computed:{isImage:function(){return function(t){return!(!t||!t.mediaType)&&t.mediaType.startsWith("image")}},isItemSelect:function(){return function(t){return this.list.selected.findIndex((function(e){return e.id===t.id}))>-1}},pagination:function(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}},selectPreviousButtonDisabled:function(){var t=this,e=this.list.data.findIndex((function(e){return e.id===t.list.current.id}));return 0===e&&!this.list.hasPrevious},selectNextButtonDisabled:function(){var t=this,e=this.list.data.findIndex((function(e){return e.id===t.list.current.id}));return e===this.list.data.length-1&&!this.list.hasNext}},created:function(){this.handleListAttachments(),this.handleListMediaTypes(),this.handleListTypes()},methods:{handleListAttachments:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.list.loading=!0,e.next=4,c.Z.attachment.list(t.list.params);case 4:a=e.sent,t.list.data=a.data.content,t.list.total=a.data.total,t.list.hasNext=a.data.hasNext,t.list.hasPrevious=a.data.hasPrevious,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.$log.error(e.t0);case 14:return e.prev=14,t.list.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},handleListMediaTypes:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.mediaTypes.loading=!0,e.next=4,c.Z.attachment.listMediaTypes();case 4:a=e.sent,t.mediaTypes.data=a.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$log.error(e.t0);case 11:return e.prev=11,t.mediaTypes.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},handleListTypes:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.types.loading=!0,e.next=4,c.Z.attachment.listTypes();case 4:a=e.sent,t.types.data=a.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$log.error(e.t0);case 11:return e.prev=11,t.types.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},handleOpenDetail:function(t){this.list.current=t,this.detailVisible=!0},handleItemClick:function(t){this.list.selected.length<=0?this.handleOpenDetail(t):this.isItemSelect(t)?this.handleUnselect(t):this.handleSelect(t)},handleSelect:function(t){this.list.selected=[].concat((0,i.Z)(this.list.selected),[t])},handleUnselect:function(t){this.list.selected=this.list.selected.filter((function(e){return e.id!==t.id}))},handleSelectAll:function(){this.list.selected=this.list.data},handleContextMenu:function(t,e){var a=this;return this.$contextmenu({items:[{label:"复制".concat(this.isImage(e)?"图片":"文件","链接"),onClick:function(){var t="".concat(encodeURI(e.path));a.$copyText(t).then((function(t){a.$log.debug("copy",t),a.$message.success("复制成功！")})).catch((function(t){a.$log.debug("copy.err",t),a.$message.error("复制失败！")}))},divided:!0},{disabled:!this.isImage(e),label:"复制 Markdown 格式链接",onClick:function(){var t="![".concat(e.name,"](").concat(encodeURI(e.path),")");a.$copyText(t).then((function(t){a.$log.debug("copy",t),a.$message.success("复制成功！")})).catch((function(t){a.$log.debug("copy.err",t),a.$message.error("复制失败！")}))},divided:!0},{label:"删除",onClick:function(){a.$confirm({title:"提示",content:"确定删除该附件？",okText:"确定",cancelText:"取消",onOk:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.Z.attachment["delete"](e.id);case 2:return t.next=4,a.handleListAttachments();case 4:a.handleUnselect(e);case 5:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()})}}],event:t,minWidth:210}),!1},handlePageChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.list.params.page=t-1,this.handleListAttachments()},handlePageSizeChange:function(t,e){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(e)),this.list.params.page=0,this.list.params.size=e,this.handleListAttachments()},handleResetParam:function(){this.list.params.keyword=void 0,this.list.params.mediaType=void 0,this.list.params.attachmentType=void 0,this.handlePageChange(),this.handleListMediaTypes(),this.handleListTypes()},handleQuery:function(){this.handlePageChange()},onUploadClose:function(){this.handlePageChange(),this.handleListMediaTypes(),this.handleListTypes()},handleDeleteAttachmentInBatch:function(){var t=this;this.list.selected.length<=0?this.$message.warn("你还未选择任何附件，请至少选择一个！"):this.$confirm({title:"确定要批量删除选中的附件吗？",content:"一旦删除不可恢复，请谨慎操作",onOk:function(){return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.list.selected.map((function(t){return t.id})),e.next=4,c.Z.attachment.deleteInBatch(a);case 4:t.list.selected=[],t.$message.success("删除成功"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$log.error("Failed to delete selected attachments",e.t0);case 11:return e.prev=11,e.next=14,t.handleListAttachments();case 14:return e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})))()}})},handleSelectPrevious:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.list.data.findIndex((function(e){return e.id===t.list.current.id})),!(a>0)){e.next=4;break}return t.list.current=t.list.data[a-1],e.abrupt("return");case 4:if(0!==a||!t.list.hasPrevious){e.next=9;break}return t.list.params.page--,e.next=8,t.handleListAttachments();case 8:t.list.current=t.list.data[t.list.data.length-1];case 9:case"end":return e.stop()}}),e)})))()},handleSelectNext:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.list.data.findIndex((function(e){return e.id===t.list.current.id})),!(a<t.list.data.length-1)){e.next=4;break}return t.list.current=t.list.data[a+1],e.abrupt("return");case 4:if(a!==t.list.data.length-1||!t.list.hasNext){e.next=9;break}return t.list.params.page++,e.next=8,t.handleListAttachments();case 8:t.list.current=t.list.data[0];case 9:case"end":return e.stop()}}),e)})))()}}},h=d,p=a(42177),m=(0,p.Z)(h,n,s,!1,null,null,null),g=m.exports}}]);