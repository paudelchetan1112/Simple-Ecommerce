// Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, theme }) => {
   
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`min-h-screen p-6 ${theme === "Dark" ? "text-black bg-white" : "text-white bg-gray-900"}`}>
      <div className="text-sm mb-4 cursor-pointer text-blue-500" onClick={() => navigate("/product")}>← Back to Products</div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {
        cartItems.length === 0 ? (
          <p className="text-red-400">No items in cart.</p>
        ) : (
          <>
            <ul className="mb-6 divide-y divide-gray-300">
              {cartItems.map(item => (
                <li key={item.id} className="py-4 flex justify-between">
                  <div className="flex gap-3 items-center">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.quantity} pcs</p>
                    </div>
                  </div>
                  <span className="text-green-400 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="text-right mb-4">
              <h3 className="text-lg font-semibold">Total: <span className="text-green-400">${totalPrice.toFixed(2)}</span></h3>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label htmlFor="payment" className="block mb-1 font-medium">Choose Payment Method:</label>
              <select id="payment" className="text-black p-2 rounded w-full max-w-xs">
                <option value="esewa">eSewa</option>
                <option value="khalti">Khalti</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <div className="text-center">
              <button className="bg-green-600 px-6 py-2 text-white rounded hover:bg-green-700 transition-all">
                Proceed to Pay
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Cart;