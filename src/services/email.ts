import axios from 'axios';
import type { Client } from '@/types';

/**
 * Envía los datos del formulario de contacto a la API general (Email)
 * @param data Datos del formulario validados
 * @returns Promise con la respuesta del servidor
 */
export const sendContactForm = async (data: Client) => {
  return axios.post("/api/send", data);
};

/**
 * Envía los datos del formulario de Hydrafacial a Google Sheets
 */
export const sendHydrafacialForm = async (data: Client) => {
  return axios.post("/api/hydrafacial", data);
};

/**
 * Envía los datos del formulario de Lunares a Google Sheets
 */
export const sendLunaresForm = async (data: Client) => {
  return axios.post("/api/lunares", data);
};

/**
 * Envía los datos del formulario de Enzimas a Google Sheets
 */
export const sendEnzimasForm = async (data: Client) => {
  return axios.post("/api/enzimas", data);
};

/**
 * Envía los datos del formulario de contacto a la nueva API de Sheets
 */
export const sendGeneralContactForm = async (data: Client) => {
  return axios.post("/api/contact", data);
};
