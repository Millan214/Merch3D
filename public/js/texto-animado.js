const paths = document.querySelectorAll('#texto-svg-nueva-dimension path')

paths.forEach((element, i) => {
    element.style.strokeDasharray = `${element.getTotalLength()}`
    element.style.strokeDashoffset = `${element.getTotalLength()}`
    element.style.animation = `anim-text-dimension 2s ease forwards ${secsFormatter(i*5)}s`
});

function secsFormatter(n){
    return n/100
}