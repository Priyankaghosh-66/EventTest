<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
   
<html>
<head>
<meta charset="utf-8">
<meta name="_csrf" content="${_csrf.token}"/>
<meta name="_csrf_header" content="${_csrf.headerName}"/>

<title>Everlasting Testament - Login</title>


 
    	<style type="text/css">
    	@charset "UTF-8";.wrapper.hidden{display:none}.wrapper.visible{display:block}.wrapper .desktop-top{position:fixed;top:0;right:39px;border-top:2px solid #459fed;border-bottom-left-radius:10px;border-bottom-right-radius:10px;transition:height .1s;cursor:pointer;overflow:hidden;color:#fff;display:block;font-family:wixFreemiumFontW01-55Roma,wixFreemiumFontW02-55Roma,wixFreemiumFontW10-55Roma,Helvetica Neue,Helvetica,Arial,pro w3,hiragino kaku gothic pro,sans-serif;letter-spacing:.05em;font-size:13px;z-index:999}.wrapper .desktop-top:hover{min-height:72px;background-color:#43515c;padding-bottom:6px;word-wrap:break-word}.wrapper .desktop-top:hover>.hover1{display:block;font-family:wixFreemiumFontW01-35Thin,wixFreemiumFontW02-35Thin,wixFreemiumFontW10-35Thin,Helvetica Neue,Helvetica,Arial,meiryo,pro w3,hiragino kaku gothic pro,sans-serif;padding-top:4px}.wrapper .desktop-top:hover>.arrow,.wrapper .desktop-top:hover>.hover2{display:inline-block}.wrapper .desktop-top>.main{padding:0 6px 0 10px;text-align:center;line-height:26px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background-color:#20303c}.wrapper .desktop-top>.main>.arrow,.wrapper .desktop-top>.main>.banner1,.wrapper .desktop-top>.main>.banner2,.wrapper .desktop-top>.main>.wix{display:inline-block}.wrapper .desktop-top>.main>.wix{fill:#fff;width:28px;height:14px;padding:0 1px 4px;vertical-align:middle}.wrapper .desktop-top>.main>.wix>.dot{fill:#fc0}.wrapper .desktop-top>.hover1,.wrapper .desktop-top>.hover2{padding-left:14px;line-height:20px;display:none}.wrapper .desktop-top>.hover2{color:#459fed;padding-right:4px}.wrapper .desktop-top>.arrow{display:none;fill:none;stroke:#459fed;stroke-miterlimit:10;stroke-width:2px;height:10px;width:6px;padding-bottom:5px;vertical-align:bottom}.wrapper .desktop-bottom{position:fixed;width:100%;height:40px;background-color:#20303c;bottom:0;max-height:10vh;color:#fff;font-size:14px;display:inline-block;line-height:40px;text-align:center;letter-spacing:.05em;align-items:center;font-family:wixFreemiumFontW01-55Roma,wixFreemiumFontW02-55Roma,wixFreemiumFontW10-55Roma,Helvetica Neue,Helvetica,Arial,meiryo,pro w3,hiragino kaku gothic pro,sans-serif;transition:background-color .15s;cursor:pointer;z-index:999}.wrapper .desktop-bottom.preview{cursor:default}.wrapper .desktop-bottom:not(.preview):hover{background-color:#43515c}.wrapper .desktop-bottom>.contents .wix-logo{fill:#fff;width:36px;vertical-align:middle;padding-bottom:6px;height:16px}.wrapper .desktop-bottom>.contents .wix-logo>.dot{fill:#fc0}.wrapper .desktop-bottom>.contents .com{color:#fff}.wrapper .desktop-bottom>.contents>.arrow{fill:none;stroke:#459fed;stroke-miterlimit:10;stroke-width:2px;height:10px;padding-bottom:1px;vertical-align:middle}.wrapper .desktop-bottom>.contents>.second{color:#459fed;padding:0 5px 0 6px}@media (orientation:landscape) and (max-width:600px){.wrapper .mobile-top.not-preview{display:none}}.wrapper .mobile-top{position:relative;display:block;height:38px;top:0;width:100%;font-family:wixFreemiumFontW01-65Medi,wixFreemiumFontW02-65Medi,wixFreemiumFontW10-65Medi,Helvetica Neue,Helvetica,Arial,meiryo, pro w3,hiragino kaku gothic pro,sans-serif;letter-spacing:.05em;font-size:14px;color:#fff;background-color:#20303c;z-index:999;text-align:center;cursor:default}.wrapper .mobile-top.fixed-ad-mobile{position:fixed;width:320px;z-index:1000}.wrapper .mobile-top>.first{display:inline-block;text-align:center;line-height:38px}.wrapper .mobile-top .wix-logo{fill:#fff;width:30px;padding-bottom:4px;vertical-align:middle;height:15px}.wrapper .mobile-top .wix-logo>.dot{fill:#fc0}.wixAds_wrapper-old.hidden{display:none}.wixAds_wrapper-old.visible{display:block}.wixAds_wrapper-old .wixAdsdesktopWADTop{position:fixed;z-index:999;height:26px;top:0;right:50px;overflow:hidden;background-color:#404040;border-radius:0 0 6px 6px;pointer-events:all;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.wixAds_wrapper-old .wixAdsdesktopWADTop:hover{height:97px;background-color:rgba(50,50,50,.8)}.wixAds_wrapper-old .wixAdsdesktopWADTop:hover .topLabel{background-color:#222}.wixAds_wrapper-old .topLabel{padding:6px;line-height:1.3em;width:100%;font-size:13px;color:#fff;font-weight:700;line-height:18px;text-align:justify;padding:5px 10px}.wixAds_wrapper-old .topLabel .smallMusa{width:16px;margin-right:5px;background-position:0 0}.wixAds_wrapper-old .topLabel .smallLogo,.wixAds_wrapper-old .topLabel .smallMusa{display:inline-block;text-indent:-9999px;height:16px;background-image:url("//static.wixstatic.com/media/0da768_0c5ce9e2ffa442bea0b79b690223a939~mv2.png");background-repeat:no-repeat}.wixAds_wrapper-old .topLabel .smallLogo{width:29px;background-position:-16px top}.wixAds_wrapper-old .topContent{font-size:13px;line-height:1.3em;color:#fff;font-weight:700;line-height:18px;text-align:justify;padding:5px 10px;width:100%}.wixAds_wrapper-old .topContent .emphasis{color:#fc0;line-height:26px}.wixAds_wrapper-old .desktop-bottom{position:fixed;z-index:999;width:100%;bottom:0;max-height:10vh}.wixAds_wrapper-old .desktop-bottom:hover .footerLabel,.wixAds_wrapper-old .desktop-bottom:hover .siteBanner{background-color:#222!important}.wixAds_wrapper-old .desktop-bottom .footerLabel{width:100%;height:40px;text-align:center;background-color:#404040;border-radius:6px 6px 0 0;pointer-events:all;cursor:pointer}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner{background-color:#404040;border-radius:6px 6px 0 0;width:100%;height:100%;text-align:center}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner .bigMusa{text-indent:-9999px;width:36px;background-image:url("//static.wixstatic.com/media/0da768_0c5ce9e2ffa442bea0b79b690223a939~mv2.png");background-repeat:no-repeat;background-position:0 100%;position:relative;top:-19px}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner .wrapper{padding:5px 0}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner .wrapper div{display:inline-block;height:30px}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner .txt{line-height:47px;color:#fff;font-weight:700;font-size:15px}.wixAds_wrapper-old .desktop-bottom .footerLabel .siteBanner .txt a{color:#fff}.wixAds_wrapper-old .desktop-bottom .footerLabel .emphasis{color:#fc0;font-size:16px;text-transform:uppercase}.wixAds_wrapper-old .mobile-top{width:100%;height:30px;position:relative;display:block;text-align:center;background-color:#313131;z-index:999}.wixAds_wrapper-old .mobile-top .wixAdsmobileAdImg{height:30px}@media (orientation:landscape) and (max-width:600px){.wixAds_wrapper-old .mobile-top.not-preview{display:none}}.wixAds_wrapper-old .spacer{line-height:26px}@font-face{font-family:wixFreemiumFontW01-35Thin;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/56be84de-9d60-4089-8df0-0ea6ec786b84.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/56be84de-9d60-4089-8df0-0ea6ec786b84.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/50d35bbc-dfd4-48f1-af16-cf058f69421d.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/278bef59-6be1-4800-b5ac-1f769ab47430.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/2e309b1b-08b8-477f-bc9e-7067cf0af0b3.svg#2e309b1b-08b8-477f-bc9e-7067cf0af0b3") format("svg")}@font-face{font-family:wixFreemiumFontW01-45Ligh;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/ae1656aa-5f8f-4905-aed0-93e667bd6e4a.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/ae1656aa-5f8f-4905-aed0-93e667bd6e4a.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/530dee22-e3c1-4e9f-bf62-c31d510d9656.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/688ab72b-4deb-4e15-a088-89166978d469.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/7816f72f-f47e-4715-8cd7-960e3723846a.svg#7816f72f-f47e-4715-8cd7-960e3723846a") format("svg")}@font-face{font-family:wixFreemiumFontW01-55Roma;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/b7693a83-b861-4aa6-85e0-9ecf676bc4d6.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/b7693a83-b861-4aa6-85e0-9ecf676bc4d6.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/bcf54343-d033-41ee-bbd7-2b77df3fe7ba.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/b0ffdcf0-26da-47fd-8485-20e4a40d4b7d.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/da09f1f1-062a-45af-86e1-2bbdb3dd94f9.svg#da09f1f1-062a-45af-86e1-2bbdb3dd94f9") format("svg")}@font-face{font-family:wixFreemiumFontW01-65Medi;font-weight:700;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/07fe0fec-b63f-4963-8ee1-535528b67fdb.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/07fe0fec-b63f-4963-8ee1-535528b67fdb.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/60be5c39-863e-40cb-9434-6ebafb62ab2b.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/4c6503c9-859b-4d3b-a1d5-2d42e1222415.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/36c182c6-ef98-4021-9b0d-d63122c2bbf5.svg#36c182c6-ef98-4021-9b0d-d63122c2bbf5") format("svg")}@font-face{font-family:wixFreemiumFontW02-35Thin;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/30b6ffc3-3b64-40dd-9ff8-a3a850daf535.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/30b6ffc3-3b64-40dd-9ff8-a3a850daf535.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/775a65da-14aa-4634-be95-6724c05fd522.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/988eaaa7-5565-4f65-bb17-146b650ce9e9.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/3503a1a6-91c3-4c42-8e66-2ea7b2b57541.svg#3503a1a6-91c3-4c42-8e66-2ea7b2b57541") format("svg")}@font-face{font-family:wixFreemiumFontW02-45Ligh;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/88fcd49a-13c7-4d0c-86b1-ad1e258bd75d.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/88fcd49a-13c7-4d0c-86b1-ad1e258bd75d.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/9a2e4855-380f-477f-950e-d98e8db54eac.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/fa82d0ee-4fbd-4cc9-bf9f-226ad1fcbae2.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/48d599a6-92b5-4d43-a4ac-8959f6971853.svg#48d599a6-92b5-4d43-a4ac-8959f6971853") format("svg")}@font-face{font-family:wixFreemiumFontW02-55Roma;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/0b3a3fca-0fad-402b-bd38-fdcbad1ef776.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/0b3a3fca-0fad-402b-bd38-fdcbad1ef776.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/d5af76d8-a90b-4527-b3a3-182207cc3250.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/1d238354-d156-4dde-89ea-4770ef04b9f9.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/b68875cb-14a9-472e-8177-0247605124d7.svg#b68875cb-14a9-472e-8177-0247605124d7") format("svg")}@font-face{font-family:wixFreemiumFontW02-65Medi;font-weight:700;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/55f60419-09c3-42bd-b81f-1983ff093852.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/55f60419-09c3-42bd-b81f-1983ff093852.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/5b4a262e-3342-44e2-8ad7-719998a68134.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/4a3ef5d8-cfd9-4b96-bd67-90215512f1e5.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/58ab5075-53ea-46e6-9783-cbb335665f88.svg#58ab5075-53ea-46e6-9783-cbb335665f88") format("svg")}@font-face{font-family:wixFreemiumFontW10-35Thin;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/93b6bf6a-418e-4a8f-8f79-cb9c99ef3e32.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/93b6bf6a-418e-4a8f-8f79-cb9c99ef3e32.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/c881c21b-4148-4a11-a65d-f35e42999bc8.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/03634cf1-a9c9-4e13-b049-c90d830423d4.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/1bc99c0a-298b-46f9-b325-18b5e5169795.svg#1bc99c0a-298b-46f9-b325-18b5e5169795") format("svg")}@font-face{font-family:wixFreemiumFontW10-45Ligh;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/5b85c7cc-6ad4-4226-83f5-9d19e2974123.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/5b85c7cc-6ad4-4226-83f5-9d19e2974123.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/835e7b4f-b524-4374-b57b-9a8fc555fd4e.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/2c694ef6-9615-473e-8cf4-d8d00c6bd973.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/3fc84193-a13f-4fe8-87f7-238748a4ac54.svg#3fc84193-a13f-4fe8-87f7-238748a4ac54") format("svg")}@font-face{font-family:wixFreemiumFontW10-65Medi;font-weight:700;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/7092fdcc-7036-48ce-ae23-cfbc9be2e3b0.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/7092fdcc-7036-48ce-ae23-cfbc9be2e3b0.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/5b29e833-1b7a-40ab-82a5-cfd69c8650f4.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/b0298148-2d59-44d1-9ec9-1ca6bb097603.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/ae1dea8c-a953-4845-b616-74a257ba72e6.svg#ae1dea8c-a953-4845-b616-74a257ba72e6") format("svg")}@font-face{font-family:wixFreemiumFontW10-55Roma;src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/f1feaed7-6bce-400a-a07e-a893ae43a680.eot?#iefix");src:url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/f1feaed7-6bce-400a-a07e-a893ae43a680.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/8ac9e38d-29c6-41ea-8e47-4ae4d2b1a4e1.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/4bd09087-655e-4abb-844c-dccdeb68003d.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/Helvetica/Fonts/df234d87-eada-4058-aa80-5871e7fbe1c3.svg#df234d87-eada-4058-aa80-5871e7fbe1c3") format("svg")}.wix-ads-2{width:100%}.wix-ads-2.hidden{display:none}.wix-ads-2.visible{display:block}.wix-ads-2.desktop{position:fixed;top:0}.wix-ads-2 .desktop-top{height:47px;background:#eff1f2;display:flex;justify-content:center;align-items:center;border-bottom:3px solid #a0138e;width:100%;z-index:999}.wix-ads-2 .desktop-top.preview{cursor:default}.wix-ads-2 .desktop-top>.contents .text{font-family:wixFreemiumFontW01-65Medi,wixFreemiumFontW02-65Medi,wixFreemiumFontW10-65Medi,Helvetica Neue,Helvetica,Arial,meiryo, pro w3,hiragino kaku gothic pro,sans-serif;font-size:14px;color:#20303c;line-height:24px}.wix-ads-2 .desktop-top>.contents .text .wix-logo{fill:#20303c;width:36px;vertical-align:middle;padding-bottom:6px;height:16px}.wix-ads-2 .desktop-top>.contents .text .wix-logo>.dot{fill:#fc0}.wix-ads-2 .desktop-top>.contents .text .com{color:#20303c}.wix-ads-2 .desktop-top>.contents .button{font-family:wixFreemiumFontW01-65Medi,wixFreemiumFontW02-65Medi,wixFreemiumFontW10-65Medi,Helvetica Neue,Helvetica,Arial,meiryo, pro w3,hiragino kaku gothic pro,sans-serif;font-size:14px;color:#a0138e;border:1px solid #a0138e;display:inline-flex;width:112px;height:35px;justify-content:center;align-items:center;border-radius:17px;margin-left:6px}.wix-ads-2 .desktop-top:hover{cursor:pointer;background:#fff}.wix-ads-2 .desktop-top:hover .button{color:#fff;background-color:#a0138e}.wix-ads-2 .mobile-top{height:35px;background:#eff1f2;display:flex;justify-content:center;align-items:center;border-bottom:3px solid #a0138e;width:100%;z-index:999;position:relative;top:0}.wix-ads-2 .mobile-top .content{font-family:wixFreemiumFontW01-65Medi,wixFreemiumFontW02-65Medi,wixFreemiumFontW10-65Medi,Helvetica Neue,Helvetica,Arial,meiryo, pro w3,hiragino kaku gothic pro,sans-serif;font-size:14px;color:#20303c;line-height:32px;letter-spacing:.05em}.wix-ads-2 .mobile-top .content .wix-logo{fill:#20303c;width:30px;vertical-align:middle;padding-bottom:6px;height:15px}.wix-ads-2 .mobile-top .content .wix-logo>.dot{fill:#fc0}.wix-ads-2 .mobile-top:not(.preview):hover{cursor:pointer;background:#fff}
    	</style>
    	
    	<!-- <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="wixCodeInit" 
    	src="https://static.parastorage.com/services/santa/1.2635.8/packages-bin/wixCodeInit/wixCodeInit.min.js"></script> -->
    	<style type="text/css">
    	a,abbr,acronym,address,applet,b,big,blockquote,body,button,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,ins,kbd,label,legend,li,nav,object,ol,p,pre,q,s,samp,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,title,tr,tt,u,ul,var{margin:0;padding:0;border:0;outline:0;vertical-align:baseline;background:transparent}body{font-size:10px;font-family:Arial,Helvetica,sans-serif}input,select,textarea{font-family:Helvetica,Arial,sans-serif;box-sizing:border-box}ol,ul{list-style:none}blockquote,q{quotes:none}ins{text-decoration:none}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}a{cursor:pointer;text-decoration:none}body,html{height:100%}body{overflow-x:auto;overflow-y:scroll}.testStyles{overflow-y:hidden}.reset-button{background:none;border:0;outline:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}:focus{outline:none}.wixSiteProperties{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow:hidden}.SITE_ROOT{min-height:100%;position:relative;margin:0 auto}.POPUPS_ROOT{left:0;top:0;width:100%;height:100%;overflow-x:auto;overflow-y:scroll;position:fixed;z-index:99999}.POPUPS_ROOT.mobile{z-index:1005}.POPUPS_WRAPPER{position:relative;overflow:hidden}.POPUPS_WRAPPER>div{margin:0 auto}.auto-generated-link{color:inherit}.warmup .hidden-on-warmup{visibility:hidden}html.device-phone body{overflow-y:auto}html.device-mobile-optimized.device-android{margin-bottom:1px}html.device-mobile-optimized.blockSiteScrolling>body{position:fixed;width:100%}html.device-mobile-optimized.media-zoom-mode>body{touch-action:manipulation}html.device-mobile-optimized.media-zoom-mode>body>#SITE_CONTAINER{height:100%;overflow:hidden}html.device-mobile-optimized.media-zoom-mode>body>#SITE_CONTAINER>.noop{height:100%}html.device-mobile-optimized.media-zoom-mode>body>#SITE_CONTAINER>.noop>.siteAspectsContainer{height:100%;z-index:1005}.siteAspectsContainer{position:absolute;top:0;margin:0 auto;left:0;right:0}body.device-mobile-optimized{overflow-x:hidden;overflow-y:scroll}body.device-mobile-optimized.qa-mode{overflow-y:auto}body.device-mobile-optimized #SITE_CONTAINER{width:320px;overflow-x:visible;margin:0 auto;position:relative}body.device-mobile-optimized>*{max-width:100%!important}body.device-mobile-optimized .SITE_ROOT{overflow-x:hidden;overflow-y:hidden}body.device-mobile-non-optimized #SITE_CONTAINER>:not(.mobile-non-optimized-overflow) .SITE_ROOT{overflow-x:hidden;overflow-y:auto}body.device-mobile-non-optimized.fullScreenMode{background-color:#5f6360}body.device-mobile-non-optimized.fullScreenMode #MOBILE_ACTIONS_MENU,body.device-mobile-non-optimized.fullScreenMode #SITE_BACKGROUND,body.device-mobile-non-optimized.fullScreenMode .SITE_ROOT{visibility:hidden}body.fullScreenMode{overflow-x:hidden!important;overflow-y:hidden!important}body.fullScreenMode.device-mobile-optimized #TINY_MENU{opacity:0;pointer-events:none}body.fullScreenMode-scrollable.device-mobile-optimized{overflow-x:hidden!important;overflow-y:auto!important}body.fullScreenMode-scrollable.device-mobile-optimized #masterPage,body.fullScreenMode-scrollable.device-mobile-optimized .SITE_ROOT{overflow-x:hidden!important;overflow-y:hidden!important}body.fullScreenMode-scrollable.device-mobile-optimized #masterPage,body.fullScreenMode-scrollable.device-mobile-optimized #SITE_BACKGROUND{height:auto!important}.fullScreenOverlay{z-index:1005;position:fixed;left:0;top:-60px;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow-y:hidden}.fullScreenOverlay>.fullScreenOverlayContent{margin:0 auto;position:absolute;right:0;top:60px;left:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.mobile-actions-menu-wrapper{z-index:1000}body[contenteditable]{overflow-x:auto;overflow-y:auto}.bold{font-weight:700}.italic{font-style:italic}.underline{text-decoration:underline}.lineThrough{text-decoration:line-through}.singleLineText{white-space:nowrap;text-overflow:ellipsis}.alignLeft{text-align:left}.alignCenter{text-align:center}.alignRight{text-align:right}.alignJustify{text-align:justify}ol.font_100,ul.font_100{color:#080808;font-family:"Arial, Helvetica, sans-serif",serif;font-size:10px;font-style:normal;font-variant:normal;font-weight:400;margin:0;text-decoration:none;line-height:normal;letter-spacing:normal}ol.font_100 li,ul.font_100 li{margin-bottom:12px}letter{position:relative}letter,word{display:inline-block}word{white-space:nowrap}letter.space,word.space{display:inline}ol.wix-list-text-align,ul.wix-list-text-align{list-style-position:inside}ol.wix-list-text-align h1,ol.wix-list-text-align h2,ol.wix-list-text-align h3,ol.wix-list-text-align h4,ol.wix-list-text-align h5,ol.wix-list-text-align h6,ol.wix-list-text-align p,ul.wix-list-text-align h1,ul.wix-list-text-align h2,ul.wix-list-text-align h3,ul.wix-list-text-align h4,ul.wix-list-text-align h5,ul.wix-list-text-align h6,ul.wix-list-text-align p{display:inline}.wixapps-less-spacers-align.ltr{text-align:left}.wixapps-less-spacers-align.center{text-align:center}.wixapps-less-spacers-align.rtl{text-align:right}.wixapps-less-spacers-align>a,.wixapps-less-spacers-align>div{display:inline-block!important}.flex_display{display:-webkit-box;display:-webkit-flex;display:flex}.flex_vbox{box-sizing:border-box;padding-top:.01em;padding-bottom:.01em}a.wixAppsLink img{cursor:pointer}.singleLine{white-space:nowrap;display:block;overflow:hidden;text-overflow:ellipsis;word-wrap:normal}[data-z-counter]{z-index:0}[data-z-counter="0"]{z-index:auto}.circle-preloader{-webkit-animation:semi-rotate 1s 1ms linear infinite;animation:semi-rotate 1s 1ms linear infinite;height:30px;left:50%;margin-left:-15px;margin-top:-15px;overflow:hidden;position:absolute;top:50%;-webkit-transform-origin:100% 50%;transform-origin:100% 50%;width:15px}.circle-preloader:before{content:"";top:0;left:0;right:-100%;bottom:0;border:3px solid currentColor;border-color:currentColor transparent transparent currentColor;border-radius:50%;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:inner-rotate .5s 1ms linear infinite alternate;animation:inner-rotate .5s 1ms linear infinite alternate;color:#7fccf7}.circle-preloader:after{content:"";top:0;left:0;right:-100%;bottom:0;border:3px solid currentColor;border-color:currentColor transparent transparent currentColor;border-radius:50%;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:inner-rotate .5s 1ms linear infinite alternate;animation:inner-rotate .5s 1ms linear infinite alternate;color:#3899ec;opacity:0}.circle-preloader.white:before{color:#f0f0f0}.circle-preloader.white:after{color:#dcdcdc}@-webkit-keyframes inner-rotate{to{opacity:1;-webkit-transform:rotate(115deg);transform:rotate(115deg)}}@keyframes inner-rotate{to{opacity:1;-webkit-transform:rotate(115deg);transform:rotate(115deg)}}@-webkit-keyframes semi-rotate{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:rotate(180deg);transform:rotate(180deg)}45%{-webkit-transform:rotate(198deg);transform:rotate(198deg)}55%{-webkit-transform:rotate(234deg);transform:rotate(234deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@keyframes semi-rotate{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:rotate(180deg);transform:rotate(180deg)}45%{-webkit-transform:rotate(198deg);transform:rotate(198deg)}55%{-webkit-transform:rotate(234deg);transform:rotate(234deg)}to{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}.hidden-comp-ghost-mode{opacity:.5}.collapsed-comp-mode:after{position:absolute;top:0;bottom:0;left:0;right:0;content:"";background:-webkit-repeating-linear-gradient(135deg,transparent,transparent 49%,#2b5672 0,#2b5672 0,transparent 51%);background:repeating-linear-gradient(-45deg,transparent,transparent 49%,#2b5672 0,#2b5672 0,transparent 51%);background-size:6px 6px;background-repeat:repeat}.g-transparent-a:link,.g-transparent-a:visited{border-color:transparent}.transitioning-comp *{transition:inherit!important;-webkit-transition:inherit!important}.selectionSharerContainer{position:absolute;background-color:#fff;box-shadow:0 4px 10px 0 rgba(57,86,113,.24);width:142px;height:45px;border-radius:100px;text-align:center}.selectionSharerContainer:after{content:"";position:absolute;bottom:-10px;left:42%;border-width:10px 10px 0;border-style:solid;border-color:#fff transparent;display:block;width:0}.selectionSharerContainer .selectionSharerOption{display:inline-block;cursor:pointer;vertical-align:top;padding:13px 11px 11px 13px;margin:1px;z-index:-1}.selectionSharerContainer .selectionSharerVerticalSeparator{margin-top:9px;margin-bottom:18px;background-color:#eaf7ff;height:26px;width:1px;display:inline-block}.visual-focus-on .focus-ring:not(.has-custom-focus):focus{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.9),0 0 1px 2px #3899ec!important}
    	</style>
    	<!-- <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="stripColumnsContainer" src="https://static.parastorage.com/services/santa/1.2555.21/packages-bin/stripColumnsContainer/stripColumnsContainer.min.js"></script>
    	<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mediaContainer" src="https://static.parastorage.com/services/santa/1.2615.11/packages-bin/mediaContainer/mediaContainer.min.js"></script>
    	<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="container" src="https://static.parastorage.com/services/santa/1.2537.15/packages-bin/container/container.min.js"></script>
    	<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="linkBar" src="https://static.parastorage.com/services/santa/1.2537.15/packages-bin/linkBar/linkBar.min.js"></script>
    	<link rel="stylesheet" href="https://static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/v3/languages.css" id="font_langauges"><meta property="og:title" content="everlastingtestament">
    	<meta property="og:url" content="https://www.info.everlastingtestament.com"><meta name="robots" content="index">
    	<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="mousetrap" src="https://static.parastorage.com/services/third-party/mousetrap/1.4.6/mousetrap.min.js"></script>
    	 -->
    	 <link rel="stylesheet" href="https://static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/v3/languages.css" id="font_langauges"><meta property="og:title" content="everlastingtestament">
    	<meta property="og:url" content="https://www.everlastingtestament.com">
    	<meta name="robots" content="index">
    	
    	 <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Anton:n,b,i,bi|Basic:n,b,i,bi|Caudex:n,b,i,bi|Chelsea+Market:n,b,i,bi|Corben:n,b,i,bi|EB+Garamond:n,b,i,bi|Enriqueta:n,b,i,bi|Forum:n,b,i,bi|Fredericka+the+Great:n,b,i,bi|Jockey+One:n,b,i,bi|Josefin+Slab:n,b,i,bi|Jura:n,b,i,bi|Kelly+Slab:n,b,i,bi|Marck+Script:n,b,i,bi|Lobster:n,b,i,bi|Mr+De+Haviland:n,b,i,bi|Niconne:n,b,i,bi|Noticia+Text:n,b,i,bi|Overlock:n,b,i,bi|Patrick+Hand:n,b,i,bi|Play:n,b,i,bi|Sarina:n,b,i,bi|Signika:n,b,i,bi|Spinnaker:n,b,i,bi|Monoton:n,b,i,bi|Sacramento:n,b,i,bi|Cookie:n,b,i,bi|Raleway:n,b,i,bi|Open+Sans+Condensed:300:n,b,i,bi|Amatic+SC:n,b,i,bi|Cinzel:n,b,i,bi|Sail:n,b,i,bi|Playfair+Display:n,b,i,bi|Libre+Baskerville:n,b,i,bi|&amp;subset=latin-ext,cyrillic,japanese,korean,arabic,hebrew,latin" id="font_googleFonts"/>
    	<style id="__web-inspector-hide-shortcut-style__" type="text/css">
