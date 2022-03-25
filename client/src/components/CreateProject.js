import axios from "axios";
import React, { useState } from "react";

const CreateProject = ({ user, project, setUser, setProject, setFormat }) => {
  const [form, setForm] = useState({
    user: "",
    project: "",
    format: "",
  });

  const onChange = (value) => {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser((prev) => form.user);
    setProject((prev) => form.project);
    setFormat((prev) => form.format);
    
    const userProject = {
      user: form.user,
      project: form.project,
      format: form.format,
    };

    console.log(userProject);

    try {
      const res = await axios.post(
        "http://localhost:3001/createUserProject",
        userProject
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <form>
        <div>
          <label htmlFor="user">User </label>
          <input
            type="text"
            id="user"
            value={form.user}
            onChange={(e) => onChange({ user: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="project">Project </label>
          <input
            type="text"
            id="project"
            value={form.project}
            onChange={(e) => onChange({ project: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="format">Format </label>
          <input
            type="text"
            id="format"
            value={form.format}
            onChange={(e) => onChange({ format: e.target.value })}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
