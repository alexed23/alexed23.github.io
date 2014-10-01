$(document).ready(function() {
    $(".btn").click(function() {
        var summary = 0;
        if (($("#1").val()) === 'correct') {
            summary++;
        };
        if (($("#2").val()) === 'correct') {
            summary++;
        };
        if (($("#3").val()) === 'correct') {
            summary++;
        };
        if (($("#4").val()) === 'correct') {
            summary++;
        };
        if (($("#5").val()) === 'correct') {
            summary++;
        };
        if (($("#6").val()) === 'correct') {
            summary++;
        };
        if (($("#7").val()) === 'correct') {
            summary++;
        };
        if (($("#8").val()) === 'correct') {
            summary++;
        };
        if (($("#9").val()) === 'correct') {
            summary++;
        };
        if (($("#10").val()) === 'correct') {
            summary++;
        };
        if (($("#11").val()) === 'correct') {
            summary++;
        };
        if (($("#12").val()) === 'correct') {
            summary++;
        };
        if (($("#13").val()) === 'correct') {
            summary++;
        };
        if (($("#14").val()) === 'correct') {
            summary++;
        };
        if (($("#15").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_1").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_2").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_3").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_4").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_5").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_6").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_7").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_8").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_9").val()) === 'correct') {
            summary++;
        };
        if (($("#audio_10").val()) === 'correct') {
            summary++;
        };
        if (($("#video_1").val()) === 'correct') {
            summary++;
        };
        if (($("#avideo_2").val()) === 'correct') {
            summary++;
        };
        if (($("#video_3").val()) === 'correct') {
            summary++;
        };
        if (($("#video_4").val()) === 'correct') {
            summary++;
        };
        if (($("#video_5").val()) === 'correct') {
            summary++;
        };
        if (summary >= 25 && summary <= 30) {
            $(".good").hide();
            $(".average").hide();
            $(".excellent").show();
            $(".bad").hide();
            var percent = summary / 0.30;
            $(".progress-bar").attr("style", "width:" + percent +
                "%");
            $(".result").css("display", "block");
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 'slow');
            $('.score').html("<h1>Your score: " + summary +
                "/30</h1>");
        } else if (summary >= 20 && summary <= 24) {
            $(".good").show();
            $(".average").hide();
            $(".excellent").hide();
            $(".bad").hide();
            var percent = summary / 0.30;
            $(".progress-bar").attr("style", "width:" + percent +
                "%");
            $(".result").css("display", "block");
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 'slow');
            $('.score').html("<h1>Your score: " + summary +
                "/30</h1>");
        } else if (summary >= 10 && summary <= 19) {
            $(".good").hide();
            $(".average").show();
            $(".excellent").hide();
            $(".bad").hide();
            var percent = summary / 0.30;
            $(".progress-bar").attr("style", "width:" + percent +
                "%");
            $(".result").css("display", "block");
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 'slow');
            $('.score').html("<h1>Your score: " + summary +
                "/30</h1>");
        } else if (summary >= 0 && summary <= 9) {
            $(".good").hide();
            $(".average").hide();
            $(".excellent").hide();
            $(".bad").show();
            var percent = summary / 0.30;
            $(".progress-bar").attr("style", "width:" + percent +
                "%");
            $(".result").css("display", "block");
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 'slow');
            $('.score').html("<h1>Your score: " + summary +
                "/30</h1>");
        }
    });
});