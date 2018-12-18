<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Everlasting Testament</title>
<script src="/demoregistration/js/pagejs/landing.js"></script> 
</head>

<body id='landing-main'>
<%@include file="common/header.jsp"%>


	<script>
		$(document).ready(function() {
			$('#myCarousel').carousel({
				interval : 1500, //changes the speed
			});
			
			
			//ERROR
		});

		jQuery(function($) {
			function fixDiv() {
				var $cache = $('#getFixed');
				if ($(window).scrollTop() > 50)
					$cache.css({
						'position' : 'fixed',
						'top' : '30px',
						'right' : 'inherit',

					});
				else
					$cache.css({
						'position' : 'relative',
						'top' : 'auto'

					});
			}
			$(window).scroll(fixDiv);
			fixDiv();
		});

		jQuery(function($) {
			function fixDiv() {
				var $cache = $('#sidebar-fix');
				if ($(window).scrollTop() > 490) {
					$("#sidebar-fix").addClass("fixed-panel");
					$cache.css({
						'position' : 'fixed',
						'top' : '59px',
						'left' : 'inherit',
					});
				} else {
					$("#sidebar-fix").removeClass("fixed-panel");
					$cache.css({
						'position' : 'relative',
						'top' : 'auto'
					});
				}
			}
			$(window).scroll(fixDiv);
			fixDiv();
		});

		$(document).ready(function() {
			initialLandingpage();
			getShareFileList();
			getFriendList();
			
		});
		
	</script>




<!-- ERROR START -->
	<!--main-body-->
 <span style="color: red" class="custom-error" id="showChildLoginFromParentError"> 
	 <c:if test="${not empty ERROR}">
		<div class="error">${ERROR}</div>
	 </c:if>
</span>

