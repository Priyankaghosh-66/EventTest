function pressEnterPostShow(a, b) {
    showDiv(a), "filename" == b && $("#filename-press-enter-to-post-" + a).show(), "filedescription" == b && $("#filedescription-press-enter-to-post-" + a).show()
}

function pressEnterPostHide(a, b) {
    "filename" == b && $("#filename-press-enter-to-post-" + a).hide(), "filedescription" == b && $("#filedescription-press-enter-to-post-" + a).hide()
}

function openSharePanel(a) {
    a.nextElementSibling.classList.toggle("show")
}

function setDatePickerValue(a) {
    if (null == $("#date_of_release_timepicker").val() || "" == $("#date_of_release_timepicker").val()) {
        for (var b = 0; 18 > b; b++) $("#date_of_release_timepicker").find(".help-block").eq(b).show(), $("#dateOfReleaseModelForm").find(".help-block").css("color", "#a94442");
        return !1
    }
    if (null != $("#date_of_release_timepicker").val()) {
        for (var b = 0; 18 > b; b++) $("#dateOfReleaseModelForm").find(".help-block").eq(b).hide(), $("#dateOfReleaseModelForm").find(".form-control").css("color", "green");
        openTimeLockedContentConfirmBox()
    }
}

function callFunction() {
    showInboxDetails("initial"), getFriendList(), checkIfUserDeath(), showFileList(""), $("#firstNode").click(), $("#uploadAlbumFilebtn").click(function() {
        var a = $("#usersFileFormIdAlbum").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#file_upload_album").val() || 0 == $("#file_upload_album").val().length) {
                for (var b = 0; 20 > b; b++) $("#usersFileFormIdAlbum").find(".help-block").eq(0).show(), $("#usersFileFormIdAlbum").find(".help-block").css("color", "#a94442");
                return !1
            }
            uploadAlbum()
        }
    }), $("#uploadVideoFilebtn").click(function() {
        var a = $("#usersFileFormIdVideo").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#file_upload_video").val() || 0 == $("#file_upload_video").val().length) {
                for (var b = 0; 20 > b; b++) $("#usersFileFormIdVideo").find(".help-block").eq(0).show(), $("#usersFileFormIdVideo").find(".help-block").css("color", "#a94442");
                return !1
            }
            uploadVideo()
        }
    }), $("#uploafFilebtn").click(function() {
        var a = $("#usersFileFormId").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#file_upload").val() || 0 == $("#file_upload").val().length) {
                for (var b = 0; 20 > b; b++) $("#usersFileFormId").find(".help-block").eq(0).show(), $("#usersFileFormId").find(".help-block").css("color", "#a94442");
                return !1
            }
            upload()
        }
    }), $("#createFolderbtn").click(function() {
        var a = $("#userMenuMappingModelId").data("bootstrapValidator");
        a.validate(), a.isValid() && createFolder()
    }), $("#moveFilebtn").click(function() {
        var a = $("#moveFileId").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#moveFolderTypeET").val() || 0 == $("#moveFolderTypeET").val().length) return $("#showMoveFileError").show(), !1;
            moveFile()
        }
    }), $("#dateOfReleaseBtn").click(function() {
        var a = $("#dateOfReleaseModelForm").data("bootstrapValidator").updateStatus("date_of_release_timepicker", "NOT_VALIDATED").validateField("date_of_release_timepicker"),
            a = $("#dateOfReleaseModelForm").data("bootstrapValidator").updateStatus("date_of_release", "NOT_VALIDATED").validateField("date_of_release");
        if (a.validate(), a.isValid()) {
            if (null == $("#date_of_release").val()) return $("#dateOfReleaseModelForm").find(".help-block").show(), $("#dateOfReleaseModelForm").find(".help-block").css("color", "#a94442"), !1;
            null != $("#date_of_release").val() && ($("#dateOfReleaseModelForm").find(".help-block").hide(), $("#dateOfReleaseModelForm").find(".help-block").css("color", "#a94442"), openTimeLockedContentConfirmBox())
        }
    }), $("#editDescriptionBtn").click(function() {
        var a = $("#editFileDescriptionForm").data("bootstrapValidator");
        a.validate(), a.isValid() && editDescription()
    }), $("#myLastWishesReceipentAddBtn").click(function() {
        var a = $("#myLastWishesRecipientsAddForm").data("bootstrapValidator");
        a.validate(), a.isValid() && addMyLastWishesRecceipent()
    }), $("#passwordForLeagalDocumentCheckBtn").click(function() {
        var a = $("#enterPasswordForLeagalDocumentsForm").data("bootstrapValidator");
        a.validate(), a.isValid() && checkPasswordForLeagalDocuments()
    }), $("#enterPasswordForLeagalDocumentsForm").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            password: {
                validators: {
                    notEmpty: {
                        message: "Please enter password"
                    }
                }
            }
        }
    }), $("#myLastWishesRecipientsAddForm").each(function() {
        $(this).bootstrapValidator({
            feedbackIcons: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh"
            },
            fields: {
                recipient_email_id: {
                    validators: {
                        notEmpty: {
                            message: "The emailId is required and cannot be empty"
                        },
                        regexp: {
                            regexp: "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$",
                            message: "The value is not a valid email address"
                        }
                    }
                }
            }
        })
    }), $("#dateOfReleaseModelForm").each(function() {
        $(this).bootstrapValidator({
            feedbackIcons: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh"
            },
            live: "enabled",
            fields: {
                date_of_release: {
                    validators: {
                        notEmpty: {
                            message: "The Date of release is required and cannot be empty"
                        },
                        date: {
                            format: "MM/DD/YYYY",
                            message: "The  Date of release is not a valid"
                        }
                    }
                },
                date_of_release_timepicker: {
                    validators: {
                        notEmpty: {
                            message: "The Date of release is required and cannot be empty"
                        },
                        date: {
                            format: "MM/DD/YYYY HH:mm",
                            message: "The  Date of release is not a valid"
                        }
                    }
                },
                date_of_release_dropDown: {
                    validators: {
                        notEmpty: {
                            message: "Please select date of release."
                        }
                    }
                }
            }
        })
    }), $("#moveFileId").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
        	moveFolderTypeET: {
                validators: {
                    notEmpty: {
                        message: "Please select one folder"
                    }
                }
            }
        }
    }), $("#editFileDescriptionForm").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            fileName: {
                validators: {
                    stringLength: {
                        max: 50,
                        message: "File name must be less than 50 character"
                    }
                }
            },
            fileDesc: {
                validators: {
                    stringLength: {
                        max: 255,
                        message: "File description must be less than 255 character"
                    }
                }
            }
        }
    }), $("#userMenuMappingModelId").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            menuName: {
                validators: {
                    notEmpty: {
                        message: "The folder name cannot be empty"
                    },
                    stringLength: {
                        max: 20,
                        message: "The folder name must be less than 20 character"
                    },
                    regexp: {
                        regexp: "^[a-zA-Z 0-9_]+$",
                        message: "The folder name can be consist of alphabate,numbers and underscore"
                    }
                }
            }
        }
    }), $("#usersFileFormId").bootstrapValidator({
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
                        maxSize: "520000000",
                        message: "Please upload file not more than 520 MB.  "
                    },
                    file: {
                        extension: "jpeg,jpg,gif,png,xls,xlxs,doc,docx,js,csv,txt",
                        message: "Please upload following file types: jpeg/jpg/gif/png/xls/xlsx/doc/docx/js/csv/txt.  "
                    }
                }
            },
            fileName: {
                validators: {
                    stringLength: {
                        max: 50,
                        message: "File name must be less than 50 character"
                    }
                }
            },
            fileDesc: {
                validators: {
                    stringLength: {
                        max: 255,
                        message: "File description must be less than 255 character"
                    }
                }
            }
        }
    }), $("#usersFileFormIdAlbum").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            file_upload_album: {
                validators: {
                    notEmpty: {
                        message: "Please select file(s) to upload"
                    },
                    file: {
                        maxSize: "520000000",
                        message: "Please upload files not more than 520 MB.  "
                    },
                    file: {
                        extension: "jpeg,jpg,gif,png,xls,xlxs,doc,docx,js,csv,txt",
                        message: "Please upload following file types: jpeg/jpg/gif/png/xls/xlsx/doc/docx/js/csv/txt.  "
                    }
                }
            },
            fileName: {
                validators: {
                    stringLength: {
                        max: 50,
                        message: "File name must be less than 50 character"
                    }
                }
            },
            fileDesc: {
                validators: {
                    stringLength: {
                        max: 255,
                        message: "File description must be less than 255 character"
                    }
                }
            }
        }
    }), $("#usersFileFormIdVideo").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            file_upload_album: {
                validators: {
                    notEmpty: {
                        message: "Please select file to upload"
                    },
                    file: {
                        maxSize: "520000000",
                        message: "Please upload file not more than 520 MB.  "
                    },
                    file: {
                        extension: "3gpp 3gp,mp4,mpeg mpg,mov,webm,flv,m4v,wmv,avi",
                        message: "Please upload following file types: 3gpp 3gp,mp4,mpeg mpg,mov,webm,flv,m4v,wmv,avi.  "
                    }
                }
            },
            fileName: {
                validators: {
                    stringLength: {
                        max: 50,
                        message: "File name must be less than 50 character"
                    }
                }
            },
            fileDesc: {
                validators: {
                    stringLength: {
                        max: 255,
                        message: "File description must be less than 255 character"
                    }
                }
            }
        }
    }), $(".imp-links .close").click(), $("#save1").click(function() {
        var a = $("#safekeepingBankinfo").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#bank1").val() || 0 == $("#bank1").val().length || null == $("#account1").val() || 0 == $("#account1").val().length || null == $("#note1").val() || 0 == $("#note1").val().length) {
                $("#safekeepingBankinfo").find(".help-block").show(), $("#safekeepingBankinfo").find(".help-block").css("color", "#a94442");
                for (var b = 6; 18 > b; b++) $("#safekeepingBankinfo").find(".help-block").eq(b).hide();
                return $("#safekeepingBankinfo").find(".help-block").eq(1).hide(), $("#safekeepingBankinfo").find(".help-block").eq(3).hide(), !1
            }
            validateBankDetails()
        }
    }), $("#save2").click(function() {
        var a = $("#safekeepingImpDocs").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#docname1").val() || 0 == $("#docname1").val().length || null == $("#location1").val() || 0 == $("#location1").val().length || null == $("#notes1").val() || 0 == $("#notes1").val().length) return $("#safekeepingImpDocs").find(".help-block").show(), $("#safekeepingImpDocs").find(".help-block").css("color", "#a94442"), !1;
            validateImpDocs()
        }
    }), $("#save3").click(function() {
        var a = $("#safekeepingInsuranceDocs").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#compname1").val() || 0 == $("#compname1").val().length || null == $("#policy1").val() || 0 == $("#policy1").val().length || null == $("#notess1").val() || 0 == $("#notess1").val().length) return $("#safekeepingInsuranceDocs").find(".help-block").show(), $("#safekeepingInsuranceDocs").find(".help-block").css("color", "#a94442"), !1;
            validateInsuranceDocs()
        }
    }), $("#save4").click(function() {
        var a = $("#safekeepingSoclMedAcc").data("bootstrapValidator");
        if (a.validate(), a.isValid()) {
            if (null == $("#accounts1").val() || 0 == $("#accounts1").val().length || null == $("#usernm1").val() || 0 == $("#usernm1").val().length || null == $("#userpwd1").val() || 0 == $("#userpwd1").val().length || null == $("#noteid1").val() || 0 == $("#noteid1").val().length) return $("#safekeepingSoclMedAcc").find(".help-block").show(), $("#safekeepingSoclMedAcc").find(".help-block").css("color", "#a94442"), !1;
            validateSoclMedAcc()
        }
    }), $("#finalWishesSub").click(function() {
        var a = $("#finalWish").data("bootstrapValidator");
        a.validate(), a.isValid() && ajaxFormSub()
    }), $("#safekeepingBankinfo").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        excluded: ":disabled",
        fields: {
            bank1: {
                validators: {
                    notEmpty: {
                        message: "The bank name is required and cannot be empty"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9. ]+$/,
                        message: "The bank name can consist only alphanumeric value"
                    }
                }
            },
            account1: {
                validators: {
                    notEmpty: {
                        message: "The account number is required and cannot be empty"
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: "The account number can consist only numbers"
                    }
                }
            },
            note1: {
                validators: {
                    notEmpty: {
                        message: "The note is required and cannot be empty"
                    }
                }
            }
        }
    }), $("#safekeepingImpDocs").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            docname1: {
                validators: {
                    notEmpty: {
                        message: "The document name is required and cannot be empty"
                    }
                }
            },
            location1: {
                validators: {
                    notEmpty: {
                        message: "The location is required and cannot be empty"
                    }
                }
            },
            notes1: {
                validators: {
                    notEmpty: {
                        message: "The note is required and cannot be empty"
                    }
                }
            }
        }
    }), $("#safekeepingInsuranceDocs").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            compname1: {
                validators: {
                    notEmpty: {
                        message: "The company name is required and cannot be empty"
                    }
                }
            },
            policy1: {
                validators: {
                    notEmpty: {
                        message: "The policy is required and cannot be empty"
                    }
                }
            },
            notess1: {
                validators: {
                    notEmpty: {
                        message: "The note is required and cannot be empty"
                    }
                }
            }
        }
    }), $("#safekeepingSoclMedAcc").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            accounts1: {
                validators: {
                    notEmpty: {
                        message: "The account type is required and cannot be empty"
                    }
                }
            },
            usernm1: {
                validators: {
                    notEmpty: {
                        message: "The user name is required and cannot be empty"
                    }
                }
            },
            userpwd1: {
                validators: {
                    notEmpty: {
                        message: "The password is required and cannot be empty"
                    }
                }
            },
            noteid1: {
                validators: {
                    notEmpty: {
                        message: "The note is required and cannot be empty"
                    }
                }
            }
        }
    }), $("#finalWish").bootstrapValidator({
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            service_held_loc: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            remains_placed: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            dress_details: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            item_details: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            arrangements_details: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            special_songs_details: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            passage_or_message: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            },
            additional_instructions: {
                validators: {
                    stringLength: {
                        max: 250,
                        message: "The field length must be less than 250 character "
                    }
                }
            }
        }
    });
    var a = $("#status").val(),
        b = $("#status2").val(),
        c = $("#status3").val(),
        d = $("#status4").val();
    null != a && a.length > 0 ? 0 == parseInt(a) ? ($("#errSuccessMsg").show(), $("#errSuccessMsg").fadeOut(5e3, function() {}), $("#errSuccessMsg").css("color", "red")) : 1 == parseInt(a) && ($("#errSuccessMsg").show(), $("#errSuccessMsg").fadeOut(5e3, function() {}), $("#errSuccessMsg").css("color", "green")) : null != b && b.length > 0 ? 0 == parseInt(b) ? ($("#errSuccessMsg2").show(), $("#errSuccessMsg2").fadeOut(5e3, function() {}), $("#errSuccessMsg2").css("color", "red"), $("#qty2").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#b").addClass("active").siblings().removeClass("active")) : 1 == parseInt(b) && ($("#errSuccessMsg2").show(), $("#errSuccessMsg2").fadeOut(5e3, function() {}), $("#errSuccessMsg2").css("color", "green"), $("#qty2").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#b").addClass("active").siblings().removeClass("active")) : null != c && c.length > 0 ? 0 == parseInt(c) ? ($("#errSuccessMsg3").show(), $("#errSuccessMsg3").fadeOut(5e3, function() {}), $("#errSuccessMsg3").css("color", "red"), $("#qty3").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#c").addClass("active").siblings().removeClass("active")) : 1 == parseInt(c) && ($("#errSuccessMsg3").show(), $("#errSuccessMsg3").fadeOut(5e3, function() {}), $("#errSuccessMsg3").css("color", "green"), $("#qty3").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#c").addClass("active").siblings().removeClass("active")) : null != d && d.length > 0 && (0 == parseInt(d) ? ($("#errSuccessMsg4").show(), $("#errSuccessMsg4").fadeOut(5e3, function() {}), $("#errSuccessMsg4").css("color", "red"), $("#qty4").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#d").addClass("active").siblings().removeClass("active")) : 1 == parseInt(d) && ($("#errSuccessMsg4").show(), $("#errSuccessMsg4").fadeOut(5e3, function() {}), $("#errSuccessMsg4").css("color", "green"), $("#qty4").removeClass("tab-pane fade in").addClass("tab-pane fade in active").siblings().removeClass("tab-pane fade in active").addClass("tab-pane fade in"), $("#d").addClass("active").siblings().removeClass("active"))), $("#resetid").click(function() {
        $("#infoid").val(""), $("#save1").prop("value", "Add New")
    }), $("#resetid2").click(function() {
        $("#impid").val(""), $("#save2").prop("value", "Add New")
    }), $("#resetid3").click(function() {
        $("#insuid").val(""), $("#save3").prop("value", "Add New")
    }), $("#resetid4").click(function() {
        $("#accId").val(""), $("#save4").prop("value", "Add New")
    }), $("#print").click(function() {
        $(".Action").hide(), $(".edtdel").hide();
        var a = $("#userName").val(),
            b = $("#bankinfoappendtab").html(),
            c = $("#bankimpodocappendtab").html(),
            d = $("#bankinsurdocappendtab").html(),
            e = $("#soclmedappendtab").html(),
            f = $("#logoDiv").html(),
            g = window.open("", "", "height=430,width=750");
        g.document.write("<html><head>"), g.document.write('</head><body><table align="center" >'), g.document.write(f), g.document.write("<td>" + a + "</td></table>"), g.document.write("Bank Information :"), g.document.write(b + "<br>"), g.document.write("Important Document :"), g.document.write(c + "<br>"), g.document.write("Insurance Document :"), g.document.write(d + "<br>"), g.document.write("Social Media Account :"), g.document.write(e), g.document.write("</body></html>"), g.document.close(), $(".Action").show(), $(".edtdel").show(), g.print(), g.close()
    })
}

