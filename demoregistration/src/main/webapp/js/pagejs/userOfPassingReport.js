function getUserList() {
	$("#searchTextInput").val('')
	userSearch('alive');
   /* $("#showMessage").empty(), $.ajax({
        url: "getFriendListForPassingReport?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !0,
        success: function(a) {
            $("#showUserListForUserPassingReport").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (d = accessFileUrl + a[c][3]), b = b + '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" id="userOfPassingDiv_' + c + '">  <figure>   <label class="control control--radio">  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><div class="item-img-holder"> <img  src="' + d + '" alt="item1"> </div></div>   <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12"><figcaption>    <h3>' + a[c][1] + "</h3>    <p>" + a[c][2] + '</p>   </figcaption></div>    <input type="radio" name="userOfPassingRadioButton" id="userOfPassingRadioButton" value="' + c + '" />    <input type="hidden" name="userOfPassingEmailId_' + c + '" id="userOfPassingEmailId_' + c + '" value="' + a[c][2] + '"/>    <input type="hidden" name="userOfPassingUserId_' + c + '" id="userOfPassingUserId_' + c + '" value="' + a[c][0] + '"/>  <div class="control__indicator"></div>   </label>   <div class="clearfix"> </div> </figure> </div>'
            }
            $("#showUserListForUserPassingReport").html(b)
        },
        error: function() {}
    })*/
}

function openPassingReportConfirmBox() {
    $("#showMessage").empty(), $("#messageContent").empty();
    var a = [];
    $('input[name="userOfPassingRadioButton"]:checked').each(function() {
        a.push($(this).val())
    }), a.length < 1 ? ($("#showMessage").html(selectperson), $("#showMessage").show()) : $("#openPassingReportConfirmBoxButton").click()
}

function initiateReportOfUserPassingNo() {
    $("#openPassingReportConfirmPopUp .close").click()
}

function initiateReportOfUserPassing() {
    $("#openPassingReportConfirmPopUp .close").click(), $("#showMessage").empty(), $("#messageContent").empty(), $("#loadingImage").show();
    var a = [];
    $('input[name="userOfPassingRadioButton"]:checked').each(function() {
        a.push($(this).val())
    }), $("#decsased_user_id").val($("#userOfPassingUserId_" + a).val()), $("#decsased_email_id").val($("#userOfPassingEmailId_" + a).val()), $.ajax({
        url: "initiateReportOfUserPassing?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("initialReportOfPassingFormId")),
        processData: !1,
        contentType: !1
    }).done(function(a) {
        $("#loadingImage").hide(), $("#showMessage").html(a), $("#showMessage").show()
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMessage").html(data), $("#showMessage").show()
    })
}

function userSearch(a) {
    $("#showUserListForUserPassingReport").empty();
    var b = $("#searchTextInput").val();
   // if (null != b && "" != b && void 0 != b) {
        var c = "username";
        $("#user-panel").empty(), $("#user-panel").slideDown("slow"), $.ajax({
            url: "searchFriendListForPassingReport?${_csrf.parameterName}=${_csrf.token}",
            data: "searchBy=" + c + "&searchText=" + b + "&userType=" + a,
            type: "POST",
            success: function(a) {
                $("#showUserListForUserPassingReport").empty();
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = "/ET/images/user-pic.png";
                    null != a[c][3] && void 0 != a[c][3] && (d = accessFileUrl + a[c][3]), b = b + '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" id="userOfPassingDiv_' + c + '">  <figure>   <label class="control control--radio">  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><div class="item-img-holder"> <img  src="' + d + '" alt="item1"> </div></div>   <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12"><figcaption>    <h3>' + a[c][1] + "</h3>    <p>" + a[c][2] + '</p>   </figcaption></div>    <input type="radio" name="userOfPassingRadioButton" id="userOfPassingRadioButton" value="' + c + '" />    <input type="hidden" name="userOfPassingEmailId_' + c + '" id="userOfPassingEmailId_' + c + '" value="' + a[c][2] + '"/>    <input type="hidden" name="userOfPassingUserId_' + c + '" id="userOfPassingUserId_' + c + '" value="' + a[c][0] + '"/>  <div class="control__indicator"></div>   </label>   <div class="clearfix"> </div> </figure> </div>'
                }
                $("#showUserListForUserPassingReport").html(b)
            },
            error: function(a) {}
        })
   // } //else getUserList()
}
var selectperson = "Please select one person to report a passing";
$(document).ready(function() {
    getUserList()
});