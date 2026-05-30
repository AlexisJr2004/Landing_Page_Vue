export function validateNombre(form, errors) {
  if (form.nombre.trim().length < 3) {
    errors.nombre = 'Ingresa al menos 3 caracteres.'
    return false
  }

  errors.nombre = ''
  return true
}

export function validateEmail(form, errors) {
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  if (!emailValido) {
    errors.email = 'Ingresa un correo válido.'
    return false
  }

  errors.email = ''
  return true
}

export function validateFechaNacimiento(form, errors) {
  if (!form.fecha_nacimiento) {
    errors.fecha_nacimiento = 'Selecciona tu fecha de nacimiento.'
    return false
  }

  errors.fecha_nacimiento = ''
  return true
}

export function validateTelefono(form, errors) {
  if (!form.telefono) {
    errors.telefono = ''
    return true
  }

  const telefonoValido = /^[0-9+\s()-]{7,}$/.test(form.telefono)

  if (!telefonoValido) {
    errors.telefono = 'Ingresa un teléfono válido.'
    return false
  }

  errors.telefono = ''
  return true
}

export function validateCarrera(form, errors) {
  if (!form.carrera) {
    errors.carrera = 'Selecciona un programa de estudio.'
    return false
  }

  errors.carrera = ''
  return true
}

export function validateTurno(form, errors) {
  if (!form.turno) {
    errors.turno = 'Selecciona un turno.'
    return false
  }

  errors.turno = ''
  return true
}

export function validateTerminos(form, errors) {
  if (!form.terminos) {
    errors.terminos = 'Debes aceptar los términos.'
    return false
  }

  errors.terminos = ''
  return true
}

export function validateForm(form, errors) {
  const nombreValido = validateNombre(form, errors)
  const emailValido = validateEmail(form, errors)
  const fechaValida = validateFechaNacimiento(form, errors)
  const telefonoValido = validateTelefono(form, errors)
  const carreraValida = validateCarrera(form, errors)
  const turnoValido = validateTurno(form, errors)
  const terminosValidos = validateTerminos(form, errors)

  return (
    nombreValido && 
    emailValido && 
    fechaValida && 
    telefonoValido && 
    carreraValida && 
    turnoValido && 
    terminosValidos
  )
}

export function enviarFormulario(form, errors, submitted) {
  submitted.value = validateForm(form, errors)
}