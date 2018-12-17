function initiateManagePage() {
    var a = "/ET/images/contact-person.png",
        b = $("#profilePictureUrl").val();
    checkImageUrlProfile(b, "landingProfilePictureImg", a)
}

function checkImageUrlProfile(e, i, a) {
	e =accessFileUrl+ e, $.get(e).done(function() {
        $("#" + i).attr("src", e)
    }).fail(function() {
        $("#" + i).attr("src", a)
    })
}

function showToolTipPopUp(a, b, c, d, e, f) {
    $(a).tooltipster({
        trigger: "click",
        maxWidth: 400,
        side: "right"
    }).tooltipster("open")
}

function userSearchToSendFrndRequest(a) {
    $("#user-list-to-send-frnd-request").slideDown("slow"), $("#user-list-to-send-frnd-request").empty();
    var b = $("#searchUserToAddFrndInput").val();
    if (null != b && "" != b && void 0 != b) {
        var c = "username";
        $("#user-panel").empty(), $("#user-panel").slideDown("slow"), $.ajax({
            url: "searchUserToSendFriendRequest?${_csrf.parameterName}=${_csrf.token}",
            data: "searchBy=" + c + "&searchText=" + b + "&userType=" + a,
            type: "POST",
            success: function(a) {
                $("#user-list-to-send-frnd-request").empty();
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = !1,
                        e = '<input type="checkbox"  value="' + a[c][0] + '" name="add-friend-checkbox" id="add-friend-checkbox"/> ';
                    null != a[c][4] && void 0 != a[c][4] && (d = !0, e = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="add-friend-checkbox" id="add-friend-checkbox" disabled/> ');
                    var f = "/ET/images/user-pic.png";
                    null != a[c][3] && void 0 != a[c][3] && (f = accessFileUrl + a[c][3]), b = b + '<li class="control-group" onclick="showUserDetails(\'' + a[c][0] + "');setUserDetails('" + a[c][0] + "','" + a[c][2] + '\')"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + f + '" alt="" /></div> <div class="user-name-recipmnt"><h5>' + a[c][1] + "</h5><p>" + a[c][2] + '</p></div>  <div class="control__indicator"></div> </label> </li>'
                }
                $("#user-list-to-send-frnd-request").html(b)
            },
            error: function(a) {}
        })
    } else $("#user-list-to-send-frnd-request").slideUp("slow"), $("#user-list-to-send-frnd-request").empty(), viewFriendRequest()
}

function setUserDetails(a, b) {
    $("#userId").val(a), $("#emailId").val(b)
}

function showUserDetails(a) {
    $("#view-friend-request-list").empty(), $("#user-list-to-send-frnd-request").slideUp("slow"), $.ajax({
        url: "showUserDetailsToCheckFriendStatus?${_csrf.parameterName}=${_csrf.token}",
        data: "userIdToCheckFrnd=" + a + "&frndStatusToCheck=1",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#view-friend-request-list").empty();
            var b = "",
                c = "/ET/images/user-pic.png";
            null != a.profileImage && void 0 != accessFileUrl+ a.profileImage && (c = accessFileUrl+ a.profileImage);
            var d = !1;
            null != a.fnd_request_id && "" != a.fnd_request_id && (d = !0, friend_request_id = a.fnd_request_id);
            var e = new Date(a.bday),
                f = new Date(e),
                g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                h = f.getDate(),
                i = f.getMonth(),
                j = f.getFullYear(),
                k = "";
            var is_parent_child=false;
           if(a.parent_email_id==$("#email").val()  || a.email==$("#parentEmailId").val()) {
        	   is_parent_child=true;
            }
            if(is_parent_child==false){
	             if (1 == d) {
	                var l = a.is_frnd_requested_by_me;
	                
	                1 == a.fnd_request_status ? 
	                		k = ' <div class="sent-panel btn-wrapp">  '+
	                		' <button type="button" class="btn btn-default" onclick="unFriend(' + friend_request_id + ')">UnFriend</button>   </div> ' 
	                		
	                		: 0 == a.fnd_request_status ? 
	                		0 == l ? k = ' <div class="sent-panel btn-wrapp">  '+
	                		' <button type="button" class="btn btn-default" onclick="acceptFriendRequest(' + friend_request_id + ')">ACCEPT</button>  '+
	                		' <button type="button" class="btn btn-default" onclick="rejectFriendRequest(' + friend_request_id + ')">REJECT</button> '+
	                		' </div> ' 
	                		: 1 == l && (k = ' <div class="sent-panel btn-wrapp">   <button type="button" class="btn btn-default" >Friend Request Sent</button>   </div> ') 
	                		: k = ' <div class="sent-panel btn-wrapp">   <button type="button" class="btn btn-default" onclick="sendFriendRequest(' + a.id + ')">Add Friend</button>   </div> '
	            }
	             else k = ' <div class="sent-panel btn-wrapp">  '+
	             ' <button type="button" class="btn btn-default" onclick="sendFriendRequest(' + a.id + ')">Add Friend</button>   </div> ';
            }
            
            b = b + ' <div class="find-user-block">   <div class="row"> <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"> <div class="user-holder-admin"> '+
            '<img src="' + c + '" alt=""> </div>    </div>   <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">    <div class="user-all-details"> '+
            '<div class="col-lg-12"><p class="user-name-big">' + a.fullname + '</p></div>  <div class="clearfix"></div>  <div class="col-lg-12">'+
            '<ul class="manage-frnd-all-detils-user"> <li><span class="icons-relate"></span>Name :' + a.fullname + '</li>  '+
            '<li><span class="icons-relate"></span>Email ID :' + a.email + '</li> '+
           /* ' <li><span class="icons-relate"></span>Phone : ' + a.mobileno + '</li> '+
            '  <li><span class="icons-relate"></span>Date of Birth : ' + g[i] + " " + h + ", " + j + "</li>   " +*/
            "</ul> "+ k + "</div>   </div>   </div>   </div>   </div> ", $("#view-friend-request-list").html("<h2> </h2>" + b)
            
            },
        error: function(a) {}
    })
}

