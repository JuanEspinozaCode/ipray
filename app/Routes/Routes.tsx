import Link from 'next/link';
function Route() {
    return (
        <ul className='nav-main'>
        <li className='nav-list'><a className="active" href="#home">Home</a></li>
        <li className='nav-list'><a href="/about">About</a></li>
        </ul>
    )
}
export default Route;