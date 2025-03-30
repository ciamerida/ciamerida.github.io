---
layout: page
permalink: /contacto/
title: Contacto
description: 
nav: true
nav_order: 6
---

## Contáctanos

- **Teléfono fijo:** 0274-2661626  
- **Móvil:** 0412-1269902
- **WhatsApp:** [0412-1269902](https://wa.me/+584121269902)
- **Email:** [ciamer_b@gmail.com](mailto:ciamer_b@gmail.com)

---

## ¿Dónde estamos?

Encuéntranos en la **Avenida Andrés Bello, Urbanización Las Delias, Edificio Atrium Centro Diagnóstico, Planta Baja Local B**.
Mérida, Venezuela.

[Ver en Google Maps](https://maps.app.goo.gl/vLuUGkCUeq5KdvFF8)

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.199707496519!2d-71.1720501!3d8.5767878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e64879efb906369%3A0x1881931def6787f8!2sCIAMER%20Centro%20de%20Imagenolog%C3%ADa%20Avanzada%20M%C3%A9rida!5e0!3m2!1ses-419!2sfr!4v1743331569797!5m2!1ses-419!2sfr" 
width="600" 
height="450" 
style="border:0;" 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade"></iframe>

---

## ¿Quieres que te contactemos?

Si deseas que te contactemos directamente, por favor deja tus datos a continuación o escríbenos a través de WhatsApp o correo electrónico.
<form action="https://formspree.io/f/xzzeajoe" method="POST">
  <label for="name">Nombre:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="email">Correo electrónico:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="phone">Teléfono:</label><br>
  <input type="tel" id="phone" name="phone" required><br><br>

  <label for="message">Mensaje:</label><br>
  <textarea id="message" name="message" rows="5" required></textarea><br><br>

  <input type="checkbox" id="consent" name="consent" required>
  <label for="consent">Autorizo compartir mis datos con el Centro de Imagenología Avanzada Mérida.</label><br><br>

  <button type="submit" id="submit-btn" disabled>Enviar</button>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('consent');
    const submitBtn = document.getElementById('submit-btn');
    checkbox.addEventListener('change', function () {
      submitBtn.disabled = !this.checked;
    });
  });
</script>