.__web-inspector-hide-shortcut__, .__web-inspector-hide-shortcut__ *, .__web-inspector-hidebefore-shortcut__::before, .__web-inspector-hideafter-shortcut__::after
{
    visibility: hidden !important;
}
</style>




 

<script type="text/javascript" src="/demoregistration/js/jquery-1.11.1.min.js"></script>
<!-- <script type="text/javascript" src="/ET/js/bootstrap.min.js"></script> -->
<script type="text/javascript" src="/demoregistration/js/bootstrapValidator.min.js"></script> 
<script type="text/javascript" src="/demoregistration/js/moment.min.js"></script> 
<script type="text/javascript" src="/demoregistration/js/bootstrap-datepicker.min.js"></script>
 
<link href="/demoregistration/css/datepicker.min.css" rel="stylesheet" type="text/css"/>
<link href="/demoregistration/css/datepicker3.min.css" rel="stylesheet" type="text/css"/>
<link href="/demoregistration/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="/demoregistration/css/style.css" rel="stylesheet" type="text/css"/>

<link href="/demoregistration/css/responsive.css" rel="stylesheet" type="text/css"/>
<link href="/demoregistration/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

<input type="hidden" id="refreshed" value="no">
<script type="text/javascript">
onload=function(){
var e=document.getElementById("refreshed");
if(e.value=="no")e.value="yes";
else{e.value="no";location.reload();}
}
</script>

