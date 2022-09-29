'use strict';

class Dashboard {
    constructor(sidebar, content){
        this.sidebar = sidebar;
        this.content = content;
    }

    render(a,b,c,d){
        //could probably find a way to scroll through the elements rather than doing this by force
        const aButton = document.createElement('button');
        aButton.textContent = a;
        aButton.setAttribute("class","");
        document.getElementById("sidebar").append(aButton);
        aButton.onclick = function(){
            document.getElementById("content").innerHTML = a;
            aButton.classList.add("active-btn");
            bButton.classList.remove("active-btn");
            cButton.classList.remove("active-btn");
            dButton.classList.remove("active-btn");
        };

        const bButton = document.createElement('button');
        bButton.textContent = b;
        bButton.setAttribute("class","");
        document.getElementById("sidebar").append(bButton);
        bButton.onclick = function(){
            document.getElementById("content").innerHTML = b;
            bButton.classList.add("active-btn");
            aButton.classList.remove("active-btn");
            cButton.classList.remove("active-btn");
            dButton.classList.remove("active-btn");
        };

        const cButton = document.createElement('button');
        cButton.textContent = c;
        cButton.setAttribute("class","");
        document.getElementById("sidebar").append(cButton);
        cButton.onclick = function(){
            document.getElementById("content").innerHTML = c;
            cButton.classList.add("active-btn");
            aButton.classList.remove("active-btn");
            bButton.classList.remove("active-btn");
            dButton.classList.remove("active-btn");
        }; 

        const dButton = document.createElement('button');
        dButton.textContent = d;
        document.getElementById("sidebar").append(dButton);
        dButton.onclick = function(){
            document.getElementById("content").innerHTML = d;
            dButton.classList.add("active-btn");
            aButton.classList.remove("active-btn");
            bButton.classList.remove("active-btn");
            cButton.classList.remove("active-btn");
        }; 

        document.getElementById("content").innerHTML = "Welcome to Dashboard!";



    }
}

var dashboard = new Dashboard('sidebar','content');