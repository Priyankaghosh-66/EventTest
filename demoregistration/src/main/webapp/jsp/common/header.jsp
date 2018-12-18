<!--header-->
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page import="java.util.Date,java.text.SimpleDateFormat,java.text.ParseException"%>
<%@page import="java.text.SimpleDateFormat"%>
<html>
<head>
<script>
	var protocol = window.location.protocol;
	var host = window.location.host;
	var accessFileUrl = protocol + "//" + host+ "/ET/user/accessFile?filePath=";
	var accessFileVideoUrl = protocol + "//" + host+ "/ET/user/accessFile.mov?filePath=";
	var accessDownloadFileUrl = protocol + "//" + host+ "/ET/user/downloadFile?filepath=";
</script>
<meta http-equiv="Cache-control" content="no-cache">
<meta http-equiv="Expires" content="0">

<meta name="viewport" content="width=device-width" />
<meta name="_csrf_token_header_page" content="${_csrf.token}" />
<meta name="_csrf_headername_header_page" content="${_csrf.headerName}" />

<link href="/ET/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/style.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/jquery.treemenu.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/component.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/responsive.css" rel="stylesheet" type="text/css" />
<link href="/ET/css/spectrum.min.css" rel="stylesheet" type="text/css" />				 		 <!-- ### FOR COLOR PICKER ### -->
<link href="/ET/css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css"/> 
<link href="/ET/css/ttooltip/tooltipster.bundle.min.css" rel="stylesheet" type="text/css"/>		 <!-- ### FOR TOOLTIP IN SHOW FRIEND DETAILS ### -->
<link href="/ET/css/prettyPhoto.css" rel="stylesheet" type="text/css"/>							<!-- ### FOR PRETTY PHOTO PLUGIN (VIEW IMAGE ) ### -->
<link   href='/ET/css/images-grid.css' type='text/css' rel='stylesheet'/>						<!-- ### FACEBOOK LIKE PHOTO/ALBUM GALLERY ### -->

<script src="/ET/js/modernizr.custom.js" type="text/javascript"></script>
<script src="/ET/js/jquery.treemenu.js" type="text/javascript"></script>
<script src="/ET/js/jquery.min.2.2.4.js" type="text/javascript"></script>
<script src="/ET/js/jquery-ui.min-1.10.2.js" type="text/javascript"></script>
<script src="/ET/js/bootstrap.min.js" type="text/javascript"></script>
<script src="/ET/js/bootstrapValidator.min.js" type="text/javascript"></script>
<script src="/ET/js/bootstrap-tabcollapse.js" type="text/javascript"></script>
<script src="/ET/js/custom-file-input.js" type="text/javascript"></script>                  	<!-- ### FOR FILE UPLOAD AND SHOW ITS IMAGE NAME ### -->
<script src="/ET/js/preview/load-image.all.min.js" type="text/javascript"></script>
<script src="/ET/js/imageProcessing/jquery.imagedrag.min.js" type="text/javascript"></script>	<!-- ### FOR IMAGE DRAGGING IN COVER PICTURE ### -->
<script src="/ET/js/spectrum.min.js" type="text/javascript"></script> 						   	<!-- ### FOR COLOR PICKER ### -->
<script src="/ET/js/moment-with-locales.js" type="text/javascript" ></script>
<script src="/ET/js/bootstrap-datetimepicker.js" type="text/javascript" ></script>
<script src="/ET/js/ttooltip/tooltipster.bundle.min.js" type="text/javascript"></script>		<!-- ### FOR TOOLTIP IN SHOW FRIEND DETAILS ### -->
<script src="/ET/js/jquery.prettyPhoto.js"></script>											 <!-- ### FOR PRETTY PHOTO PLUGIN (VIEW IMAGE ) ### -->
<script src="/ET/js/pagejs/header.js" type="text/javascript"></script>  						<!-- ### ET CUSTOMIZE JS ### -->
<script src="/ET/js/ajaxtask.js" type="text/javascript"></script> 								<!-- ### ET CUSTOMIZE JS ### -->
<script src="/ET/jwplayer/jwplayer.js"></script>												<!-- ### JW PLAYER JS ### -->
 <script>jwplayer.key="P3e7IyGsBNF7QFyxpb9Ht9efxI0/yPsu81A==";</script> 