function upload() {
    $("#myModal .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "uploadFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("usersFileFormId")),
        enctype: "multipart/form-data",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileUploadedSuccessMsg), $("#loadingImage").hide(), $("#file_upload").val(), $("#fileName").val(), $("#fileDesc").val(), $("#initalFilelist").val("\\Inbox"), $("#showSafeKeepingSelection").hide(), showInboxDetails("Inbox"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#showMsgButton").click(), $("#messageContent").append(fileUploadedFailureMsg), $("#loadingImage").hide()
    })
}

function deleteFile(a) {
    $("#deleteFileId").val(a), $("#openDeleteConfirmBoxButton").click()
}

function openDateOfRelaesePopUp(a, b, c, d, e, f, g, h) {
    $("#showTimePickerForDateOfRelease").hide(), $("#showWithoutTimePickerForDateOfRelease").show(), $("#date_of_release").val(""), document.getElementById("dateOfReleasedropDown").selectedIndex = "", $("#showTimePickerForDateOfRelease").hide(), $("#dateOfReleaseFileId").val(a), $("#dateOfReleaseFileName").val(b), $("#dateOfReleaseFileDesc").val(c), $("#dateOfReleaseFileDescColor").val(d), $("#dateOfReleaseFileDescStyle").val(e), $("#dateOfReleaseFileDescSize").val(f), $("#dateOfReleaseAnswer_group_id").val(h), $("#dateOfReleasePopUpOpenButton").click()
}

function openTimeLockedContentConfirmBox() {
    $("#timeLockedContentConfirmBoxBtn").click()
}

function timeLockedContentNo() {
    $("#timeLockedContentPopUp .close").click(), $("#dateOfReleaseModel .close").click()
}

function timeLockedContentYes() {
    var a = $("#dateOfReleaseAnswer_group_id").val();
    0 != a ? saveTimeLockedContentQAnsReleaseDateYes() : saveFileReleaseDateYes()
}

function saveFileReleaseDateYes() {
    $("#messageContent").empty(), $("#loadingImage").show(), $("#dateOfReleaseModel .close").click();
    var a = $("#dateOfReleasedropDown").val();
    null != a && "" != a && void 0 != a && "customize" == a && $("#date_of_release").val($("#date_of_release_timepicker").val()), $.ajax({
        url: "editDescriptionOfFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("dateOfReleaseModelForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileEditDescriptionSuccessMsg), $("#loadingImage").hide(), $("#dateOfReleaseModel .close").click(), $("#timeLockedContentPopUp .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#timeLockedContentPopUp .close").click(), $("#dateOfReleaseModel .close").click(), $("#messageContent").append(fileEditDescriptionFailureMsg), $("#loadingImage").hide(), setTimeout(closeAllPopUp, 4e3)
    })
}

function saveTimeLockedContentQAnsReleaseDateYes() {
    $("#messageContent").empty(), $("#loadingImage").show(), $("#dateOfReleaseModel .close").click();
    var a = $("#dateOfReleasedropDown").val();
    null != a && "" != a && void 0 != a && "customize" == a && $("#date_of_release").val($("#date_of_release_timepicker").val()), $.ajax({
        url: "editReleaseDateOfTimeLockedQuestionAns?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("dateOfReleaseModelForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        openTimeLockedContentQuestinariesDiv(), $("#showMsgButton").click(), $("#messageContent").append(fileEditDescriptionSuccessMsg), $("#loadingImage").hide(), $("#dateOfReleaseModel .close").click(), $("#timeLockedContentPopUp .close").click(), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#timeLockedContentPopUp .close").click(), $("#dateOfReleaseModel .close").click(), $("#messageContent").append(fileEditDescriptionFailureMsg), $("#loadingImage").hide(), setTimeout(closeAllPopUp, 4e3)
    })
}

function deleteFileYes() {
    $("#messageContent").empty(), $("#loadingImage").show(), $("#deletePopUp .close").click();
    var a = $("#deleteFileId").val(),
        b = new FormData;
    b.append("fileId", a), b.append("isDeleted", 1), $.ajax({
        url: "deleteUsersFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: b,
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileDeletionSuccessMsg), $("#loadingImage").hide(), $("#deletePopUp .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(fileDeletionFailureMsg)
    })
}

function deleteInboxFileNo() {
    $("#deletePopUp .close").click()
}

function openEditDescriptionModel(a, b) {
    var c = !1,
        d = $("#ediFieDescription-" + b).val(),
        e = $("#ediFieName-" + b).val(),
        f = $("#changeColor-" + b).val(),
        g = $("#changeStyle-" + b).val(),
        h = $("#changeSize-" + b).val();
    (null != d || "" != d) && d.length > 255 && ($("#messageContent").empty(), $("#messageContent").append(ediFieDescriptionLength), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), c = !0), (null !== e || "" != e) && e.length > 50 && ($("#messageContent").empty(), $("#messageContent").append(ediFieNameLength), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), c = !0), 0 == c && ($("#EditDescriptionFileId").val(a), $("#EditDescriptionfileDesc").val(d), $("#EditDescriptionfileName").val(e), $("#EditfileDescColor").val(f), $("#EditfileDescStyle").val(g), $("#EditfileDescSize").val(h), editDescription())
}

function editDescription() {
    $("#messageContent").empty(), $("#loadingImage").show(), $("#editDescriptionImageModel .close").click(), $.ajax({
        url: "editDescriptionOfFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("editFileDescriptionForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileEditDescriptionSuccessMsg), $("#loadingImage").hide(), $("#editDescriptionImageModel .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#messageContent").append(fileEditDescriptionFailureMsg), $("#loadingImage").hide(), setTimeout(closeAllPopUp, 4e3)
    })
}

function enlargeDiv(a, b, c, d, e, f) {
    "show" == a ? (api_gallery=[ b],default_width=600,default_height=600,$.prettyPhoto.open(api_gallery)) : "video" == a ? (jwplayer("playVideo").setup({
        file: b,
        type: 'mp4', 
        image: "testuser@gmail.com/Inbox/6726.mp4",
        width: 560,
        height: 550,
        autostart: !0,
        primary: "flash"
    }), $("#openPlayVideoButton").click()) : "album" == a ? (document.getElementById("showImageEnlarge").src =  b, $("#enlargeImageModelButton").click()) : downloadFile(b, d, e)
}

function showInboxDetails(a) {
    $("#loadingImage").show(), openInboxDiv();
    var b = $("#initalFilelist").val();
    void 0 != a.id && (b = a.id);
    for (var c = b.split("\\"), d = "", e = 1; e < c.length; e++) d = 1 == e ? c[e] : d + "  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  " + c[e];
    $("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html(d), $("#dynamicContent li a").each(function() {
        $(this).attr("id") == b ? $(this).addClass("tree-active") : $(this).removeClass("tree-active")
    }), "/Time Locked Content" == b.replace(/\\/g, "/") ? showFilesForTimeLockedContent(b) : showFilesForOtherFolder(b)
}

function showFilesForOtherFolder(a) {
    $.ajax({
        type: "POST",
        url: "getUserFilesList?${_csrf.parameterName}=${_csrf.token}&folderType=" + a,
        cache: !1,
        success: function(b) {
            $("#inboxContentDiv").empty();
            for (var c = 0; c < b.length; c++) 1 == b[c].is_Album ? ifTypeIsAlbum(b, c, a) : 1 == b[c].is_video ? ifTypeIsVideo(b, c, a) : ifTypeIsFile(b, c, a);
            $(".color-picker").spectrum({
                preferredFormat: "rgb",
                showPalette: !0,
                palette: [
                    ["black", "white", "blanchedalmond"],
                    ["rgb(255, 128, 0);", "hsv 100 70 50", "lightyellow"]
                ]
            }), $("#loadingImage").hide()
        },
        error: function() {
            $("#loadingImage").hide()
        }
    })
}

function showFilesForTimeLockedContent(a) {
    $.ajax({
        type: "POST",
        url: "getUserFilesList?${_csrf.parameterName}=${_csrf.token}&folderType=" + a,
        cache: !1,
        success: function(b) {
            $("#inboxContentDiv").empty();
            for (var c = 0; c < b.length; c++) null == b[c].date_of_release || "null" == b[c].date_of_release || void 0 == b[c].date_of_release || null != b[c].is_time_locked_content_mail_sent && 0 != b[c].is_time_locked_content_mail_sent ? 1 == b[c].is_Album ? ifTypeIsAlbumTimeLockedContentDateOfReleaseEmpty(b, c, a) : 1 == b[c].is_video ? ifTypeIsVideoTimeLockedContentDateOfReleaseEmpty(b, c, a) : ifTypeIsFileTimeLockedContentDateOfReleaseEmpty(b, c, a) : 1 == b[c].is_Album ? ifTypeIsAlbumTimeLockedContentDateOfReleasePresent(b, c, a) : 1 == b[c].is_video ? ifTypeIsVideoTimeLockedContentDateOfReleasePresent(b, c, a) : ifTypeIsFileTimeLockedContentDateOfReleasePresent(b, c, a);
            $(".color-picker").spectrum({
                preferredFormat: "rgb",
                showPalette: !0,
                palette: [
                    ["black", "white", "blanchedalmond"],
                    ["rgb(255, 128, 0);", "hsv 100 70 50", "lightyellow"]
                ]
            }), $("#loadingImage").hide()
        },
        error: function() {
            $("#loadingImage").hide()
        }
    })
}

