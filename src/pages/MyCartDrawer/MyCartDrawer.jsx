import { useContext, useEffect, useRef} from "react";
import { DrawerContext } from "../../cartDrawerProvider/CartDrawerProvider";
import { ImCancelCircle } from "react-icons/im";

const MyCartDrawer = () => {
  const { isOpen, closeDrawer } = useContext(DrawerContext);
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);



  // Close drawer when clicking anywhere outside of the drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the drawer and the overlay
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDrawer]);

  return (
    <div className="drawer drawer-end">
      {/* Drawer Toggle (programmatically controlled) */}
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={(e) => e.target.checked ? closeDrawer() : null} // Handle toggling state
      />
      <div className="drawer-content">
        {/* Page content here */}
      </div>

      {/* Drawer Sidebar */}
      <div
        className={`drawer-side fixed inset-0 z-50 bg-black ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'} transition-all duration-500`}
        ref={overlayRef}
      >
        {/* Drawer Panel (with smooth sliding and opacity effect) */}
        <div
          ref={drawerRef}
          className={`bg-white w-80 p-4 h-full shadow-lg relative transition-all duration-500 ease-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-black"
            onClick={closeDrawer}
          >
            <ImCancelCircle />
          </button>

          {/* Drawer Content */}
          <div>
            hell
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartDrawer;
