import Link from 'next/link';

const NotFound = () => (
    <div>
        <h1>Page not found! (controlled by me)</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
);

export default NotFound;
