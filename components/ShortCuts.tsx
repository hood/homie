const shortCuts = [
  {
    title: "Notion",
    url: "https://notion.so",
    icon: "https://img.icons8.com/cute-clipart/452/notion.png",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    icon: "https://img.icons8.com/fluency/452/reddit.png",
  },
  {
    title: "IndieHackers",
    url: "https://indiehackers.com",
    icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABhCAMAAADbaM4+AAAAV1BMVEX///8OJDkAHDMAACLf4eNYXmuxtLq5u78ADivx8vMFIDYtNkfR09ZFUV8ACilNUmAAEy4AACV0eoQ3Q1PBxMg9R1cAABwnMUMaKj5TWGUAAAoAABjZ29471GryAAAAxklEQVRoge3ayQ6CMBhFYWgFBCcGGeX9n9Ot3LZEE9jgOeub/ws7QogiIjpA9U1qMmfzbHRUhw/miY7bk2eWlGZZlzqbrJNNOa64vYxN5XVNvMx6XCsbk6y4l0LWZ1xcXFxcXFxcXFxc3MO6RfvMQqW9jDd0Y2ODVfq4W7o/hYuLi4uLezRXv7l+tKc7jI9gO7r/9l6Hi4uLi4uLi4uLi4u7ozva+7LJ406ysWv/BQ2VrF8+d75quXvK2cxhN3LGnotERF/2Bo4vMBsiVrORAAAAAElFTkSuQmCC",
  },
  {
    title: "eToro",
    url: "https://etoro.com",
    icon:
      "data:image/jpeg;base64,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",
  },
];

const ShortCuts = () => (
  <div>
    <h4 className="mb-4 text-xl font-bold text-gray-300">Shortcuts</h4>
    <ul>
      {shortCuts.map((shortCut, index) => (
        <li
          key={index}
          onClick={() => {
            typeof window !== "undefined" && window.open(shortCut.url);
          }}
          className="flex flex-start space-x-8 py-2 px-8 rounded-xl hover:bg-white hover:bg-opacity-5 cursor-pointer transition-all duration-100 ease-in-out"
        >
          <img src={shortCut.icon} className="w-5 my-auto rounded-sm" />
          <p className="text-lg text-gray-400 my-auto">{shortCut.title}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ShortCuts;