function ifTypeIsVideo(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1],
        j = "video",
        k = "margin-left: 5px;margin-right: 12px;",
        l = ' <img src="' + accessFileUrl+ a[b].video_thumbnail + '" width = "500px" height = "500px" /> <div class="white-over"></div>',
        m = '<span><i class="fa fa-play" aria-hidden="true"></i></span><p>Play</p>',
        n = "",
        o = '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">';
    "My First" == c.replace(/\\/g, "") && (o = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'1\');return false;"  class="addToEuology" title="Add to Eulogy collection">\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t</a></div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">', null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (o = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection"> <div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div> </a> </div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">')), "" != a[b].fileDesc && (n = a[b].fileDesc);
    var p = new Date(a[b].createdOn),
        q = p.getMonth() + 1 + "/" + p.getDate() + "/" + p.getFullYear(),
        r = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    2 == a[b].shareType ? r = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (r = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var s = "", t = 11; 24 >= t; t++) s = t == a[b].fileDescSize ? s + '<option value="' + t + '" selected="selected">' + t + "</option>" : 13 == t ? s + '<option value="' + t + '" selected="selected">' + t + "</option>" : s + '<option value="' + t + '" >' + t + "</option>";
    for (var u = "", t = 1; 4 >= t; t++) {
        var v = "";
        1 == t && (v = "Arial"), 2 == t && (v = "Verdana"), 3 == t && (v = "Impact"), 4 == t && (v = "Comic Sans MS"), u = v == a[b].fileDescStyle ? u + '<option value="' + v + '" selected="selected">' + v + "</option>" : u + '<option value="' + v + '">' + v + "</option>"
    }
    var w = "";
    w = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' + o + '<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + r + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + q + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post">  ' + l + '\t\t\t\t\t\t\t<div class="overlay-box"> \t\t\t\t\t\t\t\t\t<ul class="action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'1\');return false;"><span><i class="fa fa-arrows" aria-hidden="true"></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openCreateFolderPopUp();return false;"><span><i class="fa fa-plus" aria-hidden="true"></i></span><p>Create</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li style="' + k + '"><a href="#" onclick="enlargeDiv(\'' + j + "','" +accessFileVideoUrl+  a[b].filePath.replace(/\\/g, "/") + "','" + c + "','" + g + "','" + accessFileUrl+ a[b].filePath.replace(/\\/g, "/") + "','" + a[b].isRotated + "');return false;\">" + m + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a></li>   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"><span><i class="fa fa-trash" aria-hidden="true"></i></span> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Delete</p></a></li> \t\t\t\t\t\t\t\t</ul>  \t\t\t\t\t</div> \t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + n + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + u + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + s + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ',
        $("#inboxContentDiv").append(w)
}

function ifTypeIsFile(a, b, c) {
    var e =a[b].filePath.replace(/\\/g, "/"),
    	f = accessFileUrl+a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1],
        j = "download",
        k = escape(a[b].fileName),
        l = escape(a[b].fileDesc),
        m = '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">';
    
    	"My First" == c.replace(/\\/g, "") && (m = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + k + "','" + l + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"  class="addToEuology" title="Add to Eulogy collection">\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t</a></div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">', null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (m = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection"> <div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div> </a> </div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">'));
    
    var n = "margin-left: 5px;margin-right: 12px;",
        o = ' <iframe src="' +accessFileUrl+ a[b].filePath + '" width = "500px" height = "500px"></iframe> ';
    
	    ("doc" == i || "docx" == i) && (o = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), 
	    ("xls" == i || "xlsx" == i) && (o = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '),
	    ("jpg" == i || "jpeg" == i || "png" == i || "gif" == i || "JPG" == i || "JPEG" == i || "PNG" == i || "GIF" == i) && (n = "", j = "show", o = ' <img src="' +accessFileUrl+ a[b].filePath + '" width = "800px" height = "276px"/>');
	    
    var p = '<span><i class="fa fa-eye" aria-hidden="true"></i></span><p>View</p>';
    	"download" == j && (p = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
   
    var q = "";
    	"" != a[b].fileDesc && (q = a[b].fileDesc);
   
    var r = new Date(a[b].createdOn),
        s = r.getMonth() + 1 + "/" + r.getDate() + "/" + r.getFullYear(),
        t = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    
    	2 == a[b].shareType ? t = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (t = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var u = "", v = 11; 24 >= v; v++){
    		u = v == a[b].fileDescSize ? u + '<option value="' + v + '" selected="selected">' + v + "</option>" : 13 == v ? u + '<option value="' + v + '" selected="selected">' + v + "</option>" : u + '<option value="' + v + '" >' + v + "</option>"
    };
    
    for (var w = "", v = 1; 4 >= v; v++) {
        var x = "";
        1 == v && (x = "Arial"), 2 == v && (x = "Verdana"), 3 == v && (x = "Impact"),
        4 == v && (x = "Comic Sans MS"), 
        w = x == a[b].fileDescStyle ? w + '<option value="' + x + '" selected="selected">' + x + "</option>" : w + '<option value="' + x + '">' + x + "</option>"
    }
    
    var y = "";
    	y = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' + m + '\t\t\t\t\t\t\t\t\t\t\t<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + t + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + s + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post">  ' + o + '\t\t\t\t\t\t\t<div class="overlay-box"> \t\t\t\t\t\t\t\t\t<ul class="action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + k + "','" + l + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"><span><i class="fa fa-arrows" aria-hidden="true"></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openCreateFolderPopUp();return false;"><span><i class="fa fa-plus" aria-hidden="true"></i></span><p>Create</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li style="' + n + '"><a href="#" onclick="enlargeDiv(\'' + j + "','" +accessFileUrl+ a[b].filePath.replace(/\\/g, "/") + "','" + c + "','" + g + "','" +accessFileUrl+ a[b].filePath.replace(/\\/g, "/") + "','" + a[b].isRotated + "');return false;\">" + p + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a></li>   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"><span><i class="fa fa-trash" aria-hidden="true"></i></span> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Delete</p></a></li> \t\t\t\t\t\t\t\t</ul>  \t\t\t\t\t</div> \t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + q + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + w + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + u + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ', $("#inboxContentDiv").append(y)
}

function ifTypeIsAlbum(a, b, c) {
    var d = accessFileUrl+a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = accessFileUrl+ a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1];
    ("doc" == i || "docx" == i) && (scrOfIframe = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("xls" == i || "xlsx" == i) && (scrOfIframe = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == i || "jpeg" == i || "png" == i || "gif" == i || "JPG" == i || "JPEG" == i || "PNG" == i || "GIF" == i) && (gapStyle = "", type = "show", scrOfIframe = ' <img src="' +accessFileUrl+  a[b].filePath + '" width = "800px" height = "276px"/>');
    var j = "";
    "" != a[b].fileDesc && (j = a[b].fileDesc);
    var k = new Date(a[b].createdOn),
        l = k.getMonth() + 1 + "/" + k.getDate() + "/" + k.getFullYear(),
        m = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    2 == a[b].shareType ? m = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (m = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var n = "", o = 11; 24 >= o; o++) n = o == a[b].fileDescSize ? n + '<option value="' + o + '" selected="selected">' + o + "</option>" : 13 == o ? n + '<option value="' + o + '" selected="selected">' + o + "</option>" : n + '<option value="' + o + '" >' + o + "</option>";
    for (var p = "", o = 1; 4 >= o; o++) {
        var q = "";
        1 == o && (q = "Arial"), 2 == o && (q = "Verdana"), 3 == o && (q = "Impact"), 4 == o && (q = "Comic Sans MS"), p = q == a[b].fileDescStyle ? p + '<option value="' + q + '" selected="selected">' + q + "</option>" : p + '<option value="' + q + '">' + q + "</option>"
    }
    var r = "",
        s = [],
        t = [];
    if (1 == a[b].is_Album) {
        var u = "";
        type = "album";
        for (var v = [], w = 0; w < a[b].usersAlbum.length; w++)
            if (1 != a[b].usersAlbum[w].is_deleted) {
                var x = {
                    src: accessFileUrl+ a[b].usersAlbum[w].filePath,
                    details: a[b].usersAlbum[w].fileDesc,
                    caption: a[b].usersAlbum[w].fileName
                };
                v.push(x), t.push(v), albumFilePath = accessFileUrl+ a[b].usersAlbum[w].filePath
            }
        var y = a[b].id + "-main-post",
            z = escape(a[b].fileName),
            A = escape(a[b].fileDesc),
            B = '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">';
        "My First" == c.replace(/\\/g, "") && (B = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + z + "','" + A + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"  class="addToEuology" title="Add to Eulogy collection">\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t</a></div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">', null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (B = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection"> <div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div> </a> </div><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">')), s.push(y), r = '<li><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' + B + '\t\t\t\t\t\t\t\t\t\t<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + m + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + l + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="col-lg-12"><div class="album-post main-post" > <div class="gallery" id="' + a[b].id + '-main-post"> ' + u + '\t\t\t\t\t\t\t</div> \t<ul class="secondary-actions action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + z + "','" + A + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"><span><i class="fa fa-arrows" aria-hidden="true"></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openCreateFolderPopUp();return false;"><span><i class="fa fa-plus" aria-hidden="true"></i></span><p>Create</p></a></li>   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class="fa fa-trash" aria-hidden="true"></i></span><p>Delete</p></a></li> \t\t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="getAlbumFileList(\'' + a[b].id + '\');return false;"><span>    \t\t\t\t\t\t\t\t\t\t <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><p>Edit File</p></a></li> \t</ul></div>\t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + j + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + p + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + n + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div> </div></li>'
    }
    $("#inboxContentDiv").append(r);
    for (var o = 0; o < s.length; o++) {
        for (var v = "", w = 0; w < t.length; w++) o == w && (v = t[o]);
        showAlbumCaraousal(s[o], v)
    }
}

function ifTypeIsVideoTimeLockedContentDateOfReleasePresent(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = e.split("."),
        g = (f[f.length - 1], '<img src="' +accessFileUrl+  a[b].video_thumbnail + '" width = "500px" height = "500px" /> <div class="white-over"></div>'),
        h = new Date(a[b].createdOn),
        i = h.getMonth() + 1 + "/" + h.getDate() + "/" + h.getFullYear();
    2 == a[b].shareType ? shareIcon = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (shareIcon = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var j = "", k = 11; 24 >= k; k++) j = k == a[b].fileDescSize ? j + '<option value="' + k + '" selected="selected">' + k + "</option>" : 13 == k ? j + '<option value="' + k + '" selected="selected">' + k + "</option>" : j + '<option value="' + k + '" >' + k + "</option>";
    for (var l = "", k = 1; 4 >= k; k++) {
        var m = "";
        1 == k && (m = "Arial"), 2 == k && (m = "Verdana"), 3 == k && (m = "Impact"), 4 == k && (m = "Comic Sans MS"), l = m == a[b].fileDescStyle ? l + '<option value="' + m + '" selected="selected">' + m + "</option>" : l + '<option value="' + m + '">' + m + "</option>"
    }
    var n = null,
        o = null,
        p = "";
    if (dateOfRelease = '  <li style="width: 15% !important;"><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + o + '\',0);return false;"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> <p>Release Date</p></a></li> ', null != a[b].date_of_release && "null" != a[b].date_of_release && void 0 != a[b].date_of_release && (null == a[b].is_time_locked_content_mail_sent || 0 == a[b].is_time_locked_content_mail_sent)) {
        var q = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
        2 == a[b].shareType ? q = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (q = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), n = new Date(a[b].date_of_release), o = n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear(), p = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" style="cursor: text;" id="share" onclick="openSharePanel(this)">' + q + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<span class="post-time">' + i + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post time-locked-content-file">  ' + g + '\t\t\t\t\t</div>           \t\t<div class="fileDescriptionBoxNone"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> '
    }
    $("#inboxContentDiv").append(p)
}

