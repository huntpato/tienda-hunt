export default function validation (values) {

    let errors = {};
    const regex = /[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9]+){1,2}/;

    if(!values.name.trim()){
        errors.name = "Nombre y apellido requerido"
    }

    if(!values.email){
        errors.email = "Email requerido"
    }else if(!regex.test(values.email)){
        errors.email = "Ingrese un email válido"
    }

    if(!values.emailConfirm){
        errors.emailConfirm = "Email requerido"
    }else if(values.emailConfirm !== values.email){
        errors.emailConfirm = "Los email no coinciden"
    }

    if(!values.phone.trim()){
        errors.phone = "Teléfono requerido"
    }

    return errors;
}