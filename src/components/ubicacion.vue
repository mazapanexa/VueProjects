<template>
  <div>
    <div class="Ubicacion">
      <h2>Ubicación</h2>
      <p>Encuéntranos en la siguiente ubicación:</p>
      <p>Dirección: Calle 35 , Champotón, Campeche México.</p>
      <p>Te proporcionamos un mapa para que puedas encontrarnos fácilmente:</p>
    </div>
    <div id="googleframe">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3348.228284669383!2d-90.73042767541448!3d19.329343343971562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d19.3292888!2d-90.72762809999999!4m3!3m2!1d19.3292948!2d-90.72761109999999!5e1!3m2!1ses-419!2smx!4v1697507460235!5m2!1ses-419!2smx"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  // Puedes dejar este bloque vacío si no necesitas lógica específica para este componente.
};
</script>
<style>
#googleframe{
  display: flex;
  justify-content: center;
  align-items: center;
}
.Ubicacion {
  text-align: center;
}
</style>