<script src='/ET/js/images-grid.js' type='text/javascript'></script>	    					<!-- ### FACEBOOK LIKE PHOTO/ALBUM GALLERY ### -->
<script src="/ET/js/Chart.min.js"></script>
<script src="/ET/js/bootstrap-datepicker.min.js" type="text/javascript" ></script>  
<link href="/ET/css/datepicker3.min.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="/ET/js/authorizeTest.js" charset="utf-8"></script> 
 
<script type="text/javascript" charset="utf-8">


	var isLoggedIn=1;

	 $(document).ready(function(){
		    $("a[rel^='prettyPhoto']").prettyPhoto({
		    		 allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		    	        default_width: 600,
		    	        default_height: 444,
		    	        horizontal_padding: 20});
	  });

	$(document).ready(function(){
		  $('#datetimepicker-birthday').datepicker({
		        format: 'mm/dd/yyyy',
		        startDate: '01/01/1900',
		        endDate: new Date(),
		        autoclose: true
		        
		    });
		    $('#datetimepicker-anniversary').datepicker({
		        format: 'mm/dd/yyyy',
		        startDate: '01/01/1900',
		        endDate: new Date(),
		        autoclose: true
		        
		    });
		$('.showMenuToolTip').tooltipster({});
	    $("#notify").click(function(){
	        $("#notifications").slideToggle("slow");
			 decorateNotificationDetails();
		});
	});
	
	function checkPaymentAmount(){
		var amount=$("#amount").val().substring(1);
		 $("#loadingImage").show();
		 
		 if ($('input[name=user_Type]:checked').val() == "basic") {
			    $("#amount").val("$1");
			    $("#upgradeTo").empty();
			    $("#amountTo").empty();
			    $("#upgradeTo").html("Basic");
			    $("#amountTo").html("$1");
			    
			    
			}else if  ($('input[name=user_Type]:checked').val() == "prime") {
				$("#amount").val("$2");
			    $("#upgradeTo").empty();
			    $("#amountTo").empty();
			    $("#upgradeTo").html("Prime");
			    $("#amountTo").html("$2");
			}
		 
		$.ajax({
 			url:'getAuthorizeTokenId?${_csrf.parameterName}=${_csrf.token}',
 			type:'POST',
 			data:'amount='+amount,
 			success:function(data, textStatus, jqXHR)
 			{ 		
 				 $("#loadingImage").hide();
 				$('#token').val(data);
 			var url='https://test.authorize.net/payment/payment?'+
 						'token='+data;
 				
 				$("#upgradUserFormId").hide();
 				$("#upgradUserFormAuthorizeNetId").show();
 			},
 		 	 error: function(a,b,c) {
 		 		 },
 		});
	}
</script>


</head>
<body>
	<div id="loadingImage" style="display: none;" class="inbox-loader">
		<img src="/ET/images/loader.gif" alt="Loding" class="loader">
	</div>
