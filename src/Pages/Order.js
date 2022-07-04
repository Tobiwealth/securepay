import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Order.css';

function Order () {
	const [result, setResult] = useState('');
	const navigate = useNavigate();

	const onSubmit = () => {
		fetch('https://fraudit.herokuapp.com/validate_order')
		    .then(response=> response.json())
		    .then(data =>{
		    	setResult(data);
		    })
    	if(result === "APPROVE"){
    		return(navigate("/accept"));
    	}else{
    		return(navigate("/reject"));
    	}
	}
	
  
	return (
		<div className='order_container'>
			<h1>Customer's Information</h1>
			<a href="https://www.google.com/search?q=my+ip+address" target="_blank" rel="noopener noreferrer" >
			    <button className='form-btn reduce'>Get your IP Address</button>
			</a>
			<form action="http://fraudit.herokuapp.com/validate_order" onSubmit={onSubmit}  className='first form'>
			    <div>
			        <label htmlFor="ip">IP Address</label>
			        <input type="text" name="ip" placeholder="IP Address" id="ipaddress" />
			    </div>
			    <div>
			    	<label htmlFor="name">First Name</label>
			    	<input type="text" name="billing_firstName" placeholder="John" id="firstname" />
			    </div>
			    <div>
			    	<label htmlFor="name">Last Name</label>
			    	<input type="text" name="billing_lastName" placeholder="Doe" id="lastname" />
			    </div>
			    <div>
			    	<label htmlFor="email">Email</label>
			    	<input type="email" name="billing_email" placeholder="Johndoe@gmail.com" id="email" />
			    </div>
			    <div>
			    	<label className='phone' htmlFor="phonenumber">Phone Number</label>
			    	<input type="tel" name="billing_phone" placeholder="+234" id="phonenumber" />
			    </div>
			    <div>
			    	<label htmlFor="address">Address</label>
			    	<input type="text" name="billing_address" placeholder="Home Address" id="address" />
			    </div>
			    <div>
			    	<label htmlFor="city">City</label>
			    	<input type="text" name="billing_city" placeholder="city" id="city" />
			    </div>
			    <div>
			    	<label htmlFor="city">State</label>
			    	<input type="text" name="billing_state" placeholder="state" id="state" />
			    </div>
			    <div>
			    	<label htmlFor="address">Zip Code</label>
			    	<input type="text" name="billing_postcode" placeholder="zip code" id="zip code" />
			    </div>
			    <div>
			    	<label htmlFor="country">Country</label>
			    	<input type="text" name="billing_country" placeholder="country" id="country" />
			    </div>
			     <div>
			    	<label htmlFor="address">Shipping Address</label>
			    	<input type="text" name="shipping_address" placeholder="Home Address" id="address" />
			    </div>
			    <div>
			    	<label htmlFor="city">Shipping City</label>
			    	<input type="text" name="shipping_city" placeholder="city" id="city" />
			    </div>
			    <div>
			    	<label htmlFor="city">Shipping State</label>
			    	<input type="text" name="shipping_state" placeholder="state" id="state" />
			    </div>
			    <div>
			    	<label htmlFor="address">Shipping Zip Code</label>
			    	<input type="text" name="shipping_postcode" placeholder="zip code" id="zip code" />
			    </div>
			    <div>
			    	<label htmlFor="country">Shipping Country</label>
			    	<input type="text" name="shipping_country" placeholder="country" id="country" />
			    </div>
			    <div>
			    	<label htmlFor="cardnumber">Card 12 digit pin</label>
			    	<input type="text" name="card_number" placeholder="xxxxxxxxxxx" id="cardnumber" />
			    </div>
			    <div>
			    	<label htmlFor="bankname">CVV</label>
			    	<input type="text" name="cvv" placeholder="cvv" id="cvv" />
		        </div>
			    <div>
			    	<label htmlFor="orderid">Order ID</label>
			    	<input type="text" name="order_id" placeholder="ID number" id="orderid" />
			    </div>
			    <div>
			    	<label htmlFor="currency">Currency</label>
			    	<input type="text" name="currency" placeholder="USD" id="currency" />
			    </div>
			    <div>
			    	<label htmlFor="amount">Amount</label>
			    	<input type="text" name="amount" placeholder="1234" id="amount" />
		        </div>
			    <div>
			    	<label htmlFor="quantity">Quantity</label>
			    	<input type="text" name="quantity" placeholder="Quantity bought" id="quantity" />
			    </div>
			    <div>
			    	<label htmlFor="pay">Payment Mehod</label>
			    	<select name="paymentMethod" id="pay">
			    		<option name='creditcard' value="creditcard">Credit Card</option>
			    		<option name='paypal' value="paypal">Paypal</option>
			    		<option name='bitcoin' value="bitcoin">Bitcoin</option>
			    		<option name='amazonpay' value="amazonpay">Amazon Pay</option>
			    		<option name='giftcard' value="giftcard">Gift Card</option>
			    	</select>
		        </div>
		        <div className='form__btn-wrapper'>
				    <button type="submit" className='form-btn'>Verify Information</button>
			    </div>    
		    </form>
		</div>
	);
    
}

export default Order;