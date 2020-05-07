
function connect() {
    easyrtc.setRoomOccupantListener(convertListToButtons);
    easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", 
        ["callerVideo"],
                    loginSuccess, loginFailure);
        
    };

    function convertListToButtons (roomName, data, isPrimary) {
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
    
    function performCall() {
        const partneridfield = document.getElementById("partneridfield");
        const partnerid=partneridfield.value;
        easyrtc.hangupAll();
    
        var successCB = function() {};
        var failureCB = function() {};
        easyrtc.call(partnerid, successCB, failureCB);
    }

    function loginSuccess(easyrtcid) {
        window.selfid = easyrtcid;
        document.getElementById("virid").innerHTML = easyrtc.cleanId(easyrtcid);
        easyrtc.showError("none", "Successfully connected");
    }
    

    function loginFailure(errorCode, message) {
        easyrtc.showError(errorCode, message);
    }