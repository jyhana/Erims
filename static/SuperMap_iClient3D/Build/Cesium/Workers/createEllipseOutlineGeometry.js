define(["./Cartographic-3309dd0d","./when-b60132fc","./EllipseOutlineGeometry-66d9a9ca","./Cartesian2-47311507","./Check-7b2a090c","./Math-119be1a3","./arrayFill-4513d7ad","./BoundingSphere-561b54d0","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./ComponentDatatype-c140a87d","./WebGLConstants-4ae0db90","./EllipseGeometryLibrary-134c564a","./Transforms-cb0006b0","./buildModuleUrl-3addfe33","./FeatureDetection-c3b71206","./GeometryAttribute-3a42bbdc","./PrimitiveType-39acab88","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4"],(function(e,t,a,r,i,n,l,o,c,d,b,s,u,p,y,m,f,G,C,E,h){"use strict";return function(i,n){return t.defined(n)&&(i=a.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=r.Ellipsoid.clone(i._ellipsoid),a.EllipseOutlineGeometry.createGeometry(i)}}));