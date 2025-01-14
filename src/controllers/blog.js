import { addDocument, updateDocumentById } from "../firebase/firebaseTools";

export const createBloginDatabase = (metadata, blogData, uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const blogId = await addDocument("Blogs", {
        ...metadata,
        createdAt: new Date(),
      });
      const blogDataId = await addDocument("BlogData", { blogData });
      await updateDocumentById("Blogs", blogId, {
        blogId: blogId,
        uid,
        blogDataId,
      });
      resolve(blogId);
    } catch (error) {
      console(error);
      reject(error);
    }
  });
};

export const updateBlog = (metadata, blogData) => {
  return new Promise(async (resolve, reject) => {
    try {
      await updateDocumentById("BlogData", metadata.blogDataId, { blogData });
      await updateDocumentById("Blog", metadata.blogId, { ...metadata });
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
