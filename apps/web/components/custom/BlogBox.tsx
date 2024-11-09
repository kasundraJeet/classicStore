import Link from "next/link";

export default function BlogBox(){
    return(
        <div className="blog-box">
            <div className="blog-img"></div>
            <div  className="space-y-2">
                <h4 className="text-xl text-black tracking-wide">The 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga Pants All Day Long?</h4>
                <h6 className="text-base">Blame the designer athleisure boom or the annual glut of New Year’s resolutions to hit the gym on the regular, but this month you can expect to see even more women than usual wearing workout gear.</h6>
            </div>
            <Link href="/" className="btn block w-fit">Read Article</Link>
        </div>
    )
}