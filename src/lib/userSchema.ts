import { z } from 'zod';

const UserSchema = z.object({
    name: z.string().min(1, { message: "Please enter a name." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long." })
});

export default UserSchema;
