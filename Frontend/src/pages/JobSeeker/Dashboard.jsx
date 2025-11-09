import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { applicationAPI, jobAPI } from '../../utils/api';
import { FaBriefcase, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const JobSeekerDashboard = () => {
  const [stats, setStats] = useState({
    totalApplications: 0,
    pending: 0,
    shortlisted: 0,
  });
  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [applicationsRes, jobsRes] = await Promise.all([
        applicationAPI.getMyApplications(),
        jobAPI.getAllJobs({ limit: 5 }),
      ]);

      const applications = applicationsRes.data.applications;

      setStats({
        totalApplications: applications.length,
        pending: applications.filter((app) => app.status === 'pending').length,
        shortlisted: applications.filter((app) => app.status === 'shortlisted').length,
      });

      setRecentApplications(applications.slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Seeker Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <FaFileAlt className="text-4xl text-blue-600 mb-2" />
          <h3 className="text-gray-600">Total Applications</h3>
          <p className="text-3xl font-bold">{stats.totalApplications}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <FaBriefcase className="text-4xl text-yellow-600 mb-2" />
          <h3 className="text-gray-600">Pending</h3>
          <p className="text-3xl font-bold">{stats.pending}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <FaCheckCircle className="text-4xl text-green-600 mb-2" />
          <h3 className="text-gray-600">Shortlisted</h3>
          <p className="text-3xl font-bold">{stats.shortlisted}</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Applications</h2>
          <Link to="/jobseeker/applications" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        {recentApplications.length > 0 ? (
          <div className="space-y-4">
            {recentApplications.map((app) => (
              <div key={app._id} className="border-b pb-4">
                <h3 className="font-bold">{app.job?.title}</h3>
                <p className="text-gray-600">{app.job?.company}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs mt-2 ${
                    app.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : app.status === 'shortlisted'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No applications yet. Start applying to jobs!</p>
        )}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;