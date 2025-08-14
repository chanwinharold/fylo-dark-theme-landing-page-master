import "../styles/Form.css"
import {useState} from "react";

function Form() {
    const [isValid, setIsValid] = useState(true)
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
        setIsValid(
            regex.test(value)
        )
    }

    return (
        <section className="form-wrapper">
            <h3>Get early access today</h3>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.</p>

            <form noValidate={true} onSubmit={handleSubmit} className="form-container">
                <label className={isValid ? "" : "error"}><input value={value} onChange={(e) => setValue(e.target.value)} type="email" required={true} placeholder="email@example.com"/></label>
                <button className="btn-main">Get Started For Free</button>
            </form>
        </section>
    );
}

export default Form;