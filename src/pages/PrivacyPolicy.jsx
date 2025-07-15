import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
                    
                    <p className="text-gray-600 mb-6">
                        Last Updated: {currentDate}
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At The Cubicle, we respect your privacy and are committed to protecting your personal data. 
                                This privacy policy explains how we collect, use, and safeguard your information when you use our website 
                                or our coworking facilities.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><span className="font-medium">Personal Information:</span> Name, email address, phone number</li>
                                <li><span className="font-medium">Usage Data:</span> Information about how you use our facilities and services</li>
                                <li><span className="font-medium">Technical Data:</span> IP address, browser information, device information</li>
                                <li><span className="font-medium">Marketing Preferences:</span> Your preferences for receiving marketing communications</li>
                            </ul>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use your information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>To manage your membership and provide our services</li>
                                <li>To process payments and maintain accounting records</li>
                                <li>To communicate with you about our services, events, and offers</li>
                                <li>To improve our services and user experience</li>
                                <li>To ensure the security of our facilities</li>
                            </ul>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website does not currently use cookies or tracking technologies to collect information about your browsing activities. 
                                If we decide to implement cookies in the future, we will update this Privacy Policy accordingly and provide you with 
                                appropriate notice and choices regarding cookie usage.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Sharing and Third Parties</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may share your information with trusted third parties, including payment processors, 
                                IT service providers, and business partners. We require all third parties to respect the security 
                                of your data and treat it in accordance with applicable laws.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate security measures to protect your personal information from unauthorized 
                                access, alteration, disclosure, or destruction. We regularly review and update our security practices.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information when applicable</li>
                                <li>Object to processing of your information</li>
                                <li>Request restriction of processing</li>
                                <li>Request transfer of your information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any significant changes 
                                by posting the new policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions or concerns about our privacy policy or data practices, please contact us at:
                                <br /><br />
                                The Cubicle<br />
                                Email: info@thecubicle.pk<br />
                                Phone: +92 3214418427<br />
                                Address: 89-A-C2, Gulberg III, Lahore, Pakistan
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;