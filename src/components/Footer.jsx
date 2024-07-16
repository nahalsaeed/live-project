import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/app/globals.css";
import leaf from "@/app/assets/leaf.svg"
import logo from "@/app/assets/logo.svg"
import Image from 'next/image';

export default function Footer() {
    const footerData = [
        {
            title: 'Find us on',
            items: [
                { text: 'X', link: '#', icon: 'fa-x-twitter' },
                { text: 'Instagram', link: '#', icon: 'fa-instagram' },
                { text: 'Facebook', link: '#', icon: 'fa-facebook-f' },
                { text: 'YouTube', link: '#', icon: 'fa-youtube' },
            ],
        },
        {
            title: 'Contact us',
            items: [
                { text: 'Site feedback', link: '#' },
                { text: 'Need help?', link: '#' },
            ],
        },
        {
            title: 'Help',
            items: [
                { text: 'FAQs', link: '#' },
                { text: 'About newzealand.com', link: '#' },
                { text: 'Adding your business and deals', link: '#' },
                { text: 'Linking to newzealand.com', link: '#' },
                { text: 'Terms of use', link: '#' },
                { text: 'Privacy Policy', link: '#' },
                { text: 'Cookies', link: '#' },
                { text: 'Manage privacy settings', link: '#' },
            ],
        },
        {
            title: 'Our other sites',
            items: [
                { text: 'Media', link: '#' },
                { text: 'The Visual Library', link: '#' },
                { text: 'Travel Trade', link: '#' },
                { text: 'Business Events', link: '#' },
                { text: 'Corporate website', link: '#' },
                { text: 'Tourism Business Database', link: '#' },
            ],
        },
    ];
    return (
        <div>
            <div className='bg-[#2D2D2D] text-white h-10 text-sm flex items-center mt-10 '><span className='p-1 ml-32 rounded-md bg-[#171717] mr-3'>You are here</span> Home</div>
            <footer className="bg-[#171717] text-white py-8">
                <div className='setCenter'>
                    <div className='w-[82%]'>
                        <div className='flex justify-center items-center h-auto'>
                            <div className=" grid grid-cols-12  gap-3">
                                {footerData.map((section, index) => (
                                    <div key={index} className=" ml-[30%] md:ml-[0%] lg:ml-[0%] col-span-6 order-1 md:order-5 lg:order-none  lg:col-span-2">
                                        <h2 className="font-bold mb-2">{section.title}</h2>
                                        <ul className='text-sm'>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <a href={item.link} className="hover:underline text-xs" >
                                                        {item.icon && <i className={`fab ${item.icon} mr-2`}></i>}
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <div className='flex flex-row gap-3 md:gap-10 col-span-12 lg:col-span-4 justify-center items-start md:-ml-[10%] lg:md:ml-[0%] mt-2'>
                                    <div className="">
                                        <Image src={leaf} alt='leaf' className=''/>
                                        <p className='font-bold text-base text-nowrap'>NEW ZEALAND</p>
                                        <p className='text-zinc-400 text-xs'>Tourism</p>
                                    </div>
                                    <div><hr className='bg-zinc-500 rotate mt-4 w-[2px] h-20 hidden md:block' /></div>
                                    <Image src={logo} className='items-start mt-7' alt='logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
