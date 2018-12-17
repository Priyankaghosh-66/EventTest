function getAnswerList() {
    $.ajax({
        type: "GET",
        url: "/ET/user/getListOfMyFirstQuestionAnswer?${_csrf.parameterName}=${_csrf.token}",
        cache: !1,
        processdata: !1,
        contentType: !1,
        success: function(a) {
            console.log(a), a.length > 0 && $.each(a, function(a, b) {
                1 == b.isDeleted ? $("#lidiv_" + (a + 1)).hide() : ($("#answer_id_" + (a + 1)).val(b.id), $("#myfirst_answer_" + (a + 1)).val(b.answer))
            })
        },
        error: function() {}
    })
}

function saveEarlyLifeQuestion() {
	
	var z = $("#saveEarlyLifeQuestionForm").data("bootstrapValidator");
	if (z.validate(), z.isValid()) {
		 $("#errMsgQ").hide();
    $.ajax({
        type: "POST",
        url: "/ET/user/saveMyFirstEarlyLifeQuestionAnswer?${_csrf.parameterName}=${_csrf.token}",
        data: new FormData(document.getElementById("saveEarlyLifeQuestionForm")),
        cache: !1,
        processData: !1,
        contentType: !1,
        success: function(a) {
            $("#successMsg").html(a), $("#successMsg").fadeTo(2e3, 500).slideUp(500, function() {
                $("#successMsg").slideUp(500)
            }), getAnswerList()
        },
        error: function() {
            $("#successMsg").html(data), $("#successMsg").show()
        }
    })
	 }else{
		 $("#errMsgQ").show();
	 }
}

function addDeleteMyFirstQuesAnswer(a, b) {
    var c = $("#answer_id_" + a).val();
    $.ajax({
        type: "POST",
        url: "/ET/user/addDeleteMyFirstQuesAnswer?${_csrf.parameterName}=${_csrf.token}",
        data: {
            answerId: c,
            deleteFlag: b
        },
        success: function(a) {
            console.log(a), getAnswerList()
        },
        error: function() {
            alert("Error Occured")
        }
    })
}
$(document).on("show", ".accordion", function(a) {
    $(a.target).prev(".accordion-heading").addClass("accordion-opened")
}), $(document).on("hide", ".accordion", function(a) {
    $(this).find(".accordion-heading").not($(a.target)).removeClass("accordion-opened")
}), $(document).ready(function() {
    var a = !0;
    $(".accordion .accordion-toggle:eq(0)").trigger("click"), $("#accordion2").on("show.bs.collapse", function() {
        a && $("#accordion2 .in").collapse("hide")
    }), getAnswerList()
});