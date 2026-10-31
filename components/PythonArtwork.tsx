import { Braces, FolderCode, Package, UserRound } from "lucide-react"

/** An editorial diagram of the two real projects, not a simulated app screenshot. */
export default function PythonArtwork() {
  return (
    <div className="python-study" aria-label="Python Mini Systems: inventory and user-management learning projects">
      <div className="python-study-heading"><span>Python Mini Systems</span><Braces aria-hidden="true" /></div>
      <div className="python-folders">
        <div className="python-folder python-folder-store">
          <span className="python-folder-tab" />
          <Package aria-hidden="true" />
          <strong>Mini Store</strong>
          <span>Products. Search. Discounts.</span>
        </div>
        <div className="python-folder python-folder-users">
          <span className="python-folder-tab" />
          <UserRound aria-hidden="true" />
          <strong>Mini Users</strong>
          <span>Registration. Login. JSON.</span>
        </div>
      </div>
      <div className="python-study-footer"><FolderCode aria-hidden="true" /><span>Small systems. Real practice.</span><span>.py</span></div>
    </div>
  )
}
