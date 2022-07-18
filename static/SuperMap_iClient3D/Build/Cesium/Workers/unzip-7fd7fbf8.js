define(["exports"],(function(e){"use strict";if("undefined"!=typeof WebAssembly&&"object"!=typeof window){var t,n=void 0!==n?n:{},r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);n.arguments=[],n.thisProgram="./this.program",n.quit=function(e,t){throw t},n.preRun=[],n.postRun=[];var i=!1,o=!1,a=!1,s=!1;if(i="object"==typeof window,o="function"==typeof importScripts,a="object"==typeof process&&"function"==typeof require&&!i&&!o,s=!i&&!a&&!o,n.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");var u,l,d="";if(a)d=__dirname+"/",n.read=function(e,t){var n;return u||(u=require("fs")),l||(l=require("path")),e=l.normalize(e),n=u.readFileSync(e),t?n:n.toString()},n.readBinary=function(e){var t=n.read(e,!0);return t.buffer||(t=new Uint8Array(t)),ye(t.buffer),t},process.argv.length>1&&(n.thisProgram=process.argv[1].replace(/\\/g,"/")),n.arguments=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=n),process.on("uncaughtException",(function(e){if(!(e instanceof rt))throw e})),process.on("unhandledRejection",ot),n.quit=function(e){process.exit(e)},n.inspect=function(){return"[Emscripten Module object]"};else if(s)"undefined"!=typeof read&&(n.read=function(e){return read(e)}),n.readBinary=function(e){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(ye("object"==typeof(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs?n.arguments=scriptArgs:void 0!==arguments&&(n.arguments=arguments),"function"==typeof quit&&(n.quit=function(e){quit(e)});else{if(!i&&!o)throw new Error("environment detection error");o?d=self.location.href:document.currentScript&&(d=document.currentScript.src),d=0!==d.indexOf("blob:")?d.substr(0,d.indexOf("/Workers")+1):"",n.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},o&&(n.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),n.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},n.setWindowTitle=function(e){document.title=e}}var c=n.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),f=n.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||c);for(t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);function he(e){he.shown||(he.shown={}),he.shown[e]||(he.shown[e]=1)}r=void 0,ye(void 0===n.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),ye(void 0===n.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),ye(void 0===n.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),ye(void 0===n.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),Ee=fe=ce=function(){ot("cannot use the stack before compiled code is ready to run, and has provided stack access")};var E={"f64-rem":function(e,t){return e%t},debugger:function(){}};new Array(0);var T,_=0,p=function(e){_=e},h=function(){return _};function me(e,t,n){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return w[e>>0];case"i16":return A[e>>1];case"i32":case"i64":return O[e>>2];case"float":return S[e>>2];case"double":return b[e>>3];default:ot("invalid type for getValue: "+t)}return null}"object"!=typeof WebAssembly&&ot("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");var m=!1;function ye(e,t){e||ot("Assertion failed: "+t)}function Re(e){var t=n["_"+e];return ye(t,"Cannot call unknown function "+e+", make sure it is exported"),t}function we(e,t,n,r,i){var o={string:function(e){var t=0;if(null!=e&&0!==e){var n=1+(e.length<<2);Se(e,t=ce(n),n)}return t},array:function(e){var t=ce(e.length);return be(e,t),t}};var a=Re(e),s=[],u=0;if(ye("array"!==t,'Return type should not be "array".'),r)for(var l=0;l<r.length;l++){var d=o[n[l]];d?(0===u&&(u=Ee()),s[l]=d(r[l])):s[l]=r[l]}var c=a.apply(null,s);return c=function(e){return"string"===t?Oe(e):"boolean"===t?Boolean(e):e}(c),0!==u&&fe(u),c}function ge(e,t,n,r){return function(){return we(e,t,n,arguments)}}var y="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Ae(e,t,n){for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.subarray&&y)return y.decode(e.subarray(t,i));for(var o="";t<i;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var u=63&e[t++];if(224==(240&a)?a=(15&a)<<12|s<<6|u:(240!=(248&a)&&he("Invalid UTF-8 leading byte 0x"+a.toString(16)+" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"),a=(7&a)<<18|s<<12|u<<6|63&e[t++]),a<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}function Oe(e,t){return e?Ae(g,e,t):""}function Me(e,t,n,r){if(!(r>0))return 0;for(var i=n,o=n+r-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343)s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a);if(s<=127){if(n>=o)break;t[n++]=s}else if(s<=2047){if(n+1>=o)break;t[n++]=192|s>>6,t[n++]=128|63&s}else if(s<=65535){if(n+2>=o)break;t[n++]=224|s>>12,t[n++]=128|s>>6&63,t[n++]=128|63&s}else{if(n+3>=o)break;s>=2097152&&he("Invalid Unicode code point 0x"+s.toString(16)+" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF)."),t[n++]=240|s>>18,t[n++]=128|s>>12&63,t[n++]=128|s>>6&63,t[n++]=128|63&s}}return t[n]=0,n-i}function Se(e,t,n){return ye("number"==typeof n,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Me(e,g,t,n)}function be(e,t){ye(e.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),w.set(e,t)}function Fe(){var e=new Error;if(!e.stack){try{throw new Error(0)}catch(t){e=t}if(!e.stack)return"(no stack trace available)"}return e.stack.toString()}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var R,w,g,A,O,M,S,b,F=65536;function ve(e,t){return e%t>0&&(e+=t-e%t),e}function Ie(){n.HEAP8=w=new Int8Array(R),n.HEAP16=A=new Int16Array(R),n.HEAP32=O=new Int32Array(R),n.HEAPU8=g=new Uint8Array(R),n.HEAPU16=new Uint16Array(R),n.HEAPU32=M=new Uint32Array(R),n.HEAPF32=S=new Float32Array(R),n.HEAPF64=b=new Float64Array(R)}var v=15104,I=5257984,N=5257984,x=15072;ye(v%16==0,"stack must start aligned"),ye(N%16==0,"heap must start aligned");var D=5242880;n.TOTAL_STACK&&ye(D===n.TOTAL_STACK,"the stack size can no longer be determined at runtime");var U=n.TOTAL_MEMORY||16777216;function Ne(){34821223==M[(I>>2)-1]&&2310721022==M[(I>>2)-2]||ot("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x"+M[(I>>2)-2].toString(16)+" "+M[(I>>2)-1].toString(16)),1668509029!==O[0]&&ot("Runtime error: The application has corrupted its heap memory area (address zero)!")}function xe(e){ot("Stack overflow! Attempted to allocate "+e+" bytes on the stack, but stack has only "+(I-Ee()+e)+" bytes available!")}if(U<D&&f("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+U+"! (TOTAL_STACK="+D+")"),ye("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&void 0!==Int32Array.prototype.subarray&&void 0!==Int32Array.prototype.set,"JS engine does not provide full typed array support"),n.buffer?ye((R=n.buffer).byteLength===U,"provided buffer should be "+U+" bytes, but it is "+R.byteLength):("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(ye(U%F==0),T=new WebAssembly.Memory({initial:U/F}),R=T.buffer):R=new ArrayBuffer(U),ye(R.byteLength===U)),Ie(),O[x>>2]=N,O[0]=1668509029,A[1]=25459,115!==g[2]||99!==g[3])throw"Runtime error: expected the system to be little-endian!";function De(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?n.dynCall_v(r):n.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}var X=[],P=[],L=[],k=[],H=!1,C=!1;function Ue(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),X.unshift(e);var e;De(X)}function Xe(){if(Ne(),n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),k.unshift(e);var e;De(k)}ye(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),ye(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),ye(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),ye(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var Q=0,B=null,Y=null,W={};function Pe(e){if(Q--,n.monitorRunDependencies&&n.monitorRunDependencies(Q),e?(ye(W[e]),delete W[e]):f("warning: run dependency removed without ID"),0==Q&&(null!==B&&(clearInterval(B),B=null),Y)){var t=Y;Y=null,t()}}n.preloadedImages={},n.preloadedAudios={};var z={error:function(){ot("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")},init:function(){z.error()},createDataFile:function(){z.error()},createPreloadedFile:function(){z.error()},createLazyFile:function(){z.error()},open:function(){z.error()},mkdev:function(){z.error()},registerDevice:function(){z.error()},analyzePath:function(){z.error()},loadFilesFromDB:function(){z.error()},ErrnoError:function(){z.error()}};n.FS_createDataFile=z.createDataFile,n.FS_createPreloadedFile=z.createPreloadedFile;var j="data:application/octet-stream;base64,";function Le(e){return String.prototype.startsWith?e.startsWith(j):0===e.indexOf(j)}var V="ThirdParty/unzip.wasm";function ke(){try{if(n.wasmBinary)return new Uint8Array(n.wasmBinary);if(n.readBinary)return n.readBinary(V);throw"both async and sync fetching of the wasm failed"}catch(e){ot(e)}}function He(e){var t,r={env:e,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:E};function a(e,t){var r=e.exports;n.asm=r,Pe("wasm-instantiate")}t="wasm-instantiate",Q++,n.monitorRunDependencies&&n.monitorRunDependencies(Q),t&&(ye(!W[t]),W[t]=1,null===B&&"undefined"!=typeof setInterval&&(B=setInterval((function(){if(m)return clearInterval(B),void(B=null)}),1e4)));var s=n;function u(e){ye(n===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,a(e.instance)}function l(e){return(n.wasmBinary||!i&&!o||"function"!=typeof fetch?new Promise((function(e,t){e(ke())})):fetch(V,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+V+"'";return e.arrayBuffer()})).catch((function(){return ke()}))).then((function(e){return WebAssembly.instantiate(e,r)})).then(e,(function(e){}))}if(n.instantiateWasm)try{return n.instantiateWasm(r,a)}catch(e){return!1}return function(){if(n.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||Le(V)||"function"!=typeof fetch)return l(u);fetch(V,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,r).then(u,(function(e){l(u)}))}))}(),{}}Le(V)||(_e=V,V=n.locateFile?n.locateFile(_e,d):d+_e),n.asm=function(e,t,n){t.memory=T,t.table=new WebAssembly.Table({initial:22,maximum:22,element:"anyfunc"}),t.__memory_base=1024,t.__table_base=0;var r=He(t);return ye(r,"binaryen setup failed (no wasm support?)"),r};var G=15088;function Ce(){}ye(G%8==0);var q={buffers:[null,[],[]],printChar:function(e,t){var n=q.buffers[e];ye(n),0===t||10===t?((1===e?c:f)(Ae(n,0)),n.length=0):n.push(t)},varargs:0,get:function(e){return q.varargs+=4,O[q.varargs-4>>2]},getStr:function(){return Oe(q.get())},get64:function(){var e=q.get(),t=q.get();return ye(e>=0?0===t:-1===t),e},getZero:function(){ye(0===q.get())}};function Qe(e,t){q.varargs=t;try{q.getStreamFromFD(),q.get(),q.get(),q.get(),q.get();return ot("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM"),0}catch(e){return void 0!==z&&e instanceof z.ErrnoError||ot(e),-e.errno}}function Be(){var e=n._fflush;e&&e(0);var t=q.buffers;t[1].length&&q.printChar(1,10),t[2].length&&q.printChar(2,10)}function Ye(e,t){q.varargs=t;try{for(var n=q.get(),r=q.get(),i=q.get(),o=0,a=0;a<i;a++){for(var s=O[r+8*a>>2],u=O[r+(8*a+4)>>2],l=0;l<u;l++)q.printChar(n,g[s+l]);o+=u}return o}catch(e){return void 0!==z&&e instanceof z.ErrnoError||ot(e),-e.errno}}function We(e,t){q.varargs=t;try{return 0}catch(e){return void 0!==z&&e instanceof z.ErrnoError||ot(e),-e.errno}}function ze(e,t){q.varargs=t;try{q.getStreamFromFD();return ot("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM"),0}catch(e){return void 0!==z&&e instanceof z.ErrnoError||ot(e),-e.errno}}function je(){}function Ve(){return w.length}function Ge(e,t,n){g.set(g.subarray(t,t+n),e)}function qe(e){return n.___errno_location?O[n.___errno_location()>>2]=e:f("failed to set errno from JS"),e}function Je(e){ot("Cannot enlarge memory arrays to size "+e+" bytes (OOM). Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+w.length+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function Ke(e){e=ve(e,65536);var t=R.byteLength;try{return-1!==T.grow((e-t)/65536)&&(R=T.buffer,!0)}catch(n){return console.error("emscripten_realloc_buffer: Attempted to grow from "+t+" bytes to "+e+" bytes, but got error: "+n),!1}}function Ze(e){var t=Ve();ye(e>t);var n=65536,r=2147418112;if(e>r)return f("Cannot enlarge memory, asked to go up to "+e+" bytes, but the limit is "+r+" bytes!"),!1;for(var i=Math.max(t,16777216);i<e;)(i=i<=536870912?ve(2*i,n):Math.min(ve((3*i+2147483648)/4,n),r))===t&&he("Cannot ask for more memory since we reached the practical limit in browsers (which is just below 2GB), so the request would have failed. Requesting only "+w.length);return Ke(i)?(Ie(),!0):(f("Failed to grow the heap from "+t+" bytes to "+i+" bytes, not enough memory!"),!1)}function $e(e){f("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"),f("Build with ASSERTIONS=2 for more info."),ot(e)}function et(e){f("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"),f("Build with ASSERTIONS=2 for more info."),ot(e)}function tt(e){f("Invalid function pointer called with signature 'jiji'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"),f("Build with ASSERTIONS=2 for more info."),ot(e)}function nt(e){f("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"),f("Build with ASSERTIONS=2 for more info."),ot(e)}var J={},K={abort:ot,setTempRet0:p,getTempRet0:h,abortStackOverflow:xe,nullFunc_ii:$e,nullFunc_iiii:et,nullFunc_jiji:tt,nullFunc_vii:nt,___lock:Ce,___setErrNo:qe,___syscall140:Qe,___syscall146:Ye,___syscall54:We,___syscall6:ze,___unlock:je,_emscripten_get_heap_size:Ve,_emscripten_memcpy_big:Ge,_emscripten_resize_heap:Ze,abortOnCannotGrowMemory:Je,emscripten_realloc_buffer:Ke,flush_NO_FILESYSTEM:Be,tempDoublePtr:G,DYNAMICTOP_PTR:x},Z=n.asm(J,K,R),$=Z.___errno_location;Z.___errno_location=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),$.apply(null,arguments)};var ee=Z._fflush;Z._fflush=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),ee.apply(null,arguments)};var te=Z._free;Z._free=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),te.apply(null,arguments)};var ne=Z._freePointer;Z._freePointer=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),ne.apply(null,arguments)};var re=Z._llvm_bswap_i32;Z._llvm_bswap_i32=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),re.apply(null,arguments)};var ie=Z._malloc;Z._malloc=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),ie.apply(null,arguments)};var oe=Z._sbrk;Z._sbrk=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),oe.apply(null,arguments)};var ae=Z._unzip;Z._unzip=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),ae.apply(null,arguments)};var se=Z.establishStackSpace;Z.establishStackSpace=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),se.apply(null,arguments)};var ue=Z.stackAlloc;Z.stackAlloc=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),ue.apply(null,arguments)};var le=Z.stackRestore;Z.stackRestore=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),le.apply(null,arguments)};var de=Z.stackSave;Z.stackSave=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),de.apply(null,arguments)},n.asm=Z,n.___errno_location=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.___errno_location.apply(null,arguments)},n._emscripten_replace_memory=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._emscripten_replace_memory.apply(null,arguments)},n._fflush=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._fflush.apply(null,arguments)},n._free=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._free.apply(null,arguments)},n._freePointer=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._freePointer.apply(null,arguments)},n._llvm_bswap_i32=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._llvm_bswap_i32.apply(null,arguments)},n._malloc=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._malloc.apply(null,arguments)},n._memcpy=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._memcpy.apply(null,arguments)},n._memset=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._memset.apply(null,arguments)},n._sbrk=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._sbrk.apply(null,arguments)},n._unzip=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm._unzip.apply(null,arguments)},n.establishStackSpace=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.establishStackSpace.apply(null,arguments)};var ce=n.stackAlloc=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.stackAlloc.apply(null,arguments)},fe=n.stackRestore=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.stackRestore.apply(null,arguments)},Ee=n.stackSave=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.stackSave.apply(null,arguments)};function rt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function it(e){function t(){n.calledRun||(n.calledRun=!0,m||(Ne(),H||(H=!0,De(P)),Ne(),De(L),n.onRuntimeInitialized&&n.onRuntimeInitialized(),ye(!n._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Xe()))}e=e||n.arguments,Q>0||(ye(0==(3&I)),M[(I>>2)-1]=34821223,M[(I>>2)-2]=2310721022,Ue(),Q>0||n.calledRun||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),t()}),1)):t(),Ne()))}n.dynCall_ii=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.dynCall_ii.apply(null,arguments)},n.dynCall_iiii=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.dynCall_iiii.apply(null,arguments)},n.dynCall_jiji=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.dynCall_jiji.apply(null,arguments)},n.dynCall_vii=function(){return ye(H,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),ye(!C,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),n.asm.dynCall_vii.apply(null,arguments)},n.asm=Z,n.intArrayFromString||(n.intArrayFromString=function(){ot("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.intArrayToString||(n.intArrayToString=function(){ot("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.ccall=we,n.cwrap=ge,n.setValue||(n.setValue=function(){ot("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getValue=me,n.allocate||(n.allocate=function(){ot("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getMemory||(n.getMemory=function(){ot("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.AsciiToString||(n.AsciiToString=function(){ot("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stringToAscii||(n.stringToAscii=function(){ot("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.UTF8ArrayToString||(n.UTF8ArrayToString=function(){ot("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.UTF8ToString||(n.UTF8ToString=function(){ot("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stringToUTF8Array||(n.stringToUTF8Array=function(){ot("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stringToUTF8||(n.stringToUTF8=function(){ot("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.lengthBytesUTF8||(n.lengthBytesUTF8=function(){ot("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.UTF16ToString||(n.UTF16ToString=function(){ot("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stringToUTF16||(n.stringToUTF16=function(){ot("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.lengthBytesUTF16||(n.lengthBytesUTF16=function(){ot("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.UTF32ToString||(n.UTF32ToString=function(){ot("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stringToUTF32||(n.stringToUTF32=function(){ot("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.lengthBytesUTF32||(n.lengthBytesUTF32=function(){ot("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.allocateUTF8||(n.allocateUTF8=function(){ot("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stackTrace||(n.stackTrace=function(){ot("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addOnPreRun||(n.addOnPreRun=function(){ot("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addOnInit||(n.addOnInit=function(){ot("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addOnPreMain||(n.addOnPreMain=function(){ot("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addOnExit||(n.addOnExit=function(){ot("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addOnPostRun||(n.addOnPostRun=function(){ot("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.writeStringToMemory||(n.writeStringToMemory=function(){ot("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.writeArrayToMemory||(n.writeArrayToMemory=function(){ot("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.writeAsciiToMemory||(n.writeAsciiToMemory=function(){ot("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addRunDependency||(n.addRunDependency=function(){ot("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.removeRunDependency||(n.removeRunDependency=function(){ot("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.ENV||(n.ENV=function(){ot("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.FS||(n.FS=function(){ot("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.FS_createFolder||(n.FS_createFolder=function(){ot("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createPath||(n.FS_createPath=function(){ot("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createDataFile||(n.FS_createDataFile=function(){ot("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createPreloadedFile||(n.FS_createPreloadedFile=function(){ot("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createLazyFile||(n.FS_createLazyFile=function(){ot("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createLink||(n.FS_createLink=function(){ot("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_createDevice||(n.FS_createDevice=function(){ot("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.FS_unlink||(n.FS_unlink=function(){ot("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")}),n.GL||(n.GL=function(){ot("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.dynamicAlloc||(n.dynamicAlloc=function(){ot("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.warnOnce||(n.warnOnce=function(){ot("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.loadDynamicLibrary||(n.loadDynamicLibrary=function(){ot("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.loadWebAssemblyModule||(n.loadWebAssemblyModule=function(){ot("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getLEB||(n.getLEB=function(){ot("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getFunctionTables||(n.getFunctionTables=function(){ot("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.alignFunctionTables||(n.alignFunctionTables=function(){ot("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.registerFunctions||(n.registerFunctions=function(){ot("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.addFunction||(n.addFunction=function(){ot("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.removeFunction||(n.removeFunction=function(){ot("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getFuncWrapper||(n.getFuncWrapper=function(){ot("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.prettyPrint||(n.prettyPrint=function(){ot("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.makeBigInt||(n.makeBigInt=function(){ot("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.dynCall||(n.dynCall=function(){ot("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getCompilerSetting||(n.getCompilerSetting=function(){ot("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stackSave||(n.stackSave=function(){ot("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stackRestore||(n.stackRestore=function(){ot("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.stackAlloc||(n.stackAlloc=function(){ot("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.establishStackSpace||(n.establishStackSpace=function(){ot("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.print||(n.print=function(){ot("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.printErr||(n.printErr=function(){ot("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.getTempRet0||(n.getTempRet0=function(){ot("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.setTempRet0||(n.setTempRet0=function(){ot("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.Pointer_stringify||(n.Pointer_stringify=function(){ot("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),n.ALLOC_NORMAL||Object.defineProperty(n,"ALLOC_NORMAL",{get:function(){ot("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),n.ALLOC_STACK||Object.defineProperty(n,"ALLOC_STACK",{get:function(){ot("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),n.ALLOC_DYNAMIC||Object.defineProperty(n,"ALLOC_DYNAMIC",{get:function(){ot("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),n.ALLOC_NONE||Object.defineProperty(n,"ALLOC_NONE",{get:function(){ot("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),rt.prototype=new Error,rt.prototype.constructor=rt,Y=function e(){n.calledRun||it(),n.calledRun||(Y=e)},n.run=it;var Te=[];function ot(e){n.onAbort&&n.onAbort(e),m=!0;var t,r="abort("+(e=void 0!==e?'"'+e+'"':"")+") at "+(t=Fe(),n.extraStackTrace&&(t+="\n"+n.extraStackTrace()),t.replace(/__Z[\w\d_]+/g,(function(e){return e==e?e:e+" ["+e+"]"})));throw Te&&Te.forEach((function(t){r=t(r,e)})),r}if(n.abort=ot,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();n.noExitRuntime=!0,it()}else n=null;var _e,pe=n;e.unzip=pe}));