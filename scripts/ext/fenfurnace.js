function FenFurnace(){"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){global.currentFen=e;let t=e.split(" ")[0].split("/");global.currentTurn=e.split(" ")[1],global.castling.w.q=!1,global.castling.w.k=!1,global.castling.b.q=!1,global.castling.b.k=!1;let r=e.split(" ")[2];for(let e in r){let t=r[e]===r[e].toUpperCase()?"w":"b";global.castling[t][r[e].toLowerCase()]=!0}global.enpassantSquare=e.split(" ")[3].toUpperCase(),global.halfMoveCount=e.split(" ")[4],global.moveNumber=e.split(" ")[5],global.boardArray=t.map((e=>e.replace(/[0-9]/g,(e=>"-".repeat(e)))))}function o(e){return String.fromCharCode(e+64)}function a(e){return"b"===e?"w":"b"}function l(){let e="",t=0;for(let r in global.boardArray){let o=global.boardArray[r];for(let r=0;r<o.length;r++)"-"!==o[r]?(t>0&&(e+=t,t=0),e+=o[r]):t++;t>0&&(e+=t),t=0,7!=r&&(e+="/")}e+=" "+global.currentTurn;let r="";return global.castling.w.k&&(r+="K"),global.castling.w.q&&(r+="Q"),global.castling.b.k&&(r+="k"),global.castling.b.q&&(r+="q"),e+=" "+r,e+=" "+global.enpassantSquare,e+=" "+global.halfMoveCount,e+=" "+global.moveNumber,e}function n(e){if(u(e))return g(s(e))?"w":"b"}function s(e){const t=parseInt(e[0],36)-9,r=8-e[1];return global.boardArray[r][t-1]}function u(e){return"-"!==s(e)}function b(e,t){if(!u(e))return!1;i(s(e),t),c(e)}function i(e,t){const r=parseInt(t[0],36)-9,o=8-t[1];let a=global.boardArray[o];global.boardArray[o]=a.substr(0,r-1)+e+a.substr(r)}function c(e){const t=parseInt(e[0],36)-9,r=8-e[1];let o=global.boardArray[r];global.boardArray[r]=o.substr(0,t-1)+"-"+o.substr(t)}function g(e){return e===e.toUpperCase()}function p(e){let t={w:"",b:""};for(let e=1;e<=8;e++)for(let r=1;r<=8;r++){const a=o(r)+e;"k"===s(a).toLowerCase()&&(t[n(a)]=a)}for(let a=1;a<=8;a++)for(let l=1;l<=8;l++){const s=o(l)+a;if(!u(s))continue;const b=n(s);if((g(b)&&"b"===e||(r=b)===r.toLowerCase()&&"w"===e)&&f(s,t[e]))return!0}var r;return!1}function f(e,t){return e!==t&&d(e,t)&&!w(e,t)}function d(e,t){let r=s(e),o=r===r.toUpperCase()?"w":"b",l=parseInt(e[1]),b=parseInt(t[1]),i=Math.abs(b-l),c=(e[0],t[0],Math.abs(t.charCodeAt(0)-e.charCodeAt(0)));switch(r.toLowerCase()){case"r":return 0===c||0===i;case"n":return i+c===3&&0!==c&&0!==i;case"k":return c<=1&&i<=1;case"b":return c===i;case"q":return 0===c||0===i||c===i;case"p":const e=1===c&&1===i&&u(t)&&n(t)===a(o),r=1===i||2===i&&[2,7].includes(l),s="w"===o?b>l:b<l,g=t===global.enpassantSquare&&1===c&&1===i;return(e||0===c||g)&&r&&s;default:return!0}}function w(e,t){let r=!1;const o={};let l=s(e),b=n(e),i=parseInt(e[1]),c=parseInt(t[1]),g=Math.abs(c-i),p=e[0],f=t[0],d=Math.abs(t.charCodeAt(0)-e.charCodeAt(0));switch(o.l=f>p?1:f<p?-1:0,o.n=c>i?1:c<i?-1:0,l.toLowerCase()){case"p":return 0===d&&("w"===b?(r=u(e[0]+(i+1)),2!==g||r||(r=u(e[0]+(i+2)))):(r=u(e[0]+(i-1)),2!==g||r||(r=u(e[0]+(i-2))))),r;case"r":case"b":case"q":{let e=!1;for(let t=1;t<=Math.max(d,g);t++){const l=n(String.fromCharCode(parseInt(p.charCodeAt(0))+o.l*t)+(i+o.n*t));(l===b||e)&&(r=!0),l!==a(b)||e||(e=!0)}return r}default:return n(t)===b}}function C(e,t,{isTest:r}={}){const o=s(e);let g=u(t),d=n(e),w=global.boardArray;if(d!=global.currentTurn&&!r)return console.log("Failed to move",e,"->",t),!1;if("k"===o.toLowerCase()&&2===Math.abs(t.charCodeAt(0)-e.charCodeAt(0))){const r=t.charCodeAt(0)-e.charCodeAt(0)>0,o=r?"k":"q";if(!global.castling[d][o])return!1;{const o=r?"H":"A",a="w"===d?"1":"8",l=r?["F","G"]:["B","C","D"];for(let e in l)if(u(l[e]+a))return!1;console.debug("v.134",u(e),u(t),s(e),s(t)),b(e,t),b(o+a,(r?"F":"D")+a),castling[d]={k:!1,q:!1}}}if(!f(e,t))return!1;b(e,t);let C=t[1]===("w"===a(d)?"8":"1");if("p"===o&&C){if(!global.promotionPiece)return console.error("NO PROMOTION PIECE FOUND"),global.boardArray=w,!1;c(t),i(global.promotionPiece,t),global.promotionPiece=null}"p"===o&&t===global.enpassantSquare&&(c(global.enpassantSquare),global.halfMoveCount=0);const h=Math.abs(+t[1]-+e[1]);if("p"===o.toLowerCase()&&2===h){const e="w"===d?+t[1]-1:+t[1]+1;global.enpassantSquare=t[0]+e}else global.enpassantSquare="-";if(p(global.currentTurn))return global.boardArray=w,!1;if("k"===o)castling[d]={k:!1,q:!1};else if("r"===o){const t="H"===e?"k":"q";castling[d][t]=!1}"b"===d&&global.moveNumber++,"p"===o.toLowerCase()||g?global.halfMoveCount=0:global.halfMoveCount++,global.currentTurn="w"===global.currentTurn?"b":"w";let m=l();return r||global.moveList.push(m),m}function h(e){let t=[],a=l();for(let l=1;l<=8;l++)for(let n=1;n<=8;n++){const s=o(n)+l;C(e,s,{isTest:!0})&&t.push(s),r(a)}return t}e.r(t),e.d(t,{isValid:()=>d,makeMove:()=>C,pieceInWay:()=>w,validateMove:()=>f}),Object.assign(global,{castling:{w:{k:!0,q:!0},b:{k:!0,q:!0}},boardArray:[],enpassantSquare:null,moveList:[],currentTurn:null,halfMoveCount:0,moveNumber:0,promotionPiece:null});const m={setupBoard:function(){r("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),global.moveList=[],global.moveList.push("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")},createBoard:r,validation:t,findAllMoves:h,isCheck:p,gameEndingStatus:function(e){if(global.halfMoveCount>=100)return"stalemate";if("kk"===l().split(" ")[0].replace(/\/|\d+/g,"").toLowerCase())return"stalemate";let t=p(e),r=!0;e:for(let t=1;t<=8;t++)for(let a=1;a<=8;a++){const l=o(a)+t;if(n(l)===e&&(h(l).length>0&&(r=!1),!r))break e}return!!r&&(t?"checkmate":"stalemate")}};"undefined"==typeof global&&(global={}),"undefined"!=typeof window&&(window.fenFuncs=m)};