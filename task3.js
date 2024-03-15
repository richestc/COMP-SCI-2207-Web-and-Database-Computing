//section 3.1
function mouse_pass_counter(){
    var count = document.getElementById('mcount').innerText;
    count++;
    document.getElementById('mcount').innerText = count;
}   

//section 3.2
function post_time_content(){

    var text_box = document.getElementsByTagName('textarea')[0].value;

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

    postsDiv.appendChild(postTimeElement);
    postsDiv.appendChild(document.createElement('br'));
    postsDiv.appendChild(postContentElement);
    postsDiv.appendChild(document.createElement('br'));
}
