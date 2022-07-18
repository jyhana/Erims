define(["./when-b60132fc","./Cartesian2-47311507","./ArcType-29cf2197","./arrayFill-4513d7ad","./BoundingSphere-561b54d0","./Check-7b2a090c","./ComponentDatatype-c140a87d","./EllipsoidTangentPlane-b2b18d75","./GeometryAttribute-3a42bbdc","./GeometryAttributes-252e9929","./GeometryInstance-41780fb6","./GeometryOffsetAttribute-fbeb6f1a","./GeometryPipeline-e1b82a4e","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonGeometryLibrary-ae9ad77c","./PolygonPipeline-f49953b9","./PrimitiveType-39acab88","./Cartographic-3309dd0d","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./IntersectionTests-0c6d0a14","./Plane-097b3a8f","./Transforms-cb0006b0","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./arrayRemoveDuplicates-d2f048c5","./EllipsoidRhumbLine-ed1a6bf4","./earcut-2.2.1-20c8012f"],(function(e,t,i,r,o,n,a,l,s,y,u,p,d,c,f,g,h,m,b,P,v,E,A,_,G,L,T,H,C,O,D,x){"use strict";var I=[],w=[];function S(e,t,r,o,n){var p,d,f=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,I);h.PolygonPipeline.computeWindingOrder2D(f)===h.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());var b=t.length,P=0;if(o)for(p=new Float64Array(2*b*3),d=0;d<b;d++){var v=t[d],E=t[(d+1)%b];p[P++]=v.x,p[P++]=v.y,p[P++]=v.z,p[P++]=E.x,p[P++]=E.y,p[P++]=E.z}else{var A=0;if(n===i.ArcType.GEODESIC)for(d=0;d<b;d++)A+=g.PolygonGeometryLibrary.subdivideLineCount(t[d],t[(d+1)%b],r);else if(n===i.ArcType.RHUMB)for(d=0;d<b;d++)A+=g.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[d],t[(d+1)%b],r);for(p=new Float64Array(3*A),d=0;d<b;d++){var _;n===i.ArcType.GEODESIC?_=g.PolygonGeometryLibrary.subdivideLine(t[d],t[(d+1)%b],r,w):n===i.ArcType.RHUMB&&(_=g.PolygonGeometryLibrary.subdivideRhumbLine(e,t[d],t[(d+1)%b],r,w));for(var G=_.length,L=0;L<G;++L)p[P++]=_[L]}}var T=2*(b=p.length/3),H=c.IndexDatatype.createTypedArray(b,T);for(P=0,d=0;d<b-1;d++)H[P++]=d,H[P++]=d+1;return H[P++]=b-1,H[P++]=0,new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:H,primitiveType:m.PrimitiveType.LINES})})}function k(e,t,r,o,n){var p,d,f=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,I);h.PolygonPipeline.computeWindingOrder2D(f)===h.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());var b=t.length,P=new Array(b),v=0;if(o)for(p=new Float64Array(2*b*3*2),d=0;d<b;++d){P[d]=v/3;var E=t[d],A=t[(d+1)%b];p[v++]=E.x,p[v++]=E.y,p[v++]=E.z,p[v++]=A.x,p[v++]=A.y,p[v++]=A.z}else{var _=0;if(n===i.ArcType.GEODESIC)for(d=0;d<b;d++)_+=g.PolygonGeometryLibrary.subdivideLineCount(t[d],t[(d+1)%b],r);else if(n===i.ArcType.RHUMB)for(d=0;d<b;d++)_+=g.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[d],t[(d+1)%b],r);for(p=new Float64Array(3*_*2),d=0;d<b;++d){var G;P[d]=v/3,n===i.ArcType.GEODESIC?G=g.PolygonGeometryLibrary.subdivideLine(t[d],t[(d+1)%b],r,w):n===i.ArcType.RHUMB&&(G=g.PolygonGeometryLibrary.subdivideRhumbLine(e,t[d],t[(d+1)%b],r,w));for(var L=G.length,T=0;T<L;++T)p[v++]=G[T]}}b=p.length/6;var H=P.length,C=2*(2*b+H),O=c.IndexDatatype.createTypedArray(b,C);for(v=0,d=0;d<b;++d)O[v++]=d,O[v++]=(d+1)%b,O[v++]=d+b,O[v++]=(d+1)%b+b;for(d=0;d<H;d++){var D=P[d];O[v++]=D,O[v++]=D+b}return new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:O,primitiveType:m.PrimitiveType.LINES})})}function R(r){var o=r.polygonHierarchy,n=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),a=e.defaultValue(r.granularity,f.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(r.perPositionHeight,!1),s=l&&e.defined(r.extrudedHeight),y=e.defaultValue(r.arcType,i.ArcType.GEODESIC),u=e.defaultValue(r.height,0),p=e.defaultValue(r.extrudedHeight,u);if(!s){var d=Math.max(u,p);p=Math.min(u,p),u=d}this._ellipsoid=t.Ellipsoid.clone(n),this._granularity=a,this._height=u,this._extrudedHeight=p,this._arcType=y,this._polygonHierarchy=o,this._perPositionHeight=l,this._perPositionHeightExtrude=s,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(o)+t.Ellipsoid.packedLength+8}R.pack=function(i,r,o){return o=e.defaultValue(o,0),o=g.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,r,o),t.Ellipsoid.pack(i._ellipsoid,r,o),o+=t.Ellipsoid.packedLength,r[o++]=i._height,r[o++]=i._extrudedHeight,r[o++]=i._granularity,r[o++]=i._perPositionHeightExtrude?1:0,r[o++]=i._perPositionHeight?1:0,r[o++]=i._arcType,r[o++]=e.defaultValue(i._offsetAttribute,-1),r[o]=i.packedLength,r};var N=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),M={polygonHierarchy:{}};return R.unpack=function(i,r,o){r=e.defaultValue(r,0);var n=g.PolygonGeometryLibrary.unpackPolygonHierarchy(i,r);r=n.startingIndex,delete n.startingIndex;var a=t.Ellipsoid.unpack(i,r,N);r+=t.Ellipsoid.packedLength;var l=i[r++],s=i[r++],y=i[r++],u=1===i[r++],p=1===i[r++],d=i[r++],c=i[r++],f=i[r];return e.defined(o)||(o=new R(M)),o._polygonHierarchy=n,o._ellipsoid=t.Ellipsoid.clone(a,o._ellipsoid),o._height=l,o._extrudedHeight=s,o._granularity=y,o._perPositionHeight=p,o._perPositionHeightExtrude=u,o._arcType=d,o._offsetAttribute=-1===c?void 0:c,o.packedLength=f,o},R.fromPositions=function(t){return new R({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},R.createGeometry=function(t){var i=t._ellipsoid,n=t._granularity,l=t._polygonHierarchy,y=t._perPositionHeight,u=t._arcType,c=g.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(l,!y,i);if(0!==c.length){var m,b,P,v=[],E=f.CesiumMath.chordLength(n,i.maximumRadius),A=t._height,_=t._extrudedHeight;if(t._perPositionHeightExtrude||!f.CesiumMath.equalsEpsilon(A,_,0,f.CesiumMath.EPSILON2))for(P=0;P<c.length;P++){if((m=k(i,c[P],E,y,u)).geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(m.geometry,A,_,i,y),e.defined(t._offsetAttribute)){var G=m.geometry.attributes.position.values.length/3,L=new Uint8Array(G);t._offsetAttribute===p.GeometryOffsetAttribute.TOP?L=r.arrayFill(L,1,0,G/2):(b=t._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,L=r.arrayFill(L,b)),m.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:L})}v.push(m)}else for(P=0;P<c.length;P++){if((m=S(i,c[P],E,y,u)).geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(m.geometry.attributes.position.values,A,i,!y),e.defined(t._offsetAttribute)){var T=m.geometry.attributes.position.values.length,H=new Uint8Array(T/3);b=t._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(H,b),m.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:H})}v.push(m)}var C=d.GeometryPipeline.combineInstances(v)[0],O=o.BoundingSphere.fromVertices(C.attributes.position.values);return new s.Geometry({attributes:C.attributes,indices:C.indices,primitiveType:C.primitiveType,boundingSphere:O,offsetAttribute:t._offsetAttribute})}},function(i,r){return e.defined(r)&&(i=R.unpack(i,r)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),R.createGeometry(i)}}));