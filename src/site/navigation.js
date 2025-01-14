export const navigation = {
  homePage: {
    base: "/",
    dynamic: "/",
  },
  explorePage: {
    base: "/explore",
    dynamic: "/explore?query=:query",
  },
  savedPostsPage: {
    base: "/saved-posts",
    dynamic: "/saved-posts",
  },
  profilePage: {
    base: "/profile",
    dynamic: "/profile/:username", // Assuming profiles are dynamic based on username
  },
  viewPostPage: {
    base: "/view-post",
    dynamic: "/view-post/:postId", // Assuming posts have unique IDs
  },
  aboutPage: {
    base: "/about",
    dynamic: "/about",
  },
  dashboardPage: {
    base: "/admin/dashboard",
    dynamic: "/admin/dashboard",
  },
  userManagementPage: {
    base: "/admin/user-management",
    dynamic: "/admin/user-management",
  },
  manageBlogsPage: {
    base: "/admin/manage-blogs",
    dynamic: "/admin/manage-blogs/:blogId",
  },
};
