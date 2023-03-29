export const validation = (schema) => {
    return (req, res, next) => {

        const reqestes = ['body', 'headers', 'params', 'query', 'file', 'files']
        let errors = []
        for (let key of reqestes) {
            if (schema[key]) {
                const result = schema[key].validate(req[key], { abortEarly: false })
                if (result?.error?.details)
                    errors.push(result?.error?.details)
            }
        }
        if (!errors.length) return next()
        console.log(errors);
        return res.json({message:errors})
    }
}