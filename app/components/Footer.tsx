const Footer = () =>{
    const year = new Date().getFullYear();

    return(
        <footer className="bg-blue-700 py-2 h-10 bottom-0 w-full">
            <span className="block text-sm text-white sm:text-center"> © {year} Created By Adrian Garcia Rios</span>
        </footer>
    )
}

export default Footer;