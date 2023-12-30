import Cards from "./Cards";
import Footer from "./Footer";
function Main(props){

    function increaseFn(){
        // console.log("up");
        props.data("increase")
      }

      function decreaseFn(){
        props.data("decrease")
      }

    return(
        <div className="mainContainer">
            <div className="content">
            <p className="big">YOUR BAG</p>
            <div className="allCards">
                <Cards image="https://www.course-api.com/images/cart/phone-1.png" name="Samsung Galaxy S8" rupees="$399.99" increase={increaseFn} decrease={decreaseFn}/>

                <Cards image="https://www.course-api.com/images/cart/phone-2.png" name="Google Pixel" rupees="$499.99" increase={increaseFn} decrease={decreaseFn}/>

                <Cards image="https://www.course-api.com/images/cart/phone-3.png" name="Xiaomi Redmi Note 2" rupees="$699.99" increase={increaseFn} decrease={decreaseFn}/>

                <Cards image="https://www.course-api.com/images/cart/phone-4.png" name="Samsung Galaxy S7" rupees="$599.99" increase={increaseFn} decrease={decreaseFn}/>

                <Footer />
                
            </div>
            </div>
        </div>
    );
}
export default Main