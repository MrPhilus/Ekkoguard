import footerItems from './footerItems';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-teal-800 rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
            {footerItems.map((item, index) => (
              <a key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d={item.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - Learning Management System</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
