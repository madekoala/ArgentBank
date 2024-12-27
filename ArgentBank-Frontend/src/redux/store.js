/* eslint-disable no-redeclare */
/* global localStorage */
/* eslint no-undef: "error" */

import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

// État initial de l'application
export const initialeState = {
  users: null,
  connected: false,
  status: 'void',
  user: {
    UserName: ' ',
    prenom: ' ',
    nom: ' ',
  },
  token: '',
  error: null,
}

/**
 * Fonction saveToLocalStorage
 * Sauvegarde l'état dans le localStorage
 * @param {object} state - État de l'application
 */
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.error('Could not save state to localStorage', e)
  }
}

/**
 * Fonction loadFromLocalStorage
 * Charge l'état depuis le localStorage
 * @returns {object | undefined} - État chargé ou undefined si inexistant
 */
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.error('Could not load state from localStorage', e)
    return undefined
  }
}

// Charger l'état initial depuis le localStorage
const preloadedState = loadFromLocalStorage()

// Configurer le store avec Redux Toolkit
const store = configureStore({
  reducer, // Votre reducer principal
  preloadedState, // Charger l'état sauvegardé
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver les vérifications pour localStorage
    }),
})

// Abonnement pour sauvegarder dans localStorage à chaque changement d'état
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
