import SmallLogo from '../small-logo'

export default function MobileHeader() {
  return (
    <div className="flex items-center py-2 px-3 lg:hidden">
      <div>
        <SmallLogo className="block h-[40px] w-[40px]" />
      </div>
    </div>
  )
}
