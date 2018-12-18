<div class="white-wrapper-menu">
	<div class="main-wrapper-index-menu container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	            <div class="menu-right">
	              <nav class="navbar">
	                
	                  <div class="navbar-header">
	                   		 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
	                  </div>
	                  <div class="collapse navbar-collapse" id="myNavbar">
		                    <ul class="nav navbar-nav menu-list" >
		                        <li><a href="landing.html" >Home page</a></li>
		                      	<li ><a href="inbox.html"  >Inbox</a></li>
		                        <li><a href="userOfPassingReport.html">Report a passing</a></li>
		                        <li><a href="managefriend.html"> Manage Friends </a></li>
		                        <c:if test="${parent_email_id == null}">
		                       <li class="dropdown">
	                     			<a href="#"   class="dropdown-toggle" data-toggle="dropdown" >Child Account<b class="caret"></b></a>
	                     	        <ul class="dropdown-menu" id="childLi">
					                       <!-- <li><a href="#">List 1</a></li>
					                       <li><a href="#">List 2</a></li> -->
	                      			 </ul>
		                      	</li>
		                       </c:if> 
		                       
		                      <c:if test="${parent_email_id != null}">
		                            <c:if test="${checkNormalLogin != true}">
		                         
		                         <li class="dropdown">
	                     			<a href="/ET/user/j_spring_security_switch_user?j_username=${parent_email_id}" >Main Account</a>
	                     	        
		                      	</li>
		                      	</c:if>
		                         </c:if> 
		                     	 <!-- Sriparna 15-12-2017  -->
		                     	<li ><a href="about.html"   class="showMenuToolTip"> <!-- title="Yet to be implemented " -->About us</a></li>
		                     	<li><a href="#" class="showMenuToolTip" title="Yet to be implemented ">Q & A</a></li>
		                    	<!--   <li><a href="#"> Tutorial </a></li> -->
		                         <!-- Sriparna 15-12-2017  -->
		                        <li><a href="contact.html" class="showMenuToolTip"><!--  title="Yet to be implemented "> -->Contact Us </a></li>
		                        <li><a href="#" class="showMenuToolTip" title="Yet to be implemented ">Terms & conditions</a></li>
		                    </ul>
	                  </div>
	                
	              </nav>
	            </div>
   		 	</div>
         </div>
	</div>
</div>
          <script>
$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });        
</script>
<style>
#myNavbar{
padding-left: 0px !important;
}
</style>
     