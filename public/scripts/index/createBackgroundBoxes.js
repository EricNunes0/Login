const homeBackgroundDiv = document.querySelector("#home-background-div");

const boxes = [
    {
        "className": "box-1",
        "width": "80px",
        "height": "80px",
        "top": "60%",
        "left": "10%",
        "color": "#20d040",
        "delay": 0
    },
    {
        "className": "box-1",
        "width": "240px",
        "height": "240px",
        "top": "20%",
        "left": "35%",
        "color": "#00b020",
        "delay": 0.2
    },
    {
        "className": "box-1",
        "width": "200px",
        "height": "200px",
        "top": "70%",
        "left": "60%",
        "color": "#007030",
        "delay": 0.4
    },
    {
        "className": "box-1",
        "width": "160px",
        "height": "160px",
        "top": "45%",
        "left": "85%",
        "color": "#208020",
        "delay": 0.6
    },
    {
        "className": "box-1",
        "width": "120px",
        "height": "120px",
        "top": "5%",
        "left": "75%",
        "delay": 0.8
    },
    {
        "className": "box-1",
        "width": "60px",
        "height": "60px",
        "top": "15%",
        "left": "15%",
        "color": "#60d060",
        "delay": 0.9
    },
    {
        "className": "box-1",
        "width": "20px",
        "height": "20px",
        "top": "40%",
        "left": "5%",
        "color": "#80ff80",
        "delay": 1
    }
];

function createBox({className, width, height, top, left, color}) {
    const box = document.createElement("span");
    box.className = "background-boxes " + className;
    box.style.width = width;
    box.style.height = height;
    box.style.top = top;
    box.style.left = left;
    box.style.backgroundColor = color;
    return box;
};

boxes.forEach((box) => {
    let delay = box.delay
    if(!delay) delay = 0;
    setTimeout(function() {
        let addBox = createBox({className: box.className, width: box.width, height: box.height, top: box.top, left: box.left, color: box.color});
        homeBackgroundDiv.appendChild(addBox);
    }, delay * 1000);
});