import Logo from "@/components/logo";


export default function Hero() {
    return (
        <div
            className='flex min-h-screen w-full overflow-x-hidden justify-center items-center py-20'
            style={{ background: 'radial-gradient(ellipse at top left, #C6EBF7 0%, #FA9819 50%, #FA9819 100%)' }}>
            <Logo size={63} textSize="text-6xl" bold="font-extrabold" color="text-white" iconColor="white"/>
        </div>
    )
}