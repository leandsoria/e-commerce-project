const Footer = () => {
  return (
    <footer className="min-h-[400px] bg-gray-100 px-12 py-16">
      <div className="flex flex-col w-full justify-center ">
        <div className="w-full text-center">
          <h2> This is the footer</h2>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/3 mt-4 justify-between m-auto">
          <div>
            <h3>Contact info</h3>
            <div className="mb-4">
              <h4>Phone Number</h4>
              <p>(11) 4564 6544</p>
            </div>
          </div>
          <div>
            <h3>Neslettwer</h3>
          </div>
          <div>
            <h3>Sitemap</h3>
            <div className="mb-4">
              <ul>
                <li>Family 1</li>
                <li>Family 2</li>
                <li>Family 3</li>
                <li>Family 3</li>
                <li>Login</li>
                <li>Search</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
