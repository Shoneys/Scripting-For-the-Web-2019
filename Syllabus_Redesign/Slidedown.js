$(document).ready(function () {
    $("#scripting-for-the-web").click(function () {
        $("p:nth-child(2)").slideToggle("slow");
    });
    $("#course-description").click(function () {
        $("p:nth-child(4)").slideToggle("slow");
        $("p:nth-child(5)").slideToggle("slow");
        $("p:nth-child(6)").slideToggle("slow");
        $("p:nth-child(7)").slideToggle("slow");
        $("p:nth-child(8)").slideToggle("slow");
    });
    $("#learning-objectives").click(function () {
        $("ul:nth-of-type(1)").slideToggle("slow");
    });
    $("#required-texts-and-tools").click(function () {
        $("ul:nth-of-type(3)").slideToggle("slow");
    });
    $("#field-trip").click(function () {
        $("p:nth-child(9)").slideToggle("slow");
    });
});
