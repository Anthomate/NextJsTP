import Image from "next/image";
import Title from "@/components/title/title";

export default function CardItem({src, alt, width, height, title, subtitle, othertitle}: {src: string, alt: string, width: number, height: number, title: string, subtitle: string, othertitle: string})
{
    return(
        <div className="bg-gray-600 p-6 rounded-3xl">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <Title
                title={title}
                subtitle={subtitle}
                othertitle={othertitle}
                othertitlesize={"text-sm"}
                subtitlesize={"text-base"}
                titlesize={""}/>
        </div>
    )
}