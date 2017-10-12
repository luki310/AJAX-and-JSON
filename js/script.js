(function($) {
    $(document).ready(function() {
        var button = $("button"),
             ul = $("<ul></ul>", {
                    "class": "list-group"
                });

        button.on("click", function(e){
            e.stopPropagation();
            $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
                ul.appendTo(".col-12.list")
                $.each(data, function(i, obj){
                    var user = "<b>Name:</b> " + obj.name + " <b>Username:</b> " + obj.username + " <b>Email:</b> " + obj.email + " <b>Phone:</b> " + obj.phone;
                        li = $("<li></li>", {
                        "html": user,
                        "class": "list-group-item"
                    });
                    li.appendTo("ul.list-group");
                });
            });
        })
    });
})(jQuery);