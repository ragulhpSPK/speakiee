import * as yup from 'yup'

const Basicschema=yup.object().shape({
    email:yup.string().email('invalid email').required(),
    name:yup.string().required(),
    number:yup.string().min(6).max(10).required(),
    message:yup.string().min(50).required()
})

export default Basicschema