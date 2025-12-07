export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#0c1a3a,#1d3557)] text-white pt-10 pb-4 mt-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="footer-cta text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Start Saving Today</h3>
          <p className="mb-5 text-base md:text-lg text-white/90 max-w-xl mx-auto">Join India's fastest growing delivery platform with the lowest commissions in the market.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-red-600 to-teal-500 hover:from-red-700 hover:to-teal-600 text-white font-semibold shadow-lg transition-all duration-200 mt-2">
            <i className="fas fa-rocket"></i> Get Started Now
          </a>
        </div>

        {/* Footer Main Content */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo & Contact */}
          <div className="footer-col flex flex-col items-center md:items-start">
            <div className="footer-logo flex items-center gap-3 mb-4">
              <img src="/img/logo.png" alt="Pratap's Bite Logo" className="footer-logo-img w-[45px] h-[45px] rounded-[10px] object-cover border-2 border-[#e63946] p-[2px] bg-white" />
              <div className="footer-logo-text flex flex-col">
                <div className="footer-logo-main text-[1.3rem] font-extrabold leading-tight">Pratap's Bite</div>
                <div className="footer-logo-sub text-xs text-white/70 font-medium mt-0.5 tracking-wide">Pratap and Sons Group</div>
              </div>
            </div>
            <p className="text-white/80 mb-4 text-[0.95rem]">India's most partner-friendly delivery platform offering the lowest commissions.</p>
            <div className="contact-item flex items-start gap-2 text-white/80 mb-2 text-[0.95rem]">
              <i className="fas fa-map-marker-alt text-[#e63946]"></i>
              <span><strong>Address:</strong> Kolkata, India</span>
            </div>
            <div className="contact-item flex items-start gap-2 text-white/80 mb-2 text-[0.95rem]">
              <i className="fas fa-phone-alt text-[#e63946]"></i>
              <span><strong>Phone:</strong> 0000911319</span>
            </div>
            <div className="contact-item flex items-start gap-2 text-white/80 text-[0.95rem]">
              <i className="fas fa-envelope text-[#e63946]"></i>
              <span><strong>Email:</strong> pratapandsons10@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col flex flex-col items-center md:items-start">
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-gradient-to-r after:from-[#e63946] after:to-[#2a9d8f] after:rounded"></h3>
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative">Quick Links<span className="block absolute bottom-0 left-0 w-10 h-[3px] rounded bg-gradient-to-r from-[#e63946] to-[#2a9d8f]"></span></h3>
            <ul className="footer-links space-y-2">
              <li><a href="#home" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Home</a></li>
              <li><a href="#features" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Features</a></li>
              <li><a href="#delivery" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Delivery</a></li>
              <li><a href="#why-choose-us" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Why Us</a></li>
              <li><a href="#contact" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Contact</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Merchant Docs</a></li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div className="footer-col flex flex-col items-center md:items-start">
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative">Business Solutions<span className="block absolute bottom-0 left-0 w-10 h-[3px] rounded bg-gradient-to-r from-[#e63946] to-[#2a9d8f]"></span></h3>
            <ul className="footer-links space-y-2">
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Restaurant</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Grocery Store</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Pharmacy</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Stationery</a></li>
              <li><a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> API Integration</a></li>
              <li><a href="https://pratapandsongroup.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"><i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> Parent Company</a></li>
            </ul>
            <div className="social-links flex gap-3 mt-6">
              <a href="#" className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#e63946] hover:to-[#c1121f] hover:shadow-lg transition text-white text-lg"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#e63946] hover:to-[#c1121f] hover:shadow-lg transition text-white text-lg"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#e63946] hover:to-[#c1121f] hover:shadow-lg transition text-white text-lg"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#e63946] hover:to-[#c1121f] hover:shadow-lg transition text-white text-lg"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
  <div className="copyright border-t border-white/15 dark:border-transparent pt-8 text-center text-white/70 text-[0.9rem]">
          <p>Copyright &copy; 2025-26 Pratap's Bite | Pratap and Sons Group | All Rights Reserved</p>
          <p className="mt-2 text-xs text-white/60">Lowest Commission • 24/7 Support • Flexible Delivery • Secure Platform</p>
        </div>
      </div>
    </footer>
  );
}
