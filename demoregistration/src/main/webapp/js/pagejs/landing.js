function getShareFileList() {
    $.ajax({
        url: "getShareFileList?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
            $("#share_post_div").empty(), $.each(e, function(e, i) {
                1 == i.isTimeLockedContentQAns ? ifTypeIsTimeLockedContentQAns(i, e) : 1 == i.is_Album ? ifTypeIsAlbum(i, e) : 1 == i.is_video ? ifTypeIsVideo(i, e) : ifTypeIsFile(i, e)
            })
        },
        error: function() {}
    })
}

function ifTypeIsAlbum(e, i) {
    var a = "",
        l = "";
    l = e.share_by_user_Name;
    var s = "/ET/images/pst-user.png";
    null != e.userProfileImage && (s =   accessFileUrl+ e.userProfileImage);
    var t = "";
    if (null != e.shareDate) {
        var o = new Date(e.shareDate);
        t = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear()
    }
    var r = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>';
    3 == e.shareType && (r = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    var c =   e.filePath,
        n = c.length,
        d = c.substr(6, n);
    d = d.replace(/\\/g, "/");
    var p =   e.filePath.replace(/\\/g, "/").split("/"),
        g = (p[p.length - 1], d.split(".")),
        v = g[g.length - 1],
        m = "download",
        u = ' <iframe src="' + accessFileUrl+ e.filePath.replace(/\\/g, "/") + '" width = "500px" height = "500px"></iframe> ';
    "doc" == v && (u = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), "docx" == v && (u = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel" /> '), "xls" == v && (u = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), "xlsx" == v && (u = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == v || "jpeg" == v || "png" == v || "gif" == v || "JPG" == v || "JPEG" == v || "PNG" == v || "GIF" == v) && (gapStyle = "", m = "show", u = ' <img src="' + accessFileUrl+ e.filePath.replace(/\\/g, "/") + '" width = "800px" height = "276px"/>');
    var h = '<span><i class="fa fa-eye" aria-hidden="true"></i></span><p>View</p>';
    "download" == m && (h = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
    var f = "color:" + e.fileDescColor + ";font-size:" + e.fileDescSize + "px;font-family:" + e.fileDescStyle,
        x = [],
        P = [],
        w = "";
    if (1 == e.is_Album) {
        m = "album";
        for (var y = [], b = 0; b < e.usersAlbum.length; b++)
            if (1 != e.usersAlbum[b].is_deleted) {
                var I = {
                    src: accessFileUrl + e.usersAlbum[b].filePath,
                    details: e.usersAlbum[b].fileDesc,
                    caption: e.usersAlbum[b].fileName
                };
                y.push(I), P.push(y), albumFilePath = e.usersAlbum[b].filePath
            }
    }
    var T = e.fileId + "-main-post";
    x.push(T), a = a + '<li>    <div class="col-lg-12">   <div class="details-pst">  <div class="row">   <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">    <div class="useer-post-pic"> <img src="' + s + '" alt="" /></div>  </div>  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">   <div class="post-all-details">       Share By : <span >' + l + "</span><p>File Name : <span>" + e.fileName + '</span>  <br/></p>   </div> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="post-time">' + t + " &nbsp;&nbsp;" + r + '</span> </div> <div class="col-lg-12"><div class="album-post main-post" > <div class="gallery" id="' + e.fileId + '-main-post"> ' + w + '							</div>  </div>  </div><div class="clearfix"></div></div><div class="col-lg-12 file-description-landing-page" style="' + f + '">  ' + e.fileDesc + ' </div>  </div><div class="clearfix"></div></div> </div><div class="clearfix"></div>  </li> ', $("#share_post_div").append(a);
    for (var _ = 0; _ < x.length; _++) {
        for (var y = "", b = 0; b < P.length; b++) _ == b && (y = P[_]);
        showAlbumCaraousal(x[_], y)
    }
}

function showAlbumCaraousal(e, i) {
    $("#" + e).imagesGrid({
        images: i,
        align: !0
    })
}

function ifTypeIsVideo(e, i) {
	  
    var a = "",
        l = "";
    l = e.share_by_user_Name;
    var s = "/ET/images/pst-user.png";
    null != e.userProfileImage && (s =   accessFileUrl+ e.userProfileImage);
    var t = "";
    if (null != e.shareDate) {
        var o = new Date(e.shareDate);
        t = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear()
    }
    var r = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>';
    if (3 == e.shareType && (r = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), 1 != e.is_Album) {
        var c =  e.filePath,
            n = c.length,
            d = c.substr(6, n);
        d = d.replace(/\\/g, "/");
        var p =   e.filePath.replace(/\\/g, "/").split("/"),
            g = (p[p.length - 1], d.split(".")),
            v = g[g.length - 1],
            m = "video",
            u = ' <img src="'+ accessFileUrl+ e.video_thumbnail + '" width = "500px" height = "500px"  /> <div class="white-over"></div>';
        ("jpg" == v || "jpeg" == v || "png" == v || "gif" == v || "JPG" == v || "JPEG" == v || "PNG" == v || "GIF" == v) && (gapStyle = "", u = ' <img src="' + accessFileUrl+ e.filePath.replace(/\\/g, "/") + '" width = "800px" height = "276px"/>');
        var downloadFileName="ET."+v;
        var h = '<span><i class="fa fa-play" aria-hidden="true"></i></span><p>Play</p>',
            f = "color:" + e.fileDescColor + ";font-size:" + e.fileDescSize + "px;font-family:" + e.fileDescStyle;
        a = a + '<li>    <div class="col-lg-12">   <div class="details-pst">  <div class="row">   <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">    <div class="useer-post-pic"> <img src="' + s + '" alt="" /> </div>  </div>  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">   <div class="post-all-details">       Share By : <span >' + l + "</span><p>File Name : <span>" + e.fileName + '</span>  <br/></p>   </div> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="post-time">' + t + " &nbsp;&nbsp;" + r + '</span> </div> <div class="col-lg-12">   <div class="main-post">' + u + '<div class="overlay-box"> <ul class="action-all">  <li ><a href="#" onclick="enlargeDivLanding(\'' + m + "','" + accessFileVideoUrl+ e.filePath.replace(/\\/g, "/")+ "','" + accessDownloadFileUrl+ e.filePath.replace(/\\/g, "/") +"','" +downloadFileName+ "');return false;\">" + h + '</a></li> </ul> </div> </div>  </div><div class="clearfix"></div></div><div class="col-lg-12 file-description-landing-page" style="' + f + '">  ' + e.fileDesc + ' </div>  </div><div class="clearfix"></div></div> </div><div class="clearfix"></div>  </li> '
    }
    $("#share_post_div").append(a)
}

function ifTypeIsFile(e, i) {
    var a = "",
        l = "";
    l = e.share_by_user_Name;
    var s = "/ET/images/pst-user.png";
    null != e.userProfileImage && (s = accessFileUrl + e.userProfileImage);
   var t = "";
    if (null != e.shareDate) {
        var o = new Date(e.shareDate);
        t = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear()
    }
    var r = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>';
    if (3 == e.shareType && (r = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), 1 != e.is_Album) {
        var c =   e.filePath,
            n = c.length,
            d = c.substr(6, n);
        d = d.replace(/\\/g, "/");
        var p =   e.filePath.replace(/\\/g, "/").split("/"),
            g = (p[p.length - 1], d.split(".")),
            v = g[g.length - 1],
            m = "download",
            u = ' <iframe src="' + accessFileUrl+ e.filePath.replace(/\\/g, "/") + '" width = "500px" height = "500px"></iframe> ';
        "doc" == v && (u = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), "docx" == v && (u = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel" /> '), "xls" == v && (u = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), "xlsx" == v && (u = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == v || "jpeg" == v || "png" == v || "gif" == v || "JPG" == v || "JPEG" == v || "PNG" == v || "GIF" == v) && (gapStyle = "", m = "show", u = ' <img src="' + accessFileUrl+ e.filePath.replace(/\\/g, "/") + '" width = "800px" height = "276px"/>');
        var h = '<span><i class="fa fa-eye" aria-hidden="true"></i></span><p>View</p>';
        "download" == m && (h = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
        var downloadFileName="ET."+v;
        var f = "color:" + e.fileDescColor + ";font-size:" + e.fileDescSize + "px;font-family:" + e.fileDescStyle;
        a = a + '<li>    <div class="col-lg-12">   <div class="details-pst">  <div class="row">   <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">    <div class="useer-post-pic"> <img src="' + s + '" alt="" /> </div>  </div>  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">   <div class="post-all-details">       Share By : <span >' + l + "</span><p>File Name : <span>" + e.fileName + '</span>  <br/></p>   </div> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="post-time">' + t + " &nbsp;&nbsp;" + r + '</span> </div> <div class="col-lg-12">   <div class="main-post">' + u + '<div class="overlay-box"> <ul class="action-all">  <li ><a href="#" onclick="enlargeDivLanding(\'' + m + "','" + accessFileUrl+  e.filePath.replace(/\\/g, "/") + "','" + accessDownloadFileUrl+ e.filePath.replace(/\\/g, "/") +"','" +downloadFileName+ "');return false;\">" + h + '</a></li> </ul> </div> </div>  </div><div class="clearfix"></div></div><div class="col-lg-12 file-description-landing-page" style="' + f + '">  ' + e.fileDesc + ' </div>  </div><div class="clearfix"></div></div> </div><div class="clearfix"></div>  </li> '
    }
    $("#share_post_div").append(a)
}

function ifTypeIsTimeLockedContentQAns(e, i) {
    var a = "",
        l = "";
    l = e.share_by_user_Name;
    var s = "/ET/images/pst-user.png";
    null != e.userProfileImage && (s = accessFileUrl+ e.userProfileImage);
    var t = "";
    if (null != e.shareDate) {
        var o = new Date(e.shareDate);
        t = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear()
    }
    var r = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>';
    3 == e.shareType && (r = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    var c = ' <img src="/ET/images/pdf.png" width = "500px" height = "500px" class="docExcel" style="margin-top: 33px;"/> ',
        n = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>';
    a = a + '<li>    <div class="col-lg-12">   <div class="details-pst">  <div class="row">   <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">    <div class="useer-post-pic"> <img src="' + s + '" alt="" /> </div>  </div>  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">   <div class="post-all-details">       Share By : <span >' + l + '</span><p>File Name : <span> Time Locked Content Question Answer</span>  <br/></p>   </div> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="post-time">' + t + " &nbsp;&nbsp;" + r + '</span> </div> <div class="col-lg-12">   <div class="main-post">' + c + '<div class="overlay-box"> <ul class="action-all">  <li ><a href="#" onclick="generateAndSavePdfForTimeLockedContentQuesAns(\'' + e.answerGroupId + "');return false;\">" + n + '</a></li> </ul> </div> </div>  </div><div class="clearfix"></div></div> </div><div class="clearfix"></div></div> </div><div class="clearfix"></div>  </li> ', $("#share_post_div").append(a)
}

function getTimeLockedContentValue(e) {
    $.ajax({
        url: "getTimeLockedContentQuesAnswer?&answer_group_id=" + e + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        contentType: "application/json",
        dataType: "json",
        async: !1,
        success: function(e) {
            for (var i = "", a = "", l = 0; l < e.length; l++) "School" == e[l].timeLockedContentQuesMasterModel.question_type && (i = i + '<li style="list-style:none !important;">  <div class="col-lg-12 last-wishes-left form-group">     <p class="qs-line"> Q. ' + e[l].timeLockedContentQuesMasterModel.question + " </p> A. " + e[l].answer + "    </div>    </li>"), "College" == e[l].timeLockedContentQuesMasterModel.question_type && (a = a + '<li style="list-style:none !important;">  <div class="col-lg-12 last-wishes-left form-group">     <p class="qs-line"> Q. ' + e[l].timeLockedContentQuesMasterModel.question + " </p> A. " + e[l].answer + "    </div>    </li>");
            $("#highSchoolQuestion").html(i), $("#collegeQuestion").html(a)
        },
        error: function() {}
    })
}

function generateAndSavePdfForTimeLockedContentQuesAns(e) {
    getTimeLockedContentValue(e);
    var i = $("#userName").val(),
        a = $("#printTimeLockedContent").html(),
        l = $("#logoDivTimeLockedContentQuesAns").html(),
        s = window.open("", "Time Locked Content Question", "height=430,width=750");
    s.document.write("<html><head>"), s.document.write('</head><body><table align="center" >'), s.document.write(l), s.document.write("<td>" + i + "</td></table>"), s.document.write("Time Locked Content Question Answer :"), s.document.write(a + "<br>"), s.document.write("</body></html>"), s.document.close(), s.print(), s.close()
}

function checkLandingImageUrl(e, i, a) {
	e =accessFileUrl+ e,
    $("#" + i).attr("src", e)
}

function checkImageUrlProfile(e, i, a) {
	e =accessFileUrl+ e, $.get(e).done(function() {
        $("#" + i).attr("src", e)
    }).fail(function() {
        $("#" + i).attr("src", a)
    })
}

function initialLandingpage() {
    var e = "/ET/images/contact-person.png",
        i = $("#profilePictureUrl").val();
    checkImageUrlProfile(i, "landingProfilePictureImg", e);
    var a = $("#coverPictureUrl_1").val();
    null != $("#userProfileimage1").val() && "" != $("#userProfileimage1").val() && void 0 != $("#userProfileimage1").val() ? checkLandingImageUrl(a, "landingCoverPictureImg1", defaultCoverPicturePath1) : ($("#coverImageEditBtn1").hide(), $("#coverImageSaveBtn1").hide(), $("#landingCoverPictureImg1").css({
        top: "-224px !important"
    }));
    var l = $("#coverPictureUrl_2").val();
    null != $("#userProfileimage2").val() && "" != $("#userProfileimage2").val() && void 0 != $("#userProfileimage2").val() ? checkLandingImageUrl(l, "landingCoverPictureImg2", defaultCoverPicturePath2) : ($("#coverImageEditBtn2").hide(), $("#coverImageSaveBtn2").hide(), $("#landingCoverPictureImg2").css({
        top: "-224px !important"
    }));
    var s = $("#coverPictureUrl_3").val();
    null != $("#userProfileimage3").val() && "" != $("#userProfileimage3").val() && void 0 != $("#userProfileimage3").val() ? checkLandingImageUrl(s, "landingCoverPictureImg3", defaultCoverPicturePath3) : ($("#coverImageEditBtn3").hide(), $("#coverImageSaveBtn3").hide(), $("#landingCoverPictureImg3").css({
        top: "-224px !important"
    }))
}

function enlargeDivLanding(e, i, a,f) {
    if("show" == e ){
    	  	api_gallery=[ i];
        	default_width=600;
        	default_height=600;
        	$.prettyPhoto.open(api_gallery);
        		
    }
    else if( "video" == e ){
    	jwplayer("playVideo").setup({
    		   
            file: i,
            image: "/uploads/example.jpg",
            width: 560,
            height: 550,
            autostart: !0
        });
        $("#openPlayVideoButton").click();
    } else{ 
    	downloadFileLanding(f,a)
    
    }
}

function downloadFileLanding(fileName,c) {
	window.open(c+"&fileName="+fileName)
}

function showToolTipPopUp(e, i, a, l, s, t) {
    $(e).tooltipster({
        trigger: "click",
        maxWidth: 400,
        side: "right"
    }).tooltipster("open")
}

function editImageTest(e) {
    $("#myCarousel").carousel("pause"), $("#coverImageSaveBtn" + e).show(), $("#drag-to-set-image" + e).show(), $("#coverImageEditBtn" + e).hide(), $("#coverImageUploadBtn" + e).hide(), $("#landingCoverPictureImgWrapper" + e).css({
        cursor: "-webkit-grab"
    }), $(function() {
        $("#landingCoverPictureImgWrapper" + e).imagedrag({
            input: "#output" + e,
            position: "relative",
            attribute: "html"
        })
    })
}