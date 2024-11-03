import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxios";

const SkillsTableInDashboard = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const [newSkill, setNewSkill] = useState({ title: "", logo: "" });
  const [editingSkill, setEditingSkill] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [skillToDelete, setSkillToDelete] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get("skills");
        setSkills(response.data);
        setError(null);
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching data");
      }
    };

    fetchSkills();
  }, [axiosInstance]);

  const handleAddSkill = async () => {
    try {
      const response = await axiosInstance.post("skills", newSkill);
      setSkills([...skills, response.data]);
      setNewSkill({ title: "", logo: "" }); // Reset input fields
    } catch (error) {
      setError(error.response?.data?.message || "Error adding skill");
    }
  };

  const handleUpdateSkill = async () => {
    try {
      const response = await axiosInstance.put(`skills/${editingSkill._id}`, editingSkill);
      setSkills(skills.map(skill => (skill._id === editingSkill._id ? response.data : skill)));
      closeUpdateModal(); // Close modal after update
    } catch (error) {
      setError(error.response?.data?.message || "Error updating skill");
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await axiosInstance.delete(`skills/${id}`);
      setSkills(skills.filter(skill => skill._id !== id));
      closeDeleteModal(); // Close modal after deletion
    } catch (error) {
      setError(error.response?.data?.message || "Error deleting skill");
    }
  };

  const openDeleteModal = (skill) => {
    setSkillToDelete(skill);
    setModalOpen(true);
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
    setSkillToDelete(null);
  };

  const openUpdateModal = (skill) => {
    setEditingSkill(skill);
    setModalOpen(true);
  };

  const closeUpdateModal = () => {
    setModalOpen(false);
    setEditingSkill(null);
  };

  return (
    <div className="py-10">
      <h1 className="text-xl font-extrabold text-slate-300 py-5">Skills Table</h1>

      {error && <p className="text-red-500 font-semibold">{error}</p>}

      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Skill Title"
          value={newSkill.title}
          onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Logo URL"
          value={newSkill.logo}
          onChange={(e) => setNewSkill({ ...newSkill, logo: e.target.value })}
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleAddSkill} className="bg-blue-500 text-white rounded p-2 flex items-center">
          <FaPlus className="mr-1" />
          Add Skill
        </button>
      </div>

      <table className="min-w-full bg-slate-900 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-200">#</th>
            <th className="py-3 px-4 text-left text-gray-200">Skill</th>
            <th className="py-3 px-4 text-left text-gray-200">Logo</th>
            <th className="py-3 px-4 text-left text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill._id} className="hover:bg-slate-800">
              <td className="py-3 px-4 text-gray-300">{index + 1}</td>
              <td className="py-3 px-4 text-gray-300">{skill.title}</td>
              <td className="py-3 px-4">
                <img src={skill.logo} alt={skill.title} className="w-8 h-8" />
              </td>
              <td className="py-3 px-4">
                <button onClick={() => openUpdateModal(skill)} className="text-yellow-500 hover:text-yellow-400">
                  <FaEdit />
                </button>
                <button onClick={() => openDeleteModal(skill)} className="text-red-500 hover:text-red-400 ml-2">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {modalOpen && skillToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3 relative">
            <button
              onClick={closeDeleteModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            <h2 className="text-lg font-bold text-gray-800">Are you sure you want to delete this skill?</h2>
            <p className="text-gray-600">{skillToDelete.title}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleDeleteSkill(skillToDelete._id)}
                className="bg-red-500 text-white rounded px-4 py-2"
              >
                Delete
              </button>
              <button onClick={closeDeleteModal} className="bg-gray-300 text-gray-800 rounded px-4 py-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Skill Modal */}
      {modalOpen && editingSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3 relative">
            <button
              onClick={closeUpdateModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            <h2 className="text-lg font-bold text-gray-800">Edit Skill: {editingSkill.title}</h2>
            <input
              type="text"
              value={editingSkill.title}
              onChange={(e) => setEditingSkill({ ...editingSkill, title: e.target.value })}
              className="border rounded p-2 mb-2 w-full"
              placeholder="Skill Title"
            />
            <input
              type="text"
              value={editingSkill.logo}
              onChange={(e) => setEditingSkill({ ...editingSkill, logo: e.target.value })}
              className="border rounded p-2 mb-4 w-full"
              placeholder="Logo URL"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdateSkill}
                className="bg-green-500 text-white rounded px-4 py-2"
              >
                Update
              </button>
              <button onClick={closeUpdateModal} className="bg-gray-300 text-gray-800 rounded px-4 py-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsTableInDashboard;