function ifTypeIsVideoTimeLockedContentDateOfReleaseEmpty(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1],
        j = "video",
        k = "margin-left: 5px;margin-right: 12px;",
        l = ' <img src="' + accessFileUrl+ a[b].video_thumbnail + '" width = "500px" height = "500px" /> <div class="white-over"></div> ',
        m = '<span><i class="fa fa-play" aria-hidden="true"></i></span><p>Play</p>',
        n = "";
    "" != a[b].fileDesc && (n = a[b].fileDesc);
    var o = new Date(a[b].createdOn),
        p = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear(),
        q = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    2 == a[b].shareType ? q = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (q = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var r = "", s = 11; 24 >= s; s++) r = s == a[b].fileDescSize ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : 13 == s ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : r + '<option value="' + s + '" >' + s + "</option>";
    for (var t = "", s = 1; 4 >= s; s++) {
        var u = "";
        1 == s && (u = "Arial"), 2 == s && (u = "Verdana"), 3 == s && (u = "Impact"), 4 == s && (u = "Comic Sans MS"), t = u == a[b].fileDescStyle ? t + '<option value="' + u + '" selected="selected">' + u + "</option>" : t + '<option value="' + u + '">' + u + "</option>"
    }
    var v = "",
        w = null,
        x = "",
        y = escape(a[b].fileName),
        z = escape(a[b].fileDesc),
        A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'1\');return false;" class="addToEuology" title="Add to Eulogy collection">\t\t\t\t\t\t\t\t\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t\t\t\t\t\t\t\t\t</a> ';
    null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection">\t\t\t\t\t\t\t\t\t\t<div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div>\t\t\t\t\t\t\t\t\t</a> '), v = '  <li style="width: 15% !important;"><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + w + '\',0);return false;"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> <p>Release Date</p></a></li> ', x = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">' + A + ' \t\t\t\t\t\t\t    </div> \t\t\t\t\t\t\t\t<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">\t\t\t\t\t\t\t\t\t\t<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + q + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + p + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post">  ' + l + '\t\t\t\t\t\t\t<div class="overlay-box"> \t\t\t\t\t\t\t\t\t<ul class="action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'1\');return false;"><span><i class="fa fa-arrows" aria-hidden="true" ></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li style="' + k + '"><a href="#" onclick="enlargeDiv(\'' + j + "','" + a[b].filePath.replace(/\\/g, "/").split("../../")[1] + "','" + c + "','" + g + "','" + a[b].filePath.replace(/\\/g, "/") + "','" + a[b].isRotated + "');return false;\">" + m + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a></li>   \t\t\t\t\t\t\t\t\t\t<li ><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"><span><i class="fa fa-trash" aria-hidden="true"></i></span> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Delete</p></a></li> ' + v + '\t\t\t\t\t\t\t\t</ul>  \t\t\t\t\t</div> \t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + n + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + t + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + r + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ', $("#inboxContentDiv").append(x)
}

