import {React} from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const{userId, username, loading, logout} = useContext(AuthContext);
  useEffect(() => {
    console.log(userId);
  setUser(userId);        // update when userId changes
}, [userId, loading]);
  useEffect(()=>{
    if (loading) return;   // wait until user is loaded
    console.log(user, username);
    if(!user) return;
    axios.post("http://localhost:3000/orders", {user}).then((res)=>{
      setOrders(res.data);
      
    }).catch((err)=>{
      console.log(err.message);
    });
  },[user, loading]);

  const generalContext = useContext(GeneralContext);
  const handleModifyClick = (uid)=>{
    
    generalContext.openModifyWindow(uid);
  }

  const handleDeleteClick = (uid)=>{
    
    axios.delete(`http://localhost:3000/orderDelete/${uid}`);
  }
  const styles = {
    padding: "20px",
    
    border: "1px solid black",
    borderCollapse: "collapse",
    
  }
  return (
    <div className="orders">
      {orders.length <= 0 ? <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>: <div>
        <h4>Orders {orders.length}</h4>
        <table style={styles}>
          <th style={styles}>Name</th>
          <th style={styles}>Quantity</th>
          <th style={styles}>price</th>
          <th style={styles}>Mode</th>
        {orders.map((ele, index)=>{
          return(
            <tr style={styles} key={index}>
            
              <td style={styles}>{ele.name}</td>
              <td style={styles}>{ele.qty}</td>
              <td style={styles}>{ele.price}</td>
              <td style={styles}>{ele.Mode}</td>
              <td style={styles}><button className="btn-primary" onClick={()=>handleModifyClick(ele.name)} >Modify</button></td>
              <td style={styles}><button className="btn-danger" type="button" onClick={()=>handleDeleteClick(ele.name)} >Delete</button></td>
            </tr>
            
          )
        })}
        </table>
        </div>}
      
    </div>
  );
};

export default Orders;