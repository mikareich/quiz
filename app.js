// load questions
const questionLoader = (async function() {
  return await (await fetch("./assets/questions/level1.json")).json();
})();

let questionIndex = 0;
const progressBarSpan = document.querySelector("div.bar");

// start quiz
questionLoader.then(questions => {
  timer(10000).then(x => console.log("yay"));
});

function timer(timeout) {
  return new Promise(resolve => {
    let passedTime = 0;
    let progress = () => `${(passedTime / timeout) * 100}%`;
    const interval = window.setInterval(function() {
      passedTime += 10;
      progressBarSpan.style.cssText = "--width:" + progress()
      console.log(progressBarSpan)
      if (passedTime >= timeout) {
        resolve();
        clearInterval(interval);
      }
    }, 10);
  });
}
