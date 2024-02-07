export default function Card({ children, bgColor }: { children: any, bgColor?: string }) {
    return (
        <div className={`${bgColor} mt-20 mb-20 rounded-3xl shadow-xl h-1/3 w-3/4`}>
            {children}
        </div>
    );
}