<!-- ERROR START -->
	<div style="display: none;">
		<input type="hidden" id="userProfileimage1"
			value="${userProfileimage1}"> <input type="hidden"
			id="userProfileimage2" value="${userProfileimage2}"> <input
			type="hidden" id="userProfileimage3" value="${userProfileimage3}">


		<span id="output1">0px</span> <span id="output2">0px</span> <span
			id="output3">0px</span>
	</div>

	<div class="container main-wrapper-index" onscroll="myFunction()">
		<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">


			<div class="user-banner-wrapper">
				<div class="banner-wrapper">
					<div class="slider">
						<div id="myCarousel" class="carousel slide" data-ride="carousel">
							<!-- Indicators -->
							<ol class="carousel-indicators">
								<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#myCarousel" data-slide-to="1"></li>
								<li data-target="#myCarousel" data-slide-to="2"></li>
							</ol>

							<!-- Wrapper for slides -->


							<div class="carousel-inner" role="listbox">

								<div class="item active">
									<div id="landingCoverPictureImgWrapper1">
										<img src="/ET/images/banner-user1.jpg"
											id="landingCoverPictureImg1" alt="coverImage1"
											style="position: relative; width:2092px!important;height:768px;;max-width: auto;top:${topposition1} ;">
									</div>
									<div class="overbanner">
										<ul>
											<li id="coverImageUploadBtn1">
												<button type="button" class="btn blue-button"
													data-toggle="modal" data-target="#showUploadCoverPic"
													onclick="setCoverImageProperty('1','0px');">
													<i class="fa fa-upload" aria-hidden="true"></i> Upload
												</button>
											</li>
											<li id="coverImageEditBtn1">
												<button type="button" class="btn blue-button"
													onclick="editImageTest('1');">
													<i class="fa fa-arrows" aria-hidden="true"></i> Set
													position
												</button>
											</li>
											<li id="coverImageSaveBtn1" style="display: none;">
												<button type="button" class="btn blue-button"
													onclick="editCoverImageSave('1','-488px');">
													<i class="fa fa-check-square" aria-hidden="true"></i> Set
												</button>
											</li>

										</ul>
									</div>
									<div id="drag-to-set-image1" class="set-box"
										style="display: none;">Drag image to set position</div>

								</div>

								<div class="item">
									<div id="landingCoverPictureImgWrapper2">
										<img src="/ET/images/banner-user2.jpg"
											id="landingCoverPictureImg2" alt="coverImage2"
											style="position: relative; width:2092px !important;height:768px;;max-width: auto;top:${topposition2};">
									</div>
									<div class="overbanner">
										<ul>
											<li id="coverImageUploadBtn2">
												<button type="button" class="btn blue-button"
													data-toggle="modal" data-target="#showUploadCoverPic"
													onclick="setCoverImageProperty('2','0px');">
													<i class="fa fa-upload" aria-hidden="true"></i> Upload
												</button>
											</li>
											<li id="coverImageEditBtn2">
												<button type="button" class="btn blue-button"
													onclick="editImageTest('2');">
													<i class="fa fa-arrows" aria-hidden="true"></i> Set
													position
												</button>
											</li>
											<li id="coverImageSaveBtn2" style="display: none;">
												<button type="button" class="btn blue-button"
													onclick="editCoverImageSave('2');">
													<i class="fa fa-check-square" aria-hidden="true"></i> Set
												</button>
											</li>

										</ul>
									</div>
									<div id="drag-to-set-image2" class="set-box"
										style="display: none;">Drag image to set position</div>
								</div>

								<div class="item">
									<div id="landingCoverPictureImgWrapper3">
										<img src="/ET/images/banner-user3.jpg"
											id="landingCoverPictureImg3" alt="coverimage3"
											style="position: relative; width:2092px!important;height:768px;;max-width: auto;top:${topposition3} ;">
									</div>
									<div class="overbanner">
										<ul>
											<li id="coverImageUploadBtn3">
												<button type="button" class="btn blue-button"
													data-toggle="modal" data-target="#showUploadCoverPic"
													onclick="setCoverImageProperty('3','0px');">
													<i class="fa fa-upload" aria-hidden="true"></i> Upload
												</button>
											</li>
											<li id="coverImageEditBtn3">
												<button type="button" class="btn blue-button"
													onclick="editImageTest('3');">
													<i class="fa fa-arrows" aria-hidden="true"></i> Set
													position
												</button>
											</li>
											<li id="coverImageSaveBtn3" style="display: none;">
												<button type="button" class="btn blue-button"
													onclick="editCoverImageSave('3');">
													<i class="fa fa-check-square" aria-hidden="true"></i> Set
												</button>
											</li>
							
										</ul>
									</div>
									<div id="drag-to-set-image3" class="set-box"
										style="display: none;">Drag image to set position</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white-wrapper">
					<div class="row" style="    margin-right: -1px !important;
    margin-left: -3px !important;">
					<div class="full-header-menu" data-spy="affix" data-offset-top="330">
					<div class="container">
			
						<%@include file="common/menu.jsp"%>
						</div>
						</div>
					</div>
				</div>
			</div>
			<div class="index-main">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div id="sidebar-fix">
							<div class="white-block profile-wrapper">
								<div class="profile-pic-holder">
									<img src="/ET/images/pro-pic.jpg"
										alt="defaultProfilePicturePath" id="landingProfilePictureImg" style="width: 100%;"/>
								</div>
							</div>


							
							<!-- -SHOW GRAPH OF SPACE USES STARTS-->
				<div class="white-block" id="fileSizeGraph">
			
 <canvas id="myChart" width="400" height="300"></canvas>
 
</div>
	<!-- -SHOW GRAPH OF SPACE USES ENDS-->	
	<%-- <sec:authorize access="hasRole('ROLE_USER')">

								<c:if test="${pageContext.request.userPrincipal.name != null}">
									<div class="white-block">
										<ul class="user-details">

											<li><span class="icons-relate"></span> Born on <span
												style="color: #10b6f4;">${userBday }</span></li>
											<li><span class="icons-relate"></span> Followed by <span
												id="followedByCountSpan" style="color: #10b6f4;"> </span></li>
										</ul>

									</div>
								</c:if>

							</sec:authorize> --%>
							<!-- <div class="white-block" id="showShareFriendList"></div> -->
						</div>
					</div>


					<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">

						<div class="all-post">

							<ul class="indiv_post" id="share_post_div">

							</ul>

							<div class="clearfix"></div>
						</div>


						
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<div class="advrt-holder" id="getFixed">
				 <div class="row"><div class="white-block" id="showShareFriendList" >
            
           
            
          </div></div>
			 <div class="row">
			 <!-- <img src="/ET/images/addvert.jpg" alt="" > -->
			 <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-7859545796550526",
    enable_page_level_ads: true
  });
</script>
			 </div>  
					
					
					
					
         
				</div>
		</div>

	</div>

	<!--end-main-body-->

	<!--footer-->
	<footer>
		<div class="footer-last">
			<p>Everlasting Testament � 2017 ALL RIGHTS RESERVED.</p>
		</div>
	</footer>

</body>
</html>