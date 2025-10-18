import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MapPin, Building, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/background.webp';
import Footer from '../components/Footer';
import { API_ENDPOINTS, CONFIG } from '../api';

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.jobs);
      if (!response.ok) {
        throw new Error('Failed to fetch careers');
      }
      const data = await response.json();
      setCareers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };
  
  const handleWhatsAppClick = ({ phoneNumber = "", message = "" }) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const CareerCard = ({ job }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-600">
                <Building className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.department}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.type}</span>
              </div>
            </div>
          </div>
          <button 
          onClick={() => handleWhatsAppClick({ phoneNumber: `${CONFIG.phoneNumber}`, message: `I am interested in applying for the ${job.title} position at your company.` })}
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap ml-6">
            Apply Now
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => toggleJobExpansion(job.id)}
            className="flex items-center text-emerald-700 hover:text-emerald-800 font-medium transition-colors duration-200"
          >
            View More
            {expandedJob === job.id ? (
              <ChevronUp className="w-4 h-4 ml-1" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-1" />
            )}
          </button>
          <div className="flex items-center space-x-2">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
              {job.department}
            </span>
          </div>
        </div>
    
        {expandedJob === job.id && (
          <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Job Description</h4>
                <p className="text-gray-600 leading-relaxed">{job.description || 'No description available'}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h4>
                <p className="text-gray-600 leading-relaxed">{job.requirements || 'No Requirements available'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're building the future together. Discover exciting opportunities to grow your career with us.
            </p>
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our talented team and help us build something amazing together
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
            <button 
              onClick={fetchCareers}
              className="mt-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4"
            >
              Try Again
            </button>
          </div>
        ) : careers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No career opportunities found.</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-6">
            {careers
            .filter((job) => job.status === "active")
            .map((job) => (
              <div key={job.id || job._id} className="w-4/5 mx-auto">
                <CareerCard job={job} />
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="text-center mt-16 bg-emerald-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Don't see the right fit?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Send General Application
          </button>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;