function sendFriendRequest(a) {
    $("#messageContent").empty(), $("#loadingImage").show();
     $.ajax({
        url: "sendFriendRequest?${_csrf.parameterName}=${_csrf.token}&userList=" +a,
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#owl-demo").data("owlCarousel").destroy(), associatedFriendList(2, "initial"), $("#view-friend-request-list").empty(), $("#show-user-list-to-add-friend .close").click(), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(a), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#show-user-list-to-add-friend .close").click(), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(addFriendFailure), setTimeout(closeAllPopUp, 4e3)
    })
}

function viewFriendRequest() {
    $.ajax({
        url: "getFriendRequestList?${_csrf.parameterName}=${_csrf.token}",
        data: "friend_request_type=0",
        type: "POST",
        success: function(a) {
            $("#view-friend-request-list").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (d = accessFileUrl + a[c][3]);
                var e = new Date(a[c][6]),
                    f = new Date(e),
                    g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    h = f.getDate(),
                    i = f.getMonth(),
                    j = f.getFullYear();
                b = b + ' <div class="find-user-block">   <div class="row"> <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"> <div class="user-holder-admin"> <img src="' + d + '" alt=""> </div>    </div>   <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">    <div class="user-all-details">   <div class="col-lg-12"><p class="user-name-big">' + a[c][1] + '</p></div>  <div class="clearfix"></div>  <div class="col-lg-12"> '+
                '<ul class="manage-frnd-all-detils-user"> '+
                '<li><span class="icons-relate"></span>Name : ' + a[c][1] + '</li> '+
                '  <li><span class="icons-relate"></span>Email ID : ' + a[c][2] + '</li>'+
                /*'<li><span class="icons-relate"></span>Phone : ' + a[c][7] + '</li> '+
                '<li><span class="icons-relate"></span>Date of Birth : ' + g[i] + " " + h + ", " + j + '</li>  '+*/
                '</ul>  <div class="sent-panel btn-wrapp">   <button type="button" class="btn btn-default" onclick="acceptFriendRequest(' + a[c][5] + ')">ACCEPT</button>   <button type="button" class="btn btn-default" onclick="rejectFriendRequest(' + a[c][5] + ')">REJECT</button>   </div> </div>   </div>   </div>   </div>   </div> '
            }
            $("#view-friend-request-list").html("<h2> </h2>" + b)
        },
        error: function(a) {}
    })
}

function acceptFriendRequest(a) {
    $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "updateFriendRequestStatus?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: "friend_request_id=" + a + "&status=1",
        success: function(a) {
            viewFriendRequest(), $("#loadingImage").hide(), $("#messageContent").append(friendAddedSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), getFriendList()
        },
        error: function(a) {
            $("#loadingImage").hide(), $("#messageContent").append(friendNotAddedSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3)
        }
    })
}

function rejectFriendRequest(a) {
    $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "updateFriendRequestStatus?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: "friend_request_id=" + a + "&status=2",
        success: function(a) {
            viewFriendRequest(), $("#loadingImage").hide(), $("#messageContent").append(friendRejectedSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), getFriendList()
        },
        error: function(a) {
            $("#loadingImage").hide(), $("#messageContent").append(friendNotRejectedSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3)
        }
    })
}

