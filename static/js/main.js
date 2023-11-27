$.ajaxSetup(
    {
        beforeSend: function beforeSend(xhr,settings){
            function getCookie(name){
                let cookieValue=null;

                if(document.cookie && document.cookie !==''){
                    const cookies =document.cookie.split(';')
                    for(let i =0; cookies.length; i+=1){
                        const cookie= jQuery.trim(cookies[i]);

                        if(cookie.substring(0,name.length+1)===(`${name}=`)){
                            cookieValue= decodeURIComponent(cookie.substring(name.length+1));
                            break;
                        }
                    }
                }
                return cookieValue;
            }

            if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
  
                xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
        }
    }
    }
)


$(document).on("click", ".js-toggle-modal", function(e){
    e.preventDefault()
    console.log("clicked")
    $(".js-modal").toggleClass("hidden")
})

.on("click", ".js-submit",function(e){
    e.preventDefault();
    const text = $(".js-post-text").val().trim()

    if(!text.length){
        return false
    }
    $(".js-modal").addClass("hidden")
    $(".js-post-text").val('')
    
    $btn.prop("disabled", true).text("Posting!")
    $.ajax({
        type: 'POST',
        url: $(".js-post-text").data("post-url"),
        data: {
            text: text
        },
        success: (dataHtml) => {
            $(".js-modal").addClass("hidden");
            $("#posts-container").prepend(dataHtml);
            $btn.prop("disabled", false).text("New Post");
            $(".js-post-text").val('')
        },
        error: (error) => {
            console.warn(error)
            $btn.prop("disabled", false).text("Error");
        }
    });
})