/*
 * showLoader to display loader when page is still loading and hideLoader 
 * to hide loader when page is ready
 */
function showLoader() {
    $('.loader').css('display', 'flex')
}

function hideLoader() {
    $('.loader').hide();
}


$(document).ready(function () {
    showLoader();

    $.get("https://jsonplaceholder.typicode.com/todos/", function (data, status) {
        hideLoader();
        let dataLength = data.length;

        for (let i = 0; i < 20; i++) {


            $(".row1").append(`<div class='item-container' productId=${data[i].id} id=item_${i}> \
            <div class = 'item-image-container'> \
            <div class= 'item-image'></div>\
            </div>\
            <p style=" grid-row: 2;">★★★★☆</p> \
            <div class ='last-section' id='test_${i}'></div>\
            </div>`);

            var para = document.createElement("p");
            para.className = "description";
            var node = document.createTextNode(data[i].title);
            para.appendChild(node);
            const element = document.getElementById("test_" + i);
            element.appendChild(para);


            // create p element to fill id in
            const para1 = document.createElement("p");
            para1.className = "price";
            const node1 = document.createTextNode("Price: " + data[i].id + "$");
            para1.appendChild(node1);
            const element1 = document.getElementById(`test_${i}`);
            element1.appendChild(para1);
        }

        $(".item-container").on("click", function (e) {
            // console.log($(e.currentTarget).attr('productId'));
            const item_id = $(e.currentTarget).attr('productId');
            location.href = "./item.html?"+item_id;
            // location.assign("https://jsonplaceholder.typicode.com/todos/" + $(e.currentTarget).attr('productId'));
        });
    });

});


