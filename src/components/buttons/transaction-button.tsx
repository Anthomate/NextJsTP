import Image from "next/image";

export default function TransactionButton({title, src}: {title: string, src?: string})
{
    return(
        <button className="bg-white rounded-xl p-3 pl-8 pr-8 flex mr-5">
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