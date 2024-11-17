import React from "react";
import '../App.css';
const TermsAndCondition : React.FC = () =>{
    return(
        <div className="random-container">
            <h1>Terms and Conditions</h1>

            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to <strong>BlogSpace</strong> ("we", "our", "us"). These Terms and Conditions
                    ("Terms") govern your use of our website and services. By accessing or using our website, you agree
                    to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use
                    our website.</p>
            </section>

            <section>
                <h2>2. Use of Our Website</h2>
                <p>You are granted a non-exclusive, non-transferable, revocable license to access and use our website
                    solely for personal or business purposes in accordance with these Terms. You agree not to:</p>
                <ul>
                    <li>Use our website for any unlawful purpose or in violation of any applicable local, state, or
                        international laws.
                    </li>
                    <li>Upload, post, or transmit any harmful content (including malware, viruses, or any other harmful
                        files).
                    </li>
                    <li>Use any automated tools to collect data from our website without our permission.</li>
                </ul>
            </section>

            <section>
                <h2>3. Account Registration</h2>
                <p>In order to access certain features or services on our website, you may be required to register an
                    account. When creating an account, you agree to:</p>
                <ul>
                    <li>Provide accurate, current, and complete information.</li>
                    <li>Maintain the confidentiality of your account credentials.</li>
                    <li>Notify us immediately of any unauthorized use of your account.</li>
                </ul>
                <p>You are responsible for all activities under your account, whether authorized or unauthorized.</p>
            </section>

            <section>
                <h2>4. Privacy Policy</h2>
                <p>Your use of our website is also governed by our <a href="/privacypolicy">Privacy Policy</a>. Please
                    refer to our Privacy Policy for information on how we collect, use, and protect your personal
                    information.</p>
            </section>

            <section>
                <h2>5. Payment Terms (If applicable)</h2>
                <p>If you make any purchases or subscribe to services through our website, you agree to provide accurate
                    payment information and authorize us to charge the specified amount. All payments are non-refundable
                    unless stated otherwise in our Refund Policy.</p>
            </section>

            <section>
                <h2>6. Intellectual Property</h2>
                <p>All content on our website, including but not limited to text, images, videos, logos, and software,
                    is owned by or licensed to us and is protected by intellectual property laws. You may not use,
                    reproduce, or distribute any content without our prior written permission.</p>
            </section>

            <section>
                <h2>7. Disclaimers and Limitation of Liability</h2>
                <p>We strive to ensure the accuracy of the information on our website, but we do not guarantee that the
                    website will always be free of errors or uninterrupted. Your use of our website is at your own
                    risk.</p>
                <p>To the fullest extent permitted by law, we disclaim all warranties, express or implied, regarding the
                    website, and we are not liable for any damages resulting from the use or inability to use the
                    website, including any indirect, incidental, or consequential damages.</p>
            </section>

            <section>
                <h2>8. Termination</h2>
                <p>We reserve the right to suspend or terminate your access to the website at any time, without notice,
                    if you violate any of these Terms or engage in any activity that may harm us, other users, or our
                    website.</p>
            </section>

            <section>
                <h2>9. Governing Law</h2>
                <p>These Terms are governed by and construed in accordance with the laws of <strong>Ontario</strong>. Any disputes will be resolved in the courts located in <strong>Ontario</strong>, and you agree to submit to their jurisdiction.</p>
            </section>

            <section>
                <h2>10. Changes to Terms</h2>
                <p>We may update these Terms from time to time. We will notify you of any material changes by posting
                    the new Terms on this page with an updated date. You are encouraged to review these Terms
                    periodically. Your continued use of the website after any changes to the Terms constitutes your
                    acceptance of those changes.</p>
            </section>

            <section>
                <h2>11. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:contactus@blogspace.com">contactus@blogspace.com</a></p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Random Street, Oshawa, ON, 12345</p>
            </section>
        </div>
    );
};

export default TermsAndCondition;