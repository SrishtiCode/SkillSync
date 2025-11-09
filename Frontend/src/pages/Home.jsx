import { Link } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job Today</h1>
          <p className="text-xl mb-8">
            Connect with top employers and discover opportunities that match your skills
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/jobs"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Browse Jobs
            </Link>
            <Link
              to="/register"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkillSync?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaSearch className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Job Search</h3>
              <p className="text-gray-600">
                Find jobs that match your skills and preferences with our advanced search
              </p>
            </div>
            <div className="text-center">
              <FaBriefcase className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Top Companies</h3>
              <p className="text-gray-600">
                Access opportunities from leading companies across industries
              </p>
            </div>
            <div className="text-center">
              <FaRocket className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick Apply</h3>
              <p className="text-gray-600">
                Apply to multiple jobs with one click and track your applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of job seekers and employers on SkillSync</p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;