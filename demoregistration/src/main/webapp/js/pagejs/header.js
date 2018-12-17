function closeAllPopUp() {
    $("#showMsg .close").click()
}

function clearData() {
    $("#file_upload").val(""), $("#fileName").val(""), $("#fileDesc").val(""), $("#file_upload_label").empty(), $("#file_upload_label").html('<i class="fa fa-camera" aria-hidden="true"></i> <span>Choose a file</span>'), $("#file_upload_album").val(""), $("#fileNameAlbum").val(""), $("#fileDescAlbum").val(""), $("#file_upload_album_label").empty(), $("#file_upload_album_label").html('<i class="fa fa-camera" aria-hidden="true"></i> <span>Choose a file</span>'), $("#file_upload_video").val(""), $("#videoFileName").val(""), $("#videoFileDesc").val(""), $("#file_upload_video_label").empty(), $("#file_upload_video_label").html('<i class="fa fa-camera" aria-hidden="true"></i> <span>Choose a file</span>')
}

function checkImageUrl(e, a, i) {
	e =accessFileUrl+ e, $.get(e).done(function() {
        $("#" + a).attr("src", e)
    }).fail(function() {
        $("#" + a).attr("src", i)
    })
}

function validateImageSize(e, a, i) {
    var o = $("#" + e)[0],
        t = new RegExp("([a-zA-Z0-9s_\\.-:])+(.jpg|.png|.gif)$");
    if (!t.test(o.value.toLowerCase())) return alert("Please select a valid Image file."), !1;
    if ("undefined" == typeof o.files) return alert("This browser does not support HTML5."), !1;
    var l = new FileReader;
    l.readAsDataURL(o.files[0]), l.onload = function(e) {
        var o = new Image;
        o.src = e.target.result, o.onload = function() {
            var e = this.height,
                o = this.width;
            return a > e ? (alert("Height must not exceed " + a), !1) : i > o ? (alert(" Width must not exceed " + i), !1) : (alert("Uploaded image has valid Height and Width."), !0)
        }
    }
}

