define(["exports","./Cartographic-3309dd0d","./Math-119be1a3","./BoundingSphere-561b54d0","./Transforms-cb0006b0"],(function(a,r,e,i,t){"use strict";var n={},s=new r.Cartesian3,o=new r.Cartesian3,l=new t.Quaternion,C=new i.Matrix3;function y(a,e,n,y,u,h,m,c,x,M){var d=a+e;r.Cartesian3.multiplyByScalar(y,Math.cos(d),s),r.Cartesian3.multiplyByScalar(n,Math.sin(d),o),r.Cartesian3.add(s,o,s);var z=Math.cos(a);z*=z;var f=Math.sin(a);f*=f;var _=h/Math.sqrt(m*z+u*f)/c;return t.Quaternion.fromAxisAngle(s,_,l),i.Matrix3.fromQuaternion(l,C),i.Matrix3.multiplyByVector(C,x,M),r.Cartesian3.normalize(M,M),r.Cartesian3.multiplyByScalar(M,c,M),M}var u=new r.Cartesian3,h=new r.Cartesian3,m=new r.Cartesian3,c=new r.Cartesian3;n.raisePositionsToHeight=function(a,e,i){for(var t=e.ellipsoid,n=e.height,s=e.extrudedHeight,o=i?a.length/3*2:a.length/3,l=new Float64Array(3*o),C=a.length,y=i?C:0,x=0;x<C;x+=3){var M=x+1,d=x+2,z=r.Cartesian3.fromArray(a,x,u);t.scaleToGeodeticSurface(z,z);var f=r.Cartesian3.clone(z,h),_=t.geodeticSurfaceNormal(z,c),p=r.Cartesian3.multiplyByScalar(_,n,m);r.Cartesian3.add(z,p,z),i&&(r.Cartesian3.multiplyByScalar(_,s,p),r.Cartesian3.add(f,p,f),l[x+y]=f.x,l[M+y]=f.y,l[d+y]=f.z),l[x]=z.x,l[M]=z.y,l[d]=z.z}return l};var x=new r.Cartesian3,M=new r.Cartesian3,d=new r.Cartesian3;n.computeEllipsePositions=function(a,i,t){var n=a.semiMinorAxis,s=a.semiMajorAxis,o=a.rotation,l=a.center,C=8*a.granularity,c=n*n,z=s*s,f=s*n,_=r.Cartesian3.magnitude(l),p=r.Cartesian3.normalize(l,x),v=r.Cartesian3.cross(r.Cartesian3.UNIT_Z,l,M);v=r.Cartesian3.normalize(v,v);var O=r.Cartesian3.cross(p,v,d),w=1+Math.ceil(e.CesiumMath.PI_OVER_TWO/C),P=e.CesiumMath.PI_OVER_TWO/(w-1),g=e.CesiumMath.PI_OVER_TWO-w*P;g<0&&(w-=Math.ceil(Math.abs(g)/P));var T,I,E,V,A,R=i?new Array(3*(w*(w+2)*2)):void 0,S=0,W=u,B=h,b=4*w*3,Q=b-1,G=0,H=t?new Array(b):void 0;for(W=y(g=e.CesiumMath.PI_OVER_TWO,o,O,v,c,f,z,_,p,W),i&&(R[S++]=W.x,R[S++]=W.y,R[S++]=W.z),t&&(H[Q--]=W.z,H[Q--]=W.y,H[Q--]=W.x),g=e.CesiumMath.PI_OVER_TWO-P,T=1;T<w+1;++T){if(W=y(g,o,O,v,c,f,z,_,p,W),B=y(Math.PI-g,o,O,v,c,f,z,_,p,B),i){for(R[S++]=W.x,R[S++]=W.y,R[S++]=W.z,E=2*T+2,I=1;I<E-1;++I)V=I/(E-1),A=r.Cartesian3.lerp(W,B,V,m),R[S++]=A.x,R[S++]=A.y,R[S++]=A.z;R[S++]=B.x,R[S++]=B.y,R[S++]=B.z}t&&(H[Q--]=W.z,H[Q--]=W.y,H[Q--]=W.x,H[G++]=B.x,H[G++]=B.y,H[G++]=B.z),g=e.CesiumMath.PI_OVER_TWO-(T+1)*P}for(T=w;T>1;--T){if(W=y(-(g=e.CesiumMath.PI_OVER_TWO-(T-1)*P),o,O,v,c,f,z,_,p,W),B=y(g+Math.PI,o,O,v,c,f,z,_,p,B),i){for(R[S++]=W.x,R[S++]=W.y,R[S++]=W.z,E=2*(T-1)+2,I=1;I<E-1;++I)V=I/(E-1),A=r.Cartesian3.lerp(W,B,V,m),R[S++]=A.x,R[S++]=A.y,R[S++]=A.z;R[S++]=B.x,R[S++]=B.y,R[S++]=B.z}t&&(H[Q--]=W.z,H[Q--]=W.y,H[Q--]=W.x,H[G++]=B.x,H[G++]=B.y,H[G++]=B.z)}W=y(-(g=e.CesiumMath.PI_OVER_TWO),o,O,v,c,f,z,_,p,W);var N={};return i&&(R[S++]=W.x,R[S++]=W.y,R[S++]=W.z,N.positions=R,N.numPts=w),t&&(H[Q--]=W.z,H[Q--]=W.y,H[Q--]=W.x,N.outerPositions=H),N},a.EllipseGeometryLibrary=n}));