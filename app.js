console.log("JS Loaded");

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const update = () => {

        count += target / 100;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText =
            target.toLocaleString() + "+";

        }

    };

    update();

});
