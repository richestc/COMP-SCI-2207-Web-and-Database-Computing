//section 3.1
function mouse_pass_counter(){
    var count = document.getElementById('mcount').innerText;
    count++;
    document.getElementById('mcount').innerText = count;
}   

//section 3.2
function post_time_content(){

    var text_box = document.getElementsByTagName('textarea')[0].value;

    //section 3.4
    var postQuantity = document.querySelector('input[name="quantity"]').value;

    var colour = ''; // Variable to store the selected color

    // Check which color is selected
    if(document.getElementsByName("color")[0].checked == true){
        colour = 'blue';
    } 
    else if(document.getElementsByName("color")[1].checked == true){
        colour = 'red';
    }
    else{
        colour = 'grey';
    }
    
    for(var i=0;i<postQuantity;i++){

        // Create elements for post time and content
        var postTimeElement = document.createElement('div');
        postTimeElement.classList.add('post-time'); // Adding class for post time
        postTimeElement.style.fontWeight = 'bold'; // Styling as bold
        postTimeElement.style.color = 'grey'; // Styling color as grey
        postTimeElement.textContent = new Date();


        var postContentElement = document.createElement('div');
        postContentElement.classList.add('post-content'); // Adding class for post content
        postContentElement.textContent = text_box;

        // Append the elements to the posts div
        var postsDiv = document.getElementById('posts');

        // Apply color only to the new post (3.4)
        if(colour != ''){
            postContentElement.style.color = colour;
        }

        // Apply selected style to post content (3.6)
        var selectedStyle = document.querySelectorAll('input[name="style"]:checked');
        for (var j = 0; j < selectedStyle.length; j++) {
            if (selectedStyle[j].value === 'bold') {
                postContentElement.style.fontWeight = 'bold';
            } else if (selectedStyle[j].value === 'italic') {
                postContentElement.style.fontStyle = 'italic';
            }
        }
        

        postsDiv.appendChild(postTimeElement);
        postsDiv.appendChild(document.createElement('br'));
        postsDiv.appendChild(postContentElement);
        postsDiv.appendChild(document.createElement('br'));

    }
}

//section 3.3
function menu_hide_button(){
    var mainDiv = document.getElementById('main');
    var menuDiv = document.getElementById('menu');

    if(menuDiv.style.display === 'none'){
        // Menu div is currently hidden, so show it and hide the main div
        mainDiv.style.display = 'none';
        menuDiv.style.display = 'block';
    }
    else{
        // Menu div is currently visible, so hide it and show the main div
        mainDiv.style.display = 'block';
        menuDiv.style.display = 'none';
    }
}

//section 3.5
function background_colour(){
    var background = document.getElementById('background_colour').value; //Colour user enters
    document.body.style.backgroundColor = background; //Makes background colour to user input
}

//section 3.6
function posts_slider() {
    var postQuantity = document.querySelector('input[name="visible"]').value;
    var posts = document.querySelectorAll('.post-time, .post-content, br');
    
    // Hide all posts
    posts.forEach(function(post) {
        post.style.display = 'none';
    });

    // Show only the specified number of posts
    for (var i = 0; i < postQuantity * 4; i++) { // Each post has 4 elements (post-time, br, post-content, br)
        if (posts[i]) {
            posts[i].style.display = 'block';
        }
    }
}

