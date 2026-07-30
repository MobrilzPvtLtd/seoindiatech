import MegaMenu from './MegaMenu'
import { serviceMegaMenuCategories, serviceMegaMenuFooter } from '@/utils/megaMenu/serviceMenuData'

export default function ServiceDropdown({ closeMenu }) {
  return (
    <MegaMenu
      categories={serviceMegaMenuCategories}
      footer={serviceMegaMenuFooter}
      closeMenu={closeMenu}
    />
  )
}
