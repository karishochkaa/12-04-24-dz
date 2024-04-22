const header = function() {
    return `
    <header>
    <div class="logo">
        <a href=""><img src="logo.png" alt=""></a>
    </div>
    <div class="menu">
    <nav>
        <ul>
            <li><a href="">Electric Skateboards</a></li>
            <li><a href="">Electric Scooters</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Gift Card</a></li>
            <li><a href="">More Info</a></li>
        </ul>
    </nav>
    </div>
    <div class="icons">
        <a href=""><img src="user.png" alt=""></a>
        <a href=""><img src="cart.png" alt=""></a>
    </div>
</header>
    `
}

const conteiner = document.querySelector(".offer")
conteiner.insertAdjacentHTML('beforebegin', header())