<script type="text/javascript">

$(document).ready(function() {
	$('#datetimepicker')
    .datepicker({
        format: 'mm/dd/yyyy',
        startDate: '01/01/1900',
        endDate: new Date(),
        autoclose: true
        
    }).on('changeDate', function(e) {
        // Revalidate the date field
    	 $('#regForm')
         // Get the bootstrapValidator instance
         .data('bootstrapValidator')
         // Mark the field as not validated, so it'll be re-validated when the user change date
         .updateStatus('bday', 'NOT_VALIDATED', null)
         // Validate the field
         .validateField('bday');
    });
	
	
	
     $('#regForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	
        	salutation: {
                   validators: {
                    notEmpty: {
                        message: 'Please select salutation'
                    },
                    
                   
                }
            },fullname: {
                   validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    },
                    stringLength: {
                        max:100,
                        message: 'The name must be less than 100 characters'
                        
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'The name can only consist of alphabet and space'
                    },
                   
                }
            },
           
            email: {
                validators: {
                	 notEmpty: {
                         message: 'The emailId is required and cannot be empty'
                     }, stringLength: {
                         max:100,
                         message: 'The emailId must be less than 100 characters'
                         
                     },
                   regexp: {
                       regexp: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
                        message: 'The value is not a valid email address'
                    }
                }
            },
           mobileno: {
                validators: {
                    notEmpty: {
                        message: 'The mobile number is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The mobile can consist only numbers'
                    },
                     stringLength: {
                        min: 10,
                        max:13,
                        message: 'The mobile number must have minimum 10 digits and maximum 13 digits'
                    } 
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max:10,
                        message: 'The password must have minimum 6 characters and maximum 10 characters'
                        
                    }
                    
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm password are not the same'
                    }
                }
                  
            },bday: {
	        	 validators: {
                     notEmpty: {
                         message: 'The birthday is required and cannot be empty'
                     },
                     date: {
                         format: 'MM/DD/YYYY',
                         message: 'The birthday is not a valid'
                     },
                     callback: {
                         message: 'Wrong answer',
                         callback: function (value, validator, $field) {                       
                        	    var today = new Date();
                        	    var d = $('#bday').val();    
                        	                           	                     	   
                        	    var r = d.split('/');
                        	    var year = r[2];
                        	    var month = r[0];
                        	    var day = r[1]; 

                                var todayMonth = today.getMonth();
                                todayMonth = todayMonth+1;                             
                            	   
                        	    var age = today.getFullYear() - year;
                        	    var m = todayMonth - month;
                        	   
                        	    if (m < 0 || (m === 0 && today.getDate() < day)) {
                        	        age--;
                        	    }
                        	    if (age < 13)                      
                                    return {
                                     valid: false,
                                     message: 'You are below 13 !!'
                                 };  
                                 else
                                     return{
                               	      valid: true,                        	   
                                     }; 
                        	                            
                     }   
                     }
                 }
	      }
        }
     });
     
     
     $('#loginForm').bootstrapValidator({
         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
         feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         fields: {
         	
        	 email: {
                    validators: {
                     notEmpty: {
                         message: 'The email is required and cannot be empty'
                     },
                     regexp: {
                         regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                         message: 'The value is not a valid email address'
                     }
                    
                 }
             },
            
             
             password: {
                 validators: {
                     notEmpty: {
                         message: 'The password is required and cannot be empty'
                     }
                     
                 }
             }
         }
      
         });
    });
     


