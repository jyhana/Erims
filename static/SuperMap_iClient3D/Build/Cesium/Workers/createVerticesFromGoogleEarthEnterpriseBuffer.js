define(["./EllipsoidTangentPlane-b2b18d75","./BoundingSphere-561b54d0","./Cartesian2-47311507","./Cartographic-3309dd0d","./when-b60132fc","./TerrainEncoding-e04be3ba","./Math-119be1a3","./OrientedBoundingBox-f1d7843f","./RuntimeError-4a5c8994","./Transforms-cb0006b0","./WebMercatorProjection-01b1b5e7","./createTaskProcessorWorker","./Check-7b2a090c","./Cartesian4-3ca25aab","./IntersectionTests-0c6d0a14","./Plane-097b3a8f","./AttributeCompression-90851096","./ComponentDatatype-c140a87d","./WebGLConstants-4ae0db90","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206"],(function(e,t,i,a,r,n,o,s,u,h,d,c,l,g,m,p,v,I,E,C,T){"use strict";var f=Uint16Array.BYTES_PER_ELEMENT,M=Int32Array.BYTES_PER_ELEMENT,b=Uint32Array.BYTES_PER_ELEMENT,N=Float32Array.BYTES_PER_ELEMENT,x=Float64Array.BYTES_PER_ELEMENT;function S(e,t,i){i=r.defaultValue(i,o.CesiumMath);for(var a=e.length,n=0;n<a;++n)if(i.equalsEpsilon(e[n],t,o.CesiumMath.EPSILON12))return n;return-1}var w=new a.Cartographic,P=new a.Cartesian3,B=new a.Cartesian3,y=new a.Cartesian3,A=new t.Matrix4;function R(e,n,s,u,h,d,c,l,g,m){for(var p=c.length,v=0;v<p;++v){var I=c[v],E=I.cartographic,C=I.index,T=e.length,f=E.longitude,M=E.latitude;M=o.CesiumMath.clamp(M,-o.CesiumMath.PI_OVER_TWO,o.CesiumMath.PI_OVER_TWO);var b=E.height-d.skirtHeight;d.hMin=Math.min(d.hMin,b),a.Cartographic.fromRadians(f,M,b,w),g&&(w.longitude+=l),g?v===p-1?w.latitude+=m:0===v&&(w.latitude-=m):w.latitude+=l;var N=d.ellipsoid.cartographicToCartesian(w);e.push(N),n.push(b),s.push(i.Cartesian2.clone(s[C])),u.length>0&&u.push(u[C]),t.Matrix4.multiplyByPoint(d.toENU,N,P);var x=d.minimum,S=d.maximum;a.Cartesian3.minimumByComponent(P,x,x),a.Cartesian3.maximumByComponent(P,S,S);var B=d.lastBorderPoint;if(r.defined(B)){var y=B.index;h.push(y,T-1,T,T,C,y)}d.lastBorderPoint=I}}return c((function(c,l){c.ellipsoid=i.Ellipsoid.clone(c.ellipsoid),c.rectangle=i.Rectangle.clone(c.rectangle);var g=function(c,l,g,m,p,v,I,E,C,T){var _,F,W,O,U,Y;r.defined(m)?(_=m.west,F=m.south,W=m.east,O=m.north,U=m.width,Y=m.height):(_=o.CesiumMath.toRadians(p.west),F=o.CesiumMath.toRadians(p.south),W=o.CesiumMath.toRadians(p.east),O=o.CesiumMath.toRadians(p.north),U=o.CesiumMath.toRadians(m.width),Y=o.CesiumMath.toRadians(m.height));var k,V,H=[F,O],L=[_,W],D=h.Transforms.eastNorthUpToFixedFrame(l,g),G=t.Matrix4.inverseTransformation(D,A);E&&(k=d.WebMercatorProjection.geodeticLatitudeToMercatorAngle(F),V=1/(d.WebMercatorProjection.geodeticLatitudeToMercatorAngle(O)-k));var j=new DataView(c),z=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,J=B;J.x=Number.POSITIVE_INFINITY,J.y=Number.POSITIVE_INFINITY,J.z=Number.POSITIVE_INFINITY;var K=y;K.x=Number.NEGATIVE_INFINITY,K.y=Number.NEGATIVE_INFINITY,K.z=Number.NEGATIVE_INFINITY;var Q,X,Z=0,$=0,ee=0;for(X=0;X<4;++X){var te=Z;Q=j.getUint32(te,!0),te+=b;var ie=o.CesiumMath.toRadians(180*j.getFloat64(te,!0));te+=x,-1===S(L,ie)&&L.push(ie);var ae=o.CesiumMath.toRadians(180*j.getFloat64(te,!0));te+=x,-1===S(H,ae)&&H.push(ae),te+=2*x;var re=j.getInt32(te,!0);te+=M,$+=re,ee+=3*(re=j.getInt32(te,!0)),Z+=Q+b}var ne=[],oe=[],se=new Array($),ue=new Array($),he=new Array($),de=E?new Array($):[],ce=new Array(ee),le=[],ge=[],me=[],pe=[],ve=0,Ie=0;for(Z=0,X=0;X<4;++X){Q=j.getUint32(Z,!0);var Ee=Z+=b,Ce=o.CesiumMath.toRadians(180*j.getFloat64(Z,!0));Z+=x;var Te=o.CesiumMath.toRadians(180*j.getFloat64(Z,!0));Z+=x;var fe=o.CesiumMath.toRadians(180*j.getFloat64(Z,!0)),Me=.5*fe;Z+=x;var be=o.CesiumMath.toRadians(180*j.getFloat64(Z,!0)),Ne=.5*be;Z+=x;var xe=j.getInt32(Z,!0);Z+=M;var Se=j.getInt32(Z,!0);Z+=M,Z+=M;for(var we=new Array(xe),Pe=0;Pe<xe;++Pe){var Be=Ce+j.getUint8(Z++)*fe;w.longitude=Be;var ye=Te+j.getUint8(Z++)*be;w.latitude=ye;var Ae=j.getFloat32(Z,!0);if(Z+=N,0!==Ae&&Ae<T&&(Ae*=-Math.pow(2,C)),Ae*=6371010*v,w.height=Ae,-1!==S(L,Be)||-1!==S(H,ye)){var Re=S(ne,w,a.Cartographic);if(-1!==Re){we[Pe]=oe[Re];continue}ne.push(a.Cartographic.clone(w)),oe.push(ve)}we[Pe]=ve,Math.abs(Be-_)<Me?le.push({index:ve,cartographic:a.Cartographic.clone(w)}):Math.abs(Be-W)<Me?me.push({index:ve,cartographic:a.Cartographic.clone(w)}):Math.abs(ye-F)<Ne?ge.push({index:ve,cartographic:a.Cartographic.clone(w)}):Math.abs(ye-O)<Ne&&pe.push({index:ve,cartographic:a.Cartographic.clone(w)}),z=Math.min(Ae,z),q=Math.max(Ae,q),he[ve]=Ae;var _e=g.cartographicToCartesian(w);se[ve]=_e,E&&(de[ve]=(d.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ye)-k)*V),t.Matrix4.multiplyByPoint(G,_e,P),a.Cartesian3.minimumByComponent(P,J,J),a.Cartesian3.maximumByComponent(P,K,K);var Fe=(Be-_)/(W-_);Fe=o.CesiumMath.clamp(Fe,0,1);var We=(ye-F)/(O-F);We=o.CesiumMath.clamp(We,0,1),ue[ve]=new i.Cartesian2(Fe,We),++ve}for(var Oe=3*Se,Ue=0;Ue<Oe;++Ue,++Ie)ce[Ie]=we[j.getUint16(Z,!0)],Z+=f;if(Q!==Z-Ee)throw new u.RuntimeError("Invalid terrain tile.")}se.length=ve,ue.length=ve,he.length=ve,E&&(de.length=ve);var Ye=ve,ke=Ie,Ve={hMin:z,lastBorderPoint:void 0,skirtHeight:I,toENU:G,ellipsoid:g,minimum:J,maximum:K};le.sort((function(e,t){return t.cartographic.latitude-e.cartographic.latitude})),ge.sort((function(e,t){return e.cartographic.longitude-t.cartographic.longitude})),me.sort((function(e,t){return e.cartographic.latitude-t.cartographic.latitude})),pe.sort((function(e,t){return t.cartographic.longitude-e.cartographic.longitude}));var He=1e-5;if(R(se,he,ue,de,ce,Ve,le,-He*U,!0,-He*Y),R(se,he,ue,de,ce,Ve,ge,-He*Y,!1),R(se,he,ue,de,ce,Ve,me,He*U,!0,He*Y),R(se,he,ue,de,ce,Ve,pe,He*Y,!1),le.length>0&&pe.length>0){var Le=le[0].index,De=Ye,Ge=pe[pe.length-1].index,je=se.length-1;ce.push(Ge,je,De,De,Le,Ge)}$=se.length;var ze,qe=t.BoundingSphere.fromPoints(se);r.defined(m)&&(ze=s.OrientedBoundingBox.fromRectangle(m,z,q,g));for(var Je=new n.EllipsoidalOccluder(g).computeHorizonCullingPointPossiblyUnderEllipsoid(l,se,z),Ke=new e.AxisAlignedBoundingBox(J,K,l),Qe=new n.TerrainEncoding(Ke,Ve.hMin,q,D,!1,E),Xe=new Float32Array($*Qe.getStride()),Ze=0,$e=0;$e<$;++$e)Ze=Qe.encode(Xe,Ze,se[$e],ue[$e],he[$e],void 0,de[$e]);var et=le.map((function(e){return e.index})).reverse(),tt=ge.map((function(e){return e.index})).reverse(),it=me.map((function(e){return e.index})).reverse(),at=pe.map((function(e){return e.index})).reverse();return tt.unshift(it[it.length-1]),tt.push(et[0]),at.unshift(et[et.length-1]),at.push(it[0]),{vertices:Xe,indices:new Uint16Array(ce),maximumHeight:q,minimumHeight:z,encoding:Qe,boundingSphere3D:qe,orientedBoundingBox:ze,occludeePointInScaledSpace:Je,vertexCountWithoutSkirts:Ye,indexCountWithoutSkirts:ke,westIndicesSouthToNorth:et,southIndicesEastToWest:tt,eastIndicesNorthToSouth:it,northIndicesWestToEast:at}}(c.buffer,c.relativeToCenter,c.ellipsoid,c.rectangle,c.nativeRectangle,c.exaggeration,c.skirtHeight,c.includeWebMercatorT,c.negativeAltitudeExponentBias,c.negativeElevationThreshold),m=g.vertices;l.push(m.buffer);var p=g.indices;return l.push(p.buffer),{vertices:m.buffer,indices:p.buffer,numberOfAttributes:g.encoding.getStride(),minimumHeight:g.minimumHeight,maximumHeight:g.maximumHeight,boundingSphere3D:g.boundingSphere3D,orientedBoundingBox:g.orientedBoundingBox,occludeePointInScaledSpace:g.occludeePointInScaledSpace,encoding:g.encoding,vertexCountWithoutSkirts:g.vertexCountWithoutSkirts,indexCountWithoutSkirts:g.indexCountWithoutSkirts,westIndicesSouthToNorth:g.westIndicesSouthToNorth,southIndicesEastToWest:g.southIndicesEastToWest,eastIndicesNorthToSouth:g.eastIndicesNorthToSouth,northIndicesWestToEast:g.northIndicesWestToEast}}))}));
