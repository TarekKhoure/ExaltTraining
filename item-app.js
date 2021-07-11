$(document).ready(function () {
    
     

const queryString = window.location.search;
const item_id = queryString.slice(1);
console.log(item_id);

    $.get("https://jsonplaceholder.typicode.com/todos/", function (data, status) {

            $(".row1").append(`<div class='item-container' productId=${data[item_id-1].id} id=item_${item_id}> \
            <div class = 'item-image-container'> \
            <div class= 'item-image'></div>\
            </div>\
            <p>★★★★☆</p> \
            <div class ='last-section' id='test_${item_id}'></div>\
            </div>`);


            $(".row1").append(`<iframe class="jason-frame" src="https://jsonplaceholder.typicode.com/todos/${item_id}"></iframe>`)
            
            $(".jason-frame").css({"width" : "100%","height":"100%"});
            var para = document.createElement("p");
            para.className = "description";
            var node = document.createTextNode(data[item_id-1].title);
            para.appendChild(node);
            const element = document.getElementById("test_" + item_id);
            element.appendChild(para);


            // create p element to fill id in
            const para1 = document.createElement("p");
            para1.className = "price";
            const node1 = document.createTextNode("Price: " + data[item_id-1].id + "$");
            para1.appendChild(node1);
            const element1 = document.getElementById(`test_${item_id}`);
            element1.appendChild(para1);
    
    });

});


