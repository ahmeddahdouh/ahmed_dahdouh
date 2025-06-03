"use client"
import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="min-h-screen flex items-center px-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Left side - Text content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            <span className="block mb-2">About Me</span>
                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Full Stack Developer
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Passionate developer with a creative mindset, driven by hard work and a strong
                            ambition to become a software architect. I have solid foundations in AI and DevOps,
                            and I enjoy building smart, scalable solutions from end to end.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                View My Projects
                            </button>
                            <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300">
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Right side - Full photo */}
                    <div className="relative group">
                        <div className="relative   transform transition-all duration-700 hover:scale-105 hover:shadow-purple-500/25">
                            {/* Main image */}
                            <img
                                src="/ahmed.png"
                                alt="Ahmed - Full Stack Developer"
                                className="w-full h-[300px] md:h-[600px] object-cover"
                            />

                            {/* Overlay effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>

                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            {/* Floating particles */}
                            <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                            <div className="absolute bottom-12 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-1000 opacity-60"></div>
                            <div className="absolute top-1/3 left-12 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-500 opacity-80"></div>
                        </div>

                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl transform scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Down arrow */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="text-gray-400" size={24} />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50"></div>

            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Custom CSS animations */}
            <style jsx>{`
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    )
}