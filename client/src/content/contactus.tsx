import React,{useState}  from "react";
import '../App.css';
import axios from "axios";
const Contactus : React.FC = () =>{
    const [formData,setFormData] = useState
    ({
            name: "",
            email: "",
            message: ""
        });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmitButton = async (e:React.FormEvent)=>{
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData); // Update the URL if necessary
            alert("Thank you for contacting us!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an issue submitting the form. Please try again.");
        }
    }


    return(
        <div className="contact-us">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmitButton}>
                <label>Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                />
                </label>

                <label>Email:
                <input
                type="email"
                name="email"
                value = {formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
                required
                />
                </label>

                <label>
                    Message
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    style={{ resize: 'none' }}
                    rows={5}
                    required
                />
            <button type="submit">Submit</button>
            </form>
        </div>

    );
};
export default Contactus;