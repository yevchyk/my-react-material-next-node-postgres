import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const menuId = 'primary-search-account-menu';

const ProfileMenu = ({handleMenuClose, isMenuOpen, anchorEl, handleLogOut}) => (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogOut}>Log out</MenuItem>
    </Menu>
  );

export default ProfileMenu;