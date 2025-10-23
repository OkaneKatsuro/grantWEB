import Logo from "@/components/logo";


export default function Hero() {
    return (
        <div
            className='flex h-screen w-full justify-center items-center bg-radial-[at_60%_90%] from-hero-1 from-40% to-hero-2 to-120%'>
            <Logo size={63} textSize="text-6xl" bold="font-extrabold" color="text-white" iconColor="white"/>
        </div>
    )
}