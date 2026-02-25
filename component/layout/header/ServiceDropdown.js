import Link from 'next/link'
import React from 'react'
import {
  FaRobot,
  FaMapMarkerAlt,
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaBullhorn,
  FaPenNib,
  FaUserShield,
  FaShareAlt,
  FaAd,
  FaMousePointer,
  FaPencilRuler,
} from 'react-icons/fa'

export default function ServiceDropdown({ closeMenu }) {
  return (
    <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 z-50 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* SEO */}
        <div>
          <Link
            href="/services/seo"
            onClick={closeMenu}
            className="flex items-center gap-2 mb-8"
          >
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
              SEO
            </h2>
          </Link>

          <div className="space-y-6">
            <MegaItem
              icon={<FaMapMarkerAlt size={18} />}
              title="Local SEO"
              link="/services/local-seo-service"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaRobot size={18} />}
              title="AI SEO"
              link="/services/ai-seo"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaStore size={18} />}
              title="Small Business SEO"
              link="/services/small-business-seo"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaShoppingCart size={18} />}
              title="E Commerce Seo"
              link="/services/e-commerce-seo"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaMobileAlt size={18} />}
              title="App Store Optimization"
              link="/services/app-store-optimization"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaMapMarkedAlt size={18} />}
              title="GBP Optimization"
              link="/services/gbp-optimization"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaMobileAlt size={18} />}
              title="GEO Optimization"
              link="/services/generative-engine-optimization"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaMapMarkedAlt size={18} />}
              title="AEO"
              link="/services/answer-engine-optimization"
              closeMenu={closeMenu}
            />
          </div>
        </div>

        {/* DIGITAL MARKETING */}
        <div>
          <Link
            href="/services/digital-marketing"
            onClick={closeMenu}
            className="flex items-center gap-2 mb-8"
          >
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
              DIGITAL MARKETING
            </h2>
          </Link>

          <div className="space-y-6">
            <MegaItem
              icon={<FaBullhorn size={18} />}
              title="Digital Branding"
              link="/services/digital-branding"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaPenNib size={18} />}
              title="Content Marketing"
              link="/services/content-marketing"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaUserShield size={18} />}
              title="Online Reputation Management"
              link="/services/online-reputation-management"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaShareAlt size={18} />}
              title="Social Media Optimization"
              link="/services/social-media-optimization"
              closeMenu={closeMenu}
            />
          </div>
        </div>

        {/* PAID ADVERTISING */}
        <div>
          <Link
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2 mb-8"
          >
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
              PAID ADVERTISING
            </h2>
          </Link>

          <div className="space-y-6">
            <MegaItem
              icon={<FaAd size={18} />}
              title="PPC Advertising"
              link="/services/ppc-advertising"
              closeMenu={closeMenu}
            />

            <MegaItem
              icon={<FaMousePointer size={18} />}
              title="Pay Per Click"
              link="/services/pay-per-click"
              closeMenu={closeMenu}
            />
          </div>
        </div>

        {/* DESIGN & DEVELOPMENT */}
        <div>
          <Link
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2 mb-8"
          >
            <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
              DESIGN & DEVELOPMENT
            </h2>
          </Link>

          <div className="space-y-6">
            <MegaItem
              icon={<FaPencilRuler size={18} />}
              title="UI/UX Design"
              link="/services/ui-ux-design"
              closeMenu={closeMenu}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* Single Item Component */
function MegaItem({ icon, title, desc, link, closeMenu }) {
  return (
    <Link
      href={link}
      onClick={closeMenu}
      className="flex gap-4 group transition-all duration-200"
    >
      <div className="text-blue-600 mt-1 group-hover:scale-110 group-hover:dark:text-orange-400 transition-transform">
        {icon}
      </div>

      <div>
        <h4 className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </Link>
  )
}
