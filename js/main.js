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
});