function unFriend(a) {
    $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "updateFriendRequestStatus?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: "friend_request_id=" + a + "&status=" + FRIEND_REQUEST_UNFRIEND,
        success: function(a) {
            $("#view-friend-request-list").empty(), $("#loadingImage").hide(), $("#messageContent").append(unFriendSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), getFriendList()
        },
        error: function(a) {
            $("#loadingImage").hide(), $("#messageContent").append(unFriendUnSuccesfully), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3)
        }
    })
}

function associatedFriendList(a, b) {
    var c = 1;
    $.ajax({
        type: "POST",
        url: "getAssociatedFriendList?${_csrf.parameterName}=${_csrf.token}",
        data: {
            friend_status: c,
            associatedUserType: a,
            pageIndex: pageIndex,
            searchFor: b
        },
        cache: !1,
        success: function(a) {
            if (console.log(a), null != a) {
                var c = "";
                for (var d in a)
                    if (a.hasOwnProperty(d))
                        if (console.log(d + ": " + a[d]), "hashmap_key_pagenumber_for_associated_user" == d) "initial" == b && (totalNumberOfPages = a[d], $("#owl-demo").empty());
                        else if ("hashmap_key_user_for_associated_user" == d) {
                    1 == pageIndex && 0 == a[d].length && $("#suggested-friend").hide(), $.each(a[d], function(a, b) {
                        var d = new Date(b[5]),
                            e = new Date(d),
                            f = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            g = e.getDate(),
                            h = e.getMonth(),
                            i = e.getFullYear();
                        console.log(b[4] + " DOB=> " + f[h] + " " + g + ", " + i);
                        var j = b[2];
                        b[2].length > 28 && (j = b[2].substring(0, 28).concat(".."));
                        var d = "/ET/images/user-pic.png";
                        null != b[3] && void 0 != b[3] && (d = accessFileUrl + b[3]), c = c + '<div class="item">   <figure>  <div class="face-holder">   <img src="' + d + '" alt="" />   </div>   <figcaption>   <p><a href="#">' + j + '</a></p>  </figcaption>  <div class="overlay-box">  <ul class="associated-frnd-all-detils-user">  '+
                        '<li><span class="icons-relate"></span>' + b[0] + '</li> '+
                       /* '<li><span class="icons-relate"></span>' + b[4] + '</li>'+
                        '<li><span class="icons-relate"></span>' + f[h] + " " + g + ", " + i + '</li><div class="clearfix"></div> '+*/
                        '<li><button type="button" class="associated-user-add-frnd-btn" onclick="sendFriendRequest(' + b[1] + ')">Add Friend</button></li>   </ul>  </div> </figure> </div> '
                    });
                    var e = $(".owl-carousel"),
                        f = e.data("owlCarousel");
                    null != f && $("#owl-demo").data("owlCarousel").destroy(), $("#owl-demo").append(c), $("#owl-demo").owlCarousel({
                        navigation: !0,
                        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right icon-white'></i>"],
                        beforeInit: function(a) {
                            random(a)
                        }
                    }), $(".owl-next").length && $(".owl-next").click(function() {
                        next()
                    })
                }
            }
        },
        error: function() {}
    })
}

function random(a) {
    a.children().sort(function() {
        return Math.round(Math.random()) - .5
    }).each(function() {
        $(this).appendTo(a)
    })
}

function next() {
    totalNumberOfPages > pageIndex && (pageIndex++, associatedFriendList(2, "next"))
}
var FRIEND_REQUEST_WAITING = 0,
    FRIEND_REQUEST_ACCEPTED = 1,
    FRIEND_REQUEST_REJECTED = 2,
    FRIEND_REQUEST_UNFRIEND = 3,
    FRIEND_REQUEST_SHOW_ALL = 4,
    addFriendSuccess = "Friend request sent successfully",
    addFriendFailure = "Friend request not sent successfully",
    friendAddedSuccesfully = "Friend Added successfully",
    friendNotAddedSuccesfully = "Friend Not Added successfully",
    friendRejectedSuccesfully = "Friend request rejected successfully",
    friendNotRejectedSuccesfully = "Friend request not rejected",
    unFriendSuccesfully = "The user has been removed from your friend list.",
    unFriendUnSuccesfully = "Cannot remove user from your friend list.",
    pageIndex = 1,
    totalNumberOfPages = 1;
$(document).ready(function() {
    initiateManagePage(), getFriendList(), viewFriendRequest(), associatedFriendList(2, "initial")
});