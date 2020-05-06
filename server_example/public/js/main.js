function connect() {
    easyrtc.setRoomOccupantListener(convertListToButtons);
    easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", 
        ["callerVideo1"],
                    loginSuccess, loginFailure);
}

function convertListToButtons (roomName, data, isPrimary) {
    var otherClientDiv = document.getElementById('otherClients');
    otherClientDiv.innerHTML = "";
    for(var easyrtcid in data) {
        var button = document.createElement('button');

        button.onclick = function(easyrtcid) {
            return function() {
                performCall(easyrtcid);
            };
        }(easyrtcid);

        var label = document.createTextNode(easyrtcid);
        button.appendChild(label);
        otherClientDiv.appendChild(button);
    }
}

function performCall(otherEasyrtcid) {
    var successCB = function() {};
    var failureCB = function() {};
    easyrtc.call(otherEasyrtcid, successCB, failureCB);
}

function loginSuccess(easyrtcid) {
    easyrtc.showError("none", "Successfully connected");
}

function loginFailure(errorCode, message) {
    easyrtc.showError(errorCode, message);
}
