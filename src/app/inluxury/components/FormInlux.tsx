"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/useContactForm";
import { Client } from "@/types";

interface FormInluxProps {
  emailDestino?: string;
  paginaOrigen?: string;
}

export const FormInlux = ({ emailDestino, paginaOrigen = "InLuxury - Medicina Estética Avanzada" }: FormInluxProps) => {
  const { form, isLoading, onSubmit } = useContactForm();

  // Función personalizada para manejar el envío con emailDestino y paginaOrigen
  const handleSubmit = (data: Client) => {
    // Agregamos emailDestino y paginaOrigen a los datos
    const dataCompleta = {
      ...data,
      ...(emailDestino && { emailDestino }),
      paginaOrigen
    };
    
    onSubmit(dataCompleta);
  };

  return (
    <div className="pb-6">
      <Form {...form}>
        <p className="text-mo-brown-base text-center md:text-left font-in-poppins pb-3 text-xl">¡Reserva tu cita ahora!</p>
        <form
          id="contact-form-hydrafacial"
          onSubmit={form.handleSubmit(handleSubmit)}
          className="contact-form-hydrafacial"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nombres"
                      className="placeholder:text-mo-brown-base rounded-lg py-6 border-mo-brown-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem className="sm:w-2/2">
                  <FormControl>
                    <Input
                      placeholder="Teléfono"
                      className="placeholder:text-mo-brown-base rounded-lg py-6 border-mo-brown-base"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
                className={`w-full text-white text-base bg-mo-brown-base hover:bg-mo-brown-hover py-6 rounded-4xl cursor-pointer md:col-span-2 lg:col-span-1 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </Button>
          </div>

          <p className="text-xs text-mo-brown-base text-center md:text-left pt-3">
            Al llenar el formulario, Ud. acepta los{" "}
            <span>
              <a
                href="/pdf/tratamiento-de-datos-personales.pdf"
                target="_blank"
                className="underline"
              >
                Términos y Condiciones / Política de Privacidad.
              </a>
            </span>{" "}
          </p>
        </form>
      </Form>
    </div>
  );
};
