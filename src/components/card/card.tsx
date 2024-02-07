export default function Card({ children, bgColor }: { children: any, bgColor?: string }) {
    return (
        <div className={`${bgColor} rounded-2xl shadow-xl w-5/6 p-5`}>
            {children}
        </div>
    );
}
