import { useState } from "react";
import "./Pages.css"
type FormData = { 
    name: string; 
    email: string; 
    message: string; 
}; 
const Contact: React.FC = () => { 
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: ""});
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => { 
        const { name, value } = e.target; 
        setFormData((prev) => ({ ...prev, [name]: value })); 
    }; 
    const handleSubmit = () => { 
        alert("Form submitted!");
        console.log("Form submitted:", formData); // You can add validation or API call here 
    };

    return (
        <>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <label >Name:</label>
                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    <label >Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <label >Message:</label>
                    <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
