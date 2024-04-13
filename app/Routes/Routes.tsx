import Link from 'next/link';
function Route() {
    return (
        <ul>
            <li>
                <Link href="/">home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    )
}
export default Route;