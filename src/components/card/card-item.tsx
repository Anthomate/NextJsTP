import Image from "next/image";
import Title from "@/components/title/title";

export default function CardItem({src, alt, width, height, title, subtitle, othertitle}: {src: string, alt: string, width: number, height: number, title: string, subtitle: string, othertitle: string})
{
    return(
        <div className="bg-gray-600 rounded-3xl pt-4 pb-4 pl-4 pr-24">
            <div className="mb-3">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
            <div>
                <Title
                    title={title}
                    subtitle={subtitle}
                    othertitle={othertitle}
                    othertitlesize={""}
                    subtitlesize={"text-lg text-white font-medium"}
                    titlesize={"text-base text-gray-400"}/>
            </div>
        </div>
    )
}