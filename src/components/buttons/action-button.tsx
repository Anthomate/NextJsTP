import Image from "next/image";

export default function ActionButton({src, alt, heigth, width, title}: {src: string, alt: string, heigth: number, width: number, title: string})
{
    return(
        <button className="bg-transparent p-3 border-2 border-black m-3 text-center rounded-2xl flex flex-col justify-center items-center w-36 h-24">
            <div className="mb-2 mt-2">
            <Image
                src={src}
                alt={alt}
                height={heigth}
                width={width}
            />
            </div>
            <p className="mb-2">
                {title}
            </p>
        </button>
    )
}