function callFunctionHeader() {
    "use strict";
    ! function(e) {
        e.fn.bootstrapValidator.i18n.imageDimensions = e.extend(e.fn.bootstrapValidator.i18n.imageDimensions || {}, {
            "default": "Please choose an image with right dimensions",
            badImage: "Please provide proper image file"
        }), e.fn.bootstrapValidator.validators.imageDimensions = {
            validate: function(a, i, o) {
                if (!window.FileReader || !i[0].files || !i[0].files[0]) return !0;
                var t = new FileReader;
                t.onload = function() {
                    var l = new Image;
                    l.onload = function() {
                        var t = l.naturalWidth || l.width,
                            n = l.naturalHeight || l.height;
                        void 0 !== o.minWidth && t < o.minWidth || void 0 !== o.maxWidth && t > o.maxWidth || void 0 !== o.minHeight && n < o.minHeight || void 0 !== o.maxHeight && n > o.maxHeight ? (a.updateStatus(i, "INVALID", "imageDimensions"), a.updateMessage(i, "imageDimensions", o.message || e.fn.bootstrapValidator.i18n.imageDimensions["default"])) : a.updateStatus(i, "VALID", "imageDimensions")
                    }, l.onerror = function() {
                        a.updateStatus(i, "INVALID", "imageDimensions"), a.updateMessage(i, "imageDimensions", o.messageBadImage || e.fn.bootstrapValidator.i18n.imageDimensions.badImage)
                    }, l.src = t.result
                }, t.readAsDataURL(i[0].files[0]), a.updateStatus(i, "VALIDATING", "imageDimensions")
            }
        }
    }(window.jQuery);
    var e = $("#profilePictureUrl").val();
    checkImageUrl(e, "profilePictureImg", defaultProfilePicturePath), $("#uploadProfilePicbtn").click(function() {
        var e = $("#uploadProfilePictureFormId").data("bootstrapValidator");
        if (e.validate(), e.isValid()) {
           /* if (null == $("#uploadProfilePicture_file_upload").val() || 0 == $("#uploadProfilePicture_file_upload").val().length) {
                for (var a = 0; 20 > a; a++) $("#uploadProfilePictureFormId").find(".help-block").eq(0).show(), $("#uploadProfilePictureFormId").find(".help-block").css("color", "#a94442");
                return !1
            }*/
            uploadProfilePic()
        }
    }), $("#uploadCoverPicbtn").click(function() {
        var e = $("#uploadCoverPictureFormId").data("bootstrapValidator");
        if (e.validate(), e.isValid()) {
            if (null == $("#uploadCoverPicture_file_upload").val() || 0 == $("#uploadCoverPicture_file_upload").val().length) {
                for (var a = 0; 20 > a; a++) $("#uploadCoverPicture_file_upload").find(".help-block").eq(0).show(), $("#uploadCoverPicture_file_upload").find(".help-block").css("color", "#a94442");
                return !1
            }
            uploadCoverPic()
        }
    }),/*$("#payment").click(function() {
        var e = $("#upgradUserFormId").data("bootstrapValidator");
        if (e.validate(), e.isValid()) {
            
            sendPaymentDataToAnet()
        }
    }),*/ $("#uploadProfilePictureFormId").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            file_upload: {
                validators: {
                    /*notEmpty: {
                        message: "Please select file to upload"
                    },*/
                    file: {
                        maxSize: "5000000",
                        extension: "jpeg,jpg,jpe,gif,png",
                        message: "Please upload following file types: jpeg/jpg/jpe/gif/png and size not more than 5 MB.  "
                    },
                    imageDimensions: {
                        maxWidth: 250,
                        maxHeight: 250,
                        message: "Image height and width  must be less than the 250px * 250px !",
                        messageBadImage: "BAD IMAGE!"
                    }
                }
            },
            salutation: {
                validators: {
                 notEmpty: {
                     message: 'Please select salutation'
                 }
                 
                
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
                 }
                
             }
         },
        
         email: {
             validators: {
             	 notEmpty: {
                      message: 'The emailId is required and cannot be empty'
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
         },bday: {
        	 validators: {
                 notEmpty: {
                     message: 'The birthday is required and cannot be empty'
                 },
                 date: {
                     format: 'MM/DD/YYYY',
                     message: 'The birthday is not a valid'
                 }
             }
      },anniversaryDate: {
     	 validators: {
             /*notEmpty: {
                 message: 'The Anniversary is required and cannot be empty'
             },*/
             date: {
                 format: 'MM/DD/YYYY',
                 message: 'The anniversary is not a valid'
             }
         }
  }
    }
        
    }), $("#uploadCoverPictureFormId").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            file_upload: {
                validators: {
                    notEmpty: {
                        message: "Please select file to upload"
                    },
                    file: {
                        maxSize: "5000000",
                        extension: "jpeg,jpg,jpe,gif,png",
                        message: "Please upload following file types: jpeg/jpg/jpe/gif/png and size not more than 5 MB.  "
                    },
                    imageDimensions: {
                        minWidth: 400,
                        minHeight: 200,
                        message: "Image height and width  must be greater than the 400px * 200px !",
                        messageBadImage: "BAD IMAGE!"
                    }
                }
            }
        }
    })
}

function uploadProfilePic() {
	if($("#anniversaryDateEdit").val()==""){
	$('input[name="anniversaryDate"]').prop('disabled', true);
	}
	console.log(new FormData(document.getElementById("uploadProfilePictureFormId")));
	   $("#showUploadProfilePic .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
	        url: "uploadProfilePic?${_csrf.parameterName}=${_csrf.token}",
	        type: "POST",
	        data: new FormData(document.getElementById("uploadProfilePictureFormId")),
	        enctype: "multipart/form-data",
	        processData: !1,
	        contentType: !1
	    }).done(function(e) {
	    	$("#messageContent").empty(),
	    	$('input[name="anniversaryDate"]').prop('disabled', false);
	        $("#panel").slideToggle("slow"), $("#showMsgButton").click(), $("#messageContent").append(profilePictureUploadedSuccessMsg), $("#loadingImage").hide(), $("#uploadProfilePicture_file_upload").val();
	        var a = $("#profilePictureUrl").val();
	        checkImageUrl(a, "profilePictureImg", defaultProfilePicturePath), initialLandingpage()
	    }).fail(function(e, a) {
	    	$('input[name="anniversaryDate"]').prop('disabled', false);
	        $("#showMsgButton").click(), $("#messageContent").append(profilePictureUploadedFailureMsg), $("#loadingImage").hide()
	    })
}