history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});



</script>


</head>

<body class="bg-all" id="index-main" oncontextmenu="return false;">


<header>
  <section class="black-header-signup">
    <div class="container-fluid-signup">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="logo-area-signup"> <a href="#"><img src="/demoregistration/images/logo.png" alt="logo"></a> </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div class="right-panel">
          <form:form action="/demoregistration/user/j_spring_security_check?${_csrf.parameterName}=${_csrf.token}"
									method="post" id="loginForm" modelAttribute="loginForm">
				
            <ul class="login-from">
            
              <li>
              <div class="form-group">
                <label>Email ID</label>
                 <form:input path="email" type="text"  value="" maxlength="40" name="email" class="form-control inp ploaceholderinp"/>
                 </div>
              </li>
              <li>
              <div class="form-group">
                <label>Password</label>
                  <form:input path="password"  type="password" value="" maxlength="10" name="password" class="form-control inp ploaceholderinp"/>
                  </div>
               
                
                 </li>
              <li>
                <input type="submit" value="Sign in"  />
                 <label style=" margin-top: 11px;"><a href="/ET/openForgotPasswordPage">Forgot Password?</a></label>
              </li>
            </ul>
          </form:form>
        </div>
      </div>
    </div>
  </section>
</header>


<!--end-header-->

<footer class="fc1_footer fc1" data-state=" " id="SITE_FOOTER" style="width: 980px; position: absolute; left: 170px; height: 104px; bottom: auto; top: 2250px;"><div id="SITE_FOOTERscreenWidthBackground" class="fc1screenWidthBackground" style="width: 1349px; left: -185px;"></div><div id="SITE_FOOTERcenteredContent" class="fc1centeredContent"><div id="SITE_FOOTERbg" class="fc1bg"></div><div id="SITE_FOOTERinlineContent" class="fc1inlineContent"><div class="lb1" id="LnkBr0-op1" style="width: 89px; left: 891px; position: absolute; top: 30px; height: 25px;"><ul aria-label="Social bar" id="LnkBr0-op1itemsContainer" class="lb1itemsContainer"><li class="lb1imageItem" id="LnkBr0-op10image" style="width: 25px; height: 25px; margin-bottom: 0px; margin-right: 7px; display: inline-block;">
<a href="http://www.facebook.com/wix" target="_blank" data-content="http://www.facebook.com/wix" data-type="external" id="LnkBr0-op10imagelink" class="lb1imageItemlink"><div data-style="position:absolute" class="lb1imageItemimage" id="LnkBr0-op10imageimage" style="position: absolute; width: 25px; height: 25px;"><div class="lb1imageItemimagepreloader" id="LnkBr0-op10imageimagepreloader"></div>
<img id="LnkBr0-op10imageimageimage" alt="Facebook Social Icon" data-type="image" src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_25,h_25,al_c,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.png" style="width: 25px; height: 25px; object-fit: cover;"></div></a></li><li class="lb1imageItem" id="LnkBr0-op11image" style="width: 25px; height: 25px; margin-bottom: 0px; margin-right: 7px; display: inline-block;">
<a href="http://www.twitter.com/wix" target="_blank" data-content="http://www.twitter.com/wix" data-type="external" id="LnkBr0-op11imagelink" class="lb1imageItemlink"><div data-style="position:absolute" class="lb1imageItemimage" id="LnkBr0-op11imageimage" style="position: absolute; width: 25px; height: 25px;"><div class="lb1imageItemimagepreloader" id="LnkBr0-op11imageimagepreloader"></div>
<img id="LnkBr0-op11imageimageimage" alt="Twitter Social Icon" data-type="image" src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_25,h_25,al_c,usm_0.66_1.00_0.01/9c4b521dd2404cd5a05ed6115f3a0dc8.png" style="width: 25px; height: 25px; object-fit: cover;"></div></a></li><li class="lb1imageItem" id="LnkBr0-op12image" style="width: 25px; height: 25px; margin-bottom: 0px; /* margin-right: 7px; */ display: inline-block;">
<a href="https://plus.google.com/+Wix/posts" target="_blank" data-content="https://plus.google.com/+Wix/posts" data-type="external" id="LnkBr0-op12imagelink" class="lb1imageItemlink"><div data-style="position:absolute" class="lb1imageItemimage" id="LnkBr0-op12imageimage" style="position: absolute; width: 25px; height: 25px;"><div class="lb1imageItemimagepreloader" id="LnkBr0-op12imageimagepreloader"></div>
<img id="LnkBr0-op12imageimageimage" alt="Google+ Social Icon" data-type="image" src="https://static.wixstatic.com/media/74d327d3628e4f14800301f1c61013b0.png/v1/fill/w_25,h_25,al_c,usm_0.66_1.00_0.01/74d327d3628e4f14800301f1c61013b0.png" style="width: 25px; height: 25px; object-fit: cover;"></div></a></li></ul></div></div></div></footer>

