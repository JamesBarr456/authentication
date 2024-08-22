import {z} from "zod"

export const taskSchema = z.object({
    title: z.string({ required_error: "Title is required" }),
    description: z.string( { required_error: "description is required"} ).optional(),
    date: z.string().date().optional(),
})

