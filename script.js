
let loadbtn=document.getElementById('load');
let page=1;
function display(arr)
{
    
if (!arr || !arr.results || arr.results.length === 0) {
        main.innerHTML = '<p>No results found.</p>';
        return;
    }
let page=1;
arr.results.map((data)=>{
let newElement=document.createElement('div');
newElement.setAttribute('class','card');
newElement.innerHTML=` <div class="userdet">
                    <img src="${data.user.profile_image.large}" alt="user profile pic" id="userimg">
                    <h4>${data.user.username}</h4>
                </div>
                <div class="searchimg">
                    <img src="${data.urls.regular}" alt="nike shoes" id="searchimg">
                    
                </div>
                <div class="description">
                    <p id="des">${data.alt_description}</p>
                </div>`;
                document.getElementById('lower').appendChild(newElement);
                
});

}
let access_key="926ZF26TGNFSSMS8i92DjMmxeiIX7fDgHQBORCrj7N8";
let searchitem=document.getElementById('username')
document.getElementById('search').addEventListener('click',()=>{
    document.getElementById('lower').innerHTML='';
   page=1;
     let val=searchitem.value;
    if(val==="")
        {
            alert("enter something to search");
        }
    else{
    fetchdata(val);}
    loadbtn.style.display="block";

   
})
loadbtn.addEventListener('click',()=>{
    val=searchitem.value;
    page++;
    console.log(page);
    fetchdata(val);
})
async function fetchdata(item)

{   try{
    
    let response=await fetch(`https://api.unsplash.com/search/photos?query=${item}&client_id=926ZF26TGNFSSMS8i92DjMmxeiIX7fDgHQBORCrj7N8&page=${page}`);
    let data=await response.json();
    display(data);}
    catch(error)
    {
        console.log(error);
    }
}
