define(["exports","./earcut-2.2.1-20c8012f","./Cartesian2-47311507","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./when-b60132fc","./EllipsoidRhumbLine-ed1a6bf4","./GeometryAttribute-3a42bbdc","./Math-119be1a3","./PrimitiveType-39acab88","./WebGLConstants-4ae0db90"],(function(a,e,t,i,r,n,s,o,u,p,h,d){"use strict";var l={CLOCKWISE:d.WebGLConstants.CW,COUNTER_CLOCKWISE:d.WebGLConstants.CCW,validate:function(a){return a===l.CLOCKWISE||a===l.COUNTER_CLOCKWISE}},C=Object.freeze(l),m=new i.Cartesian3,c=new i.Cartesian3,y={computeArea2D:function(a){for(var e=a.length,t=0,i=e-1,r=0;r<e;i=r++){var n=a[i],s=a[r];t+=n.x*s.y-s.x*n.y}return.5*t},computeWindingOrder2D:function(a){return y.computeArea2D(a)>0?C.COUNTER_CLOCKWISE:C.CLOCKWISE},triangulate:function(a,i){var r=t.Cartesian2.packArray(a);return e.earcut(r,i,2)}},f=new i.Cartesian3,g=new i.Cartesian3,v=new i.Cartesian3,b=new i.Cartesian3,E=new i.Cartesian3,S=new i.Cartesian3,w=new i.Cartesian3;y.computeSubdivision=function(a,e,t,r,o){o=s.defaultValue(o,!1),r=s.defaultValue(r,p.CesiumMath.RADIANS_PER_DEGREE);var d,l=t.slice(0),C=e.length,m=new Array(3*C),c=0;for(d=0;d<C;d++){var y=e[d];m[c++]=y.x,m[c++]=y.y,m[c++]=y.z}for(var A=[],x={},R=a.maximumRadius,L=p.CesiumMath.chordLength(r,R),M=L*L;l.length>0;){var D,G,T=l.pop(),O=l.pop(),W=l.pop(),z=i.Cartesian3.fromArray(m,3*W,f),P=i.Cartesian3.fromArray(m,3*O,g),I=i.Cartesian3.fromArray(m,3*T,v),B=o?z:i.Cartesian3.multiplyByScalar(i.Cartesian3.normalize(z,b),R,b),N=o?P:i.Cartesian3.multiplyByScalar(i.Cartesian3.normalize(P,E),R,E),U=o?I:i.Cartesian3.multiplyByScalar(i.Cartesian3.normalize(I,S),R,S),_=i.Cartesian3.magnitudeSquared(i.Cartesian3.subtract(B,N,w)),K=i.Cartesian3.magnitudeSquared(i.Cartesian3.subtract(N,U,w)),V=i.Cartesian3.magnitudeSquared(i.Cartesian3.subtract(U,B,w)),q=Math.max(_,K,V);q>M?_===q?(d=x[D=Math.min(W,O)+" "+Math.max(W,O)],s.defined(d)||(G=i.Cartesian3.add(z,P,w),i.Cartesian3.multiplyByScalar(G,.5,G),m.push(G.x,G.y,G.z),d=m.length/3-1,x[D]=d),l.push(W,d,T),l.push(d,O,T)):K===q?(d=x[D=Math.min(O,T)+" "+Math.max(O,T)],s.defined(d)||(G=i.Cartesian3.add(P,I,w),i.Cartesian3.multiplyByScalar(G,.5,G),m.push(G.x,G.y,G.z),d=m.length/3-1,x[D]=d),l.push(O,d,W),l.push(d,T,W)):V===q&&(d=x[D=Math.min(T,W)+" "+Math.max(T,W)],s.defined(d)||(G=i.Cartesian3.add(I,z,w),i.Cartesian3.multiplyByScalar(G,.5,G),m.push(G.x,G.y,G.z),d=m.length/3-1,x[D]=d),l.push(T,d,O),l.push(d,W,O)):(A.push(W),A.push(O),A.push(T))}return new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})},indices:A,primitiveType:h.PrimitiveType.TRIANGLES})};var A=new i.Cartographic,x=new i.Cartographic,R=new i.Cartographic,L=new i.Cartographic;y.computeRhumbLineSubdivision=function(a,e,t,r){r=s.defaultValue(r,p.CesiumMath.RADIANS_PER_DEGREE);var d,l=t.slice(0),C=e.length,m=new Array(3*C),c=0;for(d=0;d<C;d++){var y=e[d];m[c++]=y.x,m[c++]=y.y,m[c++]=y.z}for(var b=[],E={},S=a.maximumRadius,M=p.CesiumMath.chordLength(r,S),D=new o.EllipsoidRhumbLine(void 0,void 0,a),G=new o.EllipsoidRhumbLine(void 0,void 0,a),T=new o.EllipsoidRhumbLine(void 0,void 0,a);l.length>0;){var O=l.pop(),W=l.pop(),z=l.pop(),P=i.Cartesian3.fromArray(m,3*z,f),I=i.Cartesian3.fromArray(m,3*W,g),B=i.Cartesian3.fromArray(m,3*O,v),N=a.cartesianToCartographic(P,A),U=a.cartesianToCartographic(I,x),_=a.cartesianToCartographic(B,R);D.setEndPoints(N,U);var K=D.surfaceDistance;G.setEndPoints(U,_);var V=G.surfaceDistance;T.setEndPoints(_,N);var q,F,k,j,H=T.surfaceDistance,J=Math.max(K,V,H);J>M?K===J?(d=E[q=Math.min(z,W)+" "+Math.max(z,W)],s.defined(d)||(F=D.interpolateUsingFraction(.5,L),k=.5*(N.height+U.height),j=i.Cartesian3.fromRadians(F.longitude,F.latitude,k,a,w),m.push(j.x,j.y,j.z),d=m.length/3-1,E[q]=d),l.push(z,d,O),l.push(d,W,O)):V===J?(d=E[q=Math.min(W,O)+" "+Math.max(W,O)],s.defined(d)||(F=G.interpolateUsingFraction(.5,L),k=.5*(U.height+_.height),j=i.Cartesian3.fromRadians(F.longitude,F.latitude,k,a,w),m.push(j.x,j.y,j.z),d=m.length/3-1,E[q]=d),l.push(W,d,z),l.push(d,O,z)):H===J&&(d=E[q=Math.min(O,z)+" "+Math.max(O,z)],s.defined(d)||(F=T.interpolateUsingFraction(.5,L),k=.5*(_.height+N.height),j=i.Cartesian3.fromRadians(F.longitude,F.latitude,k,a,w),m.push(j.x,j.y,j.z),d=m.length/3-1,E[q]=d),l.push(O,d,W),l.push(d,z,W)):(b.push(z),b.push(W),b.push(O))}return new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})},indices:b,primitiveType:h.PrimitiveType.TRIANGLES})},y.scaleToGeodeticHeight=function(a,e,r,n){r=s.defaultValue(r,t.Ellipsoid.WGS84);var o=m,u=c;if(e=s.defaultValue(e,0),n=s.defaultValue(n,!0),s.defined(a))for(var p=a.length,h=0;h<p;h+=3)i.Cartesian3.fromArray(a,h,u),n&&(u=r.scaleToGeodeticSurface(u,u)),0!==e&&(o=r.geodeticSurfaceNormal(u,o),i.Cartesian3.multiplyByScalar(o,e,o),i.Cartesian3.add(u,o,u)),a[h]=u.x,a[h+1]=u.y,a[h+2]=u.z;return a},a.PolygonPipeline=y,a.WindingOrder=C}));