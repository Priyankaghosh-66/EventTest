var user_type_alive='alive';
var search_by_user_name="username";
var search_by_user_emailid="emailId";

var fileUploadedSuccessMsg = "Death Certificate has been uploaded successfully.";
var fileUploadedFailureMsg = "File has not been uploaded";
	
	
	$(function () {
	    var token = $("meta[name='_csrf']").attr("content");
	    var header = $("meta[name='_csrf_header']").attr("content");
	    $(document).ajaxSend(function(e, xhr, options) {
	        xhr.setRequestHeader(header, token);
	    });
	});
	
	
	
		$(document)
				.ready(
						function() {
							//getUserList();
							
							$("#uploadDeathCertificatebtn").click(
									function() {
										var validator = $('#usersFileFormId')
												.data('bootstrapValidator');
										validator.validate();
										if (validator.isValid()) {
											
											if($('#file_upload').val()==null || $('#file_upload').val().length==0){
												 
												 
												 for (var i = 0; i < 20; i++){
													 $('#usersFileFormId').find('.help-block').eq(0).show();
													 $('#usersFileFormId').find('.help-block').css('color','#a94442');
												    }
												 
												 return false;
											 
											 }
											upload();
										}
									});
							
							$('#usersFileFormId')
							.bootstrapValidator(
									{
										// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
										feedbackIcons : {
											valid : 'glyphicon glyphicon-ok',
											invalid : 'glyphicon glyphicon-remove',
											validating : 'glyphicon glyphicon-refresh'
										},
										fields : {

											file_upload : {
												validators : {
													notEmpty : {
														message : 'Please select file to upload'
													},file: {
														
										                 maxSize:'100000000',
										                message: 'Please upload file not more than 100 MB.  '
							           				 },file: {
															
											                extension: 'jpeg,jpg,gif,png,xls,xlxs,doc,docx,js,csv,txt',
											                 message: 'Please upload following file types: jpeg/jpg/gif/png/xls/xlsx/doc/docx/js/csv/txt.  '
								           				 }
								           				
												}
											}
										
										}

							});

				});
		
		
		function setUserDetails(userId,emailId,senderUserName){
			$("#userId").val(userId);
			$("#emailId").val(emailId);
			$("#senderUserName").val(senderUserName);
			
		}
		

		function upload() {
			$('#loadingImage').show();
			$.ajax(
					{
						url : 'uploadUserDeathCertificateByAdmin?' + '${_csrf.parameterName}' + '='
								+ '${_csrf.token}',
						type : "POST",
						data : new FormData(document
								.getElementById("usersFileFormId")),
						enctype : 'multipart/form-data',
						processData : false,
						contentType : false
					}).done(function(data) {
						$("#messageContent").empty();
						$("#messageContent").html(fileUploadedSuccessMsg);
						$("#showMsgButton").click();
						$('#loadingImage').hide();
						
					}).fail(function(jqXHR, textStatus) {
						$("#messageContent").empty();
						$("#messageContent").html(fileUploadedFailureMsg);
						$("#showMsgButton").click();
						$('#loadingImage').hide();
					
				
			});
		}

		
		
		function showUserDetails(userId,emailId){
			 $("#user-panel").slideUp("slow");
			
			$.ajax({
				url : 'showUserDetailsAdmin?' + '${_csrf.parameterName}' + '='+ '${_csrf.token}',
				data:'userId='+userId+'&emailId='+emailId,
				type : "POST",
				success:function(e) {
			
						var userInitialDetailsDivContent='';
						
							var profileImag='/ET/images/user-pic.png';
							if(e.profileImage!=null && e.profileImage!=undefined)
								profileImag="../../"+e.profileImage;
							
							$("#userImg").attr("src",profileImag);
							userInitialDetailsDivContent = userInitialDetailsDivContent +
					        '<p><label>Email ID:</label>'+ e.email+'</p>'+
					       ' <p><label>Name:</label>'+e.fullname+'</p>'+
					       ' <label class="control upload-cer"></label>';
							$("#userInitialDetailsDiv").html(userInitialDetailsDivContent);
					
							
							var is_report_of_passing_initiated="Not initiated";
							if(e.is_report_of_passing_initiated==1){
								is_report_of_passing_initiated="Initiated";
							}
							
							
							/*var is_second_report_of_passing_cycle_open="Not initiated";
							if(e.is_second_report_of_passing_cycle_open==1){
								is_second_report_of_passing_cycle_open="Initiated";
							}*/
							
							var is_death_confirm="No";
							if(e.is_death_confirm==1){
								is_death_confirm="Confirmed";
							}
							
							
							var is_death_certificate_uploaded="No";
							if(e.is_death_certificate_uploaded==1){
								is_death_certificate_uploaded="Uploaded";
							}
							var total_number_of_receipents=0;
							if(e.total_number_of_receipents!=null)
								total_number_of_receipents=e.total_number_of_receipents;
							
							
							var total_number_of_response_from_receipent=0;
							if(e.total_number_of_response_from_receipent!=null)
								total_number_of_response_from_receipent=e.total_number_of_response_from_receipent;
							
							    var parsedDate = new Date(e.bday);
	                            var jsDate = new Date(parsedDate);
	                            var monthNames = [
	                                              "Jan", "Feb", "Mar",
	                                              "Apr", "May", "Jun", "Jul",
	                                              "Aug", "Sep", "Oct",
	                                              "Nov", "Dec"
	                                            ];

                                var day = jsDate.getDate();
                                var monthIndex = jsDate.getMonth();
                                var year = jsDate.getFullYear();
	                              
                                
                                var date_of_report_of_passing_str="-";
                                if(e.date_of_report_of_passing!=null){
                                	var date_of_report_of_passing= new Date(e.date_of_report_of_passing);
                                	   var jsDatedate_of_report_of_passing = new Date(date_of_report_of_passing);
       	                            var monthNamesjsDatedate_of_report_of_passing = [
       	                                              "Jan", "Feb", "Mar",
       	                                              "Apr", "May", "Jun", "Jul",
       	                                              "Aug", "Sep", "Oct",
       	                                              "Nov", "Dec"
       	                                            ];

                                       var dayjsDatedate_of_report_of_passing = jsDatedate_of_report_of_passing.getDate();
                                       var monthIndexjsDatedate_of_report_of_passing = jsDatedate_of_report_of_passing.getMonth();
                                       var yearjsDatedate_of_report_of_passing = jsDatedate_of_report_of_passing.getFullYear();
                                       date_of_report_of_passing_str =monthNamesjsDatedate_of_report_of_passing[monthIndexjsDatedate_of_report_of_passing] + ' ' + dayjsDatedate_of_report_of_passing + ', ' + yearjsDatedate_of_report_of_passing;
                                }
                                
                                
                                
	                            var userOtherDetailsDiv='';
								userOtherDetailsDiv=userOtherDetailsDiv+
						       ' <li><p><label>Email ID : </label> '+ e.email+'</p></li> '+
						       ' <li> <p><label>Name : </label>'+e.fullname+'</p></li> '+
						       ' <li> <p><label>DOB : </label>'+monthNames[monthIndex] + ' ' + day + ', ' + year+'</p></li> '+
						       '  <li> <p><label>Mobile Number : </label>'+e.mobileno+'</p></li> '+
							
							'  <li> <p><label>Report of passing initiated : </label>'+is_report_of_passing_initiated+'</p></li> '+
							'  <li> <p><label>Date Of Report Of Passing : </label>'+date_of_report_of_passing_str+'</p></li> '+
							'  <li> <p><label>Total number of receipents : </label>'+total_number_of_receipents+'</p></li> '+
							'  <li> <p><label>Total response from receipent : </label>'+total_number_of_response_from_receipent+'</p></li> '+
							'  <li> <p><label>Is death confirmed : </label>'+is_death_confirm+'</p></li> '+
							'  <li> <p><label>Death certificate uploaded: </label>'+is_death_certificate_uploaded+'</p></li> ';
							
						       $("#userOtherDetailsDiv").html(userOtherDetailsDiv);
							
						       $("#showUserDeatils").show();
				},
				error : function(e) {
						alert("error"+e);
				}
					 				
				});
		}
		
		
		function userSearch(userType) {
			var searchText=$("#searchTextInput").val();
			if(searchText!=null && searchText!="" && searchText!=undefined){
		
							var searchBy=$("#usertypedrpdown").val();
							$('#user-panel').empty();
							$("#user-panel").slideDown("slow");
							$.ajax({
										url : 'searchuseradmin?' + '${_csrf.parameterName}' + '='+ '${_csrf.token}',
										data:'searchBy='+searchBy+'&searchText='+searchText+'&userType='+userType,
										type : "POST",
										success:function(e) {
												var htmlContent='';
												for (var r = 0; r < e.length; r++) {
													
													var profileImag='/ET/images/user-pic.png';
													if(e[r][3]!=null && e[r][3]!=undefined)
														profileImag="../../"+e[r][3];
													
													htmlContent = htmlContent +' <li onclick="showUserDetails(\''+ e[r][0]+ '\',\''
													+e[r][2]+'\');setUserDetails(\''+ e[r][0]+ '\',\''
													+e[r][2]+'\',\''
													+e[r][1]+'\')"> '+
													 '<div class="recp-img-holder"><img src="'+profileImag+'" alt="" class="mCS_img_loaded"></div> '+
													 '  <div class="user-name-recipmnt"> '+
													 '    <p>'+e[r][1]+'</p> '+
													 '   <span>'+e[r][2]+'</span> '+
													 '   </div> '+
													 '  </li>';
								}
								$("#user-panel").html(htmlContent);
							},
							error : function(e) {
									//alert("error"+e);
							}
								 				
							});
				}
			}
		
		