
// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '924749257062-k138l5dmt7gglko7reoknedfogd8eng3.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];


var images = new Array();

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
    console.log("checkAuth");
    gapi.auth.authorize(
        {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
        }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        loadDriveApi();
    } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
    }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
    gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        handleAuthResult);
    return false;
}


/**
 * Load Drive API client library.
 */
function loadDriveApi() {
    //gapi.client.load('drive', 'v3', listFiles);
    gapi.client.load('drive', 'v2', retrieveAllFilesInFolder);
}


/**
 * Print files.
 */
/**
 * Retrieve a list of files belonging to a folder.
 *
 * @param {String} folderId ID of the folder to retrieve files from.
 * @param {Function} callback Function to call when the request is complete.
 *
 */
function retrieveAllFilesInFolder() {
    var folderId = "0B5AhwVQHXDENUl9fWkttMG1pcms";
    var callback = yes();
    console.log(gapi);

    var retrievePageOfChildren = function(request, result) {
        request.execute(function(resp) {
            result = result.concat(resp.items);
            for (var i = 0; i < result.length; i++) {
                var r = result[i];
                if(i == 0){
                    console.log(r)
                }
                images.push('https://drive.google.com/uc?id=' + r.id);
                appendImage('https://drive.google.com/uc?id=' + r.id);
            }
            
            var nextPageToken = resp.nextPageToken;
            if (nextPageToken) {
            request = gapi.client.drive.children.list({
                'folderId' : folderId,
                'pageToken': nextPageToken,
            });
            retrievePageOfChildren(request, result);
            } else {
                console.log('qq');
            }
        });
    }
    var initialRequest = gapi.client.drive.children.list({
        'folderId' : folderId
    });
    retrievePageOfChildren(initialRequest, []);
}
/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendImages(index) {
    var container = document.getElementById('photoContainer');
    var from = index * 20;
    var end = from + 20;
    var row = document.createElement('DIV');
    row.class = "row";
    for(var i = from; i < end; i++){
        if(i % 4 == 0){
            var row = document.createElement('DIV');
            row.class = "row";
        }
        var col = document.createElement('DIV');
        col.class = "col-md-3 portfolio-item";
        var img = document.createElement('img');
        img.src = images[i];
        img.class="img-responsive";
        col.appendChild(img);
        row.appendChild(col);

    }
}
      function appendImage(src) {
        var pre = document.getElementById('imageList');
		var img = document.createElement('img');
		img.src = src;
		var li = document.createElement('il');	
		li.appendChild(img);
	

        pre.appendChild(li);
      }



        /*<div class="row">
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
            <div class="col-md-3 portfolio-item">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/750x450" alt="">
                </a>
            </div>
        </div>
        <!-- /.row -->*/