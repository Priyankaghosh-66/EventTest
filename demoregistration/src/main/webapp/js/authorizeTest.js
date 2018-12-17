/* Usage:

<script type="text/javascript" src="contentx/popup.js"></script>

<script type="text/javascript">
//<![CDATA[

// Uncomment this line if eCheck is enabled. This does not affect functionality, only the initial sizing of the popup page for add payment.
//AuthorizeNetPopup.options.eCheckEnabled = true;

// Uncomment these lines to define a function that will be called when the popup is closed.
// For example, you may want to refresh your page and/or call the GetCustomerProfile API method from your server.
//AuthorizeNetPopup.options.onPopupClosed = function() {
//	your code here.
//};

// Uncomment this line if you do not have absolutely positioned elements on your page that can obstruct the view of the popup.
// This can speed up the processing of the page slightly.
//AuthorizeNetPopup.options.skipZIndexCheck = true;

// Uncomment this line to use test.authorize.net instead of secure.authorize.net.
//AuthorizeNetPopup.options.useTestEnvironment = true;

//]]>
</script>

*/


//var url="https://test.authorize.net/payment/payment"; //development url
var url="https://accept.authorize.net/payment/payment"; //live url


(function () {
	if (!window.AuthorizeNetPopup) window.AuthorizeNetPopup = {};
	if (!AuthorizeNetPopup.options) AuthorizeNetPopup.options = {
		onPopupClosed: null
		,eCheckEnabled: false
		,skipZIndexCheck: false
		,useTestEnvironment: true
	};
	AuthorizeNetPopup.closePopup = function() {
		document.getElementById("divAuthorizeNetPopupScreen").style.display = "none";
		document.getElementById("divAuthorizeNetPopup").style.display = "none";
		document.getElementById("iframeAuthorizeNet").src = "";
		if (AuthorizeNetPopup.options.onPopupClosed) AuthorizeNetPopup.options.onPopupClosed();
	};
	
	AuthorizeNetPopup.openAddPaymentPopup = function() {
		openSpecificPopup({action:"addPayment", paymentProfileId:"new"});
	};
	
	AuthorizeNetPopup.onReceiveCommunication = function (querystr) {
		var params = parseQueryString(querystr);
		switch(params["action"]) {
			case "successfulSave":
				AuthorizeNetPopup.closePopup();
				break;
			case "cancel":
				AuthorizeNetPopup.closePopup();
				$("#showUpgradeUser .close").click();
				break;
			case "resizeWindow":
				var w = parseInt(params["width"]);
				var h = parseInt(params["height"]);
				var ifrm = document.getElementById("iframeAuthorizeNet");
				ifrm.style.width = w.toString() + "px";
				ifrm.style.height = h.toString() + "px";
				centerPopup();
				adjustPopupScreen();
				break;
			 case "transactResponse":
	                var transResponse = JSON.parse(params['response']);
	               // alert("Thank you. Your Transaction Id is: "+transResponse.transId);
	                saveUpgradation(transResponse.accountType,transResponse.accountNumber,transResponse.transId,transResponse.responseCode,
	                		transResponse.authorization,
	                		transResponse.totalAmount);
	               // $('#demo').html("Thank you. Your Transaction Id is: "+transResponse.transId);
	                break;
		}
	};
	
	function openSpecificPopup(opt) {
		var popup = document.getElementById("divAuthorizeNetPopup");
		var popupScreen = document.getElementById("divAuthorizeNetPopupScreen");
		var ifrm = document.getElementById("iframeAuthorizeNet");
		var form = document.forms["upgradUserFormAuthorizeNetId"];
		$("#upgradUserFormId").hide();
		
		$("#upgradUserFormAuthorizeNetId").hide();
		
		switch (opt.action) {
			case "addPayment":
				ifrm.style.width = "1000px";
				ifrm.style.height = "1508px";
				break;
		}

		if (!AuthorizeNetPopup.options.skipZIndexCheck) {
			var zIndexHightest = getHightestZIndex();
			popup.style.zIndex = zIndexHightest + 2;
			popupScreen.style.zIndex = zIndexHightest + 1;
		}

		
			form.action =url ;
		
		form.submit();

		popup.style.display = "";
		popupScreen.style.display = "";
		centerPopup();
		adjustPopupScreen();
	};
	function centerPopup() {
		var d = document.getElementById("divAuthorizeNetPopup");
		d.style.left = "50%";
		d.style.top = "50%";
		var left = -Math.floor(d.clientWidth / 2);
		var top = -Math.floor(d.clientHeight / 2);
		d.style.marginLeft = left.toString() + "px";
		d.style.marginTop = top.toString() + "px";
		if (d.offsetLeft < 16) {
			d.style.left = "16px";
			d.style.marginLeft = "0px";
		}
		if (d.offsetTop < 16) {
			d.style.top = "16px";
			d.style.marginTop = "0px";
		}
	}
	function adjustPopupScreen() { // IE6 fix
		var popupScreen = document.getElementById("divAuthorizeNetPopupScreen");
		if (popupScreen.currentStyle && popupScreen.currentStyle.position == "absolute") {
			if (popupScreen.clientHeight < document.documentElement.scrollHeight) {
				popupScreen.style.height = document.documentElement.scrollHeight.toString() + "px";
			}
			if (popupScreen.clientWidth < document.documentElement.scrollWidth) {
				popupScreen.style.width = document.documentElement.scrollWidth.toString() + "px";
			}
		}
	}
	function getHightestZIndex() {
		var max = 0;
		var z = 0;
		var a = document.getElementsByTagName('*');
		for (var i = 0; i < a.length; i++) {
			z = 0;
			if (a[i].currentStyle) {
				var style = a[i].currentStyle;
				if (style.display != "none") {
					z = parseFloat(style.zIndex);
				}
			} else if (window.getComputedStyle) {
				var style = window.getComputedStyle(a[i], null);
				if (style.getPropertyValue("display") != "none") {
					z = parseFloat(style.getPropertyValue("z-index"));
				}
			}
			if (!isNaN(z) && z > max) max = z;
		}
		return Math.ceil(max);
	}
	/*function parseQueryString(str) {
		var vars = [];
		var arr = str.split('&');
		var pair;
		for (var i = 0; i < arr.length; i++) {
			pair = arr[i].split('=');
			vars.push(pair[0]);
			vars[pair[0]] = unescape(pair[1]);
		}
		return vars;
	}
	*/
	
	
	
/**********************************/	
	
    window.CommunicationHandler = {};
    function parseQueryString(str) {
    	//alert("parseQueryString");
        var vars = [];
        var arr = str.split('&');
        var pair;
        for (var i = 0; i < arr.length; i++) {
            pair = arr[i].split('=');
            vars[pair[0]] = unescape(pair[1]);
           // alert("0==> "+unescape(pair[0]));
           // alert("1==>"+unescape(pair[1]));
        }
        return vars;
    }
   /* window.CommunicationHandler.onReceiveCommunication = function (argument) {
    	alert("onReceiveCommunication");
        params = parseQueryString(argument.qstr);
        parentFrame = argument.parent.split('/')[4];
        switch (params['action']) {
            case "transactResponse":
                var transResponse = JSON.parse(params['response']);
                alert("Thank you. Your Transaction Id is: "+transResponse.transId);
                $('#demo').html("Thank you. Your Transaction Id is: "+transResponse.transId);
                             
        }

    }*/
    /**********************************/	
	

} ());