function ifTypeIsFileTimeLockedContentDateOfReleasePresent(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = e.split("."),
        g = f[f.length - 1],
        h = "download",
        i = ' <iframe src="' +accessFileUrl+  a[b].filePath + '" width = "500px" height = "500px"></iframe> ';
    ("doc" == g || "docx" == g) && (i = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("xls" == g || "xlsx" == g) && (i = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == g || "jpeg" == g || "png" == g || "gif" == g || "JPG" == g || "JPEG" == g || "PNG" == g || "GIF" == g) && (h = "show", i = ' <img src="' +accessFileUrl+  a[b].filePath + '" width = "800px" height = "276px"/>'), "download" == h && (viewOrDownload = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
    var j = new Date(a[b].createdOn),
        k = j.getMonth() + 1 + "/" + j.getDate() + "/" + j.getFullYear();
    2 == a[b].shareType ? shareIcon = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (shareIcon = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var l = "", m = 11; 24 >= m; m++) l = m == a[b].fileDescSize ? l + '<option value="' + m + '" selected="selected">' + m + "</option>" : 13 == m ? l + '<option value="' + m + '" selected="selected">' + m + "</option>" : l + '<option value="' + m + '" >' + m + "</option>";
    for (var n = "", m = 1; 4 >= m; m++) {
        var o = "";
        1 == m && (o = "Arial"), 2 == m && (o = "Verdana"), 3 == m && (o = "Impact"), 4 == m && (o = "Comic Sans MS"), n = o == a[b].fileDescStyle ? n + '<option value="' + o + '" selected="selected">' + o + "</option>" : n + '<option value="' + o + '">' + o + "</option>"
    }
    var p = null,
        q = null,
        r = "";
    if (dateOfRelease = '  <li style="width: 15% !important;"><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + q + '\',0);return false;"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> <p>Release Date</p></a></li> ', null != a[b].date_of_release && "null" != a[b].date_of_release && void 0 != a[b].date_of_release && (null == a[b].is_time_locked_content_mail_sent || 0 == a[b].is_time_locked_content_mail_sent)) {
        var s = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
        2 == a[b].shareType ? s = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (s = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), p = new Date(a[b].date_of_release), q = p.getMonth() + 1 + "/" + p.getDate() + "/" + p.getFullYear(), r = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" style="cursor: text;" id="share" onclick="openSharePanel(this)">' + s + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<span class="post-time">' + k + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post time-locked-content-file">  ' + i + '\t\t\t\t\t</div>           \t\t<div class="fileDescriptionBoxNone"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> '
    }
    $("#inboxContentDiv").append(r)
}

function ifTypeIsFileTimeLockedContentDateOfReleaseEmpty(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1],
        j = "download",
        k = "margin-left: 5px;margin-right: 12px;",
        l = ' <iframe src="' + accessFileUrl+ a[b].filePath + '" width = "500px" height = "500px"></iframe> ';
    ("doc" == i || "docx" == i) && (l = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("xls" == i || "xlsx" == i) && (l = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == i || "jpeg" == i || "png" == i || "gif" == i || "JPG" == i || "JPEG" == i || "PNG" == i || "GIF" == i) && (k = "", j = "show", l = ' <img src="' +accessFileUrl+  a[b].filePath + '" width = "800px" height = "276px"/>');
    var m = '<span><i class="fa fa-eye" aria-hidden="true"></i></span><p>View</p>';
    "download" == j && (m = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
    var n = "";
    "" != a[b].fileDesc && (n = a[b].fileDesc);
    var o = new Date(a[b].createdOn),
        p = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear(),
        q = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    2 == a[b].shareType ? q = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (q = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var r = "", s = 11; 24 >= s; s++) r = s == a[b].fileDescSize ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : 13 == s ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : r + '<option value="' + s + '" >' + s + "</option>";
    for (var t = "", s = 1; 4 >= s; s++) {
        var u = "";
        1 == s && (u = "Arial"), 2 == s && (u = "Verdana"), 3 == s && (u = "Impact"), 4 == s && (u = "Comic Sans MS"), t = u == a[b].fileDescStyle ? t + '<option value="' + u + '" selected="selected">' + u + "</option>" : t + '<option value="' + u + '">' + u + "</option>"
    }
    var v = "",
        w = null,
        x = "",
        y = escape(a[b].fileName),
        z = escape(a[b].fileDesc),
        A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;" class="addToEuology" title="Add to Eulogy collection">\t\t\t\t\t\t\t\t\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t\t\t\t\t\t\t\t\t</a> ';
    null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection">\t\t\t\t\t\t\t\t\t\t<div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div>\t\t\t\t\t\t\t\t\t</a> '), v = '  <li style="width: 15% !important;"><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + w + '\',0);return false;"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> <p>Release Date</p></a></li> ', x = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">' + A + ' \t\t\t\t\t\t\t    </div> \t\t\t\t\t\t\t\t<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">\t\t\t\t\t\t\t\t\t\t<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + q + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + p + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post">  ' + l + '\t\t\t\t\t\t\t<div class="overlay-box"> \t\t\t\t\t\t\t\t\t<ul class="action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"><span><i class="fa fa-arrows" aria-hidden="true" ></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li style="' + k + '"><a href="#" onclick="enlargeDiv(\'' + j + "','" + a[b].filePath.replace(/\\/g, "/").split("../../")[1] + "','" + c + "','" + g + "','" + a[b].filePath.replace(/\\/g, "/") + "','" + a[b].isRotated + "');return false;\">" + m + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a></li>   \t\t\t\t\t\t\t\t\t\t<li ><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"><span><i class="fa fa-trash" aria-hidden="true"></i></span> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Delete</p></a></li> ' + v + '\t\t\t\t\t\t\t\t</ul>  \t\t\t\t\t</div> \t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + n + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + t + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + r + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ', $("#inboxContentDiv").append(x)
}

function ifTypeIsAlbumTimeLockedContentDateOfReleasePresent(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = e.split("."),
        g = f[f.length - 1],
        h = "download",
        i = ' <iframe src="' +accessFileUrl+  a[b].filePath + '" width = "500px" height = "500px"></iframe> ';
    ("doc" == g || "docx" == g) && (i = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("xls" == g || "xlsx" == g) && (i = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == g || "jpeg" == g || "png" == g || "gif" == g || "JPG" == g || "JPEG" == g || "PNG" == g || "GIF" == g) && (h = "show", i = ' <img src="' + accessFileUrl+  a[b].filePath + '" width = "800px" height = "276px"/>'), "download" == h && (viewOrDownload = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
    var j = new Date(a[b].createdOn),
        k = j.getMonth() + 1 + "/" + j.getDate() + "/" + j.getFullYear();
    2 == a[b].shareType ? shareIcon = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (shareIcon = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var l = "", m = 11; 24 >= m; m++) l = m == a[b].fileDescSize ? l + '<option value="' + m + '" selected="selected">' + m + "</option>" : 13 == m ? l + '<option value="' + m + '" selected="selected">' + m + "</option>" : l + '<option value="' + m + '" >' + m + "</option>";
    for (var n = "", m = 1; 4 >= m; m++) {
        var o = "";
        1 == m && (o = "Arial"), 2 == m && (o = "Verdana"), 3 == m && (o = "Impact"), 4 == m && (o = "Comic Sans MS"), n = o == a[b].fileDescStyle ? n + '<option value="' + o + '" selected="selected">' + o + "</option>" : n + '<option value="' + o + '">' + o + "</option>"
    }
    var p = null,
        q = null,
        r = "";
    if (dateOfRelease = '  <li style="width: 15% !important;"><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + q + '\',0);return false;"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> <p>Release Date</p></a></li> ', null != a[b].date_of_release && "null" != a[b].date_of_release && void 0 != a[b].date_of_release && (null == a[b].is_time_locked_content_mail_sent || 0 == a[b].is_time_locked_content_mail_sent)) {
        var r = "",
            s = [],
            t = [],
            u = "";
        h = "album";
        for (var v = [], w = 0; w < a[b].usersAlbum.length; w++) 1 != a[b].usersAlbum[w].is_deleted && (v.push(a[b].usersAlbum[w].filePath), t.push(v), albumFilePath = a[b].usersAlbum[w].filePath);
        var x = a[b].id + "-main-post";
        s.push(x);
        var y = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
        2 == a[b].shareType ? y = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (y = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), p = new Date(a[b].date_of_release), q = p.getMonth() + 1 + "/" + p.getDate() + "/" + p.getFullYear(), r = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" style="cursor: text;" id="share" onclick="openSharePanel(this)">' + y + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<span class="post-time">' + k + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t<div class="clearfix"></div>  \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12">  \t\t\t\t\t<div class="main-post time-locked-content-file">  \t\t\t\t\t\t\t\t<div class="gallery" id="' + a[b].id + '-main-post" style=" pointer-events: none;"> ' + u + '\t\t\t\t\t\t\t</div> \t\t\t\t\t</div>           \t\t<div class="fileDescriptionBoxNone"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ', $("#inboxContentDiv").append(r);
        for (var m = 0; m < s.length; m++) {
            for (var v = "", w = 0; w < t.length; w++) m == w && (v = t[m]);
            showAlbumCaraousal(s[m], v)
        }
    }
}

function ifTypeIsAlbumTimeLockedContentDateOfReleaseEmpty(a, b, c) {
    var d = a[b].filePath,
        e = d.substr(6, d.length);
    e = e.replace(/\\/g, "/");
    var f = a[b].filePath.replace(/\\/g, "/").split("/"),
        g = f[f.length - 1],
        h = e.split("."),
        i = h[h.length - 1],
        j = "download",
        k = "margin-left: 5px;margin-right: 12px;",
        l = ' <iframe src="' + accessFileUrl+ a[b].filePath + '" width = "500px" height = "500px"></iframe> ';
    ("doc" == i || "docx" == i) && (l = ' <img src="/ET/images/doc.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("xls" == i || "xlsx" == i) && (l = ' <img src="/ET/images/excel.jpg" width = "500px" height = "500px" class="docExcel"/> '), ("jpg" == i || "jpeg" == i || "png" == i || "gif" == i || "JPG" == i || "JPEG" == i || "PNG" == i || "GIF" == i) && (k = "", j = "show", l = ' <img src="' + accessFileUrl+ a[b].filePath + '" width = "800px" height = "276px"/>');
    var m = '<span><i class="fa fa-eye" aria-hidden="true"></i></span><p>View</p>';
    "download" == j && (m = '<span><i class="fa fa-download" aria-hidden="true"></i></span><p>Download</p>');
    var n = "";
    "" != a[b].fileDesc && (n = a[b].fileDesc);
    var o = new Date(a[b].createdOn),
        p = o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear(),
        q = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
    2 == a[b].shareType ? q = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[b].shareType && (q = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>');
    for (var r = "", s = 11; 24 >= s; s++) r = s == a[b].fileDescSize ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : 13 == s ? r + '<option value="' + s + '" selected="selected">' + s + "</option>" : r + '<option value="' + s + '" >' + s + "</option>";
    for (var t = "", s = 1; 4 >= s; s++) {
        var u = "";
        1 == s && (u = "Arial"), 2 == s && (u = "Verdana"), 3 == s && (u = "Impact"), 4 == s && (u = "Comic Sans MS"), t = u == a[b].fileDescStyle ? t + '<option value="' + u + '" selected="selected">' + u + "</option>" : t + '<option value="' + u + '">' + u + "</option>"
    }
    var v = "",
        w = null,
        x = "",
        y = escape(a[b].fileName),
        z = escape(a[b].fileDesc),
        A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);"  onclick="addToEulogyFolder(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;" class="addToEuology" title="Add to Eulogy collection">\t\t\t\t\t\t\t\t\t\t<i class="fa fa-plus-square" aria-hidden="true"></i>\t\t\t\t\t\t\t\t\t</a> ';
    null != a[b].is_added_to_eulogy && 1 == a[b].is_added_to_eulogy && (A = '\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" style="cursor: text;"  class="addToEuology" title="Also part of Eulogy collection">\t\t\t\t\t\t\t\t\t\t<div class="ribon" ><img src="/ET/images/star-ribbon.png" alt="logo"></div>\t\t\t\t\t\t\t\t\t</a> '), v = '  <li ><a href="#" onclick="openDateOfRelaesePopUp(\'' + a[b].id + "','" + a[b].fileName + "','" + a[b].fileDesc + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + w + '\',0);return false;"> <span><i class="fa fa-calendar" aria-hidden="true"></i></span><p>Release Date</p></a></li> ';
    var B = [],
        C = [],
        D = "";
    j = "album";
    for (var E = [], F = 0; F < a[b].usersAlbum.length; F++)
        if (1 != a[b].usersAlbum[F].is_deleted) {
            var G = {
                src: accessFileUrl+ a[b].usersAlbum[F].filePath,
                details: a[b].usersAlbum[F].fileDesc,
                caption: a[b].usersAlbum[F].fileName
            };
            E.push(G), C.push(E), albumFilePath =accessFileUrl+  a[b].usersAlbum[F].filePath
        }
    var H = a[b].id + "-main-post",
        y = escape(a[b].fileName),
        z = escape(a[b].fileDesc);
    B.push(H), x = '<li ><div class="col-lg-12" ><div class="top-section"> \t\t\t<div class="row"> \t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\t\t\t\t\t\t\t\t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">' + A + ' \t\t\t\t\t\t\t    </div> \t\t\t\t\t\t\t\t<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">\t\t\t\t\t\t\t\t\t\t<input type="text" maxlength="50" id="ediFieName-' + b + '"  value="' + a[b].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;"  \t\t\t\t\t\t\t\t\t\t\t\tonkeydown="checkEdiFieNameEvent(\'' + a[b].id + "\t\t\t\t\t\t\t\t\t\t\t\t',event," + b + ');" \t\t\t\t\t\t\t\t\t\t\t\tonclick="pressEnterPostShow(' + b + ",'filename')\" \t\t\t\t\t\t\t\t\t\t\t\tonblur=\"pressEnterPostHide(" + b + ',\'filename\')"\t\t\t\t\t\t\t\t\t\t />\t\t\t\t\t\t\t\t\t\t <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-' + b + '" style="display:none;">Press Enter to save.</span><br/>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)"  class="right-arrow" id="share" onclick="openSharePanel(this)">' + q + '\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t<div id="panel-share" class="panel-share-div" > \t\t\t\t\t\t\t\t \t\t<ul>  \t\t\t\t\t\t\t\t\t \t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',1);return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" onclick="changeShareTypeAndSaveUserList(\'' + a[b].id + '\',2);return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li>  \t\t\t\t\t\t\t\t\t\t   <li><a href="#" data-toggle="modal" data-target="#show-user-list" onclick="getUserList(\'' + a[b].id + '\',3);return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a>  \t\t\t\t\t\t\t\t \t</ul>   \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<span class="post-time">' + p + '</span>  \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t</div> </div> <div class="top-inbox-post details-pst">     <div class="row">   \t\t\t<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">    \t\t\t\t\t\t<div class="inboxFileName "> </div>  \t\t \t</div>     \t\t\t<div class="col-lg-12"> <div class="col-lg-12"><div class="album-post main-post" > <div class="gallery" id="' + a[b].id + '-main-post"> ' + D + '\t\t\t\t\t\t\t</div> \t<ul class="secondary-actions action-all">   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openMoveFilePopUp(\'' + a[b].id + "','" + g + "','" + i + "','" + y + "','" + z + "','" + c + "','" + a[b].fileDescColor + "','" + a[b].fileDescStyle + "','" + a[b].fileDescSize + "','" + a[b].is_Album + '\',\'0\',\'0\');return false;"><span><i class="fa fa-arrows" aria-hidden="true"></i></span><p>Move</p></a></li>  \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="openCreateFolderPopUp();return false;"><span><i class="fa fa-plus" aria-hidden="true"></i></span><p>Create</p></a></li>   \t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="deleteFile(' + a[b].id + ');return false;"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class="fa fa-trash" aria-hidden="true"></i></span><p>Delete</p></a></li> ' + v + '\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" onclick="getAlbumFileList(\'' + a[b].id + '\');return false;"><span>    \t\t\t\t\t\t\t\t\t\t <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><p>Edit File</p></a></li> \t</ul></div>\t\t\t\t\t</div>           \t\t<div class="fileDescriptionBox"   style="color:' + a[b].fileDescColor + ";font-size: " + a[b].fileDescSize + "px;font-family: " + a[b].fileDescStyle + ';">\t\t\t\t\t\t\t<textarea maxlength="200" onclick="pressEnterPostShow(' + b + ',\'filedescription\')"  placeholder="Enter file description ..."  id="ediFieDescription-' + b + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEvent(\'' + a[b].id + "',event," + b + ')">' + n + '</textarea> \t\t\t\t\t\t\t<div class="customize-block" id="showHide-' + b + '" style="display:none"> \t\t\t\t\t\t\t\tColor: <input type="text" id="changeColor-' + b + '" value="' + a[b].fileDescColor + '" \t\t\t\t\t\t\t\t\t\t\t\t\t  style="color:' + a[b].fileDescColor + ';" \t\t\t\t\t\t\t\t\t\t\t\t\t  class="color-picker" onchange="changeColor(' + b + ')" />\t\t\t\t\t\t    \t\tStyle: <select id="changeStyle-' + b + '" \t\t\t\t\t\t\t\t\t\t\tonchange="ChangeFont(this.value,' + b + ')"> ' + t + ' \t\t\t\t\t\t\t\t\t\t</select> \t\t\t\t\t\t\t\tSize: <select id="changeSize-' + b + '" value="' + a[b].fileDescSize + '\t\t\t\t\t\t\t\t\t\t  " onchange="ChangeSize(this.value,' + b + ')">' + r + '\t\t\t\t\t\t\t\t   \t\t </select>\t\t  \t\t\t\t\t </div>\t\t  \t\t\t\t\t <br/><span class="press-enter-to-post" style="display:none;" id="filedescription-press-enter-to-post-' + b + '">Press Enter to save.</span><br/>\t\t\t\t\t</div> \t</div>  \t</div>  \t\t\t<div class="clearfix"></div>  \t</div></div>\t<div class="clearfix"></div>   </li> ', $("#inboxContentDiv").append(x);
    for (var s = 0; s < B.length; s++) {
        for (var E = "", F = 0; F < C.length; F++) s == F && (E = C[s]);
        showAlbumCaraousal(B[s], E)
    }
}

function showAlbumCaraousal(a, b) {
    $("#" + a).imagesGrid({
        images: b,
        align: !0
    })
}

function showDatePicker(a) {
    $("#" + a.id).datetimepicker({
        language: "en",
        pick12HourFormat: !0
    })
}

function showDiv(a) {
    $("#showHide-" + a).show()
}

function changeColor(a) {
    var b = $("#changeColor-" + a).val();
    document.getElementById("ediFieDescription-" + a).style.color = b
}

function ChangeFont(a, b) {
    var c = a;
    $("#ediFieDescription-" + b).css("font-family", c)
}

function ChangeSize(a, b) {
    var c = a;
    $("#ediFieDescription-" + b).css("font-size", c + "px")
}

function checkEdiFieNameEvent(a, b, c) {
    return 13 == b.keyCode ? (openEditDescriptionModel(a, c), !1) : void 0
}

function showFileListForMoveAndCreateFolder(a, b, c) {
    $.ajax({
        type: "GET",
        url: "getMenu?${_csrf.parameterName}=${_csrf.token}&dirPath=" + a,
        cache: !1,
        success: function(a) {
            var d = "";
            $("#" + b).empty();
            var e;
            Object.keys(a).forEach(function(f) {
                e = a[f], "openDynamicMenuListForCreateFolder" == b ? "\\Legal Documents" != e && "\\Time Locked Content" != e && "\\My First" != e && (d = d + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileListForMoveAndCreateFolder(\'' + e + "',this,'" + c + '\');return false;" id="' + e + '">' + f + "</a> </li>") : d = d + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileListForMoveAndCreateFolder(\'' + e + "',this,'" + c + '\');return false;" id="' + e + '">' + f + "</a> </li>"
            }), $("#" + b).append(d), $("#" + b).treemenu({
                delay: 300,
                openActive: !0
            }).openActive()
        },
        error: function() {}
    })
}

function showNextLevelFileListForMoveAndCreateFolder(a, b, c) {
    $("#base-folder-highlight").removeClass("base-folder-highlight"), $("#" + c).empty(""), $.ajax({
        type: "GET",
        url: "getMenu?${_csrf.parameterName}=${_csrf.token}&dirPath=" + b.id,
        cache: !1,
        success: function(a) {
            var d = "<ul>";
            $(b.parentElement).find("ul").remove(), Object.keys(a).forEach(function(b) {
                var e = a[b];
                d = d + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileListForMoveAndCreateFolder(\'' + e + "',this,'" + c + '\');return false;" id="' + e + '">' + b + "</a> </li>"
            }), d += "</ul>", $(b.parentElement).append(d)
        },
        error: function() {}
    }), $("#" + c).val(b.id)
}

function addToEulogyFolder(a, b, c, d, e, f, g, h, i, j, k, l) {
    d = unescape(d), e = unescape(e), $("#showMoveFileError").hide(), $("#dynamicContent li a").each(function() {
        "icons-relate tree-active" == $(this).attr("class") && ($("#moveFolderTypeOld").val($(this).attr("id")), $("#initalFilelist").val($(this).attr("id")))
    }), $("#moveFileIdId").val(a), $("#moveFolderTypeET").val("\\Eulogy presentation"), $("#moveFileExtension").val("." + c), $("#moveFilePathET").val(b), $("#moveFileName").val(d), $("#moveFileDesc").val(e), $("#fileDescColorMoveFileIdId").val(g), $("#fileDescStyleMoveFileIdId").val(h), $("#fileDescSizeMoveFileIdId").val(i), 1 == j ? $("#moveFile_is_album").val(1) : $("#moveFile_is_album").val(0), 1 == k ? ($("#is_album_file_move").val(1), $("#moveFolderTypeOld").val(f)) : $("#is_album_file_move").val(0), 1 == l ? $("#is_video_forMoveFile").val(1) : $("#is_video_forMoveFile").val(0), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "moveFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("moveFileId")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        return $("#messageContent").append(fileAlsopartOfEulogyFromTimeLockedContent), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3), !0
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(fileMoveFailureMsg), $("#moveFileModel .close").click()
    })
}

function openMoveFilePopUp(a, b, c, d, e, f, g, h, i, j, k, l) {
    d = unescape(d), e = unescape(e),
    $("#showMoveFileError").hide(),
    $("#dynamicContent li a").each(function() {
        "icons-relate tree-active" == $(this).attr("class") && $("#moveFolderTypeOld").val($(this).attr("id"))
    }), 
    showFileListForMoveAndCreateFolder("", "openDynamicMenuListForMoveFolder", "moveFolderTypeET"),
    $("#moveFileModelButton").click(), 
    
    $("#moveFileIdId").val(a), //fileId
    $("#moveFolderTypeET").val(""), //folder path where to file move
    $("#moveFilePathET").val(b), //the full path of file
    1 == j ? $("#moveFile_is_album").val(1) : $("#moveFile_is_album").val(0), 
    1 == k ? ($("#is_album_file_move").val(1), $("#moveFolderTypeOld").val(f)) : $("#is_album_file_move").val(0), 
    1 == l ? $("#is_video_forMoveFile").val(1) : $("#is_video_forMoveFile").val(0);
    
    //$("#moveFileDesc").val(e),
    // $("#moveFileName").val(d), 
    //$("#moveFileExtension").val("." + c), //file Extension
    //$("#fileDescColorMoveFileIdId").val(g), 
    // $("#fileDescStyleMoveFileIdId").val(h), 
    //$("#fileDescSizeMoveFileIdId").val(i)
}

function moveFile() {
    $("#showSafeKeepingSelection").hide();
    var a = $("#moveFolderTypeET").val();
    $("#moveFileModel .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "moveFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("moveFileId")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(b) {
        if ("\\Legal Documents" != a) {
            var c = $("#moveFolderTypeET").val();
            return $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(fileMoveSuccessMsg + " to " + c), $("#moveFileModel .close").click(), $("#album-all .close").click(), $("#initalFilelist").val($("#moveFolderTypeET").val()), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3), !0
        }
        showInboxDetails("initial"), $("#passwordForLeagalDocument").val(""), $("#enterPasswordForLeagalDocumentsModelOpenButton").click()
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(fileMoveFailureMsg), $("#moveFileModel .close").click()
    })
}

function openCreateFolderPopUp() {
    $("#iconPathCreateFolder").val("root"), $("#menuName").val(""), showFileListForMoveAndCreateFolder("", "openDynamicMenuListForCreateFolder", "iconPathCreateFolder"), $("#createFolderModelButton").click()
}

function createFolder() {
    $("#showSafeKeepingSelection").hide(), $("#createFoldereModel .close").click(), $("#messageContent").empty(), $("#loadingImage").show();
    var a = $("#iconPathCreateFolder").val();
    "root" == a && $("#iconPathCreateFolder").val(""), $.ajax({
        url: "createFolder?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("userMenuMappingModelId")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        showFileList(""), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(a), $("#file_upload").val(), $("#fileName").val(), $("#fileDesc").val(), $("#createFoldereModel .close").click(), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        showFileList(""), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(folderCreateFailureMsg), $("#file_upload").val(), $("#fileName").val(), $("#fileDesc").val(), $("#createFoldereModel .close").click()
    })
}

function downloadFile(a, b, c) {
    window.open(c)
}

function showFileList(a) {
    $.ajax({
        type: "GET",
        url: "getMenu?${_csrf.parameterName}=${_csrf.token}&dirPath=" + a,
        cache: !1,
        success: function(a) {
            var b = "";
            $("#dynamicContent").empty();
            var c;
            Object.keys(a).forEach(function(d) {
                if (c = a[d], "/Inbox" == c.replace(/\\/g, "/")) b = b + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + c + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + c + '" class="tree-active icons-relate">' + d + "</a> </li>";
                else if ("/Eulogy presentation" == c.replace(/\\/g, "/")) {
                    var e = d; - 1 == d.indexOf("<i class='fa fa-caret-right' aria-hidden='true'></i>") && (e = '<i class="fa fa-caret-right" aria-hidden="true"></i>' + d), b = b + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + c + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + c + '" class="icons-relate">' + e + "</a> </li>"
                } else if ("/Time Locked Content" == c.replace(/\\/g, "/")) {
                    var e = d; - 1 == d.indexOf("<i class='fa fa-caret-right' aria-hidden='true'></i>") && (e = '<i class="fa fa-caret-right" aria-hidden="true"></i>' + d), b = b + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + c + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + c + '" class="icons-relate">' + e + "</a> </li>"
                } else if ("/Legal Documents" == c.replace(/\\/g, "/")) {
                    var e = d; - 1 == d.indexOf("<i class='fa fa-caret-right' aria-hidden='true'></i>") && (e = '<i class="fa fa-caret-right" aria-hidden="true"></i>' + d), b = b + '<li><span class="toggler"></span><a href="#" onclick="openLeagalDocumentsEnterPassPopUp(\'' + c + '\',this);return false;" id="' + c + '" class="icons-relate">' + e + '</a> <ul style="display:none;" id="showSafeKeepingSelection"> <li> <span class="toggler"></span> <a href="#" onclick="openSafeKeepingDiv()" class="icons-relate" id="Legal Documents\\Safe Keeping">Safe Keeping</a> </li></ul></li>'
                } else if ("/My First" == c.replace(/\\/g, "/")) {
                    var e = d; - 1 == d.indexOf("<i class='fa fa-caret-right' aria-hidden='true'></i>") && (e = '<i class="fa fa-caret-right" aria-hidden="true"></i>' + d), b = b + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + c + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + c + '" class="icons-relate">' + e + '</a> <ul style="display:none;" id="myFirstSelection"> <li> <span class="toggler"></span> <a href="#" onclick="openMyFirstContentDiv()" class="icons-relate" id="My First\\My First Questions">My First Questions</a> </li></ul></li>'
                } else b = b + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + c + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + c + '" class="icons-relate">' + d + "</a> </li>"
            }), $("#dynamicContent").append(b)
        },
        error: function() {}
    })
}

function activeAndInactiveTree(a) {
    $("#dynamicContent li a").each(function() {
        $(this).attr("id") == a.id ? $(this).addClass("tree-active") : $(this).removeClass("tree-active")
    })
}

function openSafeKeepingDiv() {
    $("#dynamicContent li a").each(function() {
        "Legal Documents\\Safe Keeping" == $(this).attr("id") ? ($("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html("Legal Documents  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  Safe Keeping"), $(this).addClass("tree-active")) : $(this).removeClass("tree-active")
    }), $("#safeKeepingFormDiv").show(), $("#myFinalWishesDiv").hide(), $("#inboxConent").hide(), $("#timeLockedContentDiv").hide(), $("#myFirstContentDiv").hide()
}

function openTimeLockedContentQuestinariesDiv() {
    $("#showSafeKeepingSelection").hide(), $("#safeKeepingFormDiv").hide(), $("#dynamicContent li a").each(function() {
        "Time Locked Content\\Questionnaires" == $(this).attr("id") ? ($("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html("Time Locked Content  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  Questionnaires"), $(this).addClass("tree-active")) : $(this).removeClass("tree-active")
    }), $("#inboxConent").hide(), $("#safeKeepingFormDiv").hide(), $("#myFinalWishesDiv").hide(), $("#timeLockedContentDiv").hide(), $("#myFirstContentDiv").hide(), getTimeLockedContentValueCollege(), getTimeLockedContentValueSchool(), $("#timeLockedContentDiv").show()
}

function openInboxDiv() {
    $("#inboxConent").show(), $("#safeKeepingFormDiv").hide(), $("#myFinalWishesDiv").hide(), $("#timeLockedContentDiv").hide(), $("#myFirstContentDiv").hide()
}

function openMyFirstContentDiv() {
    $("#dynamicContent li a").each(function() {
        "My First\\My First Questions" == $(this).attr("id") ? ($("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html("My First  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  My First Questions"), $(this).addClass("tree-active")) : $(this).removeClass("tree-active")
    }), $("#myFirstContentDiv").show(), $("#inboxConent").hide(), $("#safeKeepingFormDiv").hide(), $("#myFinalWishesDiv").hide(), $("#timeLockedContentDiv").hide()
}

function showNextLevelFileList(a, b) {
    $("#showSafeKeepingSelection").hide();
    for (var c = b.id.split("\\"), d = "", e = 1; e < c.length; e++) d = 1 == e ? c[e] : d + "  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  " + c[e];
    $("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html(d), $.ajax({
        type: "GET",
        url: "getMenu?${_csrf.parameterName}=${_csrf.token}&dirPath=" + b.id,
        cache: !1,
        success: function(a) {
            var c = "<ul>";
            $(b.parentElement).find("ul").remove(), "/Eulogy presentation" == b.id.replace(/\\/g, "/") ? c += '<li> <span class="toggler"></span><a href="#" onclick="myFinalWishes()" class="icons-relate" id="Eulogy presentation\\My Final Wishes">My Final Wishes</a> </li>' : "/Legal Documents" == b.id.replace(/\\/g, "/") ? c += ' <li> <span class="toggler"></span> <a href="#" onclick="openSafeKeepingDiv()" class="icons-relate" id="Legal Documents\\Safe Keeping">Safe Keeping</a> </li>' : "/My First" == b.id.replace(/\\/g, "/") ? c += ' <li> <span class="toggler"></span> <a href="#" onclick="openMyFirstContentDiv()" class="icons-relate" id="My First\\My First Questions">My First Questions</a> </li>' : "/Time Locked Content" == b.id.replace(/\\/g, "/") && (c += ' <li> <span class="toggler"></span> <a href="#" onclick="openTimeLockedContentQuestinariesDiv()" class="icons-relate" id="Time Locked Content\\Questionnaires">Questionnaires</a> </li>'), $.each(a, function(a, b) {
                c = c + '<li><span class="toggler"></span><a href="#" onclick="showNextLevelFileList(\'' + b + '\',this);showInboxDetails(this);activeAndInactiveTree(this);return false;" id="' + b + '" class="icons-relate">' + a + "</a> </li>"
            }), c += "</ul>", $(b.parentElement).append(c)
        },
        error: function() {}
    })
}

function selectBaseFolder() {
    $("#base-folder-highlight").addClass("base-folder-highlight"), $("#iconPathCreateFolder").val("root")
}

function myFinalWishes() {
    $("#showSafeKeepingSelection").hide(), $("#inboxConent").hide(), $("#safeKeepingFormDiv").hide(), $("#myFirstContentDiv").hide(), $("#myFinalWishesDiv").show(), $("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html("My Final Wishes"), $("#dynamicContent li a").each(function() {
        "Eulogy presentation\\My Final Wishes" == $(this).attr("id") ? ($("#displayCurrentFolderName").empty(), $("#displayCurrentFolderName").html("Eulogy presentation  <i class='fa fa-angle-double-right page-name-arrow' aria-hidden='true'></i>  My Final Wishes"), $(this).addClass("tree-active")) : $(this).removeClass("tree-active")
    }), $.ajax({
        url: "finalWishesInfo?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#infoID").val(a.id), $("#serviceHeld").val(a.service_held_loc), $("#remainsPlaced").val(a.remains_placed), $("#dressDetails").val(a.dress_details), $("#itemDetails").val(a.item_details), $("#arrangementsDetails").val(a.arrangements_details), $("#specialSongs").val(a.special_songs_details), $("#passageOrMessage").val(a.passage_or_message), $("#additionalIinstructions").val(a.additional_instructions)
    }).fail(function(a, b) {})
}

function getUserList(a, b) {
    $("#content-md").empty(), $("#searchTextInput").val(""), $("#share-file-id").val(a), $("#share-type").val(b), $.ajax({
        url: "getUserListForParticularFileId?fileid=" + a + "&searchText=ALLUSERNAME&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#content-md").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = '<input type="checkbox"  value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox"/> ';
                null != a[c][4] && void 0 != a[c][4] && (d = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox" /> ');
                var e = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (e = "../../" + a[c][3]), b = b + '<li class="control-group"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + e + '" alt="" /></div> <div class="user-name-recipmnt"><p>' + a[c][1] + "</p></div> " + d + ' <div class="control__indicator"></div> </label> </li>'
            }
            "" == b && (b = '<div class="no-friend-found"><p>No friends found</p></div>'), $("#content-md").html(b)
        },
        error: function() {}
    })
}

function saveShareUserList() {
    var a = $("#share-file-id").val(),
        b = $("#share-type").val();
    changeShareTypeAndSaveUserList(a, b)
}

function changeShareTypeAndSaveUserList(a, b) {
    $("#messageContent").empty();
    var c = [];
    $('input[name="share-user-checkbox"]:checked').each(function() {
        c.push($(this).val())
    }), 3 == b && 0 == c.length && ($("#showMsgButton").click(), $("#messageContent").empty(), $("#messageContent").append('<div style="color:red;">Please select user(s) to share</div>'), $("#showMsgButton").click(), $("#messageContent").empty(), $("#loadingImage").show()), $.ajax({
        url: "changeShareTypeAndSaveUserList?${_csrf.parameterName}=${_csrf.token}&shareUserList=" + c + "&fileId=" + a + "&shareType=" + b,
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#show-user-list .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), getFriendList(), showInboxDetails("initial"), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess), setTimeout(closeAllPopUp, 4e3)
    })
}

function getUserListForMyLastWishes() {
    $("#my_final_wishes_receipentEmailId_Id").val(), $("#my_final_wishes_saved_Id").val($("#infoID").val()), $.ajax({
        url: "getMyLastWishesRecipientsList?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#myLastWishesReceipentListUL").empty();
            for (var b = "", c = 0; c < a.length; c++) b = b + '<li class="control-group">  <label class="control control--checkbox">  <div class="user-name-recipmnt"><p>' + a[c].recipient_email_id + '</p></div> <input type="checkbox" value="' + a[c].id + '" name="share-mylastwish-checkbox" id="share-mylastwish-checkbox"/><div class="control__indicator"></div> </label>  </li>';
            $("#myLastWishesReceipentListUL").html(b)
        },
        error: function() {}
    })
}

function addMyLastWishesRecceipent() {
    $("#my_final_wishes_receipentEmailId_Id").val(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "saveMyLastWishesRecipientsModel?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("myLastWishesRecipientsAddForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#loadingImage").hide(), $("#messageContent").append(myLastWishesshareSuccess), getUserListForMyLastWishes()
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#messageContent").append(myLastWishesshareFailure)
    })
}

function deleteMyLastWishesRecceipent() {
    $("#my_final_wishes_receipentEmailId_Id").val(), $("#messageContent").empty(), $("#loadingImage").show();
    var a = [];
    $('input[name="share-mylastwish-checkbox"]:checked').each(function() {
        a.push($(this).val())
    }), $.ajax({
        url: "deleteMyLastWishesRecipients?${_csrf.parameterName}=${_csrf.token}&deleteMyLastWishesRecipientsList=" + a,
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#loadingImage").hide(), $("#messageContent").append(myLastWishesshareSuccess), getUserListForMyLastWishes()
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#messageContent").append(myLastWishesshareFailure)
    })
}

function checkIfUserDeath() {
    $("#myWishListDispatched").empty(), $("#myWishListDispatched").hide(), $.ajax({
        url: "getUserDetailsById?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            1 == a.is_death_confirm && ($("#myWishListDispatched").html("Your Final Wishes Shared"), $("#myWishListDispatched").show())
        },
        error: function() {}
    })
}

function openLeagalDocumentsEnterPassPopUp(a, b) {
    $("#passwordForLeagalDocument").val(""), $("#enterPasswordForLeagalDocumentsModelOpenButton").click()
}

function checkPasswordForLeagalDocuments() {
    $("#enterPasswordForLeagalDocumentsModel .close").click(), $("#loadingImage").show(), $.ajax({
        url: "checkUserAutheticationForTimeLockedContent?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("enterPasswordForLeagalDocumentsForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        1 == a ? ($("#showSafeKeepingSelection").show(), $("#initalFilelist").val("\\Legal Documents"), activeAndInactiveTree("\\Legal Documents"), showInboxDetails("initial")) : ($("#showSafeKeepingSelection").hide(), $("#messageContent").empty(), $("#messageContent").html(wrongPasswordForLegalDoc), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3)), $("#loadingImage").hide()
    }).fail(function(a, b) {
        $("#loadingImage").hide()
    })
}

function showToolTipPopUp(a, b, c, d, e, f) {
    $(a).tooltipster({
        trigger: "click",
        maxWidth: 400,
        side: "right"
    }).tooltipster("open")
}

function userSearchForReceipentUser(a) {
    $("#content-md").empty();
    var b = $("#searchTextInput").val(),
        c = $("#share-file-id").val();
    void 0 != c && $.ajax({
        url: "getUserListForParticularFileId?fileid=" + c + "&searchText=" + b + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#content-md").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = '<input type="checkbox"  value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox"/> ';
                null != a[c][4] && void 0 != a[c][4] && (d = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox" /> ');
                var e = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (e = "../../" + a[c][3]), b = b + '<li class="control-group"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + e + '" alt="" /></div> <div class="user-name-recipmnt"><p>' + a[c][1] + "</p></div> " + d + ' <div class="control__indicator"></div> </label> </li>'
            }
            "" == b && (b = '<div class="no-friend-found"><p>No friends found</p></div>'), $("#content-md").html(b)
        },
        error: function(a) {}
    })
}

function setDateOfReleaseValue() {
    var a = $("#dateOfReleasedropDown").val();
    if (null != a && "" != a && void 0 != a)
        if ("customize" == a) $("#showTimePickerForDateOfRelease").show(), $("#showWithoutTimePickerForDateOfRelease").hide(), $("#date_of_release_timepicker").val("");
        else if ("select" == a) $("#showTimePickerForDateOfRelease").hide(), $("#showWithoutTimePickerForDateOfRelease").show(), $("#date_of_release").val("");
    else {
        $("#showTimePickerForDateOfRelease").hide(), $("#showWithoutTimePickerForDateOfRelease").show();
        var b = new Date,
            c = b.getMonth() + 1 + "/" + b.getDate() + "/" + (parseInt(b.getFullYear()) + parseInt(a));
        $("#date_of_release").val(c)
    }
}

function submitTimeLockedContent(a, b) {
    $("#timeLockedContentQuesSave").prop("disabled", !0), $("#loadingImage").show(), $("#messageContent").empty();
    for (var c = document.forms[a].getElementsByTagName("textarea"), d = "", e = 0; e < c.length; e++) d += c[e].value;
    "" == d ? ($("#loadingImage").hide(), $("#messageContent").empty(), $("#showMsgButton").click(), $("#timeLockedContentQuesSave").prop("disabled", !1), $("#messageContent").append('<div style="color:red;">All field can not be blank.</div>')) : $.ajax({
        url: "saveTimeLockedContentQuesAnswer?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById(a)),
        processData: !1,
        contentType: !1
    }).done(function(a) {
        getTimeLockedContentValueSchool(), getTimeLockedContentValueCollege(), $("#loadingImage").hide(), $("#timeLockedContentQuesSave").prop("disabled", !1), $("#timeLockedContentId").val(a.id), $("#showMsgButton").click(), $("#messageContent").append("Your Data Saved Successfully!!!"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        getTimeLockedContentValueSchool(), getTimeLockedContentValueCollege(), $("#loadingImage").hide(), $("#timeLockedContentQuesSave").prop("disabled", !1), $("#showMsgButton").click(), $("#messageContent").append("Sorry Your Data Not Saved!!!"), setTimeout(closeAllPopUp, 4e3)
    })
}

function getTimeLockedContentValueSchool() {
    var a = $("#question_type_school").val();
    $.ajax({
        url: "getTimeLockedContentQuesAnswerForLoginUserId?${_csrf.parameterName}=${_csrf.token}&question_type=" + a,
        type: "POST",
        cache: !1,
        async: !1,
        success: function(b) {
            var c = "",
                d = "",
                e = "";
            if (b.length > 0) {
                for (var f = 0; f < b.length; f++) $("#answerId_" + b[f].time_locked_content_ques_master_id).val(b[f].id), $("#answer_group_Id_" + b[f].time_locked_content_ques_master_id).val(b[f].answer_group_id), $("#answer_" + b[f].time_locked_content_ques_master_id).val(b[f].answer), c = b[f].answer_group_id, d = '<a href="#" onclick="openDateOfRelaesePopUp(0,0,0,0,0,0,0,\'' + b[f].answer_group_id + '\');return false;"><span> <i class="fa fa-calendar" aria-hidden="true"></i></span> </a>';
                e = '\t<ul> <li><a href="#" onclick="changeShareTypeAndSaveUserListFotTimeLockedAnswer(\'' + c + "',1,'" + a + '\');return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  <li><a href="#" onclick="changeShareTypeAndSaveUserListFotTimeLockedAnswer(\'' + c + "',2,'" + a + '\');return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li> <li><a href="#" data-toggle="modal" data-target="#show-user-list-timelockedcontent" onclick="getUserListTimeLckedContent(\'' + c + "',3,'" + a + '\');return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a> </ul> ', $("#time-lockedcontent-release-date-div-school").empty(), $("#time-lockedcontent-release-date-div-school").html(d), $("#panel-share-time-locked-question-school").empty(), $("#panel-share-time-locked-question-school").html(e), "" != c && getTimeLockedContentShareType(c, a)
            }
        },
        error: function() {}
    })
}

function getTimeLockedContentValueCollege() {
    var a = $("#question_type_college").val();
    $.ajax({
        url: "getTimeLockedContentQuesAnswerForLoginUserId?${_csrf.parameterName}=${_csrf.token}&question_type=" + a,
        type: "POST",
        cache: !1,
        async: !1,
        success: function(b) {
            var c = "",
                d = "",
                e = "";
            if (b.length > 0) {
                for (var f = 0; f < b.length; f++) $("#answerId_" + b[f].time_locked_content_ques_master_id).val(b[f].id), $("#answer_group_Id_" + b[f].time_locked_content_ques_master_id).val(b[f].answer_group_id), $("#answer_" + b[f].time_locked_content_ques_master_id).val(b[f].answer), c = b[f].answer_group_id, d = '<a href="#" onclick="openDateOfRelaesePopUp(0,0,0,0,0,0,0,\'' + b[f].answer_group_id + '\');return false;"><span> <i class="fa fa-calendar" aria-hidden="true"></i></span> </a>';
                e = '\t<ul> <li><a href="#" onclick="changeShareTypeAndSaveUserListFotTimeLockedAnswer(\'' + c + "',1,'" + a + '\');return false;"><span><i class="fa fa-lock" aria-hidden="true" ></i></span>For my eyes only</a></li>  <li><a href="#" onclick="changeShareTypeAndSaveUserListFotTimeLockedAnswer(\'' + c + "',2,'" + a + '\');return false;"><span><i class="fa fa-globe" aria-hidden="true" ></i></span>Public</a></li> <li><a href="#" data-toggle="modal" data-target="#show-user-list-timelockedcontent" onclick="getUserListTimeLckedContent(\'' + c + "',3,'" + a + '\');return false;"><span><i class="fa fa-user" aria-hidden="true"></i></span>Recipient</a> </ul> ', $("#time-lockedcontent-release-date-div-college").empty(), $("#time-lockedcontent-release-date-div-college").html(d), $("#panel-share-time-locked-question-college").empty(), $("#panel-share-time-locked-question-college").html(e), "" != c && getTimeLockedContentShareType(c, a)
            }
        },
        error: function() {}
    })
}

function openSharePanelForTimeLockedContent(a) {
    $("#panel-share-time-locked-question-" + a).show()
}

function saveShareUserListTimeLockedContent() {
    var a = $("#answer-groupid-timelockedcontent").val(),
        b = $("#share-type-timelockedcontent").val();
    changeShareTypeAndSaveUserListFotTimeLockedAnswer(a, b)
}

function changeShareTypeAndSaveUserListFotTimeLockedAnswer(a, b) {
    $("#messageContent").empty(), $("#loadingImage").show();
    var c = [];
    $('input[name="share-user-timelockedcontent-checkbox"]:checked').each(function() {
        c.push($(this).val())
    }), $.ajax({
        url: "changeShareTypeAndSaveUserListForTimeLockedContentAnswer?${_csrf.parameterName}=${_csrf.token}&shareUserList=" + c + "&answer_group_id=" + a + "&shareType=" + b,
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(b) {
        $("#show-user-list-timelockedcontent .close").click(), getTimeLockedContentShareType(a, $("#question_type_school").val()), getTimeLockedContentShareType(a, $("#question_type_college").val()), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess)
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess), setTimeout(closeAllPopUp, 4e3)
    })
}

function getTimeLockedContentShareType(a, b) {
    $.ajax({
        url: "getTimeLockedContentShareType?answer_group_id=" + a + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            var c = "",
                d = !1;
            if (null != a && (c = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>', 2 == a.shareType ? c = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a.shareType && (c = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), null != a.date_of_release && "" != a.date_of_release)) {
                d = !0;
                var e = new Date(a.date_of_release),
                    f = moment(e).format("MM/DD/YYYY HH:mm");
                $("#date_of_release").val(f), $("#date_of_release_timepicker").val(f)
            }
            1 == d && (b == $("#question_type_school").val() && ($("#timeLockedContentHighSchoolDiv").css("opacity", "0.12"), $(".timelockedAnswerSchool").css("color", "white"), $("#timeLockedContentQuesSave").hide(), $("#shareTypeIconSchool").hide(), $("#time-lockedcontent-release-date-div-school").hide()), b == $("#question_type_college").val() && ($("#timeLockedContentCollegeDiv").css("opacity", "0.12"), $(".timelockedAnswerCollege").css("color", "white"), $("#timeLockedContentQuesCollegeSave").hide(), $("#shareTypeIconCollege").hide(), $("#time-lockedcontent-release-date-div-college").hide())), "" != c && ($("#shareTypeIcon" + b).empty(), $("#shareTypeIcon" + b).html(c))
        },
        error: function() {}
    })
}

function getUserListTimeLckedContent(a, b) {
    $("#content-md-timelockedcontent").empty(), $("#searchText-timelockedcontent-Input").val(""), $("#answer-groupid-timelockedcontent").val(a), $("#share-type-timelockedcontent").val(b), $.ajax({
        url: "getUserListForTimeLockedContentQuestons?answer_group_id=" + a + "&searchText=ALLUSERNAME&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#content-md-timelockedcontent").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = '<input type="checkbox"  value="' + a[c][0] + '" name="share-user-timelockedcontent-checkbox" id="share-user-timelockedcontent-checkbox"/> ';
                null != a[c][4] && void 0 != a[c][4] && (d = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="share-user-timelockedcontent-checkbox" id="share-user-timelockedcontent-checkbox" /> ');
                var e = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (e = "../../" + a[c][3]), b = b + '<li class="control-group"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + e + '" alt="" /></div> <div class="user-name-recipmnt"><p>' + a[c][1] + "</p></div> " + d + ' <div class="control__indicator"></div> </label> </li>'
            }
            "" == b && (b = '<div class="no-friend-found"><p>No friends found</p></div>'), $("#content-md-timelockedcontent").html(b)
        },
        error: function() {}
    })
}

function userSearchForTimeLockedContentUser(a) {
    $("#content-md-timelockedcontent").empty();
    var b = $("#searchText-timelockedcontent-Input").val(),
        c = $("#answer-groupid-timelockedcontent").val();
    void 0 != c && $.ajax({
        url: "getUserListForTimeLockedContentQuestons?answer_group_id=" + c + "&searchText=" + b + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#content-md-timelockedcontent").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = '<input type="checkbox"  value="' + a[c][0] + '" name="share-user-timelockedcontent-checkbox" id="share-user-timelockedcontent-checkbox"/> ';
                null != a[c][4] && void 0 != a[c][4] && (d = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="share-user-timelockedcontent-checkbox" id="share-user-timelockedcontent-checkbox" /> ');
                var e = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (e = "../../" + a[c][3]), b = b + '<li class="control-group"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + e + '" alt="" /></div> <div class="user-name-recipmnt"><p>' + a[c][1] + "</p></div> " + d + ' <div class="control__indicator"></div> </label> </li>'
            }
            "" == b && (b = '<div class="no-friend-found"><p>No friends found</p></div>'), $("#content-md-timelockedcontent").html(b)
        },
        error: function() {}
    })
}

function uploadAlbum() {
    $("#modalForAlbum .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "uploadAlbumFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("usersFileFormIdAlbum")),
        enctype: "multipart/form-data",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        "The album has been uploaded to Inbox." == a ? ($("#showMsgButton").click(), $("#messageContent").append(a), $("#loadingImage").hide(), $("#file_upload").val(), $("#fileName").val(), $("#fileDesc").val(), $("#initalFilelist").val("\\Inbox"), $("#showSafeKeepingSelection").hide(), showInboxDetails("Inbox"), setTimeout(closeAllPopUp, 4e3)) : ($("#showMsgButton").click(), $("#messageContent").append(a), $("#loadingImage").hide(), $("#file_upload").val(), $("#fileName").val(), $("#fileDesc").val(), setTimeout(closeAllPopUp, 4e3))
    }).fail(function(a, b) {
        $("#showMsgButton").click(), $("#messageContent").append(fileUploadedFailureMsg), $("#loadingImage").hide()
    })
}

