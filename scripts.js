// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function() {

    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const backGround = document.getElementById("shuttleBackground");
    const altitude = document.getElementById("spaceShuttleHeight");
    const width = document.getElementById("spaceShuttleWidth");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");

    const lleft = document.getElementById("left");
    const rright = document.getElementById("right");
    const uup = document.getElementById("up");
    const ddown = document.getElementById("down");


    const rock = document.getElementById('rocket');

    rock.style.position = "absolute";
    rock.style.bottom = '0px';
    rock.style.left = "100px";

    takeOff.addEventListener('click', function() {
       // takeOff.style.backgroundColor = "red";
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerText = "Shuttle in flight.";
            backGround.style.backgroundColor = "blue";
            altitude.innerText = "10,0000";
        }

     });
    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        backGround.style.backgroundColor = "green";
        altitude.innerText = "0";

    });
    
    abort.addEventListener("click", function(){
        if(window.confirm("Are you sure you want to abort the mission?")){
            flightStatus.innerText = "Mission aborted.";
            backGround.style.backgroundColor = "green";
            altitude.innerText = "0";
        }
    });


        lleft.addEventListener('click', function(){
            rock.style.left = parseInt(rock.style.left) - 10 + 'px';
        });
        
        rright.addEventListener('click', function(){
            rock.style.left = parseInt(rock.style.left) + 10 + 'px';
        });

        uup.addEventListener('click', function(){
            rock.style.bottom = parseInt(rock.style.bottom) + 10 + 'px';
            altitude.innerText = parseInt(altitude.innerText) + 10000;
        });

        ddown.addEventListener('click', function(){
            rock.style.bottom = parseInt(rock.style.bottom) - 10 + 'px';
            altitude.innerText = parseInt(altitude.innerText) - 10000;
        });



});
