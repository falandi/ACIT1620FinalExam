
function createdarkMode() {
    togglebutton = document.getElementsByClassName("toggle").addEventListener("click", e=>){
        document.getElementsByClassName("light-theme").classList.remove("light-theme")
        document.getElementsByClassName("dark-mode").classList.add("dark-mode")

    }
}

function contactsubmit(submitbutton)
    submitbutton = document.getElementById("frm-btm").addEventListener("click", e=>){
        for (let i = 0; i < contactusinfo.length; i++)
