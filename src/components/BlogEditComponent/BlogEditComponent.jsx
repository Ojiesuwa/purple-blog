import React, { useRef } from "react";
import "./BlogEditComponent.css";
import { toast } from "react-toastify";
import { fetchImage, fetchVideo } from "../../utils/localFiles";
const BlogEditComponent = ({
  component,
  onChangeComponent,
  onMoveDown,
  onMoveUp,
  onDelete,
}) => {
  const setComponent = (field, value) => {
    onChangeComponent({ ...component, [field]: value });
  };
  switch (component.type) {
    case "heading":
      return (
        <HeaderComponent
          component={component}
          setComponent={setComponent}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
        />
      );
    case "paragraph":
      return (
        <ParagraphComponent
          component={component}
          setComponent={setComponent}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
        />
      );
    case "image":
      return (
        <ImageComponent
          component={component}
          setComponent={setComponent}
          onChangeComponent={onChangeComponent}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
        />
      );
    case "video":
      return (
        <VideoComponent
          component={component}
          setComponent={setComponent}
          onChangeComponent={onChangeComponent}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
        />
      );
    default:
      <></>;
  }
};

const HeaderComponent = ({
  component,
  setComponent,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  const compRef = useRef(null);
  return (
    <div className="HeaderComponent cust-comp" ref={compRef}>
      <div className="comp-header">
        <div className="comp-title">
          <p>Header</p>
          <select
            name=""
            id=""
            className="action-btn"
            value={component.level}
            onChange={(e) => setComponent("level", e.target.value)}
          >
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
          </select>
        </div>
        <div className="comp-control">
          <i
            className="fa-light fa-rotate-left"
            onClick={() => setComponent("title", "")}
          ></i>
          <i
            className="fa-light fa-chevron-down"
            onClick={() => {
              onMoveDown();
              if (compRef.current) {
                console.log("Here");
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i
            className="fa-light fa-chevron-up"
            onClick={() => {
              onMoveUp();
              if (compRef.current) {
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i className="fa-light fa-trash" onClick={onDelete}></i>
        </div>
      </div>
      <input
        type="text"
        className="comp-input
      "
        placeholder="Enter header text..."
        value={component.title}
        onChange={(e) => setComponent("title", e.target.value)}
      />
    </div>
  );
};

const ParagraphComponent = ({
  component,
  setComponent,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  const compRef = useRef(null);
  return (
    <div className="ParagraphComponent cust-comp" ref={compRef}>
      <div className="comp-header">
        <div className="comp-title">Paragraph </div>
        <div className="comp-control">
          <i
            className="fa-light fa-rotate-left"
            onClick={() => setComponent("content", "")}
          ></i>
          <i
            className="fa-light fa-chevron-down"
            onClick={() => {
              onMoveDown();
              if (compRef.current) {
                console.log("Here");
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i
            className="fa-light fa-chevron-up"
            onClick={() => {
              onMoveUp();
              if (compRef.current) {
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i className="fa-light fa-trash" onClick={onDelete}></i>
        </div>
      </div>
      <textarea
        type="text"
        className="comp-input
      "
        placeholder="Enter paragraph text..."
        value={component?.content}
        onChange={(e) => setComponent("content", e.target.value)}
      />
    </div>
  );
};

const ImageComponent = ({
  component,
  setComponent,
  onChangeComponent,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  const vidRef = useRef(null);
  const addFile = async () => {
    try {
      const file = await fetchImage();
      const localUrl = URL.createObjectURL(file);
      console.log(localUrl, file);

      onChangeComponent({
        ...component,
        imageUrl: localUrl,
        pendingFile: file,
      });
    } catch (error) {
      console.error(error);
      toast.error("Couldn't load image");
    }
  };

  return (
    <div className="ImageComponent cust-comp" ref={vidRef}>
      <div className="comp-header">
        <div className="comp-title">
          <p>Image</p>
          <button className="action-btn" onClick={addFile}>
            Add FIle
          </button>
        </div>
        <div className="comp-control">
          <i
            className="fa-light fa-rotate-left"
            onClick={() => setComponent("imageUrl", "")}
          ></i>
          <i
            className="fa-light fa-chevron-down"
            onClick={() => {
              onMoveDown();
              if (vidRef.current) {
                console.log("Here");
                vidRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i
            className="fa-light fa-chevron-up"
            onClick={() => {
              onMoveUp();
              if (compRef.current) {
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i className="fa-light fa-trash" onClick={onDelete}></i>
        </div>
      </div>
      <div className="comp-wrapper">
        <img
          src={
            component.imageUrl ||
            "https://th.bing.com/th/id/OIP.Oc4QvbZfoy71fLu_a4VzmgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
          }
          alt="/"
        />
      </div>
      <div className="bottom-image-wrapper">
        <input
          type="text"
          placeholder="Enter label here..."
          value={component.label}
          onChange={(e) => setComponent("label", e.target.value)}
        />
      </div>
    </div>
  );
};
const VideoComponent = ({
  component,
  setComponent,
  onChangeComponent,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  const compRef = useRef(null);
  const addFile = async () => {
    try {
      const file = await fetchVideo();
      const localUrl = URL.createObjectURL(file);
      console.log(localUrl, file);

      onChangeComponent({
        ...component,
        videoUrl: localUrl,
        pendingFile: file,
      });
    } catch (error) {
      console.error(error);
      toast.error("Couldn't load image");
    }
  };
  return (
    <div className="ImageComponent cust-comp" ref={compRef}>
      <div className="comp-header">
        <div className="comp-title">
          <p>Video</p>
          <button className="action-btn" onClick={addFile}>
            Add FIle
          </button>
        </div>
        <div className="comp-control">
          <i
            className="fa-light fa-rotate-left"
            onClick={() => setComponent("videoUrl", "")}
          >
            {" "}
          </i>
          <i
            className="fa-light fa-chevron-down"
            onClick={() => {
              onMoveDown();
              if (compRef.current) {
                console.log("Here");
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i
            className="fa-light fa-chevron-up"
            onClick={() => {
              onMoveUp();
              if (compRef.current) {
                compRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          ></i>
          <i className="fa-light fa-trash" onClick={onDelete}></i>
        </div>
      </div>
      <div className="comp-wrapper">
        <video src={component?.videoUrl} alt="" controls />
      </div>
      <div className="bottom-image-wrapper">
        <input
          type="text"
          placeholder="Enter label here..."
          value={component.label}
          onChange={(e) => setComponent("label", e.target.value)}
        />
      </div>
    </div>
  );
};

export default BlogEditComponent;
