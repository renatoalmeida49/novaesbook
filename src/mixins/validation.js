import { extend } from 'vee-validate'
import { alpha, alpha_num, email, required, numeric, confirmed } from 'vee-validate/dist/rules'

const ValidateField = {
  created() {
    extend('alpha', {
      ...alpha,
      message: "Deve conter apenas letras"
    })

    extend('required', {
      ...required,
      message: "Esse campo é obrigatório"
    })

    extend('alpha_num', {
      ...alpha_num,
      message: "Deve conter números e/ou letras"
    })

    extend('email', {
      ...email,
      message: "Digite um e-mail válido"
    })

    extend('numeric', {
      ...numeric,
      message: "Apenas números"
    })

    extend('confirmed', {
      ...confirmed,
      message: "Os campos devem ser iguais"
    })
  }
}

export default ValidateField