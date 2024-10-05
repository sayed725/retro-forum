const LoadAllPost = async(category)=>{

// console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
const data = await res.json()
displayAllPost(data.posts);
}


const displayAllPost=(posts)=>{

}

LoadAllPost()

const handleSearchByCategory=()=>{
    const searchText = document.getElementById('searchPosts').value ; 
    LoadAllPost(searchText)
}