function uploadVideo() {
    $("#modalForVideo .close").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "uploadVideoFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("usersFileFormIdVideo")),
        enctype: "multipart/form-data",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        "The video file has been uploaded to Inbox." == a ? ($("#showMsgButton").click(), $("#messageContent").append(a), $("#loadingImage").hide(), $("#file_upload_video").val(), $("#videoFileName").val(), $("#videoFileDesc").val(), $("#initalFilelist").val("\\Inbox"), $("#showSafeKeepingSelection").hide(), showInboxDetails("Inbox"), setTimeout(closeAllPopUp, 4e3)) : ($("#showMsgButton").click(), $("#messageContent").append(a), $("#loadingImage").hide(), $("#file_upload_video").val(), $("#videoFileName").val(), $("#videoFileDesc").val(), setTimeout(closeAllPopUp, 4e3))
    }).fail(function(a, b) {
        $("#showMsgButton").click(), $("#messageContent").append(fileUploadedFailureMsg), $("#loadingImage").hide()
    })
}

function getAlbumFileList(a) {
    $("#show-model-album-all").click(), $.ajax({
        url: "getAlbumFileList?albumId=" + a + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#showAllAlbumFileDiv").empty();
            for (var b = "", c = 0; c < a.length; c++)
                if (1 != a[c].is_deleted) {
                    var d = accessFileUrl+a[c].filePath,
                        e = d.substr(6, d.length);
                    e = e.replace(/\\/g, "/");
                    for (var f = d.replace(/\\/g, "/").split("/"), g = "", h = 4; h < f.length - 1; h++) g = g.concat(f[h]), h != f.length - 2 && (g = g.concat("/"));
                    var i = accessFileUrl+a[c].filePath.replace(/\\/g, "/").split("/"),
                        j = i[i.length - 1],
                        k = e.split("."),
                        l = k[k.length - 1],
                        m = new Date(a[c].createdOn),
                        n = m.getMonth() + 1 + "/" + m.getDate() + "/" + m.getFullYear(),
                        o = escape(a[c].fileName),
                        p = escape(a[c].fileDesc),
                        q = '<i class="fa fa-lock" aria-hidden="true" style="color: #115884 !important;"></i>';
                    2 == a[c].shareType ? q = '<i class="fa fa-globe" aria-hidden="true" style="color: #115884 !important"></i>' : 3 == a[c].shareType && (q = '<i class="fa fa-user" aria-hidden="true" style="color: #115884 !important"></i>'), b = b + '<div class="col-md-6 col-sm-12 col-xs-12"><div class="row">  <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <input type="text" id="ediAlbumFieName-' + c + '" onclick="pressEnterPostAlbumFileShow(' + c + ",'filename');return false;\" onkeydown=\"checkEdiFieNameEventForAlbumFile('" + a[c].id + "',event," + c + ')"  maxlength="50" id="editAlbumFieName-' + c + '" value="' + a[c].fileName + '" placeholder="Enter title" style="border:none;    border-bottom: 1px solid #d5d5d5;width: 100%;height: 100%;">  <br/><span class="press-enter-to-post" id="filename-press-enter-to-post-album-file-' + c + '" style="display:none;">Press Enter to save.</span><br/> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">   <span class="post-time">' + n + '</span> </div></div><div class="clearfix"></div> <div class="albul-secondary-holder"><img src="' +accessFileUrl+ a[c].filePath + '" alt="" title=""> <div class="overlay-box"> <ul class="action-all"> <li><a href="#" onclick="openMoveFilePopUp(\'' + a[c].id + "','" + j + "','" + l + "','" + o + "','" + p + "','" + g + "','" + a[c].fileDescColor + "','" + a[c].fileDescStyle + "','" + a[c].fileDescSize + "','" + a[c].is_Album + '\',\'1\',\'0\');return false;" ><span><i class="fa fa-arrows" aria-hidden="true"></i></span><p>Move</p></a></li>  <li><a href="#"  onclick="deleteAlbumFile(' + a[c].id + ');return false;"><span><i class="fa fa-trash" aria-hidden="true"></i></span><p>Delete</p></a></li> \t</ul>  </div> </div> <div class="row"> <div class="col-lg-12"><textarea maxlength="200" onclick="pressEnterPostAlbumFileShow(' + c + ',\'filedescription\');return false;"  placeholder="Enter file description ..."  id="editAlbumFileDescription-' + c + '"  style="border: none;width: 100%;height: 100%;" \t\t\t\t\t\t\t\t\t\t\t\t\t  onkeydown="checkEdiFieNameEventForAlbumFile(\'' + a[c].id + "',event," + c + ')">' + a[c].fileDesc + '</textarea>  <br/><span class="press-enter-to-post" id="filedescription-press-enter-to-post-album-file-' + c + '" style="display:none;">Press Enter to save.</span><br/>  </div> </div> </div>'
                }
            $("#showAllAlbumFileDiv").html(b)
        },
        error: function() {}
    })
}

