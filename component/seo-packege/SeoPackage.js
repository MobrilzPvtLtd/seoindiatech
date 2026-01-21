import React from 'react'
import PackageHero from './PackageHero'
import { Package } from 'lucide-react'
import PackageSolution from './PackageSolution'
import PackageFeatures from './PackageFeatures'

export default function SeoPackage() {
  return (
    <>
      <PackageHero />
      <PackageSolution />
      <PackageFeatures />
    </>
  )
}
