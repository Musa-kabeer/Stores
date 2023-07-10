import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="px-3 bg-gray-500 py-7">
      <div className="flex justify-between flex-wrap gap-3">
        <div className="">
          <h2 className="uppercase font-semibold text-gray-100 pb-2">
            quick links
          </h2>
          <ul className="">
            <li className="text-sm">Search</li>
            <li className="text-sm">Contact Us/Payment</li>
            <li className="text-sm">Terms & Conditions</li>
            <li className="text-sm">FAQs</li>
            <li className="text-sm">Refund Policy</li>
            <li className="text-sm">Terms of Services</li>
          </ul>
        </div>
        <div className="">
          <h2 className="uppercase font-semibold text-gray-100 pb-2">
            menu
          </h2>
          <ul className="">
            <li className="text-sm">SmartPhones</li>
            <li className="text-sm">laptops</li>
            <li className="text-sm">dresses</li>
            <li className="text-sm">shoes</li>
            <li className="text-sm">watches</li>
          </ul>
        </div>
        <div className="">
          <h2 className="uppercase font-semibold text-gray-100 pb-2">
            follow us
          </h2>
          <ul className="">
            <li className="text-sm">
              <Link>Twitter</Link>
            </li>

            <li className="text-sm">
              <Link>Twitter</Link>
            </li>

            <li className="text-sm">
              <Link>Twitter</Link>
            </li>

            <li className="text-sm">
              <Link>Twitter</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="uppercase font-semibold text-gray-100 pb-2">
            Contact Us
          </h2>
          <ul className="">
            <li className="text-sm">musaabdulkabeer19@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-200 text-sm text-center pt-4">
        Copyright &copy; {year}, Powered by Bakoscom inc.
      </div>
    </div>
  );
}

export default Footer;
