import Image from "next/image";

export default function NavarbarIcon({src, alt, width, height}: { src: string, alt: string, width: number, height: number })
{
    return(
        <div>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}