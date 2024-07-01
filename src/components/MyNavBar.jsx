import { Navbar } from 'flowbite-react';

function MyNavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tarea 9
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/csr" active>
          CSR
        </Navbar.Link>
        <Navbar.Link href="/ssr">
          SSR
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
