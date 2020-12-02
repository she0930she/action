//window.alert("this is js!!")
const textarea = document.getElementById("textarea")
const btn_textarea = document.getElementById("btn_textarea")

function submitClick() {
    window.alert("btn_textarea is working")
    const firebaseRef = firebase.database().ref()
    firebaseRef.child("text").set("some value")
}