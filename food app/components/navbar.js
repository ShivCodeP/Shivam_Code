function navbar() {
    return `                <div id="logo"><img src="./images/attachment_91090345-e1554476185637.jpeg" alt="website_logo"></div>
    <div id="options">
        <h3><a href="index.html">Home</a></h3>
        <h3><a href="search.html" id = "search_link">Search</a></h3>
        <div id="dropdown">
            <input type="text" id="search_food" placeholder="Search" />
            <button id="search_btn">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
              </button>
        </div>
        <div id="result_de"></div>
        <h3><a href="recipt.html">Recipt Of the day</a></h3>
        <h3><a href="latest.html">Latest</a></h3>
        <h3><a href="#">Login</a></h3>
    </div>`
        
}


export default navbar