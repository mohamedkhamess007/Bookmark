
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("basic-url");
// console.log(siteNameInput,siteUrlInput);

var allSite;
if (localStorage.getItem("sites") == null) {
    allSite = [];
} else {
    allSite = JSON.parse(localStorage.getItem("sites"));
    displayData();


}

function addWebsite() {
    var website = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
    };

    allSite.push(website);
    displayData();
    localStorage.setItem("sites", JSON.stringify(allSite));
    clearForm();

    console.log(allSite);




}
function displayData() {
    var cartona = "";
    for (var i = 0; i < allSite.length; i++) {
        cartona += `
                                <tr>
                            <td>${i}</td>
                            <td> ${allSite[i].name}</td>
                            <td>
                                <button class="btn btn-success"
                                
                                 onclick=" visitSits(${i})">
                                    <i class="fa-solid fa-eye"></i>
                                    Visit</button>
                            </td>
                            <td>
                             
                                <button class="btn btn-danger"
                                  onclick="deleteSite(${i})"
                                >
                                    <i class="fa-solid fa-trash-can"></i>
                                    Delete

                                </button>
                            </td>
                        </tr>`;
    }

    document.getElementById("rowWeb").innerHTML = cartona;

}
function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}
function deleteSite(index) {

    allSite.splice(index, 1);
    displayData();
    localStorage.setItem("sites", JSON.stringify(allSite));
}
function visitSits(index) {

    window.open(allSite[index].url, "_blank");



}
// ================== allValidation ===================


function allValidation(element, msgId) {
    var msg = document.getElementById(msgId)
    var regex = {
        siteName: /^[A-Z][a-z]{3,8}$/,
                siteUrl:
                   /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/ ,
    }


            if(regex[element.id].test(element.value) == true) {

                element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        msg.classList.add('d-none')
        return true;

    }else{
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        msg.classList.remove('d-none')

        return false;

    }
}



// let k ="khaled";
// for (let i = 0; i<k.length; i++) {
//     console.log(k[i]);
    
// }