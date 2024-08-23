export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
        
    } catch (error) {
        if (error.errors) { // Verifica si es un error de Zod
            const errorMessages = error.errors.map((err) => err.message);
            return res.status(400).json({ errors: errorMessages });
          }
          // Si es otro tipo de error, lo manejamos de forma genérica
          return res.status(500).json({ message: "Internal Server Error" });
        }
}