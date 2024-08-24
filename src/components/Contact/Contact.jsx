import React from 'react';
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <main>
        <h1>Contact Us</h1>

        <form>
          <div className={styles.formContent}>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div className={styles.formContent}>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" />
          </div>    
          <div className={styles.formContent}> 
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact