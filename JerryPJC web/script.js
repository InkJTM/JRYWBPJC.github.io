    const text1 = "Hi, I'm Yeri";
    const text2 = "Welcome to my web";

    let index1 = 0;
    let index2 = 0;

    function typing1() {
        if (index1 < text1.length) {
            document.getElementById('text1').innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(typing1, 100);
        } else {
            setTimeout(typing2, 500);
        }
    }

    function typing2() {
        if (index2 < text2.length) {
            document.getElementById('text2').innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(typing2, 100);
        } else{
            document.getElementById('myButton').style.display = 'block';
        }
    }

    typing1();