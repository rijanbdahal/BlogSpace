import React from "react";
import '../App.css';
const PrivacyPolicy : React.FC = () =>{
    return(
        <div className="random-container">
            <h1>Privacy Policy</h1>

            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to <strong>BlogSpace</strong> ("we", "our", "us"). We are committed to protecting
                    and respecting your privacy. This Privacy Policy explains how we collect, use, and share your
                    personal data when you visit our website or use our services.</p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <p>We collect the following types of personal information when you use our website or services:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Information such as your name, email address, phone
                        number, etc., provided by you when you sign up or interact with our forms.
                    </li>
                    <li><strong>Usage Data:</strong> Information such as your IP address, browser type, operating
                        system, referring pages, and browsing behavior collected automatically when you visit our
                        website.
                    </li>
                    <li><strong>Cookies:</strong> We may use cookies to enhance user experience and track activity on
                        our website. For more information, see our Cookie Policy.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li>To provide, maintain, and improve our website and services.</li>
                    <li>To communicate with you, including sending newsletters, promotions, and other updates.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                    <li>To analyze usage trends and improve the functionality of our website.</li>
                </ul>
            </section>

            <section>
                <h2>4. How We Share Your Information</h2>
                <p>We do not sell, rent, or lease your personal data to third parties. However, we may share your
                    personal information with the following parties:</p>
                <ul>
                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors who
                        provide services to us, such as hosting, analytics, or email marketing.
                    </li>
                    <li><strong>Legal Requirements:</strong> We may disclose your personal information if required to do
                        so by law or in response to valid requests by public authorities.
                    </li>
                    <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale,
                        your personal data may be transferred as part of the transaction.
                    </li>
                </ul>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>We take reasonable precautions to protect your personal data from unauthorized access, use, or
                    disclosure. However, no method of transmission over the internet or electronic storage is 100%
                    secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
                <h2>6. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                    <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                    <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete data we
                        hold about you.
                    </li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal data under certain
                        conditions.
                    </li>
                    <li><strong>Opt-out:</strong> You can opt-out of receiving marketing emails from us at any time by
                        following the unsubscribe instructions in the email.
                    </li>
                </ul>
                <p>If you would like to exercise any of these rights, please contact us using the information provided
                    in the "Contact Us" section below.</p>
            </section>

            <section>
                <h2>7. Cookies</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies
                    are small files stored on your device that help us recognize your preferences and analyze how you
                    use our website.</p>
                <p>You can control the use of cookies through your browser settings. However, disabling cookies may
                    affect your ability to use some features of our website.</p>
            </section>

            <section>
                <h2>8. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these external sites. We encourage you to review the privacy policies of any
                    third-party sites you visit.</p>
            </section>

            <section>
                <h2>9. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated date. You are encouraged to review this policy periodically. Your continued use of the
                    website after any changes to this Privacy Policy constitutes your acceptance of those changes.</p>
            </section>

            <section>
                <h2>10. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or wish to exercise any of your rights, please
                    contact us:</p>
                <p><strong>Email:</strong> <a href="mailto:contactus@blogspace.com">contactus@blogspace.com</a></p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Your Street, City, State, 12345</p>
            </section>
        </div>
    )
}
export default PrivacyPolicy;