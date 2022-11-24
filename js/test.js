let allkey = []
function setJSON() {
  let names = document.querySelector('#recipient-name').value ;  
  let aboutPost = document.querySelector('#message-text').value ;  
  let img = document.querySelector('#img').value ;  

   let myobj = {
     username : names ,
     postText : aboutPost ,
     images : img 
    }

   if (names && aboutPost && img) {
    localStorage.setItem(myobj.postText , JSON.stringify(myobj)) ;
 
           for (let key of Object.entries(localStorage)) {
             let yangiPost = JSON.parse(localStorage.getItem(key[0])) 
             allkey.unshift(yangiPost)
           }
    
    let allPost = allkey.map( element =>{
      let post =  `
      <div class="cards">
      <button onclick="funk(event)" class="btn btn-danger del_btn"> delete post </button>
       <div class="head">
          <img src="./images/This-week-in-Marvel (1).png" class="user_img" alt="">
          <h6 class="user_name">${element.username}</h6>
       </div>
       <img src="${element.images}" class="post_img" alt="">
       <div class="post_footer">
          <div class="post_icon">
              <i class="fa-solid fa-heart like" onclick="like(event)"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-paper-plane"></i>
          </div>
              <h6 class="user_name">${element.username}</h6> say...
              <p class="post_data"> ${element.postText}</p>

      </div>
  
    </div>
      ` 
      return post
    } )

    let main = document.querySelector('.newPost')
    main.innerHTML = allPost.join('');

console.log(allkey);
   }
   else{
    alert("maydon to'ldirilmagan") ;
  
   }
    
}
old()

//  let [a , b] = "sdfjo"

function old() {

  for (let [key, value] of Object.entries(localStorage)) {
    let yangiPost = JSON.parse(localStorage.getItem(key)) 
    allkey.push(yangiPost)
  }

  let sa = allkey.map( element =>{
    let post =  `
    <div class="cards" >
    <button onclick="funk(event)" class="btn btn-danger del_btn"> delete post </button>
     <div class="head">
        <img src="./images/This-week-in-Marvel (1).png" class="user_img" alt="">
        <h6 class="user_name">${element.username}</h6>
     </div>
     <img src="${element.images}" class="post_img" alt="">
     <div class="post_footer">
        <div class="post_icon">
            <i class="fa-solid fa-heart like" onclick="like(event)"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
            <h6 class="user_name">${element.username}</h6> say...
            <p class="post_data"> ${element.postText}</p>

    </div>

  </div>
    ` 
    return post
  } )

  let main = document.querySelector('.newPost')
  main.innerHTML = sa.join('');
 
}





function funk(event) {
  let mykey = event.path[1].querySelector('.post_data').innerHTML ; 
  // localStorage.removeItem(`${mykey}`);
  event.path[1].remove();

  let i = localStorage.length;
  while (i-- > 0) {
      let key = localStorage.key(i);
      console.log(key);
          localStorage.removeItem(key);
  }

}

// let userIMG = document.querySelector('.admin')
// userIMG.setAttribute('src' , localStorage.getItem("userPhoto"))  

// function user() {
//  let inpUser = document.querySelector(".userPhoto")  ;
//  localStorage.setItem("userPhoto" , inpUser.value ) ;
//  userIMG.setAttribute('src' , inpUser.value)  
// }


alert("Siz bu site orqali o'z postlaringizni qoldishingiz mumkin Create Post + tugmasi orqali")













