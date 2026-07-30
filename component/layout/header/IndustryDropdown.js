import MegaMenu from './MegaMenu'
import { industryMegaMenuCategories, industryMegaMenuFooter } from '@/utils/megaMenu/industryMenuData'

export default function IndustryDropdown({ closeMenu }) {
  return (
    <MegaMenu
      categories={industryMegaMenuCategories}
      footer={industryMegaMenuFooter}
      closeMenu={closeMenu}
    />
  )
}