<!--white-form-->
<section class="index-area">

 <div class="login-white-form1">
 
 <span style="color: red" class="custom-error"> 
	 <c:if test="${not empty ERROR}">
		<div class="error">${ERROR}</div>
	 </c:if>
</span>

 </div>
 
 <div class="login-white-form1">
<form:form action="/demoregistration/register?${_csrf.parameterName}=${_csrf.token}" method="post" modelAttribute="userReg" id="regForm"   >
 <h1>Join Everlasting Testament today.</h1>
  
 <div class="textbox">
 <div class="form-group " >
												
												
												<select  id="salutation" name="salutation" class="form-control inp ploaceholderinp " >
													<option value="">Salutation</option> 
													<option value="Mr">Mr</option>
													<option value="Mrs">Mrs</option>
													<option value="Miss">Miss</option>
													<option value="Master">Master</option>
												</select>
											
												
</div>
<div class="form-group">
  <form:input path="fullname" type="text" name="fullname" value="" placeholder="Full name" class="form-control"/>
  </div>
  <div class="form-group">
   <form:input path="mobile" type="text" name="mobile" value=""  placeholder="Mobile number" class="form-control inp ploaceholderinp" /> 
   </div>
   <div class="form-group">
  <form:input path="email" type="text" name="email" value="" placeholder="Email address" class="form-control inp ploaceholderinp"/>
  </div>

 <div class="form-group">
  
 <form:input path="password" type="password" name="password" value="" placeholder="Password" class="form-control inp ploaceholderinp"/>
 </div>
 <div class="form-group">
  <form:input path="confirmPassword" type="password" name="confirmPassword" value="" placeholder="Re-enter password" class="form-control inp ploaceholderinp"/>
 </div>

           
          <form:input path="gender" type="hidden" placeholder="gender" name="gender" value="f" class="form-control inp ploaceholderinp" /> 
  <div class="form-group">

        <div class="date">
            <div class="input-group input-append date" id="datetimepicker">
                <form:input path="birthday" class="form-control" type="text" placeholder="Birthday" name="birthday"  value="" style="background: white;" readonly="true" />
                <span class="input-group-addon add-on"><span style="display:block !important;"><i class="fa fa-calendar" aria-hidden="true"></i></span></span>
            </div>
        </div>