function pressEnterPostAlbumFileShow(a, b) {
    showDiv(a), "filename" == b && $("#filename-press-enter-to-post-album-file-" + a).show(), "filedescription" == b && $("#filedescription-press-enter-to-post-album-file-" + a).show()
}

function pressEnterPostAlbumFileHide(a, b) {
    "filename" == b && $("#filename-press-enter-to-post-album-file-" + a).hide(), "filedescription" == b && $("#filedescription-press-enter-to-post-album-file-" + a).hide()
}

function checkEdiFieNameEventForAlbumFile(a, b, c) {
    return 13 == b.keyCode ? (openEditDescriptionModelForAlbumFile(a, c), !1) : void 0
}

function openEditDescriptionModelForAlbumFile(a, b) {
    var c = !1,
        d = $("#editAlbumFileDescription-" + b).val(),
        e = $("#ediAlbumFieName-" + b).val(),
        f = $("#fileAlbumChangeColor-" + b).val(),
        g = $("#fileAlbumChangeStyle-" + b).val(),
        h = $("#fileAlbumChangeSize-" + b).val();
    (null != d || "" != d) && d.length > 255 && ($("#messageContent").empty(), $("#messageContent").append(ediFieDescriptionLength), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), c = !0), (null !== e || "" != e) && e.length > 50 && ($("#messageContent").empty(), $("#messageContent").append(ediFieNameLength), $("#showMsgButton").click(), setTimeout(closeAllPopUp, 4e3), c = !0), 0 == c && ($("#editFileIdOfAlbum").val(a), $("#editFileDescriptionOfAlbum").val(d), $("#editFileNameOfAlbum").val(e), $("#editFileDescColorOfAlbum").val(f), $("#editFileDescStyleOfAlbum").val(g), $("#editFileDescSizeOfAlbum").val(h), editDescriptionForAlbumFile())
}

