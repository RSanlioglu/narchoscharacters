import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <customA>Hjem</customA>
                    </Link>
                </li>
                <li>
                    <Link href="/Characters">Karakterer</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation