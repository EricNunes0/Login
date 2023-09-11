function radioValidate(inputName) {
    let radioCheck = document.querySelector(`input[name="${inputName}"]:checked`) ? true : false;
    console.log("radioCheck", radioCheck);
    return radioCheck;
};