/* eslint-disable no-redeclare */
/* global fetch */
/* eslint no-undef: "error" */

import store from "./store";

// Actions Redux pour modifier l'état de l'application
const dataFetching = () => ({ type: "loading" });
const dataError = () => ({ type: "error" });
const connexionAction = (data) => ({ type: "connexion", payload: data });
const profileAction = (data) => ({ type: "profile", payload: data });
const updateUserAction = (data) => ({ type: "updateUser", payload: data });
const deconnexionAction = () => ({ type: "deconnexion" });

// **Action Thunk : Déconnexion**
export function deconnexion() {
  return function (dispatch) {
    dispatch(deconnexionAction());
  };
}

// **Action Thunk : Connexion**
export function login(email, password) {
  return async function (dispatch) {
    try {
      dispatch(dataFetching()); // Début du chargement

      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(
        "http://localhost:3001/api/v1/user/login",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(connexionAction(data)); // Met à jour le token
        dispatch(profile()); // Récupère le profil
      } else {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erreur dans login:", error.message);
      dispatch(dataError());
    }
  };
}

// **Action Thunk : Récupération du Profil**
export function profile() {
  return async function (dispatch) {
    try {
      dispatch(dataFetching()); // Début du chargement

      const requestOptions = {
        method: "GET", // Utilisation de GET pour récupérer les données
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.getState().token}`, // Inclusion du token
        },
      };

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(profileAction(data)); // Mise à jour avec les données du profil
      } else {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erreur dans profile:", error.message);
      dispatch(dataError());
    }
  };
}

// **Action Thunk : Mise à Jour des Informations de l'Utilisateur**
export function updateUserInfo(userName) {
  return async function (dispatch) {
    try {
      dispatch(dataFetching()); // Début du chargement

      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.getState().token}`, // Inclusion du token
        },
        body: JSON.stringify({ userName }),
      };

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(updateUserAction(data)); // Mise à jour du profil
      } else {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erreur dans updateUserInfo:", error.message);
      dispatch(dataError());
    }
  };
}
