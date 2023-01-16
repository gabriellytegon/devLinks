function mode(){
    const body = document.body;

    body.classList.toggle('ligth');

    const img = document.querySelector('#profile img');

    if (body.classList.contains('ligth')){
        img.setAttribute("src", "./images/profile_ligth.png");
    } else{
        img.setAttribute("src", "./images/profile.png");
    }
}