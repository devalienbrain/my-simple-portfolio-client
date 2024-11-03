import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxios";
import { FaPlus, FaEdit, FaTrash, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsTableInDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [modalData, setModalData] = useState({
    websiteName: "",
    details: "",
    technology: [],
    liveSiteLink: "",
    githubClientCode: "",
    githubServerCode: "",
    ssUrl: "",
  });
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("projects");
        setProjects(response?.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get("skills");
        setSkills(response?.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchProjects();
    fetchSkills();
  }, [axiosInstance]);

  const handleAddOrUpdateProject = async () => {
    try {
      if (isEditing) {
        await axiosInstance.put(`projects/${modalData._id}`, modalData);
        setProjects((prev) =>
          prev.map((project) =>
            project._id === modalData._id ? modalData : project
          )
        );
      } else {
        const newProject = await axiosInstance.post("projects", modalData);
        setProjects([...projects, newProject?.data]);
      }
      setShowModal(false);
      setModalData({
        websiteName: "",
        details: "",
        technology: [],
        liveSiteLink: "",
        githubClientCode: "",
        githubServerCode: "",
        ssUrl: "",
      });
      setSelectedSkill("");
    } catch (error) {
      console.error("Error adding/updating project:", error);
    }
  };

  const handleDeleteProject = async () => {
    try {
      await axiosInstance.delete(`projects/${projectToDelete}`);
      setProjects(
        projects.filter((project) => project._id !== projectToDelete)
      );
      setShowDeleteConfirm(false);
      setProjectToDelete(null);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const openEditModal = (project) => {
    setModalData(project);
    setIsEditing(true);
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="text-xl font-extrabold text-slate-300 py-5">Projects</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => {
          setIsEditing(false);
          setShowModal(true);
          setModalData({
            websiteName: "",
            details: "",
            technology: [],
            liveSiteLink: "",
            githubClientCode: "",
            githubServerCode: "",
            ssUrl: "",
          });
        }}
      >
        <FaPlus className="inline mr-2" /> Add New Project
      </button>

      <table className="min-w-full bg-slate-800 rounded-lg">
        <thead>
          <tr className="text-slate-300">
            <th className="py-2">Website Name</th>
            <th className="py-2">Details</th>
            <th className="py-2">Tech Stack</th>
            <th className="py-2">Live Link</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project._id} className="text-slate-200">
              <td className="py-2">{project.websiteName}</td>
              <td className="py-2">{project.details}</td>
              <td className="py-2">{project.technology?.join(", ")}</td>
              <td className="py-2">
                <a
                  href={project.liveSiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </td>
              <td className="py-2 flex space-x-2">
                <button
                  onClick={() => openEditModal(project)}
                  className="text-yellow-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    setProjectToDelete(project._id);
                    setShowDeleteConfirm(true);
                  }}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5">
            <h2 className="text-lg font-bold">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h2>
            <div className="mb-4">
              <label className="block mb-2">Website Name:</label>
              <input
                type="text"
                value={modalData.websiteName}
                onChange={(e) =>
                  setModalData({ ...modalData, websiteName: e.target.value })
                }
                className="border p-2 rounded w-full"
                placeholder="Website Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Details:</label>
              <textarea
                value={modalData.details}
                onChange={(e) =>
                  setModalData({ ...modalData, details: e.target.value })
                }
                className="border p-2 rounded w-full"
                placeholder="Project Details"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Tech Stack:</label>
              <select
                value={selectedSkill}
                onChange={(e) => {
                  if (e.target.value) {
                    setModalData((prev) => ({
                      ...prev,
                      technology: [...prev.technology, e.target.value],
                    }));
                    setSelectedSkill("");
                  }
                }}
                className="border p-2 rounded w-full"
              >
                <option value="">Select Technology</option>
                {skills?.map((skill) => (
                  <option key={skill._id} value={skill.title}>
                    {skill.title}
                  </option>
                ))}
              </select>
              {modalData.technology.length > 0 && (
                <div className="mt-2">
                  <span className="font-semibold">Selected:</span>{" "}
                  {modalData.technology.join(", ")}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2">Live Site Link:</label>
              <input
                type="text"
                value={modalData.liveSiteLink}
                onChange={(e) =>
                  setModalData({ ...modalData, liveSiteLink: e.target.value })
                }
                className="border p-2 rounded w-full"
                placeholder="Live Site URL"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">GitHub Client Code:</label>
              <input
                type="text"
                value={modalData.githubClientCode}
                onChange={(e) =>
                  setModalData({
                    ...modalData,
                    githubClientCode: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
                placeholder="GitHub Client URL"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">GitHub Server Code:</label>
              <input
                type="text"
                value={modalData.githubServerCode}
                onChange={(e) =>
                  setModalData({
                    ...modalData,
                    githubServerCode: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
                placeholder="GitHub Server URL"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Screenshot URL:</label>
              <input
                type="text"
                value={modalData.ssUrl}
                onChange={(e) =>
                  setModalData({ ...modalData, ssUrl: e.target.value })
                }
                className="border p-2 rounded w-full"
                placeholder="Screenshot URL"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdateProject}
                className="btn btn-primary"
              >
                {isEditing ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5">
            <h2 className="text-lg font-bold text-red-500">Confirm Delete</h2>
            <p>Are you sure you want to delete this project?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button onClick={handleDeleteProject} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsTableInDashboard;
