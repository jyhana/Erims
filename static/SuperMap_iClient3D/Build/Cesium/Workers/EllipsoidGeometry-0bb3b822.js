define(["exports","./arrayFill-4513d7ad","./BoundingSphere-561b54d0","./Cartesian2-47311507","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./when-b60132fc","./Check-7b2a090c","./GeometryAttribute-3a42bbdc","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3","./PrimitiveType-39acab88","./VertexFormat-6446fca0"],(function(t,e,a,i,r,n,o,m,s,u,l,f,c,d,C){"use strict";var p=new r.Cartesian3,y=new r.Cartesian3,_=new r.Cartesian3,v=new r.Cartesian3,h=new r.Cartesian3,A=new r.Cartesian3(1,1,1),b=Math.cos,x=Math.sin;function k(t){t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT);var e=o.defaultValue(t.radii,A),a=o.defaultValue(t.innerRadii,e),i=o.defaultValue(t.minimumClock,0),n=o.defaultValue(t.maximumClock,c.CesiumMath.TWO_PI),m=o.defaultValue(t.minimumCone,0),s=o.defaultValue(t.maximumCone,c.CesiumMath.PI),u=Math.round(o.defaultValue(t.stackPartitions,64)),l=Math.round(o.defaultValue(t.slicePartitions,64)),f=o.defaultValue(t.vertexFormat,C.VertexFormat.DEFAULT);this._radii=r.Cartesian3.clone(e),this._innerRadii=r.Cartesian3.clone(a),this._minimumClock=i,this._maximumClock=n,this._minimumCone=m,this._maximumCone=s,this._stackPartitions=u,this._slicePartitions=l,this._vertexFormat=C.VertexFormat.clone(f),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}k.packedLength=2*r.Cartesian3.packedLength+C.VertexFormat.packedLength+7,k.pack=function(t,e,a){return a=o.defaultValue(a,0),r.Cartesian3.pack(t._radii,e,a),a+=r.Cartesian3.packedLength,r.Cartesian3.pack(t._innerRadii,e,a),a+=r.Cartesian3.packedLength,C.VertexFormat.pack(t._vertexFormat,e,a),a+=C.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=o.defaultValue(t._offsetAttribute,-1),e};var w,F=new r.Cartesian3,g=new r.Cartesian3,P=new C.VertexFormat,V={radii:F,innerRadii:g,vertexFormat:P,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};k.unpack=function(t,e,a){e=o.defaultValue(e,0);var i=r.Cartesian3.unpack(t,e,F);e+=r.Cartesian3.packedLength;var n=r.Cartesian3.unpack(t,e,g);e+=r.Cartesian3.packedLength;var m=C.VertexFormat.unpack(t,e,P);e+=C.VertexFormat.packedLength;var s=t[e++],u=t[e++],l=t[e++],f=t[e++],c=t[e++],d=t[e++],p=t[e];return o.defined(a)?(a._radii=r.Cartesian3.clone(i,a._radii),a._innerRadii=r.Cartesian3.clone(n,a._innerRadii),a._vertexFormat=C.VertexFormat.clone(m,a._vertexFormat),a._minimumClock=s,a._maximumClock=u,a._minimumCone=l,a._maximumCone=f,a._stackPartitions=c,a._slicePartitions=d,a._offsetAttribute=-1===p?void 0:p,a):(V.minimumClock=s,V.maximumClock=u,V.minimumCone=l,V.maximumCone=f,V.stackPartitions=c,V.slicePartitions=d,V.offsetAttribute=-1===p?void 0:p,new k(V))},k.createGeometry=function(t){var m=t._radii;if(!(m.x<=0||m.y<=0||m.z<=0)){var C=t._innerRadii;if(!(C.x<=0||C.y<=0||C.z<=0)){var A,k,w=t._minimumClock,F=t._maximumClock,g=t._minimumCone,P=t._maximumCone,V=t._vertexFormat,M=t._slicePartitions+1,T=t._stackPartitions+1;(M=Math.round(M*Math.abs(F-w)/c.CesiumMath.TWO_PI))<2&&(M=2),(T=Math.round(T*Math.abs(P-g)/c.CesiumMath.PI))<2&&(T=2);var D=0,G=[g],L=[w];for(A=0;A<T;A++)G.push(g+A*(P-g)/(T-1));for(G.push(P),k=0;k<M;k++)L.push(w+k*(F-w)/(M-1));L.push(F);var O=G.length,I=L.length,E=0,z=1,N=C.x!==m.x||C.y!==m.y||C.z!==m.z,R=!1,S=!1,U=!1;N&&(z=2,g>0&&(R=!0,E+=M-1),P<Math.PI&&(S=!0,E+=M-1),(F-w)%c.CesiumMath.TWO_PI?(U=!0,E+=2*(T-1)+1):E+=1);var B=I*O*z,W=new Float64Array(3*B),Y=e.arrayFill(new Array(B),!1),J=e.arrayFill(new Array(B),!1),X=M*T*z,Z=6*(X+E+1-(M+T)*z),j=f.IndexDatatype.createTypedArray(X,Z),q=V.normal?new Float32Array(3*B):void 0,H=V.tangent?new Float32Array(3*B):void 0,K=V.bitangent?new Float32Array(3*B):void 0,Q=V.st?new Float32Array(2*B):void 0,$=new Array(O),tt=new Array(O);for(A=0;A<O;A++)$[A]=x(G[A]),tt[A]=b(G[A]);var et=new Array(I),at=new Array(I);for(k=0;k<I;k++)at[k]=b(L[k]),et[k]=x(L[k]);for(A=0;A<O;A++)for(k=0;k<I;k++)W[D++]=m.x*$[A]*at[k],W[D++]=m.y*$[A]*et[k],W[D++]=m.z*tt[A];var it,rt,nt,ot,mt=B/2;if(N)for(A=0;A<O;A++)for(k=0;k<I;k++)W[D++]=C.x*$[A]*at[k],W[D++]=C.y*$[A]*et[k],W[D++]=C.z*tt[A],Y[mt]=!0,A>0&&A!==O-1&&0!==k&&k!==I-1&&(J[mt]=!0),mt++;for(D=0,A=1;A<O-2;A++)for(it=A*I,rt=(A+1)*I,k=1;k<I-2;k++)j[D++]=rt+k,j[D++]=rt+k+1,j[D++]=it+k+1,j[D++]=rt+k,j[D++]=it+k+1,j[D++]=it+k;if(N){var st=O*I;for(A=1;A<O-2;A++)for(it=st+A*I,rt=st+(A+1)*I,k=1;k<I-2;k++)j[D++]=rt+k,j[D++]=it+k,j[D++]=it+k+1,j[D++]=rt+k,j[D++]=it+k+1,j[D++]=rt+k+1}if(N){if(R)for(ot=O*I,A=1;A<I-2;A++)j[D++]=A,j[D++]=A+1,j[D++]=ot+A+1,j[D++]=A,j[D++]=ot+A+1,j[D++]=ot+A;if(S)for(nt=O*I-I,ot=O*I*z-I,A=1;A<I-2;A++)j[D++]=nt+A+1,j[D++]=nt+A,j[D++]=ot+A,j[D++]=nt+A+1,j[D++]=ot+A,j[D++]=ot+A+1}if(U){for(A=1;A<O-2;A++)ot=I*O+I*A,nt=I*A,j[D++]=ot,j[D++]=nt+I,j[D++]=nt,j[D++]=ot,j[D++]=ot+I,j[D++]=nt+I;for(A=1;A<O-2;A++)ot=I*O+I*(A+1)-1,nt=I*(A+1)-1,j[D++]=nt+I,j[D++]=ot,j[D++]=nt,j[D++]=nt+I,j[D++]=ot+I,j[D++]=ot}var ut=new u.GeometryAttributes;V.position&&(ut.position=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:W}));var lt,ft=0,ct=0,dt=0,Ct=0,pt=B/2,yt=i.Ellipsoid.fromCartesian3(m),_t=i.Ellipsoid.fromCartesian3(C);if(V.st||V.normal||V.tangent||V.bitangent){for(A=0;A<B;A++){lt=Y[A]?_t:yt;var vt=r.Cartesian3.fromArray(W,3*A,p),ht=lt.geodeticSurfaceNormal(vt,y);if(J[A]&&r.Cartesian3.negate(ht,ht),V.st){var At=i.Cartesian2.negate(ht,h);Q[ft++]=Math.atan2(At.y,At.x)/c.CesiumMath.TWO_PI+.5,Q[ft++]=Math.asin(ht.z)/Math.PI+.5}if(V.normal&&(q[ct++]=ht.x,q[ct++]=ht.y,q[ct++]=ht.z),V.tangent||V.bitangent){var bt,xt=_,kt=0;if(Y[A]&&(kt=pt),bt=!R&&A>=kt&&A<kt+2*I?r.Cartesian3.UNIT_X:r.Cartesian3.UNIT_Z,r.Cartesian3.cross(bt,ht,xt),r.Cartesian3.normalize(xt,xt),V.tangent&&(H[dt++]=xt.x,H[dt++]=xt.y,H[dt++]=xt.z),V.bitangent){var wt=r.Cartesian3.cross(ht,xt,v);r.Cartesian3.normalize(wt,wt),K[Ct++]=wt.x,K[Ct++]=wt.y,K[Ct++]=wt.z}}}V.st&&(ut.st=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:Q})),V.normal&&(ut.normal=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q})),V.tangent&&(ut.tangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H})),V.bitangent&&(ut.bitangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:K}))}if(o.defined(t._offsetAttribute)){var Ft=W.length,gt=new Uint8Array(Ft/3),Pt=t._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(gt,Pt),ut.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:gt})}return new s.Geometry({attributes:ut,indices:j,primitiveType:d.PrimitiveType.TRIANGLES,boundingSphere:a.BoundingSphere.fromEllipsoid(yt),offsetAttribute:t._offsetAttribute})}}},k.getUnitEllipsoid=function(){return o.defined(w)||(w=k.createGeometry(new k({radii:new r.Cartesian3(1,1,1),vertexFormat:C.VertexFormat.POSITION_ONLY}))),w},t.EllipsoidGeometry=k}));
