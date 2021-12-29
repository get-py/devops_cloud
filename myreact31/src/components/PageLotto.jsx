import { useState } from "react";

function makeLottoNumbers() {
    
    const randomIndexArray = []
    for (let i=0; i<7; i++) {
        const randomNum = Math.floor(Math.random() * 45)
        if (randomNum != 0)
            if (randomIndexArray.indexOf(randomNum) === -1) {
                randomIndexArray.push(randomNum)
            } else {
                i--
            }
        else {
            i--
        }
    }

    randomIndexArray.sort(function(a, b) {
        return a - b;
      });

    return randomIndexArray;
}


function PageLotto() {
    const [lotto, setLotto] = useState([]);
    const produceNumber = () => setLotto(makeLottoNumbers());

    // const handleClick = () => {
    //     // e.preventDefault();
    //     console.log(`clicked`)
    // };
    
    // const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);
        


   

    return (
        <div style={{
            display: "inline-block",
            margin: "1rem",

        }}>

            <h2>Lotto</h2>

            <div style={{cursor: 'pointer'}}
                onClick={produceNumber}>
                <button>예지</button>

               
            </div>

            {lotto.map((number, index) => 
                    {return(
                    <div>{number}</div>)})}

            
        </div>
    );    
}


export default PageLotto;