</div>
 
 <input type="submit" value="Create an account"  />
 <p class="condition_txt">By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>. Others will be able to find you by email or phone number when provided.</p>
 
 </div>
</form:form>
 </div>
 
 
 <div class="etImg1">
 <img id="comp-j90js2yzbalatamediacontentimage" alt="" data-type="image" 
 src="/demoregistration/images/index_image1.jpg" 
 style="width: 769px;height: 510px;object-fit: cover;">
 
 </div>
 
 
 <div class="align">
 
 <div id="cjg9inlineContent" class="p1inlineContent">
 <div data-exact-height="654.3528283796741" data-content-padding-horizontal="0" data-content-padding-vertical="0" title="" class="wp2" id="WPhty-22v" style="left: 160px; position: absolute; top: 1611px; width: 982px; height: 655px;"><div id="WPhty-22vlink" class="wp2link" style="width: 982px; height: 655px;"><div data-style="" class="wp2img" id="WPhty-22vimg" style="position: relative; width: 982px; height: 655px;"><div class="wp2imgpreloader" id="WPhty-22vimgpreloader"></div>
 <img id="WPhty-22vimgimage" alt="" data-type="image" src="/ET/images/index_image2.jpg" style="width: 982px; height: 655px; object-fit: contain;"></div></div></div>
 
 
 
 
 
 <div class="txtNew" id="WRchTxth-igg" style="left: 705px; width: 478px; position: absolute; top: 682px;"><p class="font_7" dir="ltr" style="font-size:26px;"><span style="font-size:26px;"><span style="color:#000000;">Our mission at Everlasting Testament is to provide service and organization for your
