define(["./when-b60132fc","./Cartesian2-47311507","./arrayFill-4513d7ad","./BoundingSphere-561b54d0","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./GeometryAttribute-3a42bbdc","./GeometryAttributes-252e9929","./GeometryInstance-41780fb6","./GeometryOffsetAttribute-fbeb6f1a","./GeometryPipeline-e1b82a4e","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonPipeline-f49953b9","./PrimitiveType-39acab88","./Transforms-cb0006b0","./RectangleGeometryLibrary-8761458c","./VertexFormat-6446fca0","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./IntersectionTests-0c6d0a14","./Plane-097b3a8f","./earcut-2.2.1-20c8012f","./EllipsoidRhumbLine-ed1a6bf4","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206"],(function(t,e,a,r,n,i,o,s,l,u,c,m,d,p,g,y,f,h,b,v,_,A,x,w,C,R,F,E,G,P){"use strict";var V=new n.Cartesian3,L=new n.Cartesian3,D=new n.Cartesian3,M=new n.Cartesian3,T=new e.Rectangle,O=new e.Cartesian2,N=new r.BoundingSphere,S=new r.BoundingSphere;function I(t,e){var a=new s.Geometry({attributes:new l.GeometryAttributes,primitiveType:y.PrimitiveType.TRIANGLES});return a.attributes.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var k=new n.Cartesian3,H=new n.Cartesian3;function z(t,e){var a=t._vertexFormat,i=t._ellipsoid,l=e.height,u=e.width,c=e.northCap,m=e.southCap,p=0,g=l,y=l,f=0;c&&(p=1,y-=1,f+=1),m&&(g-=1,y-=1,f+=1),f+=u*y;for(var b=a.position?new Float64Array(3*f):void 0,v=a.st?new Float32Array(2*f):void 0,_=0,A=0,x=V,w=O,C=Number.MAX_VALUE,R=Number.MAX_VALUE,F=-Number.MAX_VALUE,E=-Number.MAX_VALUE,G=p;G<g;++G)for(var P=0;P<u;++P)h.RectangleGeometryLibrary.computePosition(e,i,a.st,G,P,x,w),b[_++]=x.x,b[_++]=x.y,b[_++]=x.z,a.st&&(v[A++]=w.x,v[A++]=w.y,C=Math.min(C,w.x),R=Math.min(R,w.y),F=Math.max(F,w.x),E=Math.max(E,w.y));if(c&&(h.RectangleGeometryLibrary.computePosition(e,i,a.st,0,0,x,w),b[_++]=x.x,b[_++]=x.y,b[_++]=x.z,a.st&&(v[A++]=w.x,v[A++]=w.y,C=w.x,R=w.y,F=w.x,E=w.y)),m&&(h.RectangleGeometryLibrary.computePosition(e,i,a.st,l-1,0,x,w),b[_++]=x.x,b[_++]=x.y,b[_]=x.z,a.st&&(v[A++]=w.x,v[A]=w.y,C=Math.min(C,w.x),R=Math.min(R,w.y),F=Math.max(F,w.x),E=Math.max(E,w.y))),a.st&&(C<0||R<0||F>1||E>1))for(var T=0;T<v.length;T+=2)v[T]=(v[T]-C)/(F-C),v[T+1]=(v[T+1]-R)/(E-R);var N=function(t,e,a,i){var o=t.length,s=e.normal?new Float32Array(o):void 0,l=e.tangent?new Float32Array(o):void 0,u=e.bitangent?new Float32Array(o):void 0,c=0,m=M,d=D,p=L;if(e.normal||e.tangent||e.bitangent)for(var g=0;g<o;g+=3){var y=n.Cartesian3.fromArray(t,g,V),f=c+1,h=c+2;p=a.geodeticSurfaceNormal(y,p),(e.tangent||e.bitangent)&&(n.Cartesian3.cross(n.Cartesian3.UNIT_Z,p,d),r.Matrix3.multiplyByVector(i,d,d),n.Cartesian3.normalize(d,d),e.bitangent&&n.Cartesian3.normalize(n.Cartesian3.cross(p,d,m),m)),e.normal&&(s[c]=p.x,s[f]=p.y,s[h]=p.z),e.tangent&&(l[c]=d.x,l[f]=d.y,l[h]=d.z),e.bitangent&&(u[c]=m.x,u[f]=m.y,u[h]=m.z),c+=3}return I(e,{positions:t,normals:s,tangents:l,bitangents:u})}(b,a,i,e.tangentRotationMatrix),S=6*(u-1)*(y-1);c&&(S+=3*(u-1)),m&&(S+=3*(u-1));var k,H=d.IndexDatatype.createTypedArray(f,S),z=0,B=0;for(k=0;k<y-1;++k){for(var U=0;U<u-1;++U){var Y=z,q=Y+u,X=q+1,Q=Y+1;H[B++]=Y,H[B++]=q,H[B++]=Q,H[B++]=Q,H[B++]=q,H[B++]=X,++z}++z}if(c||m){var W,J,j=f-1,Z=f-1;if(c&&m&&(j=f-2),z=0,c)for(k=0;k<u-1;k++)J=(W=z)+1,H[B++]=j,H[B++]=W,H[B++]=J,++z;if(m)for(z=(y-1)*u,k=0;k<u-1;k++)J=(W=z)+1,H[B++]=W,H[B++]=Z,H[B++]=J,++z}return N.indices=H,a.st&&(N.attributes.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v})),N}function B(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function U(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var Y=new b.VertexFormat;function q(e,r){var i,l=e._shadowVolume,y=e._offsetAttribute,f=e._vertexFormat,h=e._extrudedHeight,v=e._surfaceHeight,_=e._ellipsoid,A=r.height,x=r.width;if(l){var w=b.VertexFormat.clone(f,Y);w.normal=!0,e._vertexFormat=w}var C=z(e,r);l&&(e._vertexFormat=f);var R=g.PolygonPipeline.scaleToGeodeticHeight(C.attributes.position.values,v,_,!1),F=(R=new Float64Array(R)).length,E=2*F,G=new Float64Array(E);G.set(R);var P=g.PolygonPipeline.scaleToGeodeticHeight(C.attributes.position.values,h,_);G.set(P,F),C.attributes.position.values=G;var T,O,N,S=f.normal?new Float32Array(E):void 0,q=f.tangent?new Float32Array(E):void 0,X=f.bitangent?new Float32Array(E):void 0,Q=f.st?new Float32Array(E/3*2):void 0;if(f.normal){for(O=C.attributes.normal.values,S.set(O),i=0;i<F;i++)O[i]=-O[i];S.set(O,F),C.attributes.normal.values=S}if(l){O=C.attributes.normal.values,f.normal||(C.attributes.normal=void 0);var W=new Float32Array(E);for(i=0;i<F;i++)O[i]=-O[i];W.set(O,F),C.attributes.extrudeDirection=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:W})}var J=t.defined(y);if(J){var j=F/3*2,Z=new Uint8Array(j);y===c.GeometryOffsetAttribute.TOP?Z=a.arrayFill(Z,1,0,j/2):(N=y===c.GeometryOffsetAttribute.NONE?0:1,Z=a.arrayFill(Z,N)),C.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Z})}if(f.tangent){var K=C.attributes.tangent.values;for(q.set(K),i=0;i<F;i++)K[i]=-K[i];q.set(K,F),C.attributes.tangent.values=q}if(f.bitangent){var $=C.attributes.bitangent.values;X.set($),X.set($,F),C.attributes.bitangent.values=X}f.st&&(T=C.attributes.st.values,Q.set(T),Q.set(T,F/3*2),C.attributes.st.values=Q);var tt=C.indices,et=tt.length,at=F/3,rt=d.IndexDatatype.createTypedArray(E/3,2*et);for(rt.set(tt),i=0;i<et;i+=3)rt[i+et]=tt[i+2]+at,rt[i+1+et]=tt[i+1]+at,rt[i+2+et]=tt[i]+at;C.indices=rt;var nt=r.northCap,it=r.southCap,ot=A,st=2,lt=0,ut=4,ct=4;nt&&(st-=1,ot-=1,lt+=1,ut-=2,ct-=1),it&&(st-=1,ot-=1,lt+=1,ut-=2,ct-=1);var mt=2*((lt+=st*x+2*ot-ut)+ct),dt=new Float64Array(3*mt),pt=l?new Float32Array(3*mt):void 0,gt=J?new Uint8Array(mt):void 0,yt=f.st?new Float32Array(2*mt):void 0,ft=y===c.GeometryOffsetAttribute.TOP;J&&!ft&&(N=y===c.GeometryOffsetAttribute.ALL?1:0,gt=a.arrayFill(gt,N));var ht,bt=0,vt=0,_t=0,At=0,xt=x*ot;for(i=0;i<xt;i+=x)dt=B(dt,bt,ht=3*i,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*i,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1);if(it){var wt=nt?xt+1:xt;for(ht=3*wt,i=0;i<2;i++)dt=B(dt,bt,ht,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*wt,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1)}else for(i=xt-x;i<xt;i++)dt=B(dt,bt,ht=3*i,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*i,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1);for(i=xt-1;i>0;i-=x)dt=B(dt,bt,ht=3*i,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*i,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1);if(nt){var Ct=xt;for(ht=3*Ct,i=0;i<2;i++)dt=B(dt,bt,ht,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*Ct,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1)}else for(i=x-1;i>=0;i--)dt=B(dt,bt,ht=3*i,R,P),bt+=6,f.st&&(yt=U(yt,vt,2*i,T),vt+=4),l&&(_t+=3,pt[_t++]=O[ht],pt[_t++]=O[ht+1],pt[_t++]=O[ht+2]),ft&&(gt[At++]=1,At+=1);var Rt=function(t,e,a){var r=t.length,i=e.normal?new Float32Array(r):void 0,o=e.tangent?new Float32Array(r):void 0,s=e.bitangent?new Float32Array(r):void 0,l=0,u=0,c=0,m=!0,d=M,g=D,y=L;if(e.normal||e.tangent||e.bitangent)for(var f=0;f<r;f+=6){var h=n.Cartesian3.fromArray(t,f,V),b=n.Cartesian3.fromArray(t,(f+6)%r,k);if(m){var v=n.Cartesian3.fromArray(t,(f+3)%r,H);n.Cartesian3.subtract(b,h,b),n.Cartesian3.subtract(v,h,v),y=n.Cartesian3.normalize(n.Cartesian3.cross(v,b,y),y),m=!1}n.Cartesian3.equalsEpsilon(b,h,p.CesiumMath.EPSILON10)&&(m=!0),(e.tangent||e.bitangent)&&(d=a.geodeticSurfaceNormal(h,d),e.tangent&&(g=n.Cartesian3.normalize(n.Cartesian3.cross(d,y,g),g))),e.normal&&(i[l++]=y.x,i[l++]=y.y,i[l++]=y.z,i[l++]=y.x,i[l++]=y.y,i[l++]=y.z),e.tangent&&(o[u++]=g.x,o[u++]=g.y,o[u++]=g.z,o[u++]=g.x,o[u++]=g.y,o[u++]=g.z),e.bitangent&&(s[c++]=d.x,s[c++]=d.y,s[c++]=d.z,s[c++]=d.x,s[c++]=d.y,s[c++]=d.z)}return I(e,{positions:t,normals:i,tangents:o,bitangents:s})}(dt,f,_);f.st&&(Rt.attributes.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:yt})),l&&(Rt.attributes.extrudeDirection=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:pt})),J&&(Rt.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:gt}));var Ft,Et,Gt,Pt,Vt=d.IndexDatatype.createTypedArray(mt,6*lt);F=dt.length/3;var Lt=0;for(i=0;i<F-1;i+=2){Pt=((Ft=i)+2)%F;var Dt=n.Cartesian3.fromArray(dt,3*Ft,k),Mt=n.Cartesian3.fromArray(dt,3*Pt,H);n.Cartesian3.equalsEpsilon(Dt,Mt,p.CesiumMath.EPSILON10)||(Gt=((Et=(Ft+1)%F)+2)%F,Vt[Lt++]=Ft,Vt[Lt++]=Et,Vt[Lt++]=Pt,Vt[Lt++]=Pt,Vt[Lt++]=Et,Vt[Lt++]=Gt)}return Rt.indices=Vt,(Rt=m.GeometryPipeline.combineInstances([new u.GeometryInstance({geometry:C}),new u.GeometryInstance({geometry:Rt})]))[0]}var X=[new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3],Q=new n.Cartographic,W=new n.Cartographic;function J(t,a,r,n,i){if(0===r)return e.Rectangle.clone(t,i);var o=h.RectangleGeometryLibrary.computeOptions(t,a,r,0,T,Q),s=o.height,l=o.width,u=X;return h.RectangleGeometryLibrary.computePosition(o,n,!1,0,0,u[0]),h.RectangleGeometryLibrary.computePosition(o,n,!1,0,l-1,u[1]),h.RectangleGeometryLibrary.computePosition(o,n,!1,s-1,0,u[2]),h.RectangleGeometryLibrary.computePosition(o,n,!1,s-1,l-1,u[3]),e.Rectangle.fromCartesianArray(u,n,i)}function j(a){var r=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,n=t.defaultValue(a.height,0),i=t.defaultValue(a.extrudedHeight,n);this._rectangle=e.Rectangle.clone(r),this._granularity=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(n,i),this._rotation=t.defaultValue(a.rotation,0),this._stRotation=t.defaultValue(a.stRotation,0),this._vertexFormat=b.VertexFormat.clone(t.defaultValue(a.vertexFormat,b.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(n,i),this._shadowVolume=t.defaultValue(a.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=a.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}j.packedLength=e.Rectangle.packedLength+e.Ellipsoid.packedLength+b.VertexFormat.packedLength+7,j.pack=function(a,r,n){return n=t.defaultValue(n,0),e.Rectangle.pack(a._rectangle,r,n),n+=e.Rectangle.packedLength,e.Ellipsoid.pack(a._ellipsoid,r,n),n+=e.Ellipsoid.packedLength,b.VertexFormat.pack(a._vertexFormat,r,n),n+=b.VertexFormat.packedLength,r[n++]=a._granularity,r[n++]=a._surfaceHeight,r[n++]=a._rotation,r[n++]=a._stRotation,r[n++]=a._extrudedHeight,r[n++]=a._shadowVolume?1:0,r[n]=t.defaultValue(a._offsetAttribute,-1),r};var Z=new e.Rectangle,K=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),$={rectangle:Z,ellipsoid:K,vertexFormat:Y,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};j.unpack=function(a,r,n){r=t.defaultValue(r,0);var i=e.Rectangle.unpack(a,r,Z);r+=e.Rectangle.packedLength;var o=e.Ellipsoid.unpack(a,r,K);r+=e.Ellipsoid.packedLength;var s=b.VertexFormat.unpack(a,r,Y);r+=b.VertexFormat.packedLength;var l=a[r++],u=a[r++],c=a[r++],m=a[r++],d=a[r++],p=1===a[r++],g=a[r];return t.defined(n)?(n._rectangle=e.Rectangle.clone(i,n._rectangle),n._ellipsoid=e.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=b.VertexFormat.clone(s,n._vertexFormat),n._granularity=l,n._surfaceHeight=u,n._rotation=c,n._stRotation=m,n._extrudedHeight=d,n._shadowVolume=p,n._offsetAttribute=-1===g?void 0:g,n):($.granularity=l,$.height=u,$.rotation=c,$.stRotation=m,$.extrudedHeight=d,$.shadowVolume=p,$.offsetAttribute=-1===g?void 0:g,new j($))},j.computeRectangle=function(a,r){var n=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),o=t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84);return J(n,i,t.defaultValue(a.rotation,0),o,r)};var tt=new r.Matrix3,et=new f.Quaternion,at=new n.Cartographic;j.createGeometry=function(n){if(!p.CesiumMath.equalsEpsilon(n._rectangle.north,n._rectangle.south,p.CesiumMath.EPSILON10)&&!p.CesiumMath.equalsEpsilon(n._rectangle.east,n._rectangle.west,p.CesiumMath.EPSILON10)){var i=n._rectangle,l=n._ellipsoid,u=n._rotation,m=n._stRotation,d=n._vertexFormat,y=h.RectangleGeometryLibrary.computeOptions(i,n._granularity,u,m,T,Q,W),b=tt;if(0!==m||0!==u){var v=e.Rectangle.center(i,at),_=l.geodeticSurfaceNormalCartographic(v,k);f.Quaternion.fromAxisAngle(_,-m,et),r.Matrix3.fromQuaternion(et,b)}else r.Matrix3.clone(r.Matrix3.IDENTITY,b);var A,x,w=n._surfaceHeight,C=n._extrudedHeight,R=!p.CesiumMath.equalsEpsilon(w,C,0,p.CesiumMath.EPSILON2);if(y.lonScalar=1/n._rectangle.width,y.latScalar=1/n._rectangle.height,y.tangentRotationMatrix=b,i=n._rectangle,R){A=q(n,y);var F=r.BoundingSphere.fromRectangle3D(i,l,w,S),E=r.BoundingSphere.fromRectangle3D(i,l,C,N);x=r.BoundingSphere.union(F,E)}else{if((A=z(n,y)).attributes.position.values=g.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,w,l,!1),t.defined(n._offsetAttribute)){var G=A.attributes.position.values.length,P=new Uint8Array(G/3),V=n._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1;a.arrayFill(P,V),A.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:P})}x=r.BoundingSphere.fromRectangle3D(i,l,w)}return d.position||delete A.attributes.position,new s.Geometry({attributes:A.attributes,indices:A.indices,primitiveType:A.primitiveType,boundingSphere:x,offsetAttribute:n._offsetAttribute})}},j.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid,i=e(r,n),o=a(r,n);return new j({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:o,height:i,vertexFormat:b.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var rt=new e.Rectangle,nt=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],it=new s.Matrix2,ot=new n.Cartographic;return Object.defineProperties(j.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=J(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var a=e.Rectangle.clone(t._rectangle,rt),r=t._granularity,n=t._ellipsoid,i=J(a,r,t._rotation-t._stRotation,n,rt),o=nt;o[0].x=i.west,o[0].y=i.south,o[1].x=i.west,o[1].y=i.north,o[2].x=i.east,o[2].y=i.south;for(var l=t.rectangle,u=s.Matrix2.fromRotation(t._stRotation,it),c=e.Rectangle.center(l,ot),m=0;m<3;++m){var d=o[m];d.x-=c.longitude,d.y-=c.latitude,s.Matrix2.multiplyByVector(u,d,d),d.x+=c.longitude,d.y+=c.latitude,d.x=(d.x-l.west)/l.width,d.y=(d.y-l.south)/l.height}var p=o[0],g=o[1],y=o[2],f=new Array(6);return e.Cartesian2.pack(p,f),e.Cartesian2.pack(g,f,2),e.Cartesian2.pack(y,f,4),f}(this)),this._textureCoordinateRotationPoints}}}),function(a,r){return t.defined(r)&&(a=j.unpack(a,r)),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),a._rectangle=e.Rectangle.clone(a._rectangle),j.createGeometry(a)}}));
