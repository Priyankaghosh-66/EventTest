<!--header-->
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>								
	<html>								

<link href="/ET/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="/ET/css/style.css" rel="stylesheet" type="text/css">
<link href="/ET/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<script src="/ET/js/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="/ET/js/bootstrap.min.js" type="text/javascript"></script> 
 <script type="text/javascript" src="/ET/js/bootstrapValidator.min.js"></script> 

<link href="/ET/css/jquery.treemenu.css" rel="stylesheet" type="text/css">
<script src="/ET/js/modernizr.custom.js"></script>
<script src="/ET/js/jquery.treemenu.js"></script> 
 <link rel="stylesheet" type="text/css" href="/ET/css/component.css" />
<link href="/ET/css/responsive.css" rel="stylesheet" type="text/css">

<script src="/ET/js/bootstrap-tabcollapse.js"></script> 
 
<script src="/ET/js/custom-file-input.js"></script>

    <link rel="stylesheet" type="text/css" href="/ET/css/new/component.css" />
    
<script>
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    
  
});

$(function() {
    var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
   // alert(pgurl);
    $("#myNavbar ul li a").each(function(){
         if($(this).attr("href").includes(pgurl )|| $(this).attr("href") == '' )
         $(this).addClass("active");
    });
});
</script>


<body>
<header>
  <section class="black-header">
    <div class="container main-wrapper-index">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="logo-area"> <a href="#"><img src="/ET/images/logo.png" alt="logo"></a> </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="right-panel">
          <div class="user-name"> 
          <sec:authorize access="hasRole('ROLE_USER')">
					                	
										<c:if test="${pageContext.request.userPrincipal.name != null}">
											<h4><sec:authentication property="principal.fullname" /></h4>	  
													</c:if>
										
									</sec:authorize>
          
           </div>
         
      </div>
    </div>
    </div>
  </section>
</header>


<!--end-header--> 
</body>
</html>