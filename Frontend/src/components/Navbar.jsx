import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBriefcase, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <FaBriefcase /> SkillSync
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/jobs" className="hover:text-blue-200">
              Browse Jobs
            </Link>

            {isAuthenticated ? (
              <>
                {user?.role === 'jobseeker' && (
                  <Link to="/jobseeker/dashboard" className="hover:text-blue-200">
                    Dashboard
                  </Link>
                )}

                {user?.role === 'recruiter' && (
                  <>
                    <Link to="/recruiter/dashboard" className="hover:text-blue-200">
                      Dashboard
                    </Link>
                    <Link to="/recruiter/post-job" className="hover:text-blue-200">
                      Post Job
                    </Link>
                  </>
                )}

                <div className="flex items-center gap-1">
                  <FaUser /> {user?.name}
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded flex items-center gap-1"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-200">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;