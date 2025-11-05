

const Footer = () => {
  return (
    
    <footer className="bg-gray-950 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        
        
        <div className="flex flex-col  items-center md:grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-20">
          
          
          <div className="md:col-span-1 mb-6 md:mb-0">
            <span className="text-xl font-bold text-yellow-500 tracking-wider  font-gri">
              DRAMATIC
            </span>
          </div>

         
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/home" className="hover:text-yellow-500 transition-colors">HOME</a></li>
              <li><a href="/tv-show" className="hover:text-yellow-500 transition-colors">TV SHOW</a></li>
              <li><a href="/movies" className="hover:text-yellow-500 transition-colors">MOVIES</a></li>
              <li><a href="/new" className="hover:text-yellow-500 transition-colors">NEW</a></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/terms" className="hover:text-yellow-500 transition-colors">Terms of service</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-yellow-500 transition-colors">Cookie preferences</a></li>
              <li><a href="/corporate-info" className="hover:text-yellow-500 transition-colors">Corporate information</a></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">TALK TO US</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:dramatic@dramatic.com" className="hover:text-yellow-500 transition-colors">
                  dramatic@dramatic.com
                </a>
              </li>
              <li>
                <a href="tel:+8802299145" className="hover:text-yellow-500 transition-colors">
                  +88 02 299 145
                </a>
              </li>
            </ul>
          </div>

         
         
          <div className="md:col-span-1 md:text-right">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">FOLLOW US</h4>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;