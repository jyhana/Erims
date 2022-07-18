define(["./when-b60132fc","./Cartesian2-47311507","./arrayRemoveDuplicates-d2f048c5","./BoundingRectangle-01b3e970","./BoundingSphere-561b54d0","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./PolylineVolumeGeometryLibrary-3333255c","./Check-7b2a090c","./GeometryAttribute-3a42bbdc","./GeometryAttributes-252e9929","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonPipeline-f49953b9","./PrimitiveType-39acab88","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./EllipsoidTangentPlane-b2b18d75","./IntersectionTests-0c6d0a14","./Plane-097b3a8f","./Transforms-cb0006b0","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206","./PolylinePipeline-971d8853","./EllipsoidGeodesic-0f19ac62","./EllipsoidRhumbLine-ed1a6bf4","./earcut-2.2.1-20c8012f"],(function(e,i,a,t,n,r,o,l,s,p,d,c,u,y,h,g,f,m,b,v,E,P,_,C,k,L,T,D){"use strict";function G(a){var t=(a=e.defaultValue(a,e.defaultValue.EMPTY_OBJECT)).polylinePositions,n=a.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=i.Ellipsoid.clone(e.defaultValue(a.ellipsoid,i.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(a.cornerType,l.CornerType.ROUNDED),this._granularity=e.defaultValue(a.granularity,u.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var o=1+t.length*r.Cartesian3.packedLength;o+=1+n.length*i.Cartesian2.packedLength,this.packedLength=o+i.Ellipsoid.packedLength+2}G.pack=function(a,t,n){var o;n=e.defaultValue(n,0);var l=a._positions,s=l.length;for(t[n++]=s,o=0;o<s;++o,n+=r.Cartesian3.packedLength)r.Cartesian3.pack(l[o],t,n);var p=a._shape;for(s=p.length,t[n++]=s,o=0;o<s;++o,n+=i.Cartesian2.packedLength)i.Cartesian2.pack(p[o],t,n);return i.Ellipsoid.pack(a._ellipsoid,t,n),n+=i.Ellipsoid.packedLength,t[n++]=a._cornerType,t[n]=a._granularity,t};var R=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),V={polylinePositions:void 0,shapePositions:void 0,ellipsoid:R,height:void 0,cornerType:void 0,granularity:void 0};G.unpack=function(a,t,n){var o;t=e.defaultValue(t,0);var l=a[t++],s=new Array(l);for(o=0;o<l;++o,t+=r.Cartesian3.packedLength)s[o]=r.Cartesian3.unpack(a,t);l=a[t++];var p=new Array(l);for(o=0;o<l;++o,t+=i.Cartesian2.packedLength)p[o]=i.Cartesian2.unpack(a,t);var d=i.Ellipsoid.unpack(a,t,R);t+=i.Ellipsoid.packedLength;var c=a[t++],u=a[t];return e.defined(n)?(n._positions=s,n._shape=p,n._ellipsoid=i.Ellipsoid.clone(d,n._ellipsoid),n._cornerType=c,n._granularity=u,n):(V.polylinePositions=s,V.shapePositions=p,V.cornerType=c,V.granularity=u,new G(V))};var A=new t.BoundingRectangle;return G.createGeometry=function(e){var i=e._positions,s=a.arrayRemoveDuplicates(i,r.Cartesian3.equalsEpsilon),u=e._shape;if(u=l.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(u),!(s.length<2||u.length<3)){y.PolygonPipeline.computeWindingOrder2D(u)===y.WindingOrder.CLOCKWISE&&u.reverse();var g=t.BoundingRectangle.fromPoints(u,A);return function(e,i){var a=new d.GeometryAttributes;a.position=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var t,r,l=i.length,s=a.position.values.length/3,u=e.length/3/l,y=c.IndexDatatype.createTypedArray(s,2*l*(u+1)),g=0,f=(t=0)*l;for(r=0;r<l-1;r++)y[g++]=r+f,y[g++]=r+f+1;for(y[g++]=l-1+f,y[g++]=f,f=(t=u-1)*l,r=0;r<l-1;r++)y[g++]=r+f,y[g++]=r+f+1;for(y[g++]=l-1+f,y[g++]=f,t=0;t<u-1;t++){var m=l*t,b=m+l;for(r=0;r<l;r++)y[g++]=r+m,y[g++]=r+b}return new p.Geometry({attributes:a,indices:c.IndexDatatype.createTypedArray(s,y),boundingSphere:n.BoundingSphere.fromVertices(e),primitiveType:h.PrimitiveType.LINES})}(l.PolylineVolumeGeometryLibrary.computePositions(s,u,g,e,!1),u)}},function(a,t){return e.defined(t)&&(a=G.unpack(a,t)),a._ellipsoid=i.Ellipsoid.clone(a._ellipsoid),G.createGeometry(a)}}));