function uploadCoverPicCrop() {
    $("#showUploadCoverPic .close").click(), $("#messageContent").empty(), $("#loadingImage").show();
    var e = document.getElementById("x").value,
        a = document.getElementById("y").value,
        i = document.getElementById("w").value,
        o = document.getElementById("h").value;
    $.ajax({
        url: "uploadCoverPicCrop?${_csrf.parameterName}=${_csrf.token}&x=" + e + "&y=" + a + "&height=" + o + "&width=" + i,
        type: "POST",
        processData: !1,
        contentType: !1
    }).done(function(e) {
        $("#panel").slideToggle("slow"), $("#showMsgButton").click(), $("#messageContent").append(coverPictureUploadedSuccessMsg), $("#loadingImage").hide(), $("#uploadCoverPicture_file_upload").val();
        var a = $("#coverPictureUrl").val();
        checkImageUrl(a, "landingCoverPictureImg", defaultCoverPicturePath), initialLandingpage(), location.reload(), null != jcrop_api ? (jcrop_api.destroy(), initJcrop(a)) : (alert("lll"), jcrop_api = $.Jcrop("#landingCoverPictureImg"), jcrop_api.setImage(val, function() {
            this.setOptions({
                aspectRatio: 1.5,
                onChange: showCoords,
                onSelect: showCoords,
                boxWidth: 8e3,
                boxHeight: 8e3,
                maxSize: [9e3, 9e3]
            })
        })), jcrop_api.setImage(val)
    }).fail(function(e, a) {
        $("#showMsgButton").click(), $("#messageContent").append(coverPictureUploadedFailureMsg), $("#loadingImage").hide()
    })
}

function uploadCoverPic(e, a) {
    $("#showUploadCoverPic .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "uploadCoverPic?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("uploadCoverPictureFormId")),
        enctype: "multipart/form-data",
        processData: !1,
        contentType: !1
    }).done(function(e) {
        location.reload(), $("#myCarousel").carousel("cycle"), $("#panel").slideToggle("slow"), $("#showMsgButton").click(), $("#messageContent").append(coverPictureUploadedSuccessMsg), $("#loadingImage").hide(), $("#uploadCoverPicture_file_upload").val();
        var a = $("#coverPictureUrl").val();
        checkImageUrl(a, "landingCoverPictureImg", defaultCoverPicturePath), initialLandingpage()
    }).fail(function(e, a) {
        $("#myCarousel").carousel("cycle"), $("#showMsgButton").click(), $("#messageContent").append(coverPictureUploadedFailureMsg), $("#loadingImage").hide()
    })
}

