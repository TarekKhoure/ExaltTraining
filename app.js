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
const totalPages = 20;
function displayItems(page) {

    const ulTag = document.getElementById("ul-pagination");
    let liTag = '';
    let activeLi;
    let beforPages = page - 1;
    let afterPages = page + 1;

    if (page > 1) {   // if page > 1 then add new li that shows previous button
        liTag += `<li class="btn prev" onclick="displayItems(${page - 1})"><span><i class="fas fa-angle-left"></i>Prev</span></li>`;
    }

    if (page > 2) { // if page > 2 then add new li tag with 1 value
        liTag += `<li class="numb" onclick="displayItems(1)"><span>1</span></li>`;
        if (page > 3) { // if page > 3 then add new li tag with (...)
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    // how many pages or li show before the current Li
    if(page == pageLength){ // if page is equal to the totalPages then subtract 2 from beforPages
        beforPages = beforPages - 2;
    }else if(page == totalPages -1){ // if page is equal to the totalPages-1 then subtract 1 from beforPages
        beforPages = beforPages - 1;
    }

    // how many pages or li show after the current Li
    if(page == 1){ // if page is equal to 1 then add 2 to afterPages
        afterPages = afterPages + 2;
    }else if(page == 2){ // if page is equal to 2 then add 1 to afterPages
        afterPages = afterPages + 1;
    }

    for (let pageLength = beforPages; pageLength <= afterPages; pageLength++) {
        if (pageLength > totalPages) {
            continue;
        }

        if (pageLength == 0) { // if pageLength == 0 then add 1 to the pageLength value
            pageLength += 1;
        }

        if (pageLength == page) { // if the page value is equal to the pageLength then assign the active string in the active variable
            activeLi = "active";
        } else { // else leave empty to the active liVariable
            activeLi = "";
        }
        liTag += `<li class="numb ${activeLi}" onclick="displayItems(${pageLength})"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages - 1) { // if page < totalPages -1  then shown the last li or page which is 20
        if (page < totalPages - 2) { // if page < totalPages -2  then shown the show(...) befor last page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="displayItems(${totalPages})"><span>${totalPages}</span></li>`;

    }

    if (page < totalPages) {   // if page < totalpages then add new li that shows next button
        liTag += `<li class="btn next" onclick="displayItems(${page + 1})"><span><i class="fas fa-angle-right"></i>Next</span></li>`;
    }
    ulTag.innerHTML = liTag;
}

$(document).ready(function () {
    showLoader();

    $.get("https://jsonplaceholder.typicode.com/todos/", function (data, status) {
        hideLoader();

        let dataLength = data.length;
        let item_per_page = 20;

        for (let i = 0; i < 0; i++) {


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
            const item_id = $(e.currentTarget).attr('productId');
            location.href = "./item.html?" + item_id;
        });

        // Selecting required element
        displayItems(10);
    });
});