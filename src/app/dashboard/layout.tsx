import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <Navbar />
            <div className="h-4/5">
                {children}
            </div>
        </div>
    );
}