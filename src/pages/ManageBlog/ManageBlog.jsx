import React, { useRef, useState } from "react";
import "./ManageBlog.css";
import BlogSelect from "../../components/BlogSelect/BlogSelect";
import BlogEditComponent from "../../components/BlogEditComponent/BlogEditComponent";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { fetchImage } from "../../utils/localFiles";
import { uploadFile } from "../../firebase/firebaseTools";
import { createBloginDatabase } from "../../controllers/blog";
import useAuth from "../../hooks/useAuth";
import { navigation } from "../../site/navigation";

const ManageBlog = () => {
  const { userCredential } = useAuth();
  const navigate = useNavigate();
  const previewRef = useRef(null); // Reference for scrolling the preview container
  const params = useParams(); // Extract blog ID from route parameters
  const [selectorVisible, setSelectorVisible] = useState(false); // Toggle visibility of BlogSelect component
  const [blogMetaData, setBlogMetaData] = useState({
    title: "",
    coverImage: "",
    description: "",
    blogId: "",
    createdAt: "",
  });
  const [blogData, setBlogData] = useState([]); // State to manage blog components

  const [isCreatingBlog, setIsCreatingBlog] = useState(false);

  // Adds a new blog component to the editor
  const addBlogData = (type) => {
    const newBlogData = [...blogData, { type, content: "", title: "" }];
    setBlogData(newBlogData);

    // Scroll to the bottom of the preview after adding a component
    setTimeout(() => {
      if (previewRef.current) {
        previewRef.current.scrollTop = previewRef.current.scrollHeight;
      }
    }, 200);
  };

  // Modifies an existing blog component
  const modifyBlogData = (index, value) => {
    const updatedBlogData = [...blogData];
    updatedBlogData[index] = { ...value };
    setBlogData(updatedBlogData);
  };

  // Moves a blog component one position down
  const moveBlogDown = (index) => {
    if (index + 1 >= blogData.length) return;
    const updatedBlogData = [...blogData];
    [updatedBlogData[index], updatedBlogData[index + 1]] = [
      updatedBlogData[index + 1],
      updatedBlogData[index],
    ];
    setBlogData(updatedBlogData);
  };

  // Moves a blog component one position up
  const moveBlogUp = (index) => {
    if (index === 0) return;
    const updatedBlogData = [...blogData];
    [updatedBlogData[index], updatedBlogData[index - 1]] = [
      updatedBlogData[index - 1],
      updatedBlogData[index],
    ];
    setBlogData(updatedBlogData);
  };

  // Deletes a blog component by index
  const deleteBlogComponent = (index) => {
    const updatedBlogData = blogData.filter((_, i) => i !== index);
    setBlogData(updatedBlogData);
    toast.error("Component Deleted");
  };

  // Creates new blog
  const createBlog = async () => {
    try {
      // Validation
      if (
        !blogMetaData.title ||
        !blogMetaData.description ||
        !blogMetaData.coverImage
      ) {
        return toast.error("Supply required data first");
      }
      setIsCreatingBlog(true);
      const url = await uploadFile(blogMetaData.pendingFile, () => {});

      const { pendingFile, ...newMetaData } = {
        ...blogMetaData,
        coverImage: url,
      };

      const blogId = await createBloginDatabase(
        newMetaData,
        blogData,
        userCredential.uid
      );

      setBlogMetaData(newMetaData);
      navigate(navigation.manageBlogsPage.base + "/" + blogId);
      toast("Blog created");
    } catch (error) {
      console.error(error);
      toast.error("Can't create blog");
    } finally {
      setIsCreatingBlog(false);
    }
  };

  // Add coverimage
  const addCoverImage = async () => {
    try {
      const file = await fetchImage();
      const localUrl = URL.createObjectURL(file);

      setBlogMetaData((p) => ({
        ...p,
        coverImage: localUrl,
        pendingFile: file,
      }));
    } catch (error) {
      console.error(error);
      toast.error("Couldn't add cover image");
    }
  };

  return (
    <div className="ManageBlog page page-padding">
      <div className="main-container">
        {/* Left Wing: Blog Info Input */}
        <div className="left-wing">
          <p className="page-title fade-down">Manage Blogs</p>
          <img
            src={
              blogMetaData.coverImage ||
              "https://th.bing.com/th/id/OIP.Oc4QvbZfoy71fLu_a4VzmgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
            }
            className="fade-right cover-image"
            alt="Blog illustration"
            onClick={addCoverImage}
          />
          <textarea
            className="blog-name fade-left"
            placeholder="Enter blog title..."
            value={blogMetaData.title}
            onChange={(e) =>
              setBlogMetaData((p) => ({ ...p, title: e.target.value }))
            }
          ></textarea>
          <textarea
            className="blog-description fade-right"
            placeholder="Enter blog description..."
            value={blogMetaData.description}
            onChange={(e) =>
              setBlogMetaData((p) => ({ ...p, description: e.target.value }))
            }
          ></textarea>
          {params.blogId ? (
            <Button
              classname="fade-up"
              label={"Update blog"}
              isLoading={isCreatingBlog}
              loadingText={"Updating your blog"}
            />
          ) : (
            <Button
              classname={"fade-up"}
              label={"Create blog"}
              isLoading={isCreatingBlog}
              loadingText={"Creating your blog"}
              onClick={createBlog}
            />
          )}
        </div>

        {/* Right Wing: Blog Editor */}
        <div className="right-wing">
          {/* Editor Controls */}
          <div className="control-wrapper fade-up">
            <div className="left-control">
              <div className="editor-mode mode-active">
                <p>Design</p>
              </div>
              <div className="editor-mode mode-inactive">
                <p>Preview</p>
              </div>
            </div>
            <div className="right-control">
              <button
                className="selector-btn"
                onClick={() => setSelectorVisible(true)}
              >
                <p>Select blog</p>
                <i className="fa-regular fa-arrow-down"></i>
              </button>
              <div className="controller-block">
                {/* Add different types of blog components */}
                <div
                  className="control-item"
                  onClick={() => addBlogData("heading")}
                >
                  <i className="fa-solid fa-a"></i>
                </div>
                <div
                  className="control-item"
                  onClick={() => addBlogData("paragraph")}
                >
                  <i className="fa-solid fa-align-center"></i>
                </div>
                <div
                  className="control-item"
                  onClick={() => addBlogData("image")}
                >
                  <i className="fa-regular fa-image"></i>
                </div>
                <div
                  className="control-item"
                  onClick={() => addBlogData("video")}
                >
                  <i className="fa-solid fa-video"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Preview */}
          <div className="preview-container fade-up" ref={previewRef}>
            {blogData.map((component, index) => (
              <BlogEditComponent
                key={index}
                component={component}
                onChangeComponent={(value) => modifyBlogData(index, value)}
                onMoveUp={() => moveBlogUp(index)}
                onMoveDown={() => moveBlogDown(index)}
                onDelete={() => deleteBlogComponent(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Selector Modal */}
      <BlogSelect
        visible={selectorVisible}
        onHide={() => setSelectorVisible(false)}
      />
    </div>
  );
};

export default ManageBlog;
