import Image from "next/image"
import Link from "next/link"
import Logo from '@/assets/logo.png'

const footerLinks = {
    company: [
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
    ],
    resources: [
        { label: "Our Policies", href: "/policies" },
        { label: "Cookies", href: "/cookies" },
        { label: "Online Safety Statement", href: "/safety" },
        { label: "Press Pack", href: "/press" },
    ],
    support: [
        { label: "Contact us", href: "/contact" },
        { label: "Website", href: "/" },
        { label: "Email", href: "mailto:support@onetouchfootball.com" },
        { label: "Help Centre", href: "/help" },
    ],
}

export function SiteFooter() {
    return (
        <footer className="bg-black text-white w-full ">
            <div className="container mx-auto py-12 md:py-16 container px-4 md:px-6 mx-auto">
                <div className="mb-12">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="One Touch Football"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <span className="text-sm font-bold text-pink-600">
                            <span>ONE TOUCH</span>
                            <span className="block">FOOTBALL</span>
                        </span>


                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    <div className="col-span-2">
                        <h3 className="text-pink-500 font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-pink-500 font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-pink-500 font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 text-center text-white/60">
                    Copyright. One touch football 2024
                </div>
            </div>
        </footer>
    )
}

