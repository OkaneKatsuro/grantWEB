import {GitPullRequestArrow} from "lucide-react";

interface LogoProps {
    size: number;
    textSize?: string;
    bold?:  string;
    color?: string;
    iconColor?: string;
}

export default function Logo({ size, textSize = "text-3xl", bold = "font-bold", color = "", iconColor = "" }: LogoProps) {
    return (
        <>
            <GitPullRequestArrow size={size} color={iconColor} />
            <div className={`font-logo ${textSize} ${bold} ${color} tracking-tight`}>
                RentFlow
            </div>
        </>
    )
}