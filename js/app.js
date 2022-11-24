
function like(event) {
  
    if (  event.target.style.color == "red") {
        event.target.style.color = "black"
    } else {
        event.target.style.color = "red"
    }


// console.log("event");
}


fetch('/js/data.json')
  .then(response => response.json())
  .then(post)
  
  function post(response) {
    let json = document.querySelector('.json')
 let data =  response.map( (value )=>{
        
   let post =  `
      <div class="cards" >
      <button onclick="funk(event)" class="btn btn-danger del_btn"> delete post </button>

       <div class="head">
          <img src="./images/This-week-in-Marvel (1).png" class="user_img" alt="">
          <h6 class="user_name">${value.username}</h6>
       </div>
       <img src="${value.postimg}" class="post_img" alt="">
       <div class="post_footer">
          <div class="post_icon">
              <i class="fa-solid fa-heart like" onclick="like(event)"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-paper-plane"></i>
          </div>
              <h6 class="user_name">${value.username}</h6> say...
              <p class="post_data"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia distinctio suscipit nulla inventore, enim provident natus magnam voluptatem itaque iure hic, vitae aliquid soluta deleniti veritatis dolorum saepe consectetur.</p>
         
      </div>

    </div>
      `

      return post
    })
    
    json.innerHTML = data.join(' ')
  }


