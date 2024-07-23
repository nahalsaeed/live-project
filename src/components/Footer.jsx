import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/app/globals.css";
import footerlogo from "@/assets/footer-logo.webp"
import logo from "@/assets/logo.svg"
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
            ],
        },

    ];
    return (
        <div>

            <div className='bg-[#2D2D2D] text-white h-10 text-sm mt-10 '>
                <div className='setCenter'>
                    <div className='w-[85%] mt-3 2xl:w-[50%] '>
                        <span className='p-1 mr-2 rounded-md bg-[#171717] '>You are here</span> Home

                    </div>
                </div>
            </div>

            <footer className="bg-[#3B5998] text-white py-8">
                <div className='setCenter'>
                    <div className='w-[82%]'>
                        <div className='flex justify-center items-center h-auto'>
                            <div className=" grid grid-cols-12  gap-3">
                                {footerData.map((section, index) => (
                                    <div key={index} className=" ml-[30%] md:ml-[0%] lg:ml-[0%] text-nowrap col-span-7 order-1 md:order-5 lg:order-none  lg:col-span-2">
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
                                <div className='flex flex-col md:flex-row lg:flex-col gap-1 md:gap-10  lg:gap-0 xl:gap-2  xl:flex-row  col-span-12 lg:col-span-6 justify-center items-center md:items-start md:-ml-[10%] lg:ml-[15%]  mt-2'>
                                    <div >
                                        <Image src={footerlogo} alt='logo' height={98} width={98} />
                                    </div>
                                    <p className='items-start mt-7 text-xl lg:text-2xl text-black text-nowrap'> <span className='font-bold'>Splitdyboat</span> 香港夾船平台 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
