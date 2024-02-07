import Image from "next/image";

export default function TransactionButton({ title, src, onClick }: { title: string, src?: string, onClick?: () => void }) {
    return (
        <button onClick={onClick} className="hover:shadow-lg bg-white rounded-xl p-3 pl-8 pr-8 flex mr-5">
            {src && (
                <div className="pr-2">
                    <Image src={src}
                           alt={title}
                           width={25}
                           height={25} />
                </div>
            )}
            <p className="font-semibold text-lg">{title}</p>
        </button>
    )
}