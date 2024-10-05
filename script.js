const LoadAllPost = async(category)=>{

// console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
const data = await res.json()
displayAllPost(data.posts);
}


const displayAllPost=(posts)=>{
    document.getElementById('post-container').innerHTML="";
    const postContainer = document.getElementById('post-container')
    posts.forEach(post => {
        const div = document.createElement('div')
        div.innerHTML= `
         <div class="p-6 lg:p-12 flex gap-6 lg:flex-grow flex-col lg:flex-row items-center lg:items-start bg-[#f3f3f5] rounded-3xl">
            <div class="indicator">
              <span class="indicator-item badge ${post.isActive?"bg-green-600":"bg-red-500"}"></span>
              <div class="avatar">
                <div class="w-24 rounded-xl">
                  <img src=${post.image} />
                </div>

              </div>
            </div>
            <div class="space-y-4 w-full">
              <div class="flex gap-4 opacity-70">
                <p>#category</p>
                <p>${post.author.name}</p>
              </div>
              <h3 class="text-2xl font-bold opacity-70">
                ${post.title}
              </h3>
              <p class="opacity-40">
                ${post.description}
              </p>
              <hr class="border border-dashed border-gray-300">
              <div class="flex justify-between font-bold opacity-45">
                <div>${post.comment_count} </div>
                <div>${post.view_count}</div>
                <div>${post.posted_time}</div>
                <div class="opacity-100">
                  <button id="addToList" onclick= "markAsRead('${post.description}' ,  '${post.view_count}')"  class="addToList btn btn-circle bg-green-700 btn-sm">
                    <i class="fa-solid fa-envelope-open text-white"></i>
                  </button>

                </div>

              </div>

            </div>
          </div>
        
        `
        postContainer.appendChild(div);
        
    });

}

const markAsRead=(description,view_count)=>{
const markAsReadContainer = document.getElementById('markAsReadContainer')
const div = document.createElement('div')
div.innerHTML=`
<div class="flex justify-between p-2 lg:p-3 bg-white rounded-2xl items-center gap-3">
                <div class="lg:w-4/5 w-11/12">
                  <p>${description}</p>
                </div>
                <div class="lg:w-1/5 w-4/12 flex justify-end">
                  <p><i class="fa-regular fa-eye"></i> <span>${view_count}</span></p>

                </div>
`
markAsReadContainer.appendChild(div);

      handleCount()
}

const handleCount = ()=>{
const preCount = document.getElementById('markAsReadCounter').innerText
const convert = parseInt(preCount)
const sum = convert + 1;
document.getElementById('markAsReadCounter').innerText=sum;

}

LoadAllPost()

const handleSearchByCategory=()=>{
    const searchText = document.getElementById('searchPosts').value ; 
    LoadAllPost(searchText)
}