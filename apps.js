//დავალება #1


let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)





//დავალება #2


//საერთოდ ვერაფერი გავიგე,ძაან ავირიე,თქვენი კოდიც რომ გადმოვაკოპირე მაინც არ იმუშავა. ინდექსიდან ღილაკების წაშლისას ფოტოებს არ ხსნიდა,
//overflow-x რომ წავშალე თქვენი კოდიდან მაინც ცვლილება არაფერი ქონდა და ცემს კოდში უცნაურად იმუშავა,ბოდიში მაგრამ ვერ გავაკეთე ვერანაირად ეს დავალება.

