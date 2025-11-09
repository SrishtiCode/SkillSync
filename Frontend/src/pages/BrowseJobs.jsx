import { useState, useEffect } from 'react';
import { jobAPI } from '../utils/api';
import JobCard from '../components/JobCard';
import { FaSearch } from 'react-icons/fa';

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    jobType: '',
    category: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await jobAPI.getAllJobs(filters);
      setJobs(response.data.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  if (loading) {
    return <div className="text-center py-20">Loading jobs...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Jobs</h1>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                name="search"
                placeholder="Job title or company"
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <select
                name="jobType"
                value={filters.jobType}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">All Categories</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Design">Design</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <FaSearch /> Search Jobs
          </button>
        </form>
      </div>

      {/* Job Results */}
      <div className="mb-4">
        <p className="text-gray-600">{jobs.length} jobs found</p>
      </div>

      {jobs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600 text-xl">No jobs found</p>
          <p className="text-gray-500 mt-2">Try adjusting your search filters</p>
        </div>
      )}
    </div>
  );
};

export default BrowseJobs;