function editCoverImageSave(e) {
    $("#drag-to-set-image" + e).hide(), $("#coverImageSaveBtn" + e).hide(), $("#coverImageEditBtn" + e).show(), $("#coverImageUploadBtn" + e).show(), $("#showUploadCoverPic .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $("#imageNumber").val(e);
    var a = $("#output" + e).html();
    $("#topposition").val(a), $.ajax({
        url: "updateCoverPicPosition?${_csrf.parameterName}=${_csrf.token}&imageNumber=" + e + "&topposition=" + a,
        type: "POST",
        processData: !1,
        contentType: !1
    }).done(function(i) {
        $("#myCarousel").carousel("cycle"), $("#showMsgButton").click(), $("#messageContent").append(coverPictureEditedSuccessMsg), $("#loadingImage").hide(), $("#uploadCoverPicture_file_upload").val(), $("#landingCoverPictureImg" + e).css({
            top: a,
            "font-weight": ""
        })
    }).fail(function(e, a) {
        $("#myCarousel").carousel("cycle"), $("#showMsgButton").click(), $("#messageContent").append(coverPictureEditedFailureMsg), $("#loadingImage").hide()
    })
}

function setCoverImageProperty(e, a) {
    $("#myCarousel").carousel("pause"), $("#imageNumber").val(e), $("#topposition").val(a)
}

function playVideo() {
    var e = jwplayer("playVideo");
    e.setup({
        autostart: !0
    })
}

function pauseVideo() {
    var e = jwplayer("playVideo");
    e.remove()
}

function getFriendList() {
    $.ajax({
        url: "getFriendList?${_csrf.parameterName}=${_csrf.token}",
        data: "friend_status=1",
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
            $("#showShareFriendList").empty();
            var a = ' <div class="contact-heading"> <span class="icons-relate"></span>  <p>All Contacts<span><a href="#">' + e.length + "</a></span></p>   </div>  ";
            $("#followedByCountSpan").empty(), $("#followedByCountSpan").html(e.length + " people"), $.each(e, function(e, i) {
                var o = "";
                o = i[3];
                var t = "/ET/images/contact-person.png";
                null != i[1] && (t =  accessFileUrl + i[1]);
                var l = t.replace(/\\/g, "/");
                a = a + '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 space-inc demo-html" style="cursor: pointer;"  data-tooltip-content="#demo-html-content-' + e + '" onclick="showToolTipPopUp(this, \'' + i[0] + "','" + o + "','" + l + "','" + i[4] + "'," + i[5] + ');">   <div class="contct-person-holder"><img src="' + t + '" alt="" /> </div>    <div class="contct-person-name-holder">' + o + "</div>   </div>";
                var n = new Date(i[5]),
                    s = new Date(n),
                    r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    c = s.getDate(),
                    d = s.getMonth(),
                    u = s.getFullYear();
                a = a + ' <div  style="display:none"> <div class="user-tip" id="demo-html-content-' + e + '" >  <div class="user-pic-holder"><img src="' + t + '" alt=""></div>  <div class="user-content-details">   <h2>' + o + '</h2>  <ul class="all-detils-user"> <li><span class="icons-relate"></span>Email ID: ' + i[0] + '</li> <li><span class="icons-relate"></span>Phone: ' + i[4] + '</li> <li><span class="icons-relate"></span>Date of Birth: ' + r[d] + " " + c + ", " + u + "</li> </ul>    </div></div></div>"
            }), $("#showShareFriendList").html(a + '<div class="clearfix"></div>')
        },
        error: function() {}
    })
}
var profilePictureUploadedSuccessMsg = "Your Profile has been updated successfully.Please login to see the changes.",
    profilePictureUploadedFailureMsg = "Picture has not been uploaded",
    coverPictureUploadedSuccessMsg = "Cover Picture changed.",
    coverPictureUploadedFailureMsg = "Cover picture has not been uploaded",
    coverPictureEditedSuccessMsg = "Edited successfully.",
    coverPictureEditedFailureMsg = "Not Edited successfully.",
    defaultProfilePicturePath = "/ET/images/contact-person.png",
    defaultCoverPicturePath1 = "/ET/images/banner-user1.jpg",
    defaultCoverPicturePath2 = "/ET/images/banner-user2.jpg",
    defaultCoverPicturePath3 = "/ET/images/banner-user3.jpg",
    mouse_is_inside = !1;

$(document).ready(function() {
    $("#inboxContentDiv").hover(function() {
        mouse_is_inside = !0
    }, function() {
        mouse_is_inside = !1
    }), $(".sp-container").hover(function() {
        mouse_is_inside = !0
    }, function() {
        mouse_is_inside = !1
    }), $("body").mouseup(function() {
        $(".sp-container").hover(function() {
            mouse_is_inside = !0
        }, function() {
            mouse_is_inside = !1
        }), $(".customize-block").hover(function() {
            mouse_is_inside = !0
        }, function() {
            mouse_is_inside = !1
        }), mouse_is_inside || ($(".customize-block").hide(), $(".press-enter-to-post").hide(), $(".panel-share-div").hide(), $(".panel-div").hide(), $("#user-list-to-send-frnd-request").hide())
    })
}), $(document).ready(function() {
	
    
    $("#flip").click(function() {
        $("#panel").slideToggle("slow")
    }), callFunctionHeader(),
    loadChildList();
    var e = window.location.href.substr(window.location.href.lastIndexOf("?"));
	var f=e.indexOf("ERROR");
	if(f==1){
		$("#messageContent").empty();
		$("#showMsgButton").click();
		$("#messageContent").append("Login error. Please activate your user account.");
		
	}
}),$(function() {
	var e = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
	var f=e.slice(0,e.indexOf("?"));
    $("#myNavbar ul li a").each(function() {
        $(this).attr("href") + "#", $(this).attr("href").indexOf(f) >= 0 || "" == $(this).attr("href") ? $(this).addClass("active") : $(this).removeClass("active")
    })
}), $(function() {
    var e = $("meta[name='_csrf_token_header_page']").attr("content"),
        a = $("meta[name='_csrf_headername_header_page']").attr("content");
    $(document).ajaxSend(function(i, o, t) {
        o.setRequestHeader(a, e)
    })
    
    getFolderSizeDetails();
}), $("#playVideoPopUp").on("hidden.bs.modal", function() {
    var e = document.getElementById("playVideo");
    e.pause()
});

