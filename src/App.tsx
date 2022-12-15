import { Products } from "./components/shared/Products"
import './style/index.css'
import './style/reset.css'
import productImage from "./assets/img-2.jpg"



function App() {
  return (
    <div className="App">
      {/* <Products image=""/> */}
      <Products title="Morbi habitasse felis nulla arcu, morbi ultricies."/>
      <Products description="Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod molestie proin sed in commodo purus sit sed
        sagittis etiam amet at tortor, enim commodo, arcu pretium lorem eu. Tellus diam egestas diam amet fermentum arcu, sed."/>
      <Products price={14.50}/>
    </div>
  )
}

export default App
