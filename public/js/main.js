
function connect() {
     
    easyrtc.setRoomOccupantListener(convertListToButtons);
    easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", 
        ["callerVideo"],
                    loginSuccess, loginFailure);
}


function convertListToButtons (roomName, data, isPrimary) {
    // easyrtc.joinRoom(roomName, roomParameters, successCB, failureCB)
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
function createRom(){
       onRoomCreate = function(appObj, creatorConnectionObj, roomNa = "Nilanjan", roomOptions, callback){
    pub.util.logDebug("["+appObj.getAppName()+"]" + (creatorConnectionObj?"["+creatorConnectionObj.getEasyrtcid()+"]":"") +  " Room ["+ roomNa +"] Running func 'onRoomCreate'");
    appObj.createRoom(roomNa, roomOptions, callback);
    easyrtc.joinRoom(roomNa, roomParameters, successCB, failureCB);

                  console.log("call the function");
                        };
                    }