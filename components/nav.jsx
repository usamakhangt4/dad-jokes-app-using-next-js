import Link from 'next/link';
export default function nav() {
  return (
    <React.Fragment>
      <Link href='/'>
        <span className='bg-red-500'>Home</span>
      </Link>
      <Link href='/about'>
        <span>About</span>
      </Link>
    </React.Fragment>
  );
}
