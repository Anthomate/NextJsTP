import Image from "next/image";

export default function ActionButton({src, alt, heigth, width, title}: {src: string, alt: string, heigth: number, width: number, title: string})
{
    return(
        <div>
            <Image 
                src={src}
                alt={alt}
                height={heigth}
                width={width}
            />
            <p>
                {title}
            </p>
        </div>
    )
}