<sec:authorize access="hasRole('ROLE_USER')">

								<c:if test="${pageContext.request.userPrincipal.name != null}">
								<sec:authentication property="principal.memberType" var="memberType"/> 
								<sec:authentication property="principal.checkNormalLogin" var="checkNormalLogin"/> 
										<sec:authentication property="principal.bday" var="loginUserBday"/>
										<sec:authentication property="principal.anniversaryDate" var="loginAnniversaryBday"/>
										<sec:authentication property="principal.salutation" var="salutationEditPage"/>

										
									<input type="hidden"id="salutationEditVar" value="<c:out value = "${salutationEditPage}" />"/>
										
								</c:if>
								</sec:authorize>
	<div class="main-wrapper-index container">

		<!--show message popup start-->
		<div style="display: none">

			<button type="button" id="showMsgButton"
				class="btn btn-default upload-button" data-toggle="modal"
				data-target="#showMsg">Click</button>
		</div>
		<div id="showMsg" class="modal fade">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Message</h4>
					</div>
					<div class="modal-body">
						<div id="messageContent" style="text-align: center;"></div>
					</div>

				</div>

			</div>
		</div>

		<!--show message  popup-end-->



		<!--show upload profile picture popup start-->

		<div id="showUploadProfilePic" class="modal fade">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Edit Profile</h4>
					</div>
					<div class="modal-body">
						<div id="UploadProfilePicMessageContent"
							style="text-align: center;">
							<form:form
								action="uploadProfilePicture?${_csrf.parameterName}=${_csrf.token}"
								method="post" id="uploadProfilePictureFormId"
								enctype="multipart/form-data">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="upload-box">
										<label><span class="field-name">Upload Photo</span><span
											class="req-field">*</span></label>
										<div class="box form-group">
											<input type="file" name="file_upload"
												id="uploadProfilePicture_file_upload"
												class="form-control inp ploaceholderinp inputfile inputfile-1"
												data-multiple-caption="{count} files selected" multiple />
											<label class="file-upload-main"
												for="uploadProfilePicture_file_upload"
												id="picture_upload_label"><i class="fa fa-camera"
												aria-hidden="true"></i> <span>Choose a photo</span></label>

										</div>
									</div>
								</div>
								<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">	
										<label><span class="field-name">Salutation</span><span
														class="req-field">*</span></label>
									</div>
									<div class="col-sm-6">		
									<select  id="salutationEditPage" name="salutation">
													<option value="" >Salutation</option> 
													<option value="Mr">Mr</option>
													<option value="Mrs">Mrs</option>
													<option value="Miss">Miss</option>
													<option value="Master">Master</option>
												</select>
										<!-- <input type="text" name="salutation"
												id="salutation"> -->
								</div><div class="clearfix"></div>
							</div>	
								<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">
										<label><span class="field-name">Email</span><span
														class="req-field">*</span></label>
									</div>
									<div class="col-sm-6">
										<input type="text" name="email" class=""
														 id="email" value="<sec:authentication property="principal.email" />" readonly="readonly">
									</div><div class="clearfix"></div>
								</div>	
								
								<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">
										<label><span class="field-name">FullName</span><span
														class="req-field">*</span></label>
														</div>
									<div class="col-sm-6">
										<input type="text" name="fullname"
												id="fullnameEdit" value="<sec:authentication property="principal.fullname" />">
								</div>	<div class="clearfix"></div>
								</div>
							
								<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">					
											
										<label><span class="field-name">Mobile</span><span
														class="req-field">*</span></label>
									</div>
									<div class="col-sm-6">	
										<input type="text" name="mobileno"
												id="mobilenoEdit" value="<sec:authentication property="principal.mobileno" />">	
									</div>	
									<div class="clearfix"></div>
								</div>	
								<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">	
										  	
									<label><span class="field-name">Birthday</span><span
														class="req-field">*</span></label>
									</div>
									<div class="col-sm-6">	
									<div class="date">
           							 <div class="input-group input-append date" id="datetimepicker-birthday">		
           							 				
           							 				<%-- <fmt:parseDate value = "${loginUserBday}" var = "parsedEmpDate" pattern = "dd-MM-yyyy" /> --%>
           							 				
           							 			 <fmt:formatDate value="${loginUserBday}" var = "parsedBdayDate" pattern="MM/dd/yyyy"/>
           							 				
											<input type="text" name="bday" id="bdayEdit"  readonly="readonly" value="<c:out value = "${parsedBdayDate}" />"/>
											
											 <span class="input-group-addon add-on"><span style="display:block !important;"><i class="fa fa-calendar" aria-hidden="true"></i></span></span>
												 </div>
       										 </div>
									</div>
								<div class="clearfix"></div>
								</div>	
								<div class="form-group">
									<div class="col-sm-4 col-sm-offset-1">
									<label><span class="field-name">Anniversary</span><span
														class="req-field">*</span></label>
									</div>
									<div class="col-sm-6">	
									<div class="date">
           							 <div class="input-group input-append date" id="datetimepicker-anniversary">	
           							 
           								<fmt:formatDate value="${loginAnniversaryBday}" var = "parsedAnvDate" pattern="MM/dd/yyyy"/>	
										<input type="text" name="anniversaryDate" id="anniversaryDateEdit" readonly="readonly" value="<c:out value = "${parsedAnvDate}" />"/>
												 <span class="input-group-addon add-on"><span style="display:block !important;"><i class="fa fa-calendar" aria-hidden="true"></i></span></span>
												</div>
											</div>							
											</div>	
											<div class="clearfix"></div>
								</div>	
								</div>
								</div>
								<div class="btn-wrapp">
									<button type="button" class="btn btn-default" id="uploadProfilePicbtn">Save</button>
								</div>
								<div></div>
							</form:form>
						</div>
					</div>

				</div>

			</div>
		</div>
		<!--show upload profile picture popup end-->



		<!--enlarge popup start-->
		<div style="display: none">
			<button type="button" class="btn btn-default upload-button"
				data-toggle="modal" id="enlargeImageModelButton"
				data-target="#enlargeImageModel" onclick="clearData()">Enlarge</button>
		</div>
		<div id="enlargeImageModel" class="modal fade" style="display: none;">
			<div class="modal-dialog" style="width: 723px !important;">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" >×</button>
						<h4 class="modal-title">View</h4>
					</div>
					<div class="modal-body">
						<div id="uploadFileDiv">
							<img src="" id="showImageEnlarge" class='uploadFileDivImg' />
						</div>
					</div>

				</div>

			</div>
		</div>
		<!--enlarge popup-end-->


		<!--show upload cover picture popup start-->

		<div id="showUploadCoverPic" class="modal fade">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Upload Cover Picture</h4>
					</div>
					<div class="modal-body">
						<div id="UploadCoverPicMessageContent" style="text-align: center;">
							<form:form
								action="uploadCoverPic?${_csrf.parameterName}=${_csrf.token}"
								method="post" id="uploadCoverPictureFormId"
								enctype="multipart/form-data">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="upload-box">
										<label><span class="field-name">Upload Photo</span><span
											class="req-field">*</span></label>
										<div class="box form-group">
											<input type="file" name="file_upload"
												id="uploadCoverPicture_file_upload"
												class="form-control inp ploaceholderinp inputfile inputfile-1"
												data-multiple-caption="{count} files selected" multiple />
											<label class="file-upload-main"
												for="uploadCoverPicture_file_upload"
												id="picture_upload_label"><i class="fa fa-camera"
												aria-hidden="true"></i> <span>Choose a photo</span></label>

										</div>
										<div class="form-group">
											<input type="hidden" name="coverImage" id="coverImage"
												value='1' /> <input type="hidden" name="imageNumber"
												id="imageNumber" value='1' /> <input type="hidden"
												name="topposition" id="topposition" value='1' />
										</div>
									</div>
								</div>
								<div class="btn-wrapp">
									<button type="button" class="btn btn-default" id="uploadCoverPicbtn">Upload</button>
								</div>
								<div></div>
							</form:form>
						</div>
					</div>

				</div>

			</div>
		</div>
		<!--show upload cover picture popup end-->
