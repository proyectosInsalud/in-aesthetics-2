// src/hooks/useContactForm.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { ClientSchema } from '@/schemas';
import { Client } from '@/types';
import { sendContactForm } from '@/services/email'; // Importamos el servicio

/**
 * Hook personalizado para manejar formularios de contacto
 * 
 * Este hook centraliza toda la lógica común de formularios incluyendo:
 * - Configuración del formulario con React Hook Form
 * - Validación con Zod
 * - Manejo de estados de carga
 * - Envío de datos a través del servicio API
 * - Manejo de errores y notificaciones
 * 
 * @param options Opciones de configuración del formulario
 * @param options.onSuccess Función a ejecutar cuando el envío es exitoso
 * @param options.defaultMessage Mensaje predeterminado para el campo mensaje
 * @param options.submitFn Función personalizada para enviar los datos (opcional)
 * @returns Objeto con el formulario, estado de carga y función para enviar
 */
export const useContactForm = (options?: {
  onSuccess?: () => void;
  defaultMessage?: string;
  submitFn?: (data: Client) => Promise<any>;
}) => {
  // Estado para controlar si el formulario está enviándose
  const [isLoading, setIsLoading] = useState(false);
  
  // Configuración del formulario con React Hook Form y validación Zod
  const form = useForm<Client>({
    // Conectamos el esquema de validación Zod
    resolver: zodResolver(ClientSchema),
    // Valores iniciales de los campos
    defaultValues: {
      nombre: "",
      // correo: "",
      telefono: "",
      // mensaje: options?.defaultMessage || "", // Usa el mensaje predeterminado si existe
      honeypot: "", // Campo honeypot para evitar spam
    },
  });

  /**
   * Función que maneja el envío del formulario
   * @param data Datos del formulario validados por Zod
   */
  const onSubmit = async (data: Client) => {
    // Activamos el estado de carga
    setIsLoading(true);
    
    try {
      // Enviamos los datos usando la función personalizada o la por defecto
      if (options?.submitFn) {
        // Enviar usando la función personalizada (ej. Google Sheets)
        await options.submitFn(data);
        // También enviamos siempre el correo
        await sendContactForm(data).catch(e => console.error("Error enviando correo:", e));
      } else {
        await sendContactForm(data);
      }
      
      // Mostramos notificación de éxito
      toast.success("Mensaje enviado correctamente");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'formSubmission',
      })

      // Limpiamos el formulario
      form.reset();
      
      // Ejecutamos callback de éxito si existe
      if (options?.onSuccess) options.onSuccess();
      
    } catch (error) {
      // MANEJO DE ERRORES: Diferentes tipos de errores de API
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        // Error con respuesta del servidor
        if (axiosError.response) {
          // Diferentes códigos de error HTTP
          if (axiosError.response.status === 500) {
            toast.error("Problemas con el servidor de correo. Intenta más tarde o contáctanos por WhatsApp.");
          } else if (axiosError.response.status === 400) {
            toast.error("Datos inválidos. Verifica la información ingresada.");
          } else {
            toast.error("Error al enviar el mensaje. Intenta nuevamente.");
          }
        } 
        // Error de red (no se recibió respuesta)
        else if (axiosError.request) {
          toast.error("No se pudo conectar con el servidor. Verifica tu conexión.");
        } 
        // Error en la configuración de la solicitud
        else {
          toast.error("Ocurrió un error inesperado. Intenta más tarde.");
        }
      } 
      // Cualquier otro tipo de error
      else {
        toast.error("Error al enviar el mensaje");
      }
    } 
    // Siempre desactivamos el estado de carga al finalizar
    finally {
      setIsLoading(false);
    }
  };

  // Retornamos los elementos necesarios para el componente
  return { 
    form,       // El formulario configurado con React Hook Form
    isLoading,  // Estado de carga para mostrar feedback visual
    onSubmit    // Función para manejar el envío
  };
};