function deleteAlbumFile(a) {
    $("#openDeleteAlbumFileConfirmBoxButton").click(), $("#deleteAlbumFileId").val(a)
}

function deleteAlbumFileNo() {
    $("#deleteAlbumFilePopUp .close").click()
}

function deleteAlbumFileYes() {
    $("#deleteAlbumFilePopUp .close").click();
    var a = $("#deleteAlbumFileId").val();
    $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "deleteAlbumFile?albumFileId=" + a + "&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("editFileDescriptionAlbumFileForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileDeletionSuccessMsg), $("#loadingImage").hide(), $("#album-all .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#album-all .close").click(), $("#messageContent").append(fileDeletionFailureMsg), $("#loadingImage").hide(), setTimeout(closeAllPopUp, 4e3)
    })
}

function editDescriptionForAlbumFile() {
    $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "editAlbumFile?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        data: new FormData(document.getElementById("editFileDescriptionAlbumFileForm")),
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#showMsgButton").click(), $("#messageContent").append(fileEditDescriptionSuccessMsg), $("#loadingImage").hide(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), showInboxDetails("initial"), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#messageContent").append(fileEditDescriptionFailureMsg), $("#loadingImage").hide(), setTimeout(closeAllPopUp, 4e3)
    })
}

function getUserListOfParticularAlbumFile(a, b) {
    $("#content-md").empty(), $("#searchTextInput").val(""), $("#share-file-id").val(a), $("#share-type").val(b), $.ajax({
        url: "getUserListForParticularFileId?fileid=" + a + "&searchText=ALLUSERNAME&${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        success: function(a) {
            $("#content-md").empty();
            for (var b = "", c = 0; c < a.length; c++) {
                var d = '<input type="checkbox"  value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox"/> ';
                null != a[c][4] && void 0 != a[c][4] && (d = '<input type="checkbox" checked="true" value="' + a[c][0] + '" name="share-user-checkbox" id="share-user-checkbox" /> ');
                var e = "/ET/images/user-pic.png";
                null != a[c][3] && void 0 != a[c][3] && (e = "../../" + a[c][3]), b = b + '<li class="control-group"><label class="control control--checkbox"> <div class="recp-img-holder"><img src="' + e + '" alt="" /></div> <div class="user-name-recipmnt"><p>' + a[c][1] + "</p></div> " + d + ' <div class="control__indicator"></div> </label> </li>'
            }
            "" == b && (b = '<div class="no-friend-found"><p>No friends found</p></div>'), $("#content-md").html(b)
        },
        error: function() {}
    })
}

function saveShareUserListForParticularAlbumFile() {
    var a = $("#share-file-id").val(),
        b = $("#share-type").val();
    changeShareTypeAndSaveUserList(a, b)
}

function changeShareTypeAndSaveUserListForParticularAlbumFile(a, b) {
    var c = [];
    $('input[name="share-user-checkbox"]:checked').each(function() {
        c.push($(this).val())
    }), 0 == c.length ? ($("#showMsgButton").click(), $("#messageContent").empty(), $("#messageContent").append('<div style="color:red;">Please select user(s) to share</div>')) : ($("#showMsgButton").click(), $("#messageContent").empty(), $("#loadingImage").show(), $.ajax({
        url: "changeShareTypeAndSaveUserList?${_csrf.parameterName}=${_csrf.token}&shareUserList=" + c + "&fileId=" + a + "&shareType=" + b,
        type: "POST",
        processData: !1,
        cache: !1,
        contentType: !1
    }).done(function(a) {
        $("#show-user-list .close").click(), $("#dynamicContent li a").each(function() {
            "icons-relate tree-active" == $(this).attr("class") && $("#initalFilelist").val($(this).attr("id"))
        }), getFriendList(), showInboxDetails("initial"), $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess), setTimeout(closeAllPopUp, 4e3)
    }).fail(function(a, b) {
        $("#loadingImage").hide(), $("#showMsgButton").click(), $("#messageContent").append(shareSuccess), setTimeout(closeAllPopUp, 4e3)
    }))
}
var fileUploadedSuccessMsg = "The file has been uploaded to Inbox.",
    fileUploadedFailureMsg = "File has not been uploaded",
    albumUploadedSuccessMsg = "The album file has been uploaded to Inbox.",
    albumUploadedFailureMsg = "File has not been uploaded",
    fileDeletionSuccessMsg = "The file has been deleted.",
    fileDeletionFailureMsg = "File has not been deleted",
    fileEditDescriptionSuccessMsg = "Edited successfully. ",
    fileEditDescriptionFailureMsg = "Edited successfully. ",
    fileMoveSuccessMsg = "The file has been moved ",
    fileMoveFailureMsg = "File has not been moved. ",
    folderCreateSuccessMsg = "Folder has been created successfully. ",
    folderCreateFailureMsg = "Folder has not been created. ",
    folderAlreadyPresent = "Folder with this name already exists.Please create folder with other name.",
    rotatedSuccess = "Rotated Successfully",
    rotatedFailure = "Rotated Unsuccessfull",
    ediFieNameLength = "File name must be less than 50 character",
    ediFieDescriptionLength = "File description must be less than 255 character ",
    shareSuccess = "Shared successfully ",
    shareFailure = "Shared unsuccessfully  ",
    myLastWishesshareSuccess = "Edited successfully ",
    myLastWishesshareFailure = "Edited unsuccessfully ",
    wrongPasswordForLegalDoc = "Access Denied",
    fileAlsopartOfEulogyFromTimeLockedContent = "File also part of Eulogy";
$(function() {
    var a = $("meta[name='_csrf']").attr("content"),
        b = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(c, d, e) {
        d.setRequestHeader(b, a)
    })
}), $(document).ready(function() {
    callFunction();
    getFolderSizeDetails();
});


$(document).ready(function(){
	/*function getFolderSizeDetails() {
    $.ajax({
        url: "getFileSize?${_csrf.parameterName}=${_csrf.token}",
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
        	 var data=[];
        	 var labels=[];
        	Object.keys(e).forEach(function(f) {
               var value = e[f];
               data.push(value);
               labels.push(f);
        	});
        	
        	//alert(data);
        	var ctx = document.getElementById("myChart").getContext('2d');
        	var myChart = new Chart(ctx, {
        	    type: 'bar',
        	    data: {
        	        labels: labels,
        	        datasets: [{
        	            label: 'Memory usage',
        	            data: data,
        	            backgroundColor: [
        	                'rgba(255, 99, 132, 0.2)'
        	                
        	            ],
        	            borderColor: [
        	                'rgba(255,99,132,1)'
        	                
        	            ]
        	          
        	         
        	           
        	        }]
        	    },
        	    options: {legend: {
                    display: true,
                    labels: {
                    	boxWidth: 20
                    }
                },
                scales: {
    	            yAxes: [{
    	                ticks: {
    	                    beginAtZero:true,
    	                    steps: 10,
                            stepValue: 5,
                            max: 100
    	                }
    	            }],
    	            xAxes: [{
    	                barPercentage: 0.3
    	            }]
    	        }
        	    }
        	});
        
          
        },
        error: function() {}
    })
}*/
});
