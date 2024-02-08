'use server';

import { sql } from '@vercel/postgres';
// @ts-ignore
import bcrypt from "bcrypt";
import {AuthError} from "next-auth";
import {signIn} from "../../auth";


// User Action
export async function getUsers() {
    try {
        const users:any = await sql`SELECT id, name, email FROM users`;
        return users;
    } catch (error) {
        return { message: 'Database Error: Failed to Retrieve Users.' };
    }
}

export async function getUserById({id}: {id:string}) {
    try {
        const user:any = await sql`SELECT id, name, email FROM users where id={id}`;
        return user;
    } catch (error) {
        return { message: 'Database Error: Failed to Retrieve Users.' };
    }
}

export async function createUser({ name, email, password }:{ name:string, email:string, password:string }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await sql`
          INSERT INTO users (name, email, password)
          VALUES (${name}, ${email}, ${hashedPassword})
        `;
        return { message: 'User Created Successfully.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Create User.' };
    }
}

export async function updateUser(id: string, { name, email, password }:{ name:string, email:string, password:string }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await sql`
          UPDATE users
          SET name = ${name}, email = ${email}, password = ${hashedPassword}
          WHERE id = ${id}
        `;
        return { message: 'User Updated Successfully.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Update User.' };
    }
}


export async function deleteUser(id: string) {
    try {
        await sql`DELETE FROM users WHERE id = ${id}`;
        return { message: 'Deleted User.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete User.' };
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}