<!-- Use one of the following scripts -->

<!-- show upgrade user popup start -->
			<div id="showUpgradeUser" class="modal fade">
			<div class="modal-dialog" style=" width:1050px; margin: 30px auto;">

				<!-- Modal content-->
				<div class="modal-content" style="height: 90%;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Upgrade User</h4>
					</div>
					<div class="modal-body modal-border">
						<div id="showUpgradeUserMessageContent">
							<form:form
								action="" 
								method="POST" id="upgradUserFormId">
								
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="upload-box" id="uploadBox">
										<%-- <label style="margin-top: 43px;margin-left: 256px;"><span class="field-name membership" >Please choose your membership type from below.</span></label>
										   
										    
										  
										     								
											<!-- <input type="radio" name="user_Type" class="upgrade-user" value="basic" onclick="displayAmountForUpgration()" style="margin:35px 11px 41px 264px;" checked="checked"><label class="label-memberType">Basic</label>
											<input type="radio" name="user_Type" class="upgrade-user" value="prime" onclick="displayAmountForUpgration()" style="margin: 7px 10px 40px 79px;"><label class="label-memberType" >Prime</label>
											 -->
											 <div class="plan-section-2">
											<c:if test="${memberType == 'free'}">
												<input type="radio" name="user_Type" class="upgrade-user" value="basic" onclick="displayAmountForUpgration()" style="margin:36px 14px 44px 384px;" checked="checked"><label class="label-memberType">Basic</label>
												<input type="radio" name="user_Type" class="upgrade-user" value="prime" onclick="displayAmountForUpgration()" style="margin: 7px 10px 40px 59px;"><label class="label-memberType">Prime</label>
											</c:if>
											</div>
											<div class="plan-section">
											<c:if test="${memberType == 'basic'}">
												<input type="radio" name="user_Type" class="upgrade-user" value="prime" onclick="displayAmountForUpgration()"><label class="label-memberType">Prime</label>
											</c:if><br>
											</div>
											
			<div class="col-sm-2"></div>
			
										
										<div class="col-sm-12">
											<div class="ammount-section">
											<label><span class="field-name membership">Amount:</span></label>
											<input type="text"  id="amount" name="amount" value="$0" readonly="readonly" style="background: #edecec;color:#365899">
											<div style="clear: both;"></div>
											</div>
											
											<div style="margin-left: 317px;">
											<button type="button" onclick="checkPaymentAmount()"   class="paymentBtn" style="  width: 305px;" id="payment" >Make Payment &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
											</div>
										</div> --%>
										
										
									</div>
								</div>
								
								<div></div>
							</form:form>
							
						  <form:form
								action="" 
								method="POST" id="upgradUserFormAuthorizeNetId" name="upgradUserFormAuthorizeNetId" target="iframeAuthorizeNet"style="display:none;">  
								<%--   <form:form
								action="https://accept.authorize.net/payment/payment" 
								method="POST" id="upgradUserFormAuthorizeNetId" style="display:none;">  --%>
								
								
								
											
								
											<!-- <input type="checkbox" name="user_Type_confirm" class="upgrade-user" value="false" onclick="enabledPaymentBtn()" style="margin:35px 11px 41px 264px;" checked="checked"><label class="label-memberType">Confirm</label>
											 -->
											
											 <div class="form-group custom-fiel-name">
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<span class="field-name custom-fiel-name">Name : 
											
											
											<sec:authentication property="principal.fullname" />
											</span>
											<input type="hidden"  id="token" name="token" value="" />
											</div>
											</div>
											  <div class="form-group custom-fiel-name">
											 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											 <span class="field-name custom-fiel-name">Upgrade to : 
											
											 <span id="upgradeTo"></span> User
											 </span>
											<!-- <input type="text"  id="upgradeTo" name="upgradeTo" value="free" readonly="readonly" style="background: #edecec;color:#365899"> user
											 --></div>	
											</div>
											 <div class="form-group custom-fiel-name">
											  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											 <span class="field-name custom-fiel-name">Amount : 
											
											  <span id="amountTo"></span>
											  </span>
											<!-- <input type="text"  id="amountTo" name="amountTo" value="$0" readonly="readonly" style="background: #edecec;color:#365899">
											 --></div>	
											</div>
											  <div class="form-group ">
											 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
													 <button class="paymentBtn" style="  width: 305px;    margin-left: 105px;" onclick="AuthorizeNetPopup.openAddPaymentPopup()">Confirm</button>
												<!-- <button type="submit"    style="  width: 305px;" class="paymentBtn"  id="paymentConfirm" >Confirm</button> -->
												</div>
										<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<button type="button"   style="  width: 305px;    margin-left: 77px;"  class="paymentBtn" onclick="closeUpgradePopUp()"  >Cancel </button>
												</div>
										</div>
										
										
								 	
												
								</form:form>
								<!-- --Show authorize payment form in iframe start--- -->
		<div id="divAuthorizeNetPopup" style="display:none;" class="AuthorizeNetPopupSimpleTheme">
  <div class="AuthorizeNetPopupOuter">
    <iframe name="iframeAuthorizeNet" id="iframeAuthorizeNet" src="" frameborder="0" scrolling="no"></iframe>
  </div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowT"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowR"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowB"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowL"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowTR"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowBR"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowBL"></div>
  <div class="AuthorizeNetShadow AuthorizeNetShadowTL"></div>
