
        let num = '';

        function funct1() {
            num = eval(num);
            document.querySelector('.js-ans').innerHTML = num;
        }

        function funct2(numb) {
            document.querySelector('.js-ans').innerHTML = `${numb}`;
        }

        function funct3() {
            document.querySelector('.js-ans').innerHTML = '';
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                funct1();
            }
            if(event.key==='1') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='2') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='3') {
                num += event.key;
                funct2(num);
            }
           if(event.key==='+') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='4') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='5') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='6') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='/') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='7') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='8') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='9') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='0') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='-') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='.') {
                num += event.key;
                funct2(num);
            }
            if(event.key==='*') {
                num += event.key;
                funct2(num);
            }
        });

        // Add click event listeners for the buttons
        const buttonIds = [
            "btn1", "btn2", "btn3", "btnPlus", "btn4", "btn5", "btn6", "btnMinus",
            "btn7", "btn8", "btn9", "btnMultiply", "btn0", "btnDot", "btnDivide","btnEqual","btnClear"
        ];

        buttonIds.forEach((id) => {
            const button = document.getElementById(id);
            button.addEventListener("click", function () {
                if (id === "btnClear") {
                    console.log("cleared");
                    num = '';
                    funct3();
                } else if(id==="btnEqual"){
                    funct1();

                }else{
                    num += button.textContent;
                    funct2(num);
                }
            });
        });
  