function controlsButtonCreate({id, icon, text}) {
    const controlsDiv = document.querySelector("#controls-div");

    let out = `
    <div class = "controls-buttons-divs">
        <button type="button" class="controls-buttons" id = "${id}">
            <div class="controls-buttons-image-divs">
                <img class = "controls-buttons-images" src = "${icon}"></img>
            </div>
            <div class="controls-buttons-text-divs">
                <span class="controls-buttons-texts">${text}</span>
            </div>
        </button>
    </div>
    `;
    controlsDiv.innerHTML = controlsDiv.innerHTML + out;
};