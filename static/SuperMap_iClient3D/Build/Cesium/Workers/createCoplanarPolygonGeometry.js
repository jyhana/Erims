define(["./arrayRemoveDuplicates-d2f048c5","./BoundingRectangle-01b3e970","./BoundingSphere-561b54d0","./Cartesian2-47311507","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./CoplanarPolygonGeometryLibrary-de8c7233","./when-b60132fc","./GeometryAttribute-3a42bbdc","./GeometryAttributes-252e9929","./GeometryInstance-41780fb6","./GeometryPipeline-e1b82a4e","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonGeometryLibrary-ae9ad77c","./PolygonPipeline-f49953b9","./PrimitiveType-39acab88","./Transforms-cb0006b0","./VertexFormat-6446fca0","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./OrientedBoundingBox-f1d7843f","./EllipsoidTangentPlane-b2b18d75","./IntersectionTests-0c6d0a14","./Plane-097b3a8f","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./ArcType-29cf2197","./EllipsoidRhumbLine-ed1a6bf4","./earcut-2.2.1-20c8012f","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206"],(function(e,t,a,n,r,o,i,l,s,p,c,y,u,m,d,g,b,v,h,f,C,x,P,w,A,F,G,L,E,T,D,_,k,V){"use strict";var R=new r.Cartesian3,M=new t.BoundingRectangle,I=new n.Cartesian2,B=new n.Cartesian2,H=new r.Cartesian3,O=new r.Cartesian3,S=new r.Cartesian3,z=new r.Cartesian3,N=new r.Cartesian3,Q=new r.Cartesian3,U=new h.Quaternion,j=new a.Matrix3,Y=new a.Matrix3,q=new r.Cartesian3;function J(e,t,o,l,s,y,u,g){var f=e.positions,C=b.PolygonPipeline.triangulate(e.positions2D,e.holes);C.length<3&&(C=[0,1,2]);var x=m.IndexDatatype.createTypedArray(f.length,C.length);x.set(C);var P=j;if(0!==l){var w=h.Quaternion.fromAxisAngle(y,l,U);if(P=a.Matrix3.fromQuaternion(w,P),t.tangent||t.bitangent){w=h.Quaternion.fromAxisAngle(y,-l,U);var A=a.Matrix3.fromQuaternion(w,Y);u=r.Cartesian3.normalize(a.Matrix3.multiplyByVector(A,u,u),u),t.bitangent&&(g=r.Cartesian3.normalize(r.Cartesian3.cross(y,u,g),g))}}else P=a.Matrix3.clone(a.Matrix3.IDENTITY,P);var F=B;t.st&&(F.x=o.x,F.y=o.y);for(var G=f.length,L=3*G,E=new Float64Array(L),T=t.normal?new Float32Array(L):void 0,D=t.tangent?new Float32Array(L):void 0,_=t.bitangent?new Float32Array(L):void 0,k=t.st?new Float32Array(2*G):void 0,V=0,M=0,H=0,O=0,S=0,z=0;z<G;z++){var N=f[z];if(E[V++]=N.x,E[V++]=N.y,E[V++]=N.z,t.st){var Q=s(a.Matrix3.multiplyByVector(P,N,R),I);n.Cartesian2.subtract(Q,F,Q);var q=d.CesiumMath.clamp(Q.x/o.width,0,1),J=d.CesiumMath.clamp(Q.y/o.height,0,1);k[S++]=q,k[S++]=J}t.normal&&(T[M++]=y.x,T[M++]=y.y,T[M++]=y.z),t.tangent&&(D[O++]=u.x,D[O++]=u.y,D[O++]=u.z),t.bitangent&&(_[H++]=g.x,_[H++]=g.y,_[H++]=g.z)}var W=new c.GeometryAttributes;return t.position&&(W.position=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:E})),t.normal&&(W.normal=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),t.tangent&&(W.tangent=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),t.bitangent&&(W.bitangent=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:_})),t.st&&(W.st=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:k})),new p.Geometry({attributes:W,indices:x,primitiveType:v.PrimitiveType.TRIANGLES})}function W(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,a=s.defaultValue(e.vertexFormat,f.VertexFormat.DEFAULT);this._vertexFormat=f.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=n.Ellipsoid.clone(s.defaultValue(e.ellipsoid,n.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+f.VertexFormat.packedLength+n.Ellipsoid.packedLength+2}W.fromPositions=function(e){return new W({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},W.pack=function(e,t,a){return a=s.defaultValue(a,0),a=g.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),n.Ellipsoid.pack(e._ellipsoid,t,a),a+=n.Ellipsoid.packedLength,f.VertexFormat.pack(e._vertexFormat,t,a),a+=f.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var Z=n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),K=new f.VertexFormat,X={polygonHierarchy:{}};return W.unpack=function(e,t,a){t=s.defaultValue(t,0);var r=g.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=n.Ellipsoid.unpack(e,t,Z);t+=n.Ellipsoid.packedLength;var i=f.VertexFormat.unpack(e,t,K);t+=f.VertexFormat.packedLength;var l=e[t++],p=e[t];return s.defined(a)||(a=new W(X)),a._polygonHierarchy=r,a._ellipsoid=n.Ellipsoid.clone(o,a._ellipsoid),a._vertexFormat=f.VertexFormat.clone(i,a._vertexFormat),a._stRotation=l,a.packedLength=p,a},W.createGeometry=function(t){var n=t._vertexFormat,o=t._polygonHierarchy,i=t._stRotation,s=o.positions;if(!((s=e.arrayRemoveDuplicates(s,r.Cartesian3.equalsEpsilon,!0)).length<3)){var c=H,b=O,v=S,h=N,f=Q;if(l.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(s,z,h,f)){if(c=r.Cartesian3.cross(h,f,c),c=r.Cartesian3.normalize(c,c),!r.Cartesian3.equalsEpsilon(z,r.Cartesian3.ZERO,d.CesiumMath.EPSILON6)){var C=t._ellipsoid.geodeticSurfaceNormal(z,q);r.Cartesian3.dot(c,C)<0&&(c=r.Cartesian3.negate(c,c),h=r.Cartesian3.negate(h,h))}var x=l.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(z,h,f),P=l.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(z,h,f);n.tangent&&(b=r.Cartesian3.clone(h,b)),n.bitangent&&(v=r.Cartesian3.clone(f,v));var w=g.PolygonGeometryLibrary.polygonsFromHierarchy(o,x,!1),A=w.hierarchy,F=w.polygons;if(0!==A.length){s=A[0].outerRing;for(var G=a.BoundingSphere.fromPoints(s),L=g.PolygonGeometryLibrary.computeBoundingRectangle(c,P,s,i,M),E=[],T=0;T<F.length;T++){var D=new y.GeometryInstance({geometry:J(F[T],n,L,i,P,c,b,v)});E.push(D)}var _=u.GeometryPipeline.combineInstances(E)[0];_.attributes.position.values=new Float64Array(_.attributes.position.values),_.indices=m.IndexDatatype.createTypedArray(_.attributes.position.values.length/3,_.indices);var k=_.attributes;return n.position||delete k.position,new p.Geometry({attributes:k,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:G})}}}},function(e,t){return s.defined(t)&&(e=W.unpack(e,t)),W.createGeometry(e)}}));