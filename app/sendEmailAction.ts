"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  try {
    const headersList = await headers();

    const rateLimitRemaining = headersList.get("X-RateLimit-Remaining");
    const rateLimitLimit = headersList.get("X-RateLimit-Limit");

    const nombre = formData.get("nombre")?.toString();
    const telefono = formData.get("telefono")?.toString();
    const email = formData.get("email")?.toString();
    const tipoPropiedad = formData.get("tipo-propiedad")?.toString();
    const barrio = formData.get("barrio")?.toString();
    const mensaje = formData.get("mensaje")?.toString();

    if (!nombre || !telefono || !email) {
      return {
        success: false,
        error: "Faltan campos requeridos",
      };
    }

    const response = await resend.emails.send({
      from: "Tasaciones <onboarding@resend.dev>",
      to: "maalena456@gmail.com",
      replyTo: email,
      subject: `Solicitud de tasación - ${nombre}`,
      html: `
        <h2>Nueva solicitud de tasación</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo:</strong> ${tipoPropiedad}</p>
        <p><strong>Barrio:</strong> ${barrio}</p>

        <hr />

        <p>Mensaje: ${mensaje}</p>
      `,
    });

    return {
      success: true,
      rateLimitRemaining: rateLimitRemaining
        ? parseInt(rateLimitRemaining)
        : null,
      rateLimitLimit: rateLimitLimit ? parseInt(rateLimitLimit) : null,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Error al enviar email",
    };
  }
}
