"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function o(a,o){var n=o;void 0===n&&(n=Math.min(e(a),3));var r=Math.pow(10,n),M=(a*r|0)%r;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Taparachu","Ebongi"],DAY:["Nakaejuma","Nakaebarasa","Nakaare","Nakauni","Nakaung’on","Nakakany","Nakasabiti"],MONTH:["Orara","Omuk","Okwamg’","Odung’el","Omaruk","Omodok’king’ol","Ojola","Opedel","Osokosokoma","Otibar","Olabor","Opoo"],SHORTDAY:["Jum","Bar","Aar","Uni","Ung","Kan","Sab"],SHORTMONTH:["Rar","Muk","Kwa","Dun","Mar","Mod","Jol","Ped","Sok","Tib","Lab","Poo"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"teo-ug",pluralCat:function(a,e){var r=0|a,M=o(a,e);return 1==r&&0==M.v?n.ONE:n.OTHER}})}]);