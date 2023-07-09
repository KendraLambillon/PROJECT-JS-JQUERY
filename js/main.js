$(document).ready(function(){

    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1250
    });

    //Posts
    var posts = [
        {
            title: 'Test of title 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet. Hic corrupti eius aut odit porro ut dignissimos optio cum nihil dolorum non vitae alias.'
        },
        {
            title: 'Test of title 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet. Hic corrupti eius aut odit porro ut dignissimos optio cum nihil dolorum non vitae alias.'
        },
        {
            title: 'Test of title 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet. Hic corrupti eius aut odit porro ut dignissimos optio cum nihil dolorum non vitae alias.'
        },
        {
            title: 'Test of title 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet. Hic corrupti eius aut odit porro ut dignissimos optio cum nihil dolorum non vitae alias.'
        }
    ];

    //Plantilla de Post
    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Read more</a>
            </article>
        `;

        $("#posts").append(post);
    });

    //Selector theme
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll up
    $(".up").click(function(e){
        e.preventDefault();

        $("html , body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Fake login
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    //Comprobar si form_name esta null
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<strong>Bienvenido/a, " + form_name +" </strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>"); //Ponemos un logout para volver a ver el formulario

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload(); //Se me actualiza la pagina. location --> me redirige al form de login
        });
    }


});


