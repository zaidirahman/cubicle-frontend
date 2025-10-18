import React, { useState, useEffect } from "react";
import { UserCircle, MenuIcon, XIcon, ChevronDown, LogOut } from "lucide-react";
import axios from "axios";
import { API_ENDPOINTS } from '../api'


// Main component
// This component serves as the main dashboard for the admin panel
const AdminDashboard = ({ setAuth }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contacts");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    setDropdownOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(".relative")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-emerald-700 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-emerald-800">
          <div className="text-xl font-bold">Cubicle Dashboard</div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          {/* <div className="px-4 py-2 text-xs text-emerald-300 uppercase tracking-wider">
            Management
          </div> */}
          <button
            className={`flex w-full items-center px-6 py-3 text-emerald-100 ${
              activeTab === "contacts"
                ? "bg-emerald-800"
                : "hover:bg-emerald-600"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            <span className="ml-3">Contact Forms</span>
          </button>
          <button
            className={`flex w-full items-center px-6 py-3 text-emerald-100 ${
              activeTab === "blog" ? "bg-emerald-800" : "hover:bg-emerald-600"
            }`}
            onClick={() => setActiveTab("blog")}
          >
            <span className="ml-3">Blog Posts</span>
          </button>
          <button
            className={`flex w-full items-center px-6 py-3 text-emerald-100 ${
              activeTab === "careers"
                ? "bg-emerald-800"
                : "hover:bg-emerald-600"
            }`}
            onClick={() => setActiveTab("careers")}
          >
            <span className="ml-3">Careers</span>
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
          <div className="flex items-center">
            <button
              className="text-gray-600 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div>
                  <UserCircle className="w-8 h-8" />
                </div>
                <span className="ml-2">Admin</span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      Sheikh Moeez
                    </p>
                    <p className="text-xs text-gray-500">admin@cubicle.pk</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === "contacts" && <ContactManagement />}
          {activeTab === "blog" && <BlogManagement />}
          {activeTab === "careers" && <CareersManagement />}
        </main>
      </div>
    </div>
  );
};

// Contact Management
// This component manages the contact form submissions
const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contacts when component mounts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.contacts);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
      setError("Failed to load contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }
    try {
      const response = await fetch(
        `${API_ENDPOINTS.contacts}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setContacts(contacts.filter((contact) => contact._id !== id));
      setSelectedContact(null);
    } catch (err) {
      console.error("Failed to delete contact:", err);
      alert("Failed to delete contact. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Contact Form Submissions
        </h1>
        <button
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          onClick={fetchContacts}
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact list */}
          <div className="w-full md:w-1/3 border-r border-gray-200">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-700">All Forms</h2>
            </div>
            <div className="overflow-y-auto h-96">
              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <p className="text-gray-500">Loading contacts...</p>
                </div>
              ) : contacts.length > 0 ? (
                contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-emerald-50 ${
                      selectedContact && selectedContact._id === contact._id
                        ? "bg-emerald-50"
                        : ""
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {contact.subject}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {contact.date}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-32">
                  <p className="text-gray-500">No contacts found</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact details */}
          <div className="w-full md:w-2/3 p-6">
            {selectedContact ? (
              <div className="flex justify-between items-center bg-white p-4 border rounded shadow-sm">
                <div className="text-sm text-gray-700 space-y-1">
                  <div>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedContact.name}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedContact.email}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    {selectedContact.phone}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span>{" "}
                    {selectedContact.location}
                  </div>
                  <div>
                    <span className="font-medium">Requirements:</span>{" "}
                    {selectedContact.requirements}
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-rose-600 text-white text-sm rounded hover:bg-rose-700"
                  onClick={() => handleDeleteContact(selectedContact._id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a contact to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Management
// This component manages the blog posts
const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.blog)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setIsLoading(false);
      });
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    _id: null,
    title: "",
    category: "",
    content: "",
    imageUrl: "",
    status: "draft",
  });

  const handleEditPost = (post) => {
    setCurrentPost({
      _id: post._id,
      title: post.title,
      category: post.category,
      content: post.content || "Post content goes here...",
      imageUrl: post.imageUrl || "",
      status: post.status,
    });
    setIsEditing(true);
  };

  const handleNewPost = () => {
    setCurrentPost({
      id: null,
      title: "",
      category: "",
      content: "",
      imageUrl: "",
      status: "draft",
    });
    setIsEditing(true);
  };

  const handleDeletePost = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`${API_ENDPOINTS.blog}/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  const handleSavePost = () => {
    console.log("handleSavePost triggered");
    console.log("Current Post:", currentPost);

    if (currentPost._id) {
      console.log("Attempting to update post with ID:", currentPost._id);

      axios
        .put(
          `${API_ENDPOINTS.blog}/${currentPost._id}`,
          currentPost
        )
        .then((res) => {
          console.log("Update response:", res.data);
          setPosts(
            posts.map((post) =>
              post._id === currentPost._id ? res.data : post
            )
          );
          setIsEditing(false);
        })
        .catch((err) => {
          console.error(
            "Error updating post:",
            err.response?.data || err.message
          );
        });
    } else {
      console.log("Creating new post with data:", currentPost);

      axios
        .post(`${API_ENDPOINTS.blog}`, currentPost)
        .then((res) => {
          console.log("Create response:", res.data);
          setPosts([...posts, res.data]);
          setIsEditing(false);
        })
        .catch((err) => {
          console.error(
            "Error creating post:",
            err.response?.data || err.message
          );
        });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Blog Posts Management
        </h1>
        <button
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          onClick={handleNewPost}
        >
          Create New Post
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={currentPost.title}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={currentPost.category}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, category: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image URL (Sample: https://picsum.photos/1200/400)</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={currentPost.imageUrl}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, imageUrl: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-32"
              value={currentPost.content}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, content: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={currentPost.status}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, status: e.target.value })
              }
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              onClick={handleSavePost}
            >
              Save Post
            </button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-gray-500">Loading posts...</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-emerald-600 hover:text-emerald-900 mr-3"
                      onClick={() => handleEditPost(post)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Careers Management
// This component manages the job postings
const CareersManagement = () => {
  const [careers, setCareers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    id: null,
    title: "",
    department: "",
    type: "full-time",
    location: "",
    description: "",
    requirements: "",
    status: "active",
  });

  // Fetch jobs on component mount
  useEffect(() => {
    axios
      .get(API_ENDPOINTS.jobs)
      .then((response) => setCareers(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleEditJob = (job) => {
    setCurrentJob({
      id: job._id,
      title: job.title,
      department: job.department,
      type: job.type,
      location: job.location,
      description: job.description,
      requirements: job.requirements,
      status: job.status,
    });
    setIsEditing(true);
  };

  const handleNewJob = () => {
    setCurrentJob({
      id: null,
      title: "",
      department: "",
      type: "full-time",
      location: "",
      description: "",
      requirements: "",
      status: "active",
    });
    setIsEditing(true);
  };

  const handleDeleteJob = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;
    // Delete job
    axios
      .delete(`${API_ENDPOINTS.jobs}/${id}`)
      .then(() => setCareers(careers.filter((job) => job._id !== id)))
      .catch((error) => console.error("Error deleting job:", error));
  };

  const handleSaveJob = () => {
    if (currentJob.id) {
      // Update existing job
      axios
        .put(
          `${API_ENDPOINTS.jobs}/${currentJob.id}`,
          currentJob
        )
        .then((response) => {
          setCareers(
            careers.map((job) =>
              job._id === currentJob.id ? response.data : job
            )
          );
          setIsEditing(false);
        })
        .catch((error) => console.error("Error updating job:", error));
    } else {
      // Create new job
      axios
        .post(`${API_ENDPOINTS.jobs}/create`, currentJob)
        .then((response) => {
          setCareers([...careers, response.data]);
          setIsEditing(false);
        })
        .catch((error) => console.error("Error creating job:", error));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Careers Management
        </h1>
        <button
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          onClick={handleNewJob}
        >
          Create New Job
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={currentJob.title}
                onChange={(e) =>
                  setCurrentJob({ ...currentJob, title: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Department</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={currentJob.department}
                onChange={(e) =>
                  setCurrentJob({ ...currentJob, department: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={currentJob.location}
                onChange={(e) =>
                  setCurrentJob({ ...currentJob, location: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Job Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={currentJob.type}
                onChange={(e) =>
                  setCurrentJob({ ...currentJob, type: e.target.value })
                }
              >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Status</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={currentJob.status}
                onChange={(e) =>
                  setCurrentJob({ ...currentJob, status: e.target.value })
                }
              >
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Job Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-32"
              value={currentJob.description}
              onChange={(e) =>
                setCurrentJob({ ...currentJob, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Requirements</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-32"
              value={currentJob.requirements}
              onChange={(e) =>
                setCurrentJob({ ...currentJob, requirements: e.target.value })
              }
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              onClick={handleSaveJob}
            >
              Save Job
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {careers.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {job.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {job.department}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{job.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        job.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(job.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-emerald-600 hover:text-emerald-900 mr-3"
                      onClick={() => handleEditJob(job)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteJob(job._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
