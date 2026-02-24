'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/useContactForm"
import { Client } from "@/types"
import { EMAIL_DESTINATIONS, PAGINA_ORIGEN } from "@/data/emails"

interface ContactFormProps {
  emailDestino?: string;
  paginaOrigen?: string;
}

/**
 * Componente de formulario de contacto para la página de Enzimas
 * 
 * Utiliza el hook useContactForm para manejar la lógica de formulario,
 * validación y envío, eliminando la duplicación de código.
 */
export const ContactForm = ({ 
  emailDestino = EMAIL_DESTINATIONS.enzimas, 
  paginaOrigen = PAGINA_ORIGEN.enzimas 
}: ContactFormProps) => {
  /**
   * PASO 1: Usar el hook personalizado useContactForm
   * 
   * - Configuramos un mensaje predeterminado para este formulario específico
   * - El hook nos devuelve:
   *   - form: El formulario configurado con React Hook Form
   *   - isLoading: Estado de carga para mostrar feedback visual
   *   - onSubmit: Función para manejar el envío
   */
  const { form, isLoading, onSubmit } = useContactForm();

  // Función personalizada para manejar el envío con emailDestino y paginaOrigen
  const handleSubmit = (data: Client) => {
    const dataCompleta = {
      ...data,
      emailDestino,
      paginaOrigen
    };
    
    onSubmit(dataCompleta);
  };

  return (
    <Form {...form}>
      <form id="contact-form-enzimas" onSubmit={form.handleSubmit(handleSubmit)} className="contact-form-enzimas w-full">
        <div className="w-full space-y-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                  className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base"
                    {...field}
                    placeholder="Nombres"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row gap-4">
              {/* <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormControl>
                      <Input
                      className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base" 
                      {...field}
                      type="email"
                      placeholder="Correo electrónico"
                      />
                  </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
              /> */}
              
              <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormControl>
                      <Input
                      className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base"
                      {...field}
                      placeholder="Teléfono"
                      />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
              />
          </div>
{/*           
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Zona a tratar"
                    rows={4}
                    className="resize-none border-mo-brown-base placeholder:text-mo-brown-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    style={{ display: 'none' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className={`w-full cursor-pointer bg-transparent text-mo-brown-base border-mo-brown-base border py-6 rounded-full hover:bg-mo-brown-base text-base hover:text-white transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
          {isLoading ? "Enviando..." : "¡Agenda tu consulta ahora!"}
          </Button>
          <p className="text-sm text-mo-brown-base">Al llenar el formulario, Ud. acepta los <span>
            <a href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" className="underline">Términos y Condiciones / Política de Privacidad.</a>
            </span> </p>
        </div>
      </form>
    </Form>
  ) 
}
