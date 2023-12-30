
function Footer(props){

    function clearBtn(){
        props.delete();
    }


    return(
        <div className="footerContainer">
            <div className="totalContainer">
                <p className="total">Total</p>
                <p className="totalRate">$2100.99</p>
            </div>
           <div className="footermid">
            <p className="clear" onClick={clearBtn}>Clear Cart</p>
           </div>
        </div>
    )
}
export default Footer