import { db } from '@vercel/postgres';

export default async function handler(req:any, res:any) {
    try {
        const client = await db.connect();
        const result = await client.query('SELECT * FROM chart_data WHERE chart_type = $1', ['line']);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching chart data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}