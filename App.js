import logo from './logo.svg';
import './App.css';
// import {Title} from "./Title.jsx";
// import ProductTab from "./ProductTab.jsx";
// import Msgbox from './Msgbox.jsx';
// import Button from './Button.jsx'; 
// import Counter from './Counter.jsx';
// import LikeBtn from './LikeBtn.jsx';
// import LudoBoard from './LudoBoard.jsx';
// import TodoList from './TodoList.jsx';
// import ImageFile from './ImageFile.jsx';
// import Lottery from './Lottery.jsx';
// import TicketNum from './TicketNum.jsx';
// import Ticket from './Ticket.jsx';
// import { sum } from './helper.js';
// import Form from './Form.jsx';
// import CommentForm from './CommentForm';
// import Joker from './Joker';
// import SearchBox from './SearchBox';
// import InfoBox from './InfoBox';
import { Info } from '@mui/icons-material';
import WeatherApp from './WeatherApp';
function App() {

  let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    // return ticket.every((num)=>num===ticket[0]);
    return ticket[0]===0;
  }
  
  return (
    <div>
      {/* <Msgbox userName="kesu" textColor="green"/>
      <Msgbox userName="kesu" textColor="orange"/> */}
      {/* <h2>Super deals</h2>
      <ProductTab/> */}
      
      {/* <Button/> */}
      
    {/* <Counter/> */}
    {/* <LikeBtn/> */}
    {/* <ImageFile/> 
    <TodoList/>  */}
    {/* <Form/> */}
    {/* <Lottery n={3} winCondition={winCondition}/>//winningSum={15} */}
    {/* <CommentForm/> */}
    {/* <Joker/> */}
    {/* <SearchBox/>
    <InfoBox/> */}
    <WeatherApp/>    
      
      
      

    </div>
  );
          
    
}

const mongoose=require("mongoose");

//connection
// mongoose.connect("mongodb://127.0.0.1:27017/cake0")
// .then(()=>console.log("mongodb connectes"))
// .catch((err)=>console.log("error",err));

//Schema
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  cake_order_type:{
    type:String,
    required:true,
    unique:true,
  },
  cake_order_name:{
    type:String,
    required:true,
    unique:true,
  },

})

const User=mongoose.model('cake',userSchema);

export default App;
