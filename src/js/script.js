window.onload = function () {
    fetch('res/json/posts.json')
    //fetch('https://api.npoint.io/fc55a1a94be81c147f11')
        .then((response) => response.json())
        .then(json => {
            console.log(json)
            for (let i = 0; i < json.length; i++) {
                const post = json[i]
                const postDiv = document.createElement('div')
                const imgElement = document.createElement('img')
                const bodyElement = document.createElement('p')

                const postHeaderDiv = document.createElement('div')
                const postHeaderImg = document.createElement('img')
                const postHeaderP = document.createElement('p')
                postHeaderDiv.className="postheader"

                const postFooterDiv = document.createElement('div')
                const postFooterImg = document.createElement('img')
                postFooterDiv.className="postfooter"

                postHeaderImg.src = 'res/img/noprofilepic.jpg'
                postHeaderImg.alt = 'Image'
                postHeaderImg.width = '40'
                postHeaderImg.height = '40'
                postHeaderDiv.appendChild(postHeaderImg)
                postHeaderP.innerText = post.date
                postHeaderDiv.appendChild(postHeaderP)
                postDiv.appendChild(postHeaderDiv)

                bodyElement.innerText = post.body;

                if (post.img !== '') {
                    imgElement.src = post.img
                    imgElement.alt = 'Image'
                    imgElement.style.width = '100%'
                    imgElement.style.height = 'auto'
                    postDiv.appendChild(imgElement)
                }

                postDiv.appendChild(bodyElement);
                postDiv.className="post";

                postFooterImg.src = 'res/img/like.png'
                postFooterImg.alt = 'Image'
                postFooterImg.width = '50'
                postFooterImg.height = '40'
                postFooterDiv.appendChild(postFooterImg)
                postDiv.appendChild(postFooterDiv)

                document.querySelector(".posts").appendChild(postDiv)
            }
        })
        .catch(err => console.error('Error', err))
}