export default function Title({title, subtitle, othertitle, titlesize,subtitlesize, othertitlesize}: {title: string, subtitle: string, othertitle: string, titlesize: string,subtitlesize: string, othertitlesize: string})
{
    return(
        <div>
            <p className={`${titlesize}` }>{title}</p>
            <p className={`${subtitlesize}` }>{subtitle}</p>
            <p className={`${othertitlesize}` }>{othertitle}</p>
        </div>
    )
}