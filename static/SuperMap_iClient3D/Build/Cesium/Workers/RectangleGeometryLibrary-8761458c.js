define(["exports","./Cartographic-3309dd0d","./when-b60132fc","./Check-7b2a090c","./BoundingSphere-561b54d0","./Math-119be1a3","./GeometryAttribute-3a42bbdc","./Cartesian2-47311507"],(function(t,n,a,r,e,o,i,s){"use strict";var g=Math.cos,h=Math.sin,u=Math.sqrt,c={computePosition:function(t,n,r,e,o,i,s){var c=n.radiiSquared,C=t.nwCorner,l=t.boundingRectangle,d=C.latitude-t.granYCos*e+o*t.granXSin,S=g(d),w=h(d),M=c.z*w,X=C.longitude+e*t.granYSin+o*t.granXCos,Y=S*g(X),m=S*h(X),p=c.x*Y,v=c.y*m,b=u(p*Y+v*m+M*w);if(i.x=p/b,i.y=v/b,i.z=M/b,r){var f=t.stNwCorner;a.defined(f)?(d=f.latitude-t.stGranYCos*e+o*t.stGranXSin,X=f.longitude+e*t.stGranYSin+o*t.stGranXCos,s.x=(X-t.stWest)*t.lonScalar,s.y=(d-t.stSouth)*t.latScalar):(s.x=(X-l.west)*t.lonScalar,s.y=(d-l.south)*t.latScalar)}}},C=new i.Matrix2,l=new n.Cartesian3,d=new n.Cartographic,S=new n.Cartesian3,w=new e.GeographicProjection;function M(t,a,r,e,o,s,g){var h=Math.cos(a),u=e*h,c=r*h,d=Math.sin(a),M=e*d,X=r*d;l=w.project(t,l),l=n.Cartesian3.subtract(l,S,l);var Y=i.Matrix2.fromRotation(a,C);l=i.Matrix2.multiplyByVector(Y,l,l),l=n.Cartesian3.add(l,S,l),s-=1,g-=1;var m=(t=w.unproject(l,t)).latitude,p=m+s*X,v=m-u*g,b=m-u*g+s*X,f=Math.max(m,p,v,b),G=Math.min(m,p,v,b),x=t.longitude,R=x+s*c,y=x+g*M,O=x+g*M+s*c;return{north:f,south:G,east:Math.max(x,R,y,O),west:Math.min(x,R,y,O),granYCos:u,granYSin:M,granXCos:c,granXSin:X,nwCorner:t}}c.computeOptions=function(t,n,a,r,e,i,g){var h,u,c,C,l,X=t.east,Y=t.west,m=t.north,p=t.south,v=!1,b=!1;m===o.CesiumMath.PI_OVER_TWO&&(v=!0),p===-o.CesiumMath.PI_OVER_TWO&&(b=!0);var f=m-p;c=(l=Y>X?o.CesiumMath.TWO_PI-Y+X:X-Y)/((h=Math.ceil(l/n)+1)-1),C=f/((u=Math.ceil(f/n)+1)-1);var G=s.Rectangle.northwest(t,i),x=s.Rectangle.center(t,d);0===a&&0===r||(x.longitude<G.longitude&&(x.longitude+=o.CesiumMath.TWO_PI),S=w.project(x,S));var R=C,y=c,O=s.Rectangle.clone(t,e),P={granYCos:R,granYSin:0,granXCos:y,granXSin:0,nwCorner:G,boundingRectangle:O,width:h,height:u,northCap:v,southCap:b};if(0!==a){var W=M(G,a,c,C,0,h,u);m=W.north,p=W.south,X=W.east,Y=W.west,P.granYCos=W.granYCos,P.granYSin=W.granYSin,P.granXCos=W.granXCos,P.granXSin=W.granXSin,O.north=m,O.south=p,O.east=X,O.west=Y}if(0!==r){a-=r;var _=s.Rectangle.northwest(O,g),j=M(_,a,c,C,0,h,u);P.stGranYCos=j.granYCos,P.stGranXCos=j.granXCos,P.stGranYSin=j.granYSin,P.stGranXSin=j.granXSin,P.stNwCorner=_,P.stWest=j.west,P.stSouth=j.south}return P},t.RectangleGeometryLibrary=c}));
