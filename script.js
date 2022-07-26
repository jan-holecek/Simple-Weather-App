const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", e => {
    const cityName = document.querySelector("input").value;
    e.preventDefault();
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const { main, name, weather, wind } = data;

        const li = document.createElement("li");
        li.classList.add("card");

        const date = new Date();
        const dd = String(date.getDate());
        const mm = String(date.getMonth() + 1);
        const yyyy = date.getFullYear();

        const cards = [];

        const schema = `
            <article class="max-w-sm mx-auto mt-5 bg-white rounded shadow cards">
                <section class="flex items-center justify-center mr-10">
                    <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weather[0].icon}.png" alt="Weather widget">
                    <p class="font-bold text-5xl ml-1 text-black">
                    ${Math.round(main.temp)}°C
                    </p>
                </section>
                <p class="mt-1 text-xl text-gray-700 font-medium text-center">${name}</p>
                <p class="text-sm text-center text-gray-600">${dd}.${mm} ${yyyy}</p>
                <section class="mt-5 py-3 px-2 flex justify-around text-gray-700 bg-blue-300">
                    <p class="wind flex items-center">${wind.speed}m/s</p>
                    <p class="humidity flex items-center">${main.humidity}%</p>
                    <p class="pressure flex items-center">${main.pressure}</p>
                </section>
            </article>
        `;

        li.innerHTML = schema;
        ul.appendChild(li);
        cards.push(name.toLowerCase());
    }).catch(() => {
        alert("Zadej platný název města!");
    })

    form.reset();
    input.focus();
});

