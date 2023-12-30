import { useState } from "react"

function Cards(props){

    let[Counter,setCounter] = useState(0)
    function increaseBtn(){
        props.increase();
        setCounter(Counter+1);
    }
    
    function decreaseBtn(e){
        if(Counter<1){
            setCounter(0);
        }else{
            setCounter(Counter-1)
            props.decrease(e);
        }
      
    }


    return(
        <div className="cardsContainer">
            <div className="leftSide">
                <img className="image" src={props.image} alt="Phone.img" />
            </div>
            <div className="leftSideContent">
                    <p className="bold">{props.name}</p>
                    <p className="light">{props.rupees}</p>
                    <p className="remove">remove</p>
                    
                </div>
                <div className="btnContainer">
                <button onClick={decreaseBtn}>-</button>
                        <p>{Counter}</p>
                        <button onClick={increaseBtn}>+</button>

                    </div>
        </div>
    );
}
export default Cards