</div>

<div id="divAuthorizeNetPopupScreen" style="display:none;"></div>

	<!-- --Show authorize payment form in iframe end--- -->
								
								
						</div>
						<div style="clear:both;"></div>
					</div>

				</div>

			</div>
		</div>
		
		
		
		
			<!-- show upgrade user popup end -->


	</div>


	<header>
		<section class="black-header">
			<div class="container main-wrapper-index">
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					<div class="logo-area">
						<a href="landing.html"><img src="/ET/images/logo.png"
							alt="logo"></a>
					</div>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
					<div class="right-panel">
					
					
					
					<!--  notification     -->
					
					  <div class="notifications">
         <a href="#" id="notify" ><i class="fa fa-bell" aria-hidden="true"></i><span id="ntfcn_count" style="display:none;"></span></a>
         <div id="notifications" class="all-notify" style="display:none;height: 400px;
    overflow-y: scroll; overflow-x: hidden;">
         <ul class="all-notifications" id="all_notification">
         <h3>Notifications</h3>
      
      
      
         </ul>
         </div>
        </div>
       		
					<!--   /notification    -->
					
					
					
					
						<div class="user-name">
							<sec:authorize access="hasRole('ROLE_USER')">

								<c:if test="${pageContext.request.userPrincipal.name != null}">
									<h4>
										<sec:authentication property="principal.fullname" />
										
									</h4>
									<span class="userTypeSpan"><sec:authentication property="principal.memberType" /> user</span>
									<input type="hidden"
										value="<sec:authentication property="principal.fullname" />"
										name="" id="userName" />
										<input type="hidden"
										value="<sec:authentication property="principal.id" />"
										name="" id="loginuserId" />
										<sec:authentication property="principal.parent_email_id" var="parent_email_id"/> 
										<input type="hidden"id="parentEmailId" value="<c:out value = "${parent_email_id}" />"/>
									
										<c:if test="${parent_email_id == null}">
									<input type="hidden"
										value="/<sec:authentication property="principal.email" />/<sec:authentication property="principal.id" />.jpg"
										name="" id="profilePictureUrl" />
									<input type="hidden"
										value="/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_1.jpg"
										name="" id="coverPictureUrl_1" />
									<input type="hidden"
										value="/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_2.jpg"
										name="" id="coverPictureUrl_2" />
									<input type="hidden"
										value="/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_3.jpg"
										name="" id="coverPictureUrl_3" />
										</c:if>
										
										<c:if test="${parent_email_id != null}">
									<input type="hidden"
										value="/<sec:authentication property="principal.parent_email_id" />/<sec:authentication property="principal.email" />/<sec:authentication property="principal.id" />.jpg"
										name="" id="profilePictureUrl" />
									<input type="hidden"
										value="/<sec:authentication property="principal.parent_email_id" />/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_1.jpg"
										name="" id="coverPictureUrl_1" />
									<input type="hidden"
										value="/<sec:authentication property="principal.parent_email_id" />/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_2.jpg"
										name="" id="coverPictureUrl_2" />
									<input type="hidden"
										value="/<sec:authentication property="principal.parent_email_id" />/<sec:authentication property="principal.email" />/<sec:authentication property="principal.fullname" />_3.jpg"
										name="" id="coverPictureUrl_3" />
										</c:if>
								</c:if>

							</sec:authorize>
						</div>

						<sec:authorize access="hasRole('ROLE_USER')">
							<c:if test="${pageContext.request.userPrincipal.name != null}">
								<div class="user-pic">
									<div class="user-img-holder">
										<img src="" alt="/ET/images/contact-person.png"
											id="profilePictureImg">
									</div>
									<a href="#" id="flip"><span><i
											class="fa fa-chevron-down" aria-hidden="true"></i></span></a>
									<div id="panel" class="panel-div">
										<c:url value="/user/j_spring_security_logout" var="logoutUrl" />
										<form action="${logoutUrl}" method="post" id="logoutForm">
											<input type="hidden" name="${_csrf.parameterName}"
												value="${_csrf.token}" />
										</form>
										<script>
											function formSubmit() {
												document.getElementById(
														"logoutForm").submit();

											}
										</script>
										<div class="btm-area">
											<div class="action-area">
												<button type="button" class="btn blue-button"
													id="showUploadProfilePicButton" data-toggle="modal"
													data-target="#showUploadProfilePic" onclick="setSaluation()">
													<i class="fa fa-user" aria-hidden="true"></i> Edit
													profile
												</button>
											</div>
											<c:if test="${parent_email_id == null}">
											 <div class="action-area">
												<a href="childRegistrationPage.html" class="btn blue-button">
													<i class="fa fa-plus" aria-hidden="true"></i>  Add Child 
												</a>
											</div> 
											<!--############### Tajinder Kaur Start 01.11.2017 ##################-->
											 <div class="action-area">
												<a href="editChildProfilePage.html" class="btn blue-button">
													<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Child Profile 
												</a>
											</div> 
												<!--############### Tajinder Kaur End 01.11.2017 ##################-->
											<div class="action-area">
												<button type="button" class="btn blue-button"
													id="showUpgradeUserButton" data-toggle="modal"
													data-target="#showUpgradeUser" onclick="clearUpgradeForm()">
													<i class="fa fa-arrow-circle-up" aria-hidden="true"></i> Upgrade User
												</button>
											</div>
											</c:if>
											
											<div class="action-area">
												<button type="button" class="btn blue-button"
													onclick="javascript:formSubmit()">
													<i class="fa fa-sign-out" aria-hidden="true"></i> Sign out
												</button>
											</div>
										</div>

									</div>
								</div>
							</c:if>
						</sec:authorize>
					</div>
				</div>
			</div>
		</section>
	</header>
	
	
	
