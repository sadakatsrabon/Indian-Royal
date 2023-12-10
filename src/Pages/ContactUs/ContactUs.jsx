
const ContactUs = () => {
    return (
        <div className="pt-36 p-20 flex w-full justify-center">
            <div className="flex flex-col gap-10">
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Your message" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-outline border-0 border-y-4 bg-slate-300">Send Message</button>
            </div>
            <div className='bg-blue-800 text-white p-10 rounded-lg'>
                <p className="text-xl"><span className="p-2">Address : </span>Phnom Penh, Cambodia</p>
                <p className="text-xl"><span className="p-2">Phone : </span>+885 026365141</p>
                <p className="text-xl"><span className="p-2">Whats App : </span>+885 026365141</p>
                <p className="text-xl"><span className="p-2">Telegram : </span>+885 026365141</p>
                <p className="text-xl"><span className="p-2">Email : </span>indian@royal.com</p>
            </div>
        </div>
    );
};

export default ContactUs;