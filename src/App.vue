<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
          <li><router-link to="/compras">Compras</router-link></li>
          <li><router-link to="/ubicacion">Ubicación</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // Puedes dejar este bloque vacío si no necesitas lógica específica para este componente.
};
</script>