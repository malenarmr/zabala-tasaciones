"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmailAction(formData: FormData) {
  try {
    const headersList = await headers();

    const rateLimitRemaining = headersList.get("X-RateLimit-Remaining");
    const rateLimitLimit = headersList.get("X-RateLimit-Limit");

    if (rateLimitRemaining && parseInt(rateLimitRemaining) <= 0) {
      return {
        success: false,
        error: "Demasiadas solicitudes, intente más tarde",
      };
    }

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

    await transporter.sendMail({
      from: `"Tasaciones" <${process.env.SMTP_USER}>`,
      to: "zabala@zabalabienesraices.com",
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
        <p><strong>Mensaje:</strong> ${mensaje}</p>
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
