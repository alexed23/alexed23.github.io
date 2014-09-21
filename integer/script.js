var a = 0;
var b = 1;
$(document).ready(function() {
    $("#right").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".right_button").show();
    });
    $("#left").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".left_button").show();
    });
    $("#trapezoid").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".trapezoid_button").show();
    });
    $("#parabola").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".parabola_button").show();
    });
    $("#first").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".first_button").show();
    });
    $("#second").click(function() {
        $(".result").hide();
        $("input").val('');
        $(".btn").hide();
        $("h1").hide();
        $(".input-group").css("display", "table");
        $(".second_button").show();
    });
    $(".right_button").click(function() {
        var n = $("input").val();
        var sum = 0;
        var x1;
        var length = (b - a) / n;
        var x = b;
        while (x > (a + length)) {
            x1 = Math.pow(Math.E, Math.pow(-x, 2));
            sum += x1;
            x -= length;
        }
        sum = length * sum;
        $(".result").show();
        $("#numeric").html(sum);
    });
    $(".left_button").click(function() {
        var n = $("input").val();
        var sum = 0;
        var x1;
        var length = (b - a) / n;
        var x = a;
        while (x <= (b - length)) {
            x1 = Math.pow(Math.E, Math.pow(-x, 2));
            sum += x1;
            x += length;
        }
        sum = length * sum;
        $(".result").show();
        $("#numeric").html(sum);
    });
    $(".trapezoid_button").click(function() {
        var n = $("input").val();
        var sum = 0;
        var sum1 = 0;
        var sum2;
        var x1;
        var length = (b - a) / n;
        var x = a + length;
        while (x < (b - length)) {
            x1 = Math.pow(Math.E, Math.pow(-x, 2));
            sum1 += x1;
            x += length;
        }
        sum2 = ((Math.pow(Math.E, Math.pow(-a, 2))) + (Math.pow(
            Math.E, Math.pow(-b, 2)))) / 2;
        sum = (sum1 + sum2) * length;
        $(".result").show();
        $("#numeric").html(sum);
    });
    $(".parabola_button").click(function() {
        var n = $("input").val();
        var sum = 0;
        var x1;
        var length = (b - a) / n;
        var af;
        var bf;
        var mid;
        var x = a;
        while (x < (b - length)) {
            af = x;
            bf = x + length;
            mid = (af + bf) / 2;
            x1 = ((bf - af) / 6) * ((Math.pow(Math.E, Math.pow(-
                af, 2))) + (4 * (Math.pow(Math.E, Math.pow(-
                mid, 2)))) + (Math.pow(Math.E, Math.pow(-
                bf, 2))));
            sum += x1;
            x += length;
        }
        $(".result").show();
        $("#numeric").html(sum);
    });
    $(".navbar-brand").click(function() {
        location.reload(true);
    });
});