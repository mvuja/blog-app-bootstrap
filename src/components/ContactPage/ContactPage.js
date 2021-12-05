import React from "react";
import './contact-page.modules.css'

const Hero = () => {

    return (
        <main id="contact">
            <h1>CONTACT PAGE</h1>
            <form>
                <input type="text" placeholder="Name" name='name' />
                <input type="text" placeholder="Last Name" name='last name' />
                <input type="email" placeholder="E-mail" name='E-mail' />
                <textarea placeholder="Message" name='message' rows="10"></textarea>
            </form>
        </main>
    )
}


export default Hero