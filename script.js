let einstienRequest = new XMLHttpRequest();
einstienRequest.onreadystatechange = function() {
    if  (this.readyState == 4 && this.status == 200){
        let obj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = obj.name;
        if (this.readyState == 4 && this.status == 200){
            let obj2 = JSON.parse(this.responseText);
            document.getElementById("date").innerHTML = obj2.birthday;
        }
    }

} 
einstienRequest.open("GET", "einstein.json", true);
einstienRequest.send();

function showBio() {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        let eBio = JSON.parse(this.responseText);
        document.getElementById("bio").innerHTML = eBio.bio;
    }
   
}

newRequest.open("GET","einstein.json",true);
newRequest.send();
}