legacy. We are committed to the protection<br> of your past while you create future lasting<br>
memories for your loved ones.</span></span><br>
&nbsp;</p>

<p class="font_7" dir="ltr" style="font-size:26px;"><span style="font-size:26px;"><span style="color:#000000;">Our purpose is to provide a simple yet comprehensive method for the preservation and<br>
the sharing of life's moments. Keeping <br>your family and close friends forever<br> connected on a deeper level regardless of<br> time or distance is our goals.</span></span></p>

<p class="font_8">&nbsp;</p></div>
 
 
 <div data-exact-height="320.09999999999997" data-content-padding-horizontal="0" data-content-padding-vertical="0" title="" class="wp2" id="WPht4-h3g" style="left: 160px; position: absolute; top: 870px; width: 480px; height: 321px;"><div id="WPht4-h3glink" class="wp2link" style="width: 480px; height: 321px;"><div data-style="" class="wp2img" id="WPht4-h3gimg" style="position: relative; width: 480px; height: 321px;"><div class="wp2imgpreloader" id="WPht4-h3gimgpreloader"></div>
 <img id="WPht4-h3gimgimage" alt="" data-type="image" src="/demoregistration/images/index_image3.jpg" style="width: 480px; height: 321px; object-fit: contain;"></div></div></div>
 
 
 
 
 
 <div class="txtNew" id="comp-j90l329r" style="left: 160px; width: 464px; position: absolute; top: 720px">
 <h2 class="font_2" style="font-size:38px;">
 <span class="color_28">
 <span style="font-family:cookie,cursive;">
 <span style="font-size:38px;">
 <span style="background-color:#FFFFFF;">
 Store and share Letters, Videos, &amp; Photos for Remembrance of You
 </span>
 </span>
 </span>
 </span>
 </h2>
 </div>
 
 
 <div class="txtNew" id="comp-j9203l58" style="left: 160px; width: 910px; position: absolute; top: 1253px;"><p class="font_8" style="font-size:20px;"><span style="font-weight:bold;"><span style="font-size:20px;"><span style="color:#000000;">How EVERLASTING TESTAMENT Was Born by Jose F. Esparza</span></span></span></p>

