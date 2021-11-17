import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Transaction = () => {


    const [usertransaction, setusertransaction] = useState({
        card_number: "",
        exp_month: "",
        exp_year: "",
        cvc: "",
        name: "",
        address_line1: "",
        address_city: "",
        address_state: "",
        address_country_code: "",
        address_zip: "",
        amount: "",
        currency: "",
        description: ""

    });
   
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setusertransaction({ ...usertransaction, [name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(usertransaction);

        Axios.post(` `, usertransaction)
            .then((result) => {
                console.log(result);

            })
    }

    return (
    <div className="Backgr">
        <form action="" onSubmit={handleSubmit} className="">
            <div className="container">
                <div className="row row1 mb-5">
                    <div className="col-md-4">
                        <h2>Payments</h2>
                    </div>
                    <div className="col-md-8 bg-light p-5">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="card_number">card_number</label>
                                <input type="text" className="form-control"
                                    value={usertransaction.card_number}
                                    onChange={handleInput}
                                    name="card_number" placeholder="16 digit number of card" />

                            </div>
                            <div className="col-md-12">
                                <label htmlFor="exp_month">exp_month</label>
                                <input type="text" className="form-control"
                                    value={usertransaction.exp_month}
                                    onChange={handleInput}
                                    name="exp_month" placeholder="expiry date of card in numbers" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="exp_year">exp_year</label>
                                <input type="exp_year" className="form-control"
                                    value={usertransaction.exp_year}
                                    onChange={handleInput}
                                    name="exp_year" placeholder="expiry year of card" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cvc">cvc</label>
                                <input type="text" className="form-control"
                                    value={usertransaction.cvc}
                                    onChange={handleInput}
                                    name="cvc" placeholder="3 digit cvc number of card" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control"
                                    value={usertransaction.name}
                                    onChange={handleInput}
                                    name="name" placeholder="Customer Name" />
                            </div>


                            <div className="col-md-6">
                                <label htmlFor="address_line1">address_line1</label>
                                <input type="text" className="form-control"
                                    value={usertransaction.address_line1}
                                    onChange={handleInput}
                                    name="address_line1" placeholder="Customer Address" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Api_url">address_cvc</label>
                                <input type="tel" className="form-control"
                                    value={usertransaction.api_url}
                                    onChange={handleInput}
                                    name="api_url" placeholder="Customer City" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Api_secret">address_state</label>
                                <input type="tel" className="form-control"
                                    value={usertransaction.api_secret}
                                    onChange={handleInput}
                                    name="api_secret" placeholder="Customer State/Province" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Api_password">address_country_code</label>
                                <input type="tel" className="form-control"
                                    value={usertransaction.api_password}
                                    onChange={handleInput}
                                    name="api_password" placeholder="" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="address_zip">address_zip</label>
                                <input type="tel" className="form-control"
                                    value={usertransaction.address_zip}
                                    onChange={handleInput}
                                    name="address_zip" placeholder="Customer ZIP/PIN" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="amount">amount</label>
                                <input type="number" className="form-control"
                                    value={usertransaction.amount}
                                    onChange={handleInput}
                                    name="amount" placeholder="amount" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="amount">amount</label>
                                <input type="number" className="form-control"
                                    value={usertransaction.amount}
                                    onChange={handleInput}
                                    name="amount" placeholder="Amount that you want to charge" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="currency">currency</label>
                                <input type="number" className="form-control"
                                    value={usertransaction.currency}
                                    onChange={handleInput}
                                    name="currency" placeholder="" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="description">description</label>
                                <input type="number" className="form-control"
                                    value={usertransaction.description}
                                    onChange={handleInput}
                                    name="description" placeholder="Something about the transaction" />

                            </div>
                            <div className="col-md-6">
                                <button type="submit" className="  btn btn-success">Pay</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </form>

</div>

    );
}


export default Transaction;