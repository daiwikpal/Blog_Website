//import "myStyle.css"


// array of blog objects
const blog_array = [ {
    id: 1,
    heading: "My First Blog",
    link: "articleOne.html",
    date: "2020-01-01",
    image: "images/arduino.jpeg",
    imageAlt: "this is the image alt",
    content: "This is a blog post!"

}, 

{
    id: 2,
    heading: "My Second Blog",
    link: "articleTwo.html",
    date: "2020-01-02",
    image: "images/default.jpeg",
    imageAlt: "this is the image alt",
    content: "This is my second blog post. It is a good one."
}, 

{    
    id: 3,          
    heading: "My Third Blog",
    link: "articleThree.html",
    date: "2020-01-03",
    image: "images/default.jpeg",
    imageAlt: "this is the image alt",
    content: "This is my third blog post. It is a good one."
}, 

{ 
    id: 4,
    heading: "My Fourth Blog",
    link: "articleFour.html",
    date: "2020-01-04",
    image: "images/arduino.jpeg",
    imageAlt: "this is the image alt",
    content: "This is my fourth blog post. It is a good one."
}, 

{
    id: 5,
    heading: "My Fifth Blog",
    link: "articleFive.html",
    date: "2020-01-05",
    image: "images/default.jpeg",
    imageAlt: "this is the image alt",
    content: "This is my fifth blog post. It is a good one."
}, 
{
    id:6, 
    heading: "My Sixth Blog",
    link: "articleFive.html",
    date: "2020-01-05",
    image: "images/default.jpeg",
    imageAlt: "this is the image alt",
    content: "This is my sixth blog post. It is a good one."
},
]; 








let htmlCodeLeftColumn = ``;
let htmlCodeRightColumn = ``;

createColumnHTML(blog_array);

const leftColumn = document.querySelector(".leftcolumn");
const rightColumn = document.querySelector(".middlecolumn");
leftColumn.innerHTML = htmlCodeRightColumn;
rightColumn.innerHTML = htmlCodeLeftColumn;


/**
 * This method creates the HTML code for the left and right columns when given an array of blog objects.
 * @param {*} sorted_array 
 */
function createColumnHTML (sorted_array){ 
    for(let i = 0; i < sorted_array.length; i++) {
        if(i % 2 != 0) {
            htmlCodeLeftColumn += //add the html code for buttons  
            ` <div class="card">
                <h2> <a href=${sorted_array[i].link}> ${sorted_array[i].heading} </a> </h2>
                <h5>${sorted_array[i].date}</h5>
                <img class = "center img_radius" alt=${sorted_array[i].imageAlt} src=${sorted_array[i].image} style = "width:100%;">
                <p></p>
                <p> ${sorted_array[i].content} </p>
             </div>`; 
          
        } else 
        {
            htmlCodeRightColumn += 
            `<div class="card">
              <h2> <a href=${sorted_array[i].link}> ${sorted_array[i].heading} </a></h2>
                <h5>${sorted_array[i].date}</h5>
                <img class = "center img_radius" alt= ${sorted_array[i].imageAlt} src=${sorted_array[i].image} style = "width:100%;">
                <p></p>
                <p> ${sorted_array[i].content} </p>
            </div>`; 
            
        }
    } 
}