<p class="font_8"><span style="color:#000000;"><span class="wixGuard">&#8203;</span></span></p>

<p class="font_8"><span style="color:#000000;">In 2004 I found myself deployed to Iraq with the Second Battalion Fourth Marines out of Camp Pendelton California. Although at the time I did not have any children nor was I romantically involved with anyone, I knew in the future I wanted a family and would like to share my personal and meaningful experiences with them. I began keeping a journal and taking pictures during my deployment to Iraq, hoping to one day pass on this portion of my life to my children and also desired for them to learn something from these experiences.</span></p>

<p class="font_8"><span style="color:#000000;"><span class="wixGuard">&#8203;</span></span></p>

<p class="font_8"><span style="color:#000000;">During our deployment to Aramadi, Iraq our Battalion suffered the loss of many good men, 34 Marines altogether if my mind serves me correctly. It was during one of the many K.I.A. &nbsp;(Killed in action) ceremonies that the thought of how my family would remember me began to creep into my mind. At first, all I could think about was how little my family actually knew about the man I had become. All that would be left of me if I had died would have been a sea bag full of the junk on my rack and my dog tags. From that moment on my mind was permanently set on finding a way to leave a part of me behind for my family.</span></p>

<p class="font_8"><span style="color:#000000;"><span class="wixGuard">&#8203;</span></span></p>

<p class="font_8"><span style="color:#000000;">Now, more than ten years have passed since I found myself in Iraq. I have spent countless nights wondering how I would get my idea of Everlasting Testament to become more than just a dream. During my wait I went back to school and have now graduated from California State University of San Bernardino with a bachelors in Mathematics. On my journey God has blessed me by placing Eric Wagner and David Sailors in my path who are now co-founders of Everlasting Testament. With the relationship we have developed the three of us have been able to take what once was merely a dream and bring it to life.&nbsp;</span></p></div>


<div class="txtNew" id="comp-j92068a6" style="left: 160px; width: 304px; position: absolute; top: 1205px;"><h2 class="font_2" style="font-size:30px;"><span style="font-weight:bold;"><span class="color_30"><span style="font-size:30px;">Our Story</span></span></span></h2></div>
 
 
 
 </div>
 
 </div>
</section>





</body>


</html>