<div style="display: none" id="logoDivTimeLockedContentQuesAns">
							<div align="center">
								<span><img src="/ET/images/logoPrint.png" alt="logo"
									style="height: 28px; width: 28%;"></span> <br>
								<span style="font-size: 20px;">Time Locked Content
									Question Answer</span>
							</div>

						</div>
						<div id="printTimeLockedContent" style="display: none">
							<ul id="highSchoolQuestion">

							</ul>
							<ul id="collegeQuestion">

							</ul>
						</div>


  <!-- SHOW NOTIFICATION DETAILS MODEL START-->
  <button type="button" class="btn btn-info btn-lg" style="width:1px; height: 1px; display : none;" data-toggle="modal" id="myModalNotificationButton" data-target="#myModalNotification"></button>


  <div class="modal fade" id="myModalNotification" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
			        <div class="modal-header">
			        Notification Details
				        <button type="button" class="close" data-dismiss="modal">&times;</button>
				    </div>
			        <div class="modal-body" style="height:490px;">
						          <div class="col-sm-12" style="height:100%;">
									          <div class="col-sm-8"  style="height:100%; padding:0px; margin:0px;">
									          
									          <div class="col-sm-12" id="notificationImageArea" style="height:90%;     border: 1px solid #b2b2bb; border-radius: 9px">
									          </div>
									          <div class="col-sm-12" id="notificationDetailAreaDescription" >
									          </div>
									          </div>
									          
									          <div class="col-sm-4" style="height:100%;">
									                    <div class="col-sm-12" style="height:100%; padding:0px; margin:0px;">
									                              	<div class="col-sm-12"   id="notificationDetailAreaUserPix"  style=" padding:0px; margin:0px;">
											          				</div> 
											          				
											          				 <div class="col-sm-12"   id="notificationDetailAreaShareType"  style=" padding:0px; margin:0px;display:none;">
											          				</div> 
											         				 <div class="col-sm-12"  id="notificationDetailAreaSharedBy" style=" padding:0px; margin:0px;">
											          				</div>
											          				
											       					<div class="col-sm-12"   id="notificationDetailAreaFileName"  style=" padding:0px; margin:0px;">
											          			    </div>
											          			    
											         				<div class="col-sm-12"   id="notificationDetailAreaSharedOn"  style=" padding:0px; margin:0px;">
											                        </div>
									         			</div>
									          </div>
						          </div>
			        </div>
			        <div class="modal-footer">
			          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        </div>
      </div>
      
    </div>
  </div>
    <!-- SHOW NOTIFICATION DETAILS MODEL END-->
    


    
    <!-- ####################### PLAY VIDEO ### START #######################-->
					<div style="display: none">

						<button type="button" id="openPlayVideoButton"
							class="btn btn-default upload-button" data-toggle="modal"
							data-target="#playVideoPopUp">Click</button>
					</div>
					<div id="playVideoPopUp" style=";height:670px;"
						class="modal fade" >
						<div class="modal-dialog">

							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" onclick="pauseVideo()" >×</button>
									<h4 class="modal-title">Video</h4>
								</div>
								<div class="modal-body" style="text-align: center;">
									<div class="video-popup-container">
									<div  id="playVideo" >
									</div>
									<!-- 	<video width="260" id="playVideo" controls="controls" poster="" src="" autoplay="autoplay"></video> -->
									</div>
								</div>

							</div>

						</div>
					</div>

<!-- ####################### PLAY VIDEO ### END #######################-->



</body>
<style>
input#amount {
    width: 244px;
    height: 70px;
    border-style: hidden;
    font-size: 21px;
}

  .membership{
   font-size: 21px;
   text-align: center;
   color: #365899;
   }
   
 .upgrade-user {
    transform: scale(2);
   }
   
 .label-memberType{
   font-size: 18px;
   color: #365899
   }
   
 .btn-custom{
   	width: 170px; 
    font-size: 16px! important;
   }
   
   .amt-div{
       margin-top: -26px;
   }
   #showUpgradeUser .modal-title{
   	font-size: 20px;
   }
   
   #UpgradePage .form-group {
    margin-left: 238px;
    text-align: left;
    margin-bottom: 8px;
}
.userTypeSpan{
    color: #e4ae26 !important;
    cursor: none !important;
    font-size: 15px !important;
    text-transform: uppercase;
}
.paymentBtn{
    background-color: #0fb6f4;
    background-repeat: no-repeat;
    background-image: none;
    box-shadow: none;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 16px;
    border: 0;
    color: #fff;
}
.marginPAymentForm{
margin: 35px 11px 41px 264px;
font-size: 16px;
}
</style>
</html>

