(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{314:function(t,e,o){var content=o(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("2eb415e2",content,!0,{sourceMap:!1})},315:function(t,e,o){var content=o(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("2fdfcbc5",content,!0,{sourceMap:!1})},316:function(t,e,o){var content=o(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("5a511a7d",content,!0,{sourceMap:!1})},324:function(t){t.exports=JSON.parse('[{"estado":"Miranda","confirmados":30,"sufijo":"Casos","latitude":10.2959803,"longitude":-66.3534698},{"estado":"Caracas","confirmados":19,"sufijo":"Casos","latitude":10.4880104,"longitude":-66.9791885},{"estado":"Vargas","confirmados":8,"sufijo":"Casos","latitude":10.5880104,"longitude":-66.6791885},{"estado":"Aragua","confirmados":6,"sufijo":"Casos","latitude":10.2353497,"longitude":-67.3911331},{"estado":"Anzoátegui","confirmados":2,"sufijo":"Casos","latitude":9.7362495,"longitude":-64.6861801},{"estado":"Falcón","confirmados":2,"sufijo":"Casos","latitude":11.6955996,"longitude":-70.1995697},{"estado":"Apure","confirmados":2,"sufijo":"Casos","latitude":7.5878198,"longitude":-67.4723587},{"estado":"Mérida","confirmados":1,"sufijo":"Caso","latitude":8.5897198,"longitude":-71.1561127},{"estado":"Monagas","confirmados":1,"sufijo":"Caso","latitude":9.7456903,"longitude":-63.1832314},{"estado":"Táchira","confirmados":1,"sufijo":"Caso","latitude":7.7669401,"longitude":-72.2249985},{"estado":"Lara","confirmados":1,"sufijo":"Caso","latitude":10.0647001,"longitude":-69.3570328},{"estado":"Cojedes","confirmados":1,"sufijo":"Caso","latitude":9.6612396,"longitude":-68.5826797},{"estado":"Zulia","confirmados":1,"sufijo":"Caso","latitude":10.6666298,"longitude":-71.6124496},{"estado":"Portuguesa","confirmados":1,"sufijo":"Caso","latitude":9.0418301,"longitude":-69.7420578},{"estado":"Nueva Esparta","confirmados":1,"sufijo":"Caso","latitude":10.9577103,"longitude":-63.869709}]')},334:function(t,e,o){"use strict";var r=o(314);o.n(r).a},335:function(t,e,o){(e=o(20)(!1)).push([t.i,"@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.amcharts-amexport-top .amcharts-amexport-item>.amcharts-amexport-menu{top:-3px!important;left:2px;bottom:40px!important}.amcharts-amexport-menu-level-0.amcharts-amexport-bottom{top:auto;bottom:40px!important}.amcharts-amexport-item.amcharts-amexport-item-level-0 a{color:#b713a6}.title-map_h1{margin-top:30px;margin-bottom:20px}@media screen and (max-width:768px){.title-map_h1{font-size:1.6rem!important}}#chartdiv{width:100%;height:90vh;margin:0 auto}@media screen and (max-width:768px){#chartdiv{height:400px}}",""]),t.exports=e},336:function(t,e,o){"use strict";var r=o(315);o.n(r).a},337:function(t,e,o){(e=o(20)(!1)).push([t.i,".chart-cases{width:96%;height:800px}",""]),t.exports=e},338:function(t,e,o){"use strict";var r=o(316);o.n(r).a},339:function(t,e,o){(e=o(20)(!1)).push([t.i,".chart{width:96%;height:500px}",""]),t.exports=e},354:function(t,e,o){"use strict";o.r(e);o(288);var r=o(318),n=o(352),l={name:"Maps",mounted:function(){var t=r.h("chartdiv",n.a);t.geodataSource.url="/covid19-venezuela/geojson/venezuela.json",t.geodata=t.geodataSource.url,t.exporting.menu=new r.c,t.exporting.menu.align="left",t.exporting.menu.verticalAlign="bottom",t.projection=new n.e.Miller;var e=t.series.push(new n.c);e.useGeodata=!0;var l=e.mapPolygons.template;l.tooltipText="{ESTADO}",l.fill=r.g("#bbbbbb"),l.states.create("hover").properties.fill=r.g("#3298dc");var button=t.chartContainer.createChild(r.a);button.padding(15,15,15,15),button.align="left",button.marginLeft=15,button.events.on("hit",(function(){t.goHome()})),button.icon=new r.f,button.icon.path="M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",button.fill=r.g("#b713a6");var d=t.series.push(new n.b),c=d.mapImages.template,marker=c.createChild(r.f);marker.path="M 122.75532,157.33277 A 24.000003,24.000016 0 0 1 98.755327,181.33273 24.000003,24.000016 0 0 1 74.755324,157.33277 24.000003,24.000016 0 0 1 98.755327,133.33271 24.000003,24.000016 0 0 1 122.75532,157.33277 Z",marker.width=48,marker.height=48,marker.nonScaling=!0,marker.tooltipText="[bold]{estado}[/]\n [bold]{confirmados}[/] {sufijo}",marker.horizontalCenter="middle",marker.verticalCenter="middle",marker.properties.fill="#f14668",marker.properties.strokeOpacity=.5,marker.properties.fillOpacity=.5,marker.properties.stroke=r.g("#000000");var label=c.createChild(r.e);label.text="[bold]{confirmados}[/]",label.horizontalCenter="middle",label.verticalCenter="middle",label.zIndex=2,label.fill=r.g("#FFF"),label.strokeWidth=0;var shadow=new r.b;shadow.dx=2,shadow.dy=2,marker.filters.push(shadow);var h=marker.states.create("hover");h.properties.fill="#b713a6",h.properties.fillOpacity=1,h.properties.stroke=r.g("#000000"),h.properties.strokeOpacity=.8,h.properties.index=99,c.propertyFields.latitude="latitude",c.propertyFields.longitude="longitude";var m=o(324);d.data=m,t.zoomControl=new n.d},beforeDestroy:function(){this.chart&&this.chart.dispose()}},d=(o(334),o(9)),map=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-map",attrs:{id:"mapa"}},[this._m(0),this._v(" "),e("div",{staticClass:"container is-fullhd"},[e("div",{ref:"chartdiv",attrs:{id:"chartdiv"}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("h1",{staticClass:"is-size-2 title-map_h1"},[e("strong",{staticClass:"has-text-danger"},[this._v("CASOS POR ESTADO")])])])}],!1,null,null,null).exports,c=(o(61),o(327)),h=o(328),m=o(353);r.j(h.a),r.j(m.a);var f={name:"ChartCases",mounted:function(){var t=r.h("chartdivcases",c.h);t.maskBullets=!1,t.numberFormatter.numberFormat="#";var e=o(324);t.data=e;var n=t.yAxes.push(new c.a);n.dataFields.category="estado",n.renderer.grid.template.location=0;var l=t.xAxes.push(new c.g);l.renderer.inside=!0,l.renderer.labels.template.disabled=!0,t.colors.list=[r.g("#f14668"),r.g("#00d1b2")],function(e,o){var n=t.series.push(new c.c);n.name=o,n.dataFields.valueX=e,n.dataFields.categoryY="estado",n.sequencedInterpolation=!0,n.stacked=!0,n.columns.template.width=r.i(80),n.columns.template.tooltipText="[bold]{name}[/]\n[font-size:14px]{categoryY}: {valueX}";var l=n.bullets.push(new c.d);l.label.text="[bold]{valueX}[/]",l.label.fill=r.g("#FFF"),l.locationY=.5,l.locationX=.5}("confirmados","Confirmados");var d=t.series.push(new c.c);d.dataFields.valueX="none",d.dataFields.categoryY="estado",d.stacked=!0,d.hiddenInLegend=!0,d.columns.template.strokeOpacity=0},beforeDestroy:function(){this.chart&&this.chart.dispose()}},v=(o(336),Object(d.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"has-text-centered",attrs:{id:"chart"}},[e("h1",{staticClass:"is-size-2 title-map_h1"},[e("strong",{staticClass:"has-text-danger"},[this._v("CONFIRMADOS POR ESTADO")])])]),this._v(" "),e("div",{staticClass:"chart-cases",attrs:{id:"chartdivcases"}})])}],!1,null,null,null).exports);r.j(h.a);var x={name:"Chart",mounted:function(){var t=r.h(this.$refs.chartdiv,c.h);t.paddingRight=10,t.dataSource.url="/covid19-venezuela/chart/2020-20-03.json",t.dataSource.parser=new r.d,t.dataSource.parser.options.useColumnNames=!0,t.exporting.menu=new r.c,t.exporting.menu.align="left",t.exporting.menu.verticalAlign="bottom",t.xAxes.push(new c.a).dataFields.category="date";var e=t.yAxes.push(new c.g);e.tooltip.disabled=!0,e.renderer.minWidth=35;var o=t.series.push(new c.f);o.dataFields.valueY="confirmados",o.dataFields.categoryX="date",o.name="Confirmados",o.strokeWidth=3,o.fill=r.g("#f14668"),o.stroke=r.g("#f14668"),o.bullets.push(new c.b);var n=t.series.push(new c.f);n.dataFields.valueY="sanados",n.dataFields.categoryX="date",n.name="Sanados",n.strokeWidth=3,n.fill=r.g("#00d1b2"),n.stroke=r.g("#00d1b2"),n.bullets.push(new c.b);var l=t.series.push(new c.f);l.dataFields.valueY="fallecidos",l.dataFields.categoryX="date",l.name="Fallecidos",l.strokeWidth=3,l.fill=r.g("#3298dc"),l.stroke=r.g("#3298dc"),l.bullets.push(new c.b);var d=t.series.push(new c.f);d.dataFields.valueY="activos",d.dataFields.categoryX="date",d.name="Activos",d.strokeWidth=3,d.fill=r.g("#48c774"),d.stroke=r.g("#48c774"),d.bullets.push(new c.b),o.tooltipText="{valueY.value}",n.tooltipText="{valueY.value}",l.tooltipText="{valueY.value}",d.tooltipText="{valueY.value}",t.cursor=new c.j;var h=new c.i;h.series.push(o),t.scrollbarX=h,t.legend=new c.e,t.legend.useDefaultMarker=!0;var marker=t.legend.markers.template.children.getIndex(0);marker.cornerRadius(12,12,12,12),marker.strokeWidth=2,marker.strokeOpacity=1,marker.stroke=r.g("#ccc")},beforeDestroy:function(){this.chart&&this.chart.dispose()}},C=(o(338),{components:{Map:map,ChartCases:v,Chart:Object(d.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{ref:"chartdiv",staticClass:"chart"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered",attrs:{id:"chart"}},[e("h1",{staticClass:"is-size-2 title-map_h1"},[e("strong",{staticClass:"has-text-danger"},[this._v("HISTORICO DIARIO NACIONAL")])])])}],!1,null,null,null).exports}}),w=Object(d.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Map"),this._v(" "),e("ChartCases"),this._v(" "),e("Chart")],1)}),[],!1,null,null,null);e.default=w.exports}}]);