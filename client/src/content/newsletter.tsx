import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Newsletter: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phonenumber: "",
        receiveemails: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
         {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };


    const handleSubmitButton = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await axios.post('/api/newsletter',formData);
            alert("Thank you for subscribing to our newsletter");
            setFormData({name:"",email:"",phonenumber:"",receiveemails:""});
        }
        catch (error){
            console.error("Error submitting form:", error);
            alert("There was an issue submitting the form. Please try again.");
        }
    };

    return (
        <div className="newsletter">
            <h1>Subscribe to Newsletter</h1>
            <form onSubmit={handleSubmitButton}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label>
                    Phone Number
                    <input
                        type="number"
                        value={formData.phonenumber}
                        name="phonenumber"
                        onChange={handleChange}
                        placeholder="Enter your Phone Number"
                        required
                    />
                </label>
                <label>
                    Do you want to receive emails from us?
                    <br/>
                    <label>
                        Yes
                        <input
                            type="radio"
                            name="receiveemails"
                            value="yes" // Specific value for this option
                            checked={formData.receiveemails === "yes"} // Dynamically checked
                            onChange={handleChange} // Handle updates to state
                        />

                    </label>
                    <label>
                        No
                        <input
                            type="radio"
                            name="receiveemails"
                            value="no" // Specific value for this option
                            checked={formData.receiveemails === "no"} // Dynamically checked
                            onChange={handleChange} // Handle updates to state
                        />

                    </label>
                </label>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
