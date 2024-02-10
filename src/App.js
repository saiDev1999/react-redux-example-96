import logo from './logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { blockTicket, buyTicket } from './redux/actions';
import { profileDetails } from './redux/profile/action';
import HomeScreen from './screens/home-screen';

function App() {
  // const {totalTickets,filledTickets,blockTickets,unfilledTickets} =useSelector((state)=>state)
    const profileDetails=useSelector(state=>state.profile)
    console.log(profileDetails)

  const dispatch=useDispatch()
  const buyTicketFunction=()=>{
    dispatch(blockTicket(1))

  }

  const fillDetails=()=>{
    dispatch(profileDetails({
      name:"sai",
      salary:1000
    }))
  }
  return (

      <HomeScreen/>

  );
}

export default App;
