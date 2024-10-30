// //scroll animation
// const onScroll = [].slice.call(document.querySelectorAll(".on-scroll"));

// function createObserver(el) {
//     let observer;

//     const options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5
//     };
//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(el);
// }

// function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//         let box = entry.target;
//         let visible = entry.intersectionRatio;
//         if (visible > 0) {
//             box.classList.add('in-viewport');
//         } else {
//             box.classList.remove('in-viewport');
//         }
//     });

// }

// const ScrollSetUp = (onScroll) => {
//     for (let i in onScroll) {
//         const el = onScroll[i];
//         createObserver(el);
//     }
// };
// ScrollSetUp(onScroll);

// function setup() {
//     ScrollSetUp(onScroll);

//     // document.querySelector('video').playbackRate = 1.25;

// }

// export default setup;
