import{p as w}from"./chunk-IUKPXING-CvUDAUwj.js";import{_ as n,J as B,K as S,ac as F,ab as z,Q as P,T,ao as v,as as W,Z as D,ah as _,ap as A,aq as E,Y as x}from"./index-C1gMn5ii.js";import{p as N}from"./gitGraph-YCYPL57B-DZuL0-VP.js";import"./_baseUniq-CK-E99g6.js";import"./_basePickBy-Bj8T6Vez.js";import"./clone-BsX6yFmn.js";var C={packet:[]},m=structuredClone(C),Y=E.packet,L=n(()=>{const t=v({...Y,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=n(()=>m.packet,"getPacket"),K=n(t=>{t.length>0&&m.packet.push(t)},"pushWord"),M=n(()=>{_(),m=structuredClone(C)},"clear"),u={pushWord:K,getPacket:I,getConfig:L,clear:M,setAccTitle:T,getAccTitle:P,setDiagramTitle:z,getDiagramTitle:F,getAccDescription:S,setAccDescription:B},O=1e4,q=n(t=>{w(t,u);let e=-1,o=[],s=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=i+1&&u.getPacket().length<O;){const[b,c]=G({start:a,end:r,label:p},s,i);if(o.push(b),b.end+1===s*i&&(u.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),G=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),H={parse:n(async t=>{const e=await N("packet",t);x.debug(e),q(e)},"parse")},J=n((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=a,h=i.getPacket(),l=i.getDiagramTitle(),g=r+p,d=g*(h.length+1)-(l?0:r),k=b*c+2,f=W(e);f.attr("viewbox",`0 0 ${k} ${d}`),D(f,d,k,a.useMaxWidth);for(const[$,y]of h.entries())Q(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),Q=n((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),h=o*(s+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",h).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",h+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=h-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),R={draw:J},U={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},X=n(({packet:t}={})=>{const e=v(U,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),rt={parser:H,db:u,renderer:R,styles:X};export{rt as diagram};
//# sourceMappingURL=diagram-DHSB7DV3-MuTEnEdK.js.map
