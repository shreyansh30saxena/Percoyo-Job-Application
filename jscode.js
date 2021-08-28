function validate() {

    let alphabetExpression = /^[A-Za-z]+$/;
    let emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mobExpression = /^\d{10}$/;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mob = document.getElementById('phone').value;

    if (!(name.match(alphabetExpression))) {

        alert("Name can only have alphabets");
    }
    if (!(email.match(emailExpression))) {

        alert("Invalid Email Addres");
    }
    if (!(mob.match(mobExpression))) {

        alert("Invalid mobile number");
    } else {
        alert("Name : " + name + "\r\n" + "Email : " + email + "\r\n" + "Mobile : " + mob);
    }

}



var i = 2;

function slidechange() {

    if (i == 1) {

        let nextidtext2 = "",
            previdtext2 = "";
        let prevslidenumber2 = i + 2;
        nextidtext2 = 'slide' + i;
        previdtext2 = 'slide' + prevslidenumber2;
        let Nextslide2 = document.getElementById(nextidtext2);
        let Prevslide2 = document.getElementById(previdtext2);

        Nextslide2.style.display = "block";
        Prevslide2.style.display = "none";
        i++;

    } else {

        let nextidtext = "",
            previdtext = "";
        let prevslidenumber = i - 1;
        nextidtext = 'slide' + i;
        previdtext = 'slide' + prevslidenumber;
        console.log(nextidtext);
        console.log(previdtext);
        let Nextslide = document.getElementById(nextidtext);
        let Prevslide = document.getElementById(previdtext);
        Nextslide.style.display = "block";
        Prevslide.style.display = "none";
        i++;
    }

    if (i > 3) {
        i = 1;
    }

}
