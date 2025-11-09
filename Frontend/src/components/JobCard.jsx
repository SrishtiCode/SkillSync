import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 font-semibold mb-3">{job.company}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaBriefcase className="text-blue-600" />
          <span>{job.jobType}</span>
        </div>
        {job.salary && (
          <div className="flex items-center gap-2 text-gray-600">
            <FaDollarSign className="text-blue-600" />
            <span>
              {job.salary.min} - {job.salary.max} {job.salary.currency}
            </span>
          </div>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="flex gap-2 mb-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
          {job.category}
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
          {job.experienceLevel}
        </span>
      </div>

      <Link
        to={`/jobs/${job._id}`}
        className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;