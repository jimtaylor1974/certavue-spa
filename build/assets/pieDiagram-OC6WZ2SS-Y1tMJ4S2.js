import{p as B}from"./chunk-IUKPXING-Bku51IT8.js";import{aC as S,ax as z,bx as U,_ as u,K as Z,J as j,Q as q,T as J,ac as K,ab as Q,Y as F,V as Y,ao as H,as as X,aM as tt,Z as et,ah as at,aq as rt}from"./index-kwN8UPoG.js";import{p as nt}from"./gitGraph-YCYPL57B-xown2aJA.js";import{d as P}from"./arc-C8NNbUFx.js";import{o as it}from"./ordinal-Cboi1Yqb.js";import"./_baseUniq-DR5usAhi.js";import"./_basePickBy-C4KFdvB7.js";import"./clone-Cx5_GO5a.js";import"./init-Gi6I4Gst.js";function st(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ot(t){return t}function lt(){var t=ot,a=st,m=null,o=S(0),p=S(z),y=S(0);function i(e){var r,l=(e=U(e)).length,g,A,h=0,c=new Array(l),n=new Array(l),v=+o.apply(this,arguments),w=Math.min(z,Math.max(-z,p.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),d;for(r=0;r<l;++r)(d=n[c[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?c.sort(function(x,C){return a(n[x],n[C])}):m!=null&&c.sort(function(x,C){return m(e[x],e[C])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)g=c[r],d=n[g],f=v+(d>0?d*A:0)+$,n[g]={data:e[g],index:r,value:d,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),i):o},i.endAngle=function(e){return arguments.length?(p=typeof e=="function"?e:S(+e),i):p},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:S(+e),i):y},i}var ct=rt.pie,G={sections:new Map,showData:!1},E=G.sections,W=G.showData,ut=structuredClone(ct),pt=u(()=>structuredClone(ut),"getConfig"),gt=u(()=>{E=new Map,W=G.showData,at()},"clear"),dt=u(({label:t,value:a})=>{E.has(t)||(E.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=u(()=>E,"getSections"),mt=u(t=>{W=t},"setShowData"),ht=u(()=>W,"getShowData"),R={getConfig:pt,clear:gt,setDiagramTitle:Q,getDiagramTitle:K,setAccTitle:J,getAccTitle:q,setAccDescription:j,getAccDescription:Z,addSection:dt,getSections:ft,setShowData:mt,getShowData:ht},vt=u((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:u(async t=>{const a=await nt("pie",t);F.debug(a),vt(a,R)},"parse")},St=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),yt=St,At=u(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,p)=>p.value-o.value);return lt().value(o=>o.value)(a)},"createPieArcs"),wt=u((t,a,m,o)=>{F.debug(`rendering pie chart
`+t);const p=o.db,y=Y(),i=H(p.getConfig(),y.pie),e=40,r=18,l=4,g=450,A=g,h=X(a),c=h.append("g");c.attr("transform","translate("+A/2+","+g/2+")");const{themeVariables:n}=y;let[v]=tt(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,f=Math.min(A,g)/2-e,T=P().innerRadius(0).outerRadius(f),$=P().innerRadius(f*w).outerRadius(f*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const d=p.getSections(),x=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=it(C);c.selectAll("mySlices").data(x).enter().append("path").attr("d",T).attr("fill",s=>D(s.data.label)).attr("class","pieCircle");let N=0;d.forEach(s=>{N+=s}),c.selectAll("mySlices").data(x).enter().append("text").text(s=>(s.data.value/N*100).toFixed(0)+"%").attr("transform",s=>"translate("+$.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(p.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const M=c.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(s,b)=>{const k=r+l,L=k*D.domain().length/2,_=12*r,V=b*k-L;return"translate("+_+","+V+")"});M.append("rect").attr("width",r).attr("height",r).style("fill",D).style("stroke",D),M.data(x).append("text").attr("x",r+l).attr("y",r-l).text(s=>{const{label:b,value:k}=s.data;return p.getShowData()?`${b} [${k}]`:b});const I=Math.max(...M.selectAll("text").nodes().map(s=>(s==null?void 0:s.getBoundingClientRect().width)??0)),O=A+e+r+l+I;h.attr("viewBox",`0 0 ${O} ${g}`),et(h,g,O,i.useMaxWidth)},"draw"),Ct={draw:wt},Gt={parser:xt,db:R,renderer:Ct,styles:yt};export{Gt as diagram};
//# sourceMappingURL=pieDiagram-OC6WZ2SS-Y1tMJ4S2.js.map
