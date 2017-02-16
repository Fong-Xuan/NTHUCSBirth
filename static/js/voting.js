var pageId = "1172773622757917";


window.fbAsyncInit = function() {
    FB.init({
        appId: '2138925566331857',
        xfbml: true,
        version: 'v2.8'
    });
    /*
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });*/
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI(response) {
    console.log('Welcome!  Fetching your information.... ');
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.acce;
    var user_name = "xx";
    var img_url = "oo";

    FB.api('/' + uid, function(response) {
        var user_name = response.name;
        var user_id = response.id;

        document.getElementById('user_name').innerHTML = user_name;
    });

    FB.api('/me/picture?width=120&height=120', function(response) {
        var img_url = response.data['url'];
        console.log(img_url);
        document.getElementById('user_photo').src = img_url;
        
        user_name = document.getElementById('user_name').innerHTML;
        img_url = document.getElementById('user_photo').src;
    });

    /* make the API call */
    FB.api(
        "/"+pageId+"/feed",
        function (response) {
            if (response && !response.error) {
                /* handle the result */
                var imgContainer = document.getElementById('imagesContainer');
                var row = document.createElement('div');
                var elements = response.data;
                var imageSrcs = new Array();
                var imgCount = 0;
                for(var i=0; i<elements.length; i++){
                    var post_id = elements[i].id;
                    var img_url = null;
                    FB.api('/'+post_id +"/attachments", function(response) {
                        var imgSrc = response.data[0].media.image.src;
                        if(imgSrc != null){
                            if(imgCount % 4 == 0) {
                                row = document.createElement('div');
                                row.className = "row popup-gallery";
                                imgContainer.appendChild(row); 
                            }

                            var element = document.createElement('div');
                            var tmpSrc = "http://placehold.it/750x450"
                            element.className = "col-md-3 portfolio-item ";
                            element.innerHTML = "<a href='" + imgSrc + "' > \
                                                <img class='img-responsive' src='"+imgSrc+"' alt=''> \
                                                </a>"
                            //console.log(element);
                            row.appendChild(element);
                            imgCount ++;

                        }
                        
                    });
                }

                console.log(imageSrcs.length);

                for(var i=0; i<imageSrcs.length; i++){
                }


                console.log(response);

                //imgContainer.appendChild(element);
            }
        }
    );
/*

            <div class="row">
                <div >
                    <a href="#">
                        <img class="img-responsive" src="http://placehold.it/750x450" alt="">
                    </a>
                </div>
                <div class="col-md-3 portfolio-item">
                    <a href="#">
                        <img class="img-responsive" src="http://placehold.it/750x450" alt="">
                    </a>
                </div>
                <div class="col-md-3 portfolio-item">
                    <a href="#">
                        <img class="img-responsive" src="http://placehold.it/750x450" alt="">
                    </a>
                </div>
                <div class="col-md-3 portfolio-item">
                    <a href="#">
                        <img class="img-responsive" src="http://placehold.it/750x450" alt="">
                    </a>
                </div>
            </div>

*/

}
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().

    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI(response);
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });



}