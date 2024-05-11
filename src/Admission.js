import React, { useEffect } from "react";
import './Admission.css'
import Footer from "./Footer";

function Admission() {
useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz-K1nyNBzTjrS-S5e6xBVa1AXF-JtlDblzRmD2UxQQU1wjZPFD3eMfhi1aVyetUjuJ/exec';
    const form = document.forms['Rising_kids'];
    const loadingSpinner = document.getElementById("loading-spinner");

    const handleSubmit = (e) => {
        e.preventDefault();

        loadingSpinner.classList.remove("hidden");

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => response.json())
            .then(result => {
                loadingSpinner.classList.add("hidden");
                document.getElementById("success-message").classList.remove("hidden");
                setTimeout(() => {
                    document.getElementById("success-message").classList.add("hidden");
                }, 3000);
            })
            .catch(error => {
                loadingSpinner.classList.add("hidden");
                document.getElementById("error-message").classList.remove("hidden");
                setTimeout(() => {
                    document.getElementById("error-message").classList.add("hidden");
                }, 3000);
            });

        form.reset();
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
        form.removeEventListener('submit', handleSubmit);
    };
}, []);
return (
    <div className="Admission">
        <div className="content-section">
            <div className="text-section">
                <h1>Admissions at Rising Kids</h1>
                <p>We dare to dream of a scholastic realm where each young mind is not merely acknowledged, but celebrated for its distinct brilliance. In our sanctuary of learning, we embark on a journey of inclusivity and nurturing, where every child finds solace in being exactly who they are, and is propelled towards the zenith of their capabilities.</p>

                <div classname="table">

<table>

<thead>
      <tr>
        <th>classList</th>
        <th>From</th>
        <th>To</th>
      </tr>
    </thead>
<tbody>
<tr className="light-bg">
<td>Pre Nursery</td>
<td> 18 months</td>
<td>3 years</td>
</tr>
<tr>
<td >Nursery</td>
<td>3 years</td>
<td>4 years</td>
</tr>
<tr className="light-bg">
<td>LKG</td>
<td>4 years</td>
<td>5 years</td>
</tr>
<tr >
<td>UKG</td>
<td>5 years</td>
<td>6 years</td>
</tr>

</tbody>
</table>
</div>

        </div>
            
            <div className="form-section">
                <form name="Rising_kids" method="post">
                    <input type="text" name="student_name" placeholder="Student Name" required />
                    <input type="text" name="parent_name" placeholder="Parent's Name" required />
                    <input type="email" name="email" placeholder="EMAIL ID" required />
                    <input type="mobille" name="mobile" placeholder="MOBILE NUMBER" required />
                    <input type="date" name="date" required />
                    <select name="subject_of_interest" required>
                        <option style={{color: '#000'}} value="">Select Class</option>
                        <option className="select-background"  value="Math" required>Pre Nursery</option>
                        <option className="select-background" value="Science" required>Nursery</option>
                        <option className="select-background" value="Language" required>LKG</option>
                        <option className="select-background" value="Arts" required>UKG</option>
                    </select>
                    <input type="text" name="message" placeholder="How Can We Help You" required />
                    <button type="submit">Submit</button>
                </form>
                <div id="error-message" className="message hidden error-message">Pleace check the internet and  to submit the details. Thank you!.</div>
                <div id="success-message" className="message hidden success-message">Your message has been sent. Thank you!</div>
                <div id="loading-spinner" className="hidden">
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                </div>

            </div>
        </div>


        <Footer />
    

    </div>
)
};

export default Admission;  