function loadChildList() {
    $.ajax({
        url: "getChildList?${_csrf.parameterName}=${_csrf.token}",
        type: "GET",
        cache: !1,
        dataType: "json",
         success: function(e) {
        	 $("#childLi").empty();
        	 var html='';
        	 $.each(e, function(e, i) {
        	  html=html  + ' <li><a href="/ET/user/j_spring_security_switch_user?j_username='+i.email+'">'+i.fullname+'</a></li>';
        	 })
        	
             $("#childLi").html(html);
        },
    error: function() {}
    })
}

function getFolderSizeDetails() {
    $.ajax({
        url: "getFileSize?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
        	 var totalAssignedData=[];
        	 var totalUsedData=[];       	
        	 var labels=[];
        	Object.keys(e).forEach(function(f) {
        		var name=e[f].fullname;
        		name=name.split(" ")[0];
               var value = e[f].totalMemoryAssigned;
               totalAssignedData.push(value);
               var usedDataVar=e[f].totalMemoryUsed;
               usedDataVar=usedDataVar. toFixed(2)
               totalUsedData.push(usedDataVar);
               labels.push(name);
        	});
        	
        	
        	
        	var ctx = document.getElementById("myChart").getContext('2d');
        	var myChart = new Chart(ctx, {
        	    type: 'bar',
        	    /*title:{
        	        text: "Font Weight is normal",
        	        fontWeight: "normal",
        	      },*/
        	    data: {
        	        labels: labels,
        	        datasets: [
        	        {
        	            label: 'Used space (in MB)',
        	            data: totalUsedData,
        	            backgroundColor: "rgba(225, 58, 55, 0.7)",
						hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
        							
        							hoverBorderWidth: 1,
        							hoverBorderColor: 'lightgrey',
        							 borderWidth: 1
        	        },
        	        {
        	            label: 'Total space (in MB)',
        	            data: totalAssignedData,
        	            backgroundColor: "#00da63",
						hoverBackgroundColor: "#00da63",
        							hoverBorderWidth: 1,
        							hoverBorderColor: 'lightgrey',
        							 borderWidth: 1
        	        },
        	        ]
        	    },
        	    
        	    options: {legend: {
                    display: true,
                    labels: {
                    	boxWidth: 20
                    }
                },
                
                scales: {
                	xAxes: [{ 
                		/*categoryPercentage: 1,*/
                		/*barPercentage: 0.1,*/
                		  barThickness:20,
                      	stacked: true, 
                      	ticks: {
                            beginAtZero:true,
                            autoSkip: false,
                            maxRotation: 90,
                            minRotation: 90,
                            fontSize: 14,
                          
                       fontWeight:900
                        },
                        gridLines: { display: false }
                       
                        }],
                        yAxes: [{ 
                          	stacked: true ,
                          	display: true,
                          	beginAtZero:true,
                            gridLines: { display: true }
                          	/* ticks: {
                                 // Include a dollar sign in the ticks
                                 callback: function(value, index, values) {
                                     return "";
                                 }
                             }
                            */ 
                            }]
    	          
    	        }
        	    }
        	});
        
          
        },
        error: function() {}
    })
}


/*function saveUpgradation(){
	
	var userType=$('input[name=user_Type]:checked').val();
	var amount=$("#amount").val();
	var emailId=$("#email_Id").val();
	$.ajax({
        url: "userUpgradationSuccessful?${_csrf.parameterName}=${_csrf.token}",
        type: "GET",
        data:{userType:userType,amount:amount,emailId:emailId},
        cache: !1,
        dataType: "json",
        success: function(e) {
        	alert("success");
        // $("#showMsgButton").click(), $("#messageContent").append(fileEditDescriptionSuccessMsg), $("#loadingImage").hide(), $("#dateOfReleaseModel .close").click(), $("#timeLockedContentPopUp .close").click(), setTimeout(closeAllPopUp, 4e3)
    },error: function() {}
    });
	
	

}*/
function displayAmountForUpgration(){
	
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
}

