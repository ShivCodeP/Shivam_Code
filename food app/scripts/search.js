
    var timerid;

    var container = document.getElementById("navbar");

    var search_box = document.getElementById("dropdown");
    
    var search_dropdown = document.getElementById("search_link");
    console.log(search_dropdown)
    
    search_dropdown.addEventListener("mouseover",function () {
    
      // console.log("working")
      showdropDown();
    
    });
    function showdropDown() {
      
      search_box.style.visibility = "visible";
    }
    
    container.addEventListener("mouseleave",function () {
    
    hidedropdown();
    })
    
    function hidedropdown() {
     search_box.style.visibility = "hidden";
    
    }


    let input_data = document.getElementById("search_food");

    input_data.addEventListener("input", debounce(main,1000));

    function debounce(func, time) {

        //    lets talk about A 
        // func = main() 
        if (timerid) {
            clearTimeout(timerid);
        }


        timerid = setTimeout(function () {

            func();
        }, time)

    }

    async function main() {
        let food = document.getElementById("search_food").value;
        console.log(food);

        let data = await searchFood(food);

        console.log(data);
    }

    async function searchFood(food) {

        try {
            let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
            let meal = await data.json();
            // console.log(meal)

            return meal;

        }
        catch (err) {
            console.log(err);
        }

    }


