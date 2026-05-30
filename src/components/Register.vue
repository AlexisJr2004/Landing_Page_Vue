<script setup>
import { reactive, ref } from 'vue'
import '../assets/css/register.css'
import {
  enviarFormulario,
  validateCarrera,
  validateEmail,
  validateFechaNacimiento,
  validateNombre,
  validateTelefono,
  validateTerminos,
  validateTurno,
} from '../assets/js/register.js'

const form = reactive({
  nombre: '',
  email: '',
  fecha_nacimiento: '',
  telefono: '',
  carrera: '',
  turno: '',
  terminos: false,
})

const errors = reactive({})
const submitted = ref(false)

function handleSubmit() {
  enviarFormulario(form, errors, submitted)
}

function handleValidateNombre() {
  validateNombre(form, errors)
}

function handleValidateEmail() {
  validateEmail(form, errors)
}

function handleValidateFechaNacimiento() {
  validateFechaNacimiento(form, errors)
}

function handleValidateTelefono() {
  validateTelefono(form, errors)
}

function handleValidateCarrera() {
  validateCarrera(form, errors)
}

function handleValidateTurno() {
  validateTurno(form, errors)
}

function handleValidateTerminos() {
  validateTerminos(form, errors)
}
</script>

<template>
  <main class="form-container">
    <header>
      <span class="badge">Ciclo Escolar 2026</span>
      <h1>Registro Académico</h1>
      <p>Complete los campos requeridos para formalizar su inscripción.</p>
    </header>

    <form id="registro-form" @submit.prevent="handleSubmit">

      <fieldset>
        <legend>Información personal</legend>

        <section class="campo">
          <label for="nombre">Nombre completo <span class="req">*</span></label>
          <input
            v-model.trim="form.nombre"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej. Juan Pérez González"
            required
            :class="{ 'is-invalid': errors.nombre }"
            @blur="handleValidateNombre"
          >
          <small v-if="errors.nombre" class="error-text">{{ errors.nombre }}</small>
        </section>

        <section class="fila-dos">
          <section class="campo">
            <label for="email">Correo electrónico <span class="req">*</span></label>
            <input
              v-model.trim="form.email"
              type="email"
              id="email"
              name="email"
              placeholder="usuario@ejemplo.com"
              required
              :class="{ 'is-invalid': errors.email }"
              @blur="handleValidateEmail"
            >
            <small v-if="errors.email" class="error-text">{{ errors.email }}</small>
          </section>
          <section class="campo">
            <label for="fecha-nacimiento">Fecha de nacimiento <span class="req">*</span></label>
            <input
              v-model="form.fecha_nacimiento"
              type="date"
              id="fecha-nacimiento"
              name="fecha_nacimiento"
              required
              :class="{ 'is-invalid': errors.fecha_nacimiento }"
              @blur="handleValidateFechaNacimiento"
            >
            <small v-if="errors.fecha_nacimiento" class="error-text">{{ errors.fecha_nacimiento }}</small>
          </section>
        </section>

        <section class="campo">
          <label for="telefono">Teléfono</label>
          <input
            v-model.trim="form.telefono"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="+593 99 123 4567"
            :class="{ 'is-invalid': errors.telefono }"
            @blur="handleValidateTelefono"
          >
          <small v-if="errors.telefono" class="error-text">{{ errors.telefono }}</small>
        </section>
      </fieldset>

      <fieldset>
        <legend>Información académica</legend>

        <section class="campo">
          <label for="carrera">Programa de estudio <span class="req">*</span></label>
          <select
            v-model="form.carrera"
            id="carrera"
            name="carrera"
            required
            :class="{ 'is-invalid': errors.carrera }"
            @change="handleValidateCarrera"
            @blur="handleValidateCarrera"
          >
            <option value="">Selecciona un programa</option>
            <option value="ing-software">Ingeniería de Software</option>
            <option value="diseno">Diseño Digital</option>
            <option value="negocios">Negocios Internacionales</option>
            <option value="datos">Ciencia de Datos</option>
          </select>
          <small v-if="errors.carrera" class="error-text">{{ errors.carrera }}</small>
        </section>

        <section class="campo">
          <label>Turno de preferencia</label>
          <menu class="radio-grupo">
            <li><label><input v-model="form.turno" type="radio" name="turno" value="manana" @change="handleValidateTurno"> Mañana</label></li>
            <li><label><input v-model="form.turno" type="radio" name="turno" value="tarde" @change="handleValidateTurno"> Tarde</label></li>
            <li><label><input v-model="form.turno" type="radio" name="turno" value="noche" @change="handleValidateTurno"> Noche</label></li>
          </menu>
          <small v-if="errors.turno" class="error-text">{{ errors.turno }}</small>
        </section>
      </fieldset>

      <aside class="terminos-fila">
        <input
          v-model="form.terminos"
          type="checkbox"
          id="terminos"
          name="terminos"
          required
          @change="handleValidateTerminos"
        >
        <label for="terminos">
          He leído y acepto los <a href="#">términos y condiciones</a>
          y la <a href="#">política de privacidad</a> de la institución.
        </label>
      </aside>

      <small v-if="errors.terminos" class="error-text error-terms">{{ errors.terminos }}</small>

      <button type="submit" class="btn-enviar">Completar registro</button>

      <output v-if="submitted" class="exito" id="exito" for="registro-form">
        ¡Registro completado con éxito!
      </output>

    </form>
  </main>

</template>
