import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUserInfo } from "../redux/action";
import store from "../redux/store";
import React from "react";

function Information() {
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const userName = useSelector((state) => state.user.userName);
  const prenom = useSelector((state) => state.user.prenom);
  const nom = useSelector((state) => state.user.nom);

  function handleSave() {
    if (newUserName !== "") {
      store.dispatch(updateUserInfo(newUserName));
      setEditMode(false);
      alert("Changement effectué avec succès");
    }
  }

  function handleCancel() {
    setEditMode(false);
  }

  function editData() {
    setNewUserName(userName);
    setEditMode(true);
  }

  return (
    <div className="information">
      {editMode ? (
        <div>
          <h1>Edit user info</h1>
          <form>
            <div className="user-name">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="user-name">
              <label htmlFor="prenom">First name</label>
              <input type="text" id="prenom" placeholder={prenom} disabled />
            </div>
            <div className="user-name">
              <label htmlFor="nom">Last name</label>
              <input type="text" id="nom" placeholder={nom} disabled />
            </div>
            <div className="divButton">
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="reset" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>
            Welcome <br /> {userName}
          </h1>
          <button type="button" onClick={editData}>
            Edit user info
          </button>
        </div>
      )}
    </div>
  );
}

export default Information;
