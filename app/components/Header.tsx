export default function Header() {
    return (
        <header className="p-12 flex justify-between items-center border-b">
            <h4>Universidade</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="#">
                    Home &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#cursos">
                    Cursos &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#contato">
                    Contato &nbsp;{" "}
                </a>
                <a className="hover:text-[#00e77f]" href="#">
                    Login &nbsp;
                </a>
            </nav>
        </header>
    )
}