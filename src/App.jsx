import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
// import Carts from './Components/Cart/Carts'
import RecipesCards from './Components/Recipes/RecipesCards'
import RecipesHeader from './Components/Recipes/RecipesHeader'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CurrentCookingCart from './Components/Cart/CurrentCookingCart'
import Footer from './Components/Footer/Footer'

function App() {
  const [carts , setCarts] = useState([]);
  const handleCart = (recipe) =>{
    // console.log("add cart",recipe);
    const newCart = [...carts ,recipe]
    const allCartsExist = carts.find(c => c.recipe_id == recipe.recipe_id);
    if(!allCartsExist){
      setCarts(newCart);
      toast.success("Recipie added successfully!");
    }else{
      toast.warn("Allready selected!!");
    }
  }

  const [currentCart , setCurrentCart] = useState([])
  const handleCurrentCart = (cart,recipe_id) =>{
    // console.log('current Cart',cart)
    const removeCart = carts.filter(cart =>cart.recipe_id !== recipe_id)
    // console.log(removeCart)
    const newCart = [...currentCart ,cart]
    setCurrentCart(newCart);
    toast.success("Preparing your food!");
    setCarts(removeCart);
  }
  // console.log(currentCart);
  
  // console.log(carts);

  return (
    <>
      <div className='max-w-[1400px] mx-auto mb-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipesHeader></RecipesHeader>
      <div className='flex flex-col lg:flex-row justify-between'>
      <RecipesCards handleCart={handleCart}></RecipesCards>
      <div className='border-2 border-[#28282833] rounded-xl'>
      <div className="p-[32px]">
            <h1 className="text-center text-[24px] font-bold mb-[16px]">Want to cook: {carts.length}</h1>
            <hr />
            <div className="text-center flex justify-between lg:gap-[100px] text-[#878787] mt-[24px] font-bold">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p></p>
            </div>
            
        </div>

              {
                carts.map(cart => <Cart key={cart.id} cart={cart}
                  handleCurrentCart={handleCurrentCart}></Cart>)
              }
              <div className="p-[32px]">
            <h1 className="text-center text-[24px] font-bold mb-[16px]">Currently cooking: {currentCart.length}</h1>
            <hr />
            <div className="flex justify-between lg:gap-[100px] text-[#878787] mt-[24px] font-bold">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p></p>
            </div>
            
        </div>
        {
                  currentCart.map((current,idx) => <CurrentCookingCart key={idx} current={current}></CurrentCookingCart>)
                }
               
             
      </div>

      </div>
      
      <ToastContainer />
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
