/* Fill your code*/

class Blog{
    constuctor(title,detail){
        this.title=title
        this.detail=detail
    }
    addImage(){
        var image = document.createElement("img");
        image.src="./assets/java card image.svg";
        document.getElementById("flashcard").appendChild(image);
    }
        addTitle(){
            var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
       document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    
        }
        addDescription(){
            var desc_card = document.createElement('p');
        desc_card.setAttribute("id","blog-description");
        document.getElementById('card-text').appendChild(desc_card);
        desc_card.innerHTML += this.detail;
    }
    


}
var addbtn = document.getElementById("addBlog");


var popup = document.getElementById("popupContact");
addbtn.addEventListener("click", function (){
    popup.style.display="block";
});


var closebtn = document.getElementById("close");
closebtn.addEventListener("click", function (){
    popup.style.display="none";
})


let postbtn = document.getElementById("post");
postbtn.addEventListener("click", function (){
    let gettitle = document.getElementById("title").value;
    let getdetail = document.getElementById("detail").value;
    let content = new Blog(gettitle,getdetail);
    content.addTitle();
    content.addDescription();
    content.addImage();
    popup.style.display="none";
});
    



