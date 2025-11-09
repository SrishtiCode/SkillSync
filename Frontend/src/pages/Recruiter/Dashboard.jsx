import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const RecruiterDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recruiter Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Active Jobs</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Total Applications</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Pending Review</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <p className="text-gray-600 mb-4">Start posting jobs to attract top talent!</p>
        <Link 
          to="/recruiter/post-job"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 inline-block"
        >
          Post a Job
        </Link>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
