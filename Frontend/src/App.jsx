import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BrowseJobs from './pages/BrowseJobs';
import JobSeekerDashboard from './pages/JobSeeker/Dashboard';
import RecruiterDashboard from './pages/Recruiter/Dashboard';
import PostJob from './pages/Recruiter/PostJob';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/jobs" element={<BrowseJobs />} />

              <Route
                path="/jobseeker/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['jobseeker']}>
                    <JobSeekerDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/recruiter/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['recruiter']}>
                    <RecruiterDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/recruiter/post-job"
                element={
                  <ProtectedRoute allowedRoles={['recruiter']}>
                    <PostJob />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;