function clearUpgradeForm(){
	$("#divAuthorizeNetPopup").hide();
	$("#upgradUserFormId").show();
		$("#upgradUserFormAuthorizeNetId").hide();
	$("#iframeAuthorizeNet").src="";
	$("#token").val('');
	$.ajax({
        url: "userMembershipInfo?${_csrf.parameterName}=${_csrf.token}",
        type: "GET",
        cache: !1,
        dataType: "json",
        success: function(e) {
        	console.log(e);
        	//var htmlContent="";
        	var middleHtml="";
        	var amountHtml="";
        	if(e.memberType!="prime"){
        	
        		var	startHtml='<label style="margin-top: 43px;margin-left: 256px;"><span class="field-name membership" >Please choose your membership type from below.</span></label>'
        		if(e.memberType=="free"){
        			middleHtml = '<div class="plan-section-2">'
					+'<input type="radio" name="user_Type" class="upgrade-user" value="basic"  onclick="displayAmountForUpgration()" style="margin:36px 14px 44px 384px;" checked="checked"><label class="label-memberType">Basic</label>'
					+'<input type="radio" name="user_Type" class="upgrade-user" value="prime"  onclick="displayAmountForUpgration()" style="margin: 7px 10px 40px 59px;"><label class="label-memberType">Prime</label></div>'
					
					amountHtml='<label><span class="field-name membership">Amount:</span></label>'
						 + '<input type="text"  id="amount" name="amount" value="$1" readonly="readonly" style="background: #edecec;color:#365899">'
						 
        		}else if(e.memberType=="basic"){
        			middleHtml = '<div class="plan-section">'
					+'<br><input type="radio" name="user_Type" class="upgrade-user" value="prime" onclick="displayAmountForUpgration()" checked="checked"><label class="label-memberType">Prime</label></div>'
        	
					amountHtml='<label><span class="field-name membership">Amount:</span></label>'
						 + '<input type="text"  id="amount" name="amount" value="$2" readonly="readonly" style="background: #edecec;color:#365899">'
        		}
        		
		        var endHtml = '<div class="col-sm-2"></div>'
		        			 +'<div class="col-sm-12">'
							 + '<div class="ammount-section">'
							 + amountHtml
							 + '<div style="clear: both;"></div>'
						  	 + '</div>'
							 + '<div style="margin-left: 317px;">'
							 + '<button type="button" onclick="checkPaymentAmount()"   class="paymentBtn" style="  width: 305px;" id="payment" >Make Payment &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'
							 + '</div></div>';
		        
		       var htmlContent = startHtml + middleHtml + endHtml;
		       $("#uploadBox").html(htmlContent);
        	
        	}else{
        		var	html='<label style="margin-top: 43px;margin-left: 352px;"><span class="field-name membership" >You are a prime user.</span></label>'
        		var htmlContent = html ;
        		$("#uploadBox").html(htmlContent);
        	
        	}
    },error: function() {}
    });

	
}
function setSaluation(){
	var salutationEditVar=$("#salutationEditVar").val();
	$("#salutationEditPage option").filter(function() {
	    return this.text == salutationEditVar; 
	}).attr('selected', true);
	
	
}
function enabledPaymentBtn(){
	if ($('input[name=user_Type_confirm]:checked')) {
	//$('#paymentConfirm').prop('disabled', false);
	}else{
	//	$('#paymentConfirm').prop('disabled', true);
	}
}
function closeUpgradePopUp(){
	 $("#showUpgradeUser .close").click();
	 closeAllPopUp();
}

function saveUpgradation(accountType,accountNumber,transId,responseCode,
		authorization,
		totalAmount){
	var userType=$('input[name=user_Type]:checked').val();
	$.ajax({
        url: "userUpgradationSuccessful?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data:"userType="+userType +
       "&accountType=" +accountType+
       "&accountNumber=" +accountNumber+
       "&transactions_id="+transId+
       "&responseCode="+responseCode+
		"&authorization="+authorization+
		"&amount="+totalAmount,
        cache: !1,
        dataType: "json",
        success: function(msg) {
        	 $("#showUpgradeUser .close").click();
        	 $("#messageContent").empty(), 
        	 $("#showMsgButton").click(),
        	 $("#messageContent").append('success'+msg), 
        	 $("#loadingImage").hide();
       },error: function(error) {
    	$("#showUpgradeUser .close").click();
    	 $("#messageContent").empty(), 
   	 $("#showMsgButton").click(),
   	 $("#messageContent").append(error.responseText), 
   	 $("#loadingImage").hide();
   }
    });
	
	

}