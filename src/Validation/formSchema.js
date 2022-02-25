import * as yup from 'yup';

const fromSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium','Large'], "You must select a valid size")
})

export default formSchema

    //     name: string,
    //     size: string,
    //     topping1: bool,
    //     topping2